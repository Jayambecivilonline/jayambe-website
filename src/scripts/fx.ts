// Tiny particle engine on one full-screen canvas: steel sparks, concrete debris, dust puffs.
// The animation loop only runs while particles are alive, so it costs nothing when idle.

type Kind = 'spark' | 'debris' | 'dust';
type P = { x: number; y: number; vx: number; vy: number; life: number; max: number; size: number; kind: Kind; color: string };

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
const parts: P[] = [];
let running = false;
const dpr = Math.min(window.devicePixelRatio || 1, 2);

function ensure() {
  if (canvas) return;
  canvas = document.createElement('canvas');
  canvas.className = 'fx-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, { position: 'fixed', inset: '0', width: '100%', height: '100%', pointerEvents: 'none', zIndex: '9998' });
  document.body.appendChild(canvas);
  ctx = canvas.getContext('2d');
  const resize = () => { canvas!.width = innerWidth * dpr; canvas!.height = innerHeight * dpr; ctx!.setTransform(dpr, 0, 0, dpr, 0, 0); };
  resize();
  addEventListener('resize', resize);
}

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const debrisColors = ['#CFE0F2', '#9fb6cc', '#d9c7a8', '#b89f7a'];

export function burst(x: number, y: number, kind: Kind, n = 12) {
  ensure();
  for (let i = 0; i < n; i++) {
    if (kind === 'spark') {
      const a = rand(-Math.PI, 0), s = rand(2, 6);
      parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 0, max: rand(14, 26), size: rand(1, 2.2), kind, color: Math.random() < .5 ? '#F5A623' : '#ffd27a' });
    } else if (kind === 'debris') {
      const a = rand(-Math.PI * 0.95, -Math.PI * 0.05), s = rand(2, 7);
      parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 0, max: rand(28, 48), size: rand(1.5, 4), kind, color: debrisColors[(Math.random() * debrisColors.length) | 0] });
    } else {
      parts.push({ x: x + rand(-6, 6), y, vx: rand(-0.8, 0.8), vy: rand(-1.4, -0.4), life: 0, max: rand(40, 70), size: rand(6, 14), kind, color: 'rgba(214,226,238,' });
    }
  }
  if (!running) { running = true; requestAnimationFrame(tick); }
}

function tick() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i];
    p.life++;
    const k = 1 - p.life / p.max;
    if (k <= 0) { parts.splice(i, 1); continue; }
    if (p.kind === 'dust') { p.x += p.vx; p.y += p.vy; p.size += 0.25; ctx.fillStyle = p.color + (0.22 * k).toFixed(3) + ')'; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, 7); ctx.fill(); continue; }
    p.vy += p.kind === 'spark' ? 0.18 : 0.32; // gravity
    p.vx *= 0.98;
    p.x += p.vx; p.y += p.vy;
    ctx.globalAlpha = k;
    ctx.fillStyle = p.color;
    if (p.kind === 'spark') {
      ctx.strokeStyle = p.color; ctx.lineWidth = p.size;
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 2, p.y - p.vy * 2); ctx.stroke();
    } else {
      ctx.fillRect(p.x, p.y, p.size, p.size * 0.8);
    }
    ctx.globalAlpha = 1;
  }
  if (parts.length) requestAnimationFrame(tick);
  else { running = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }
}
