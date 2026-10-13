// MCBs (Mass Control Bait) shown as rotating slides at the top of the homepage.
// Add a new slide by adding an entry here. The first entry is the main message (new projects).
// Each MCB = attention-grabbing headline + 3–5 hooking lines + a call to action.
import { YEARS, clients } from './site';

export type Mcb = {
  eyebrow: string;
  headline: string;   // first part of the headline (white)
  highlight: string;  // second part (orange)
  hooks: string[];
  cta: { label: string; href: string };
  image: string;      // illustration now; swap for a real site photo (same path or new file) when available
  imageAlt: string;
  photoHint: string;  // which real photo would replace the illustration
};

export const mcbs: Mcb[] = [
  {
    eyebrow: 'New plants · Expansions · New units',
    headline: 'Your New Plant Should Start Earning On Time.',
    highlight: 'Not Months Late.',
    hooks: [
      'New plants, expansions and new units, built from foundation to final fire line',
      'Civil, structural steel, piping, mechanical and fire fighting, all under one contract',
      `${YEARS} years building for Gujarat's chemical, pharma and process industries`,
      'A daily progress report on your phone, plus a free site visit and quote',
    ],
    cta: { label: 'See How We Deliver ↓', href: '#story' },
    image: '/illustrations/new-plant.svg',
    imageAlt: 'New industrial plant under construction with a tower crane, storage tanks and pipe rack',
    photoHint: 'a plant you built, steel structure, or piping',
  },
  {
    eyebrow: 'Precast compound walls',
    headline: "Your Compound Wall Shouldn't Take Months.",
    highlight: 'Precast Walls, Made in Our Own Plant.',
    hooks: [
      'Wall panels cast at our own precast plant, so quality stays consistent',
      'Delivered and installed on your site by our own team',
      'Much faster than building brick-and-plaster walls on site',
      'For factories, warehouses, industrial plots and project sites, with a free site visit and quote',
    ],
    cta: { label: 'Get a Compound Wall Quote', href: '/contact/?service=Precast%20Compound%20Walls#site-visit' },
    image: '/illustrations/precast-wall.svg',
    imageAlt: 'Precast compound wall panels made at a precast plant, delivered by truck and installed between columns',
    photoHint: 'your precast plant, stacked wall panels, or a finished compound wall',
  },
  {
    eyebrow: 'Shutdown & turnaround',
    headline: 'Your Plant Shutdown Has One Chance.',
    highlight: "Don't Hand It to the Wrong Contractor.",
    hooks: [
      'Every job planned before day one: scope, manpower and material ready',
      'Our own skilled team of fitters, welders and riggers, not borrowed labour',
      'A daily progress report so you always know where the shutdown stands',
      `Trusted on projects for ${clients.join(' and ')}`,
    ],
    cta: { label: 'Plan My Shutdown', href: '/contact/?service=Shutdown%20%26%20Turnaround#site-visit' },
    image: '/illustrations/shutdown.svg',
    imageAlt: 'Shutdown maintenance on a plant pipe rack, with a job plan and safety helmet',
    photoHint: 'shutdown work in a running plant',
  },
  {
    eyebrow: 'Fire fighting systems',
    headline: "A Fire System That Fails Inspection Isn't a System.",
    highlight: 'Get Your Fire NOC Right the First Time.',
    hooks: [
      'Hydrant, sprinkler and fire water networks for new and existing plants',
      'Installed to drawing and standard, then pressure-tested and documented',
      'One contractor from design support to final hand-over',
      'Free site visit and quote, with no obligation',
    ],
    cta: { label: 'Get a Free Fire System Quote', href: '/contact/?service=Fire%20Fighting%20Systems#site-visit' },
    image: '/illustrations/fire-fighting.svg',
    imageAlt: 'Fire fighting system with fire water tank, pump house, hydrant and sprinkler',
    photoHint: 'fire hydrant line or pump house',
  },
  {
    eyebrow: 'Brownfield expansion',
    headline: 'Expanding a Running Plant?',
    highlight: 'Build the New Unit Without Stopping the Old One.',
    hooks: [
      'Safe working beside live process areas, with permits and isolation handled properly',
      'Tie-ins to existing piping and utilities planned to keep downtime to a minimum',
      'Civil, steel, piping and mechanical, all from one team',
      'A daily progress report, so production and construction never collide',
    ],
    cta: { label: 'Discuss My Expansion', href: '/contact/#site-visit' },
    image: '/illustrations/expansion.svg',
    imageAlt: 'New plant unit being built next to a running plant, connected by a tie-in pipe',
    photoHint: 'new unit being built next to a running plant',
  },
];
