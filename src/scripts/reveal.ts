// Site-wide motion: text and blocks animate IN when they enter the screen and OUT when they leave,
// in the direction you're scrolling. Headings rise word by word from behind a mask.
// Hero slide headlines rebuild word by word on every slide change. Numbers count up. Buttons are magnetic.
// Weighted smooth scrolling on desktop. Content is always in the HTML (good for SEO); hidden states are
// only applied after this script adds `rv-on`, and nothing runs for visitors who prefer reduced motion.
import Lenis from 'lenis';

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer: fine)').matches;

// Wrap every word of an element's text in <span class="w"><span class="wi">…</span></span>,
// keeping nested markup (<span class="hl">, <u>, <b>, <i>) intact.
function splitWords(el: Element) {
  let i = 0;
  const walk = (node: Node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent ?? '').split(/(\s+)/);
        if (parts.every((p) => !p.trim())) return;
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (!p.trim()) { frag.append(document.createTextNode(p)); return; }
          const w = document.createElement('span'); w.className = 'w';
          const wi = document.createElement('span'); wi.className = 'wi'; wi.textContent = p;
          wi.style.setProperty('--i', String(i++));
          w.append(wi); frag.append(w);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && !(child as Element).matches('svg, br')) {
        walk(child);
      }
    });
  };
  walk(el);
  el.classList.add('split');
}

const SKIP = '.exp, .pour, .mega, .visit-form *, .backdrop, .controls, .dpr *, .calc *, .toc';

function init() {
  if (reduce) return;
  document.documentElement.classList.add('rv-on');

  // ---------- hero slider: headline words + hook lines replay on every slide change ----------
  document.querySelectorAll('.slide .headline').forEach(splitWords);
  document.querySelectorAll('.slide .hooks li').forEach((li, n) => (li as HTMLElement).style.setProperty('--h', String(n % 5)));

  // ---------- headings: word-by-word masked rise ----------
  const heads = [...document.querySelectorAll('main h1, main h2')].filter((h) => !h.closest(SKIP) && !h.closest('.slide'));
  heads.forEach(splitWords);

  // ---------- blocks: fade + rise, staggered inside grids ----------
  const BLOCKS = 'main p, main li, main h3, main .card, main .btn-row, main .stat, main .worry, main details, main figure, main table, main .eyebrow, main .client, main .loyal, main .tease, main .dpr-wrap, main form.visit-form, main iframe, main .chips > *, main .item, main .hl-card, main .big-stats > div, main .path, main .dec-list > li, main .steps > li, main .wrong > div';
  const blocks: HTMLElement[] = [];
  document.querySelectorAll<HTMLElement>(BLOCKS).forEach((el) => {
    if (el.closest(SKIP) || el.closest('.slide') || el.closest('.hero')) return;
    if (el.parentElement?.closest('.rv')) return;           // an ancestor already animates
    if (el.closest('.split') && !el.matches('.split')) return;
    el.classList.add('rv');
    // stagger siblings inside grid / flex rows
    const parent = el.parentElement!;
    const disp = getComputedStyle(parent).display;
    if ((disp.includes('grid') || disp.includes('flex')) && parent.children.length > 1) {
      el.style.setProperty('--d', String(Math.min([...parent.children].indexOf(el), 8)));
    }
    blocks.push(el);
  });

  // ---------- in / out observer (direction-aware) ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const el = e.target as HTMLElement;
      if (e.isIntersecting) {
        el.classList.add('in'); el.classList.remove('above');
        countUp(el);
      } else {
        el.classList.remove('in');
        el.classList.toggle('above', e.boundingClientRect.top < 0);   // left through the top → exits upward
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  [...heads, ...blocks].forEach((el) => io.observe(el));

  // ---------- magnetic buttons ----------
  if (fine) {
    document.querySelectorAll<HTMLElement>('.btn').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.setProperty('--mx', `${((e.clientX - r.left) / r.width - 0.5) * 10}px`);
        b.style.setProperty('--my', `${((e.clientY - r.top) / r.height - 0.5) * 8}px`);
        b.classList.add('mag');
      });
      b.addEventListener('pointerleave', () => { b.classList.remove('mag'); });
    });
  }

  // ---------- weighted smooth scrolling (desktop; the experience page runs its own) ----------
  if (fine && !document.querySelector('.exp')) {
    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -90 } });
    const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
}

// numbers count up each time they come into view (only plain numbers like 30, 0, 200)
function countUp(el: HTMLElement) {
  el.querySelectorAll<HTMLElement>('.stat b, .big-stats b, .hl-card b, b.num').forEach((b) => {
    const target = b.dataset.target ?? b.textContent?.trim() ?? '';
    if (!/^\d+$/.test(target)) return;
    b.dataset.target = target;
    const to = Number(target), start = performance.now(), dur = 1200;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / dur), e = 1 - Math.pow(1 - t, 3);
      b.textContent = String(Math.round(to * e));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
