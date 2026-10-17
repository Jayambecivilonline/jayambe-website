// SEO content for industry pages (/industries/<slug>/) and location pages (/locations/<slug>/).
// Only mention clients that are really in that industry or area (from clientHistory, owner's list).
import type { Faq } from './servicePages';

export type IndustryPage = {
  slug: string; name: string; title: string; description: string;
  headline: string; highlight: string; intro: string;
  concerns: { q: string; a: string }[];
  clients: string[]; services: string[]; faqs: Faq[];
};

export const industryPages: IndustryPage[] = [
  {
    slug: 'chemical-plants',
    name: 'Chemical plants',
    title: 'Chemical Plant Construction Contractor, Gujarat | Jay Ambe',
    description: 'Civil, steel, piping, mechanical and fire fighting for chemical plants in Gujarat. Work for Deepak Nitrite, Gulbrandsen, Huntsman, Nexcel and more.',
    headline: 'Chemical Plants Have No Room',
    highlight: 'for “Almost Right.”',
    intro: 'Since 1996 we’ve built and maintained chemical plants across the Vadodara, Nandesari, Padra and Dahej belt, for new projects, expansions and running plants.',
    concerns: [
      { q: 'Work in hazardous and live areas', a: 'We work under your permit-to-work system with trained supervisors.' },
      { q: 'Corrosive service piping', a: 'Piping built to your specification, then tested and documented.' },
      { q: 'Expanding without stopping production', a: 'Tie-ins and new units planned around your running plant.' },
    ],
    clients: ['Deepak Nitrite', 'Gulbrandsen Chemicals', 'Huntsman', 'Nexcel Chemicals', 'Oriental Aromatics', 'Amoli Organics', 'Paragon Chemicals', 'Abbey Chemicals', 'BMS Chemicals'],
    services: ['industrial-construction', 'piping', 'structural-steel', 'fire-fighting', 'plant-maintenance', 'shutdown'],
    faqs: [
      { q: 'Do you work in running chemical plants?', a: 'Yes, under the plant’s permit and safety system.' },
      { q: 'Which areas do you cover?', a: 'Gujarat, especially Vadodara, Nandesari, Padra, Luna and Dahej.' },
    ],
  },
  {
    slug: 'pharmaceutical-plants',
    name: 'Pharmaceutical plants',
    title: 'Pharma Plant Construction Contractor, Gujarat | Jay Ambe',
    description: 'Construction, piping and utilities for pharmaceutical and life-science plants in Gujarat. Work for Synergia Life Sciences and Riata Life Science.',
    headline: 'Your Pharma Plant Is Judged',
    highlight: 'Long After We Leave.',
    intro: 'Pharmaceutical and life-science plants need clean, well-documented work. We’ve worked for life-science companies around Vadodara.',
    concerns: [
      { q: 'Documentation for audits', a: 'Work done to drawing and specification, with records handed over.' },
      { q: 'Utility piping that must be right', a: 'Water, air and utility lines fabricated, tested and documented.' },
      { q: 'Tight start-up dates', a: 'Planned before day one, with a daily progress report.' },
    ],
    clients: ['Synergia Life Sciences', 'Riata Life Science'],
    services: ['industrial-construction', 'piping', 'civil-works', 'fire-fighting'],
    faqs: [
      { q: 'Do you build pharma plants from scratch?', a: 'We take civil, steel, piping, mechanical and fire fighting scopes for new plants and expansions.' },
      { q: 'Do you provide documentation?', a: 'Yes. Test records and documentation are handed over with the job.' },
    ],
  },
  {
    slug: 'industrial-gas-plants',
    name: 'Industrial gas plants',
    title: 'Contractor for Industrial Gas Plants in Gujarat | Jay Ambe',
    description: 'Piping, structural and plant work for industrial gas companies in Gujarat. Working with Sicgil India since 1996, plus Pavan Gases and Shakti Gases.',
    headline: 'Gas Plants Don’t Forgive',
    highlight: 'Shortcuts.',
    intro: 'Industrial gas plants are one of our longest-running specialities. Sicgil India has worked with us since 1996 and still does.',
    concerns: [
      { q: 'Pressure piping', a: 'Fabricated, erected and pressure-tested, with records.' },
      { q: 'Work in live plants', a: 'Under your permit system with safety-first supervision.' },
      { q: 'A contractor who knows your plant', a: 'Long relationships. Sicgil has worked with us for decades.' },
    ],
    clients: ['Sicgil India', 'Shakti Gases', 'Pavan Gases'],
    services: ['piping', 'mechanical', 'structural-steel', 'plant-maintenance'],
    faqs: [
      { q: 'How long have you worked with gas companies?', a: 'Since 1996. Sicgil India has been a client from 1996 to today.' },
      { q: 'Do you do maintenance as well as new work?', a: 'Yes, both new projects and maintenance in running plants.' },
    ],
  },
  {
    slug: 'petrochemical',
    name: 'Oil, gas & petrochemical',
    title: 'Petrochemical & Refinery Contractor, Gujarat | Jay Ambe',
    description: 'Piping, structural and mechanical work for oil, gas and petrochemical sites in Gujarat, with past jobs for IOCL, IPCL, Reliance and HPCL.',
    headline: 'Big Sites Need',
    highlight: 'Disciplined Contractors.',
    intro: 'Over the years we’ve carried out jobs at oil, gas and petrochemical sites in Gujarat, working to the safety systems these sites demand.',
    concerns: [
      { q: 'Strict safety systems', a: 'Work under permit-to-work with trained supervision.' },
      { q: 'Shutdown windows', a: 'Jobs planned before day one, with a daily progress report.' },
      { q: 'Quality documentation', a: 'Tested and documented work.' },
    ],
    clients: ['Indian Oil (IOCL)', 'Indian Petrochemicals (IPCL)', 'Reliance Industries', 'Hindustan Petroleum (HPCL)'],
    services: ['piping', 'structural-steel', 'mechanical', 'shutdown'],
    faqs: [
      { q: 'Have you worked at refinery sites?', a: 'Yes, including past jobs for IOCL (Bajwa), IPCL, Reliance and HPCL.' },
      { q: 'Do you do shutdown work?', a: 'Yes. See our shutdown and turnaround service.' },
    ],
  },
];

export type LocationPage = {
  slug: string; name: string; title: string; description: string;
  headline: string; intro: string; areas: string[];
  clients: string[];        // only real clients in this area (empty is fine)
  nearby?: string[];        // real clients in neighbouring areas, shown when `clients` is empty
  focus?: string[];         // services most relevant to this area (slugs)
  sections?: { h: string; p: string }[];   // deeper local content (unique per location)
  faqs?: Faq[];             // extra location-specific FAQs
};

export const locationPages: LocationPage[] = [
  {
    slug: 'vadodara',
    name: 'Vadodara',
    title: 'Industrial Construction Contractor in Vadodara | Jay Ambe',
    description: 'Vadodara-based industrial contractor since 1996: civil, steel, piping, fire fighting and precast compound walls for plants across Vadodara district.',
    headline: 'Vadodara’s Industrial Contractor, Since 1996',
    intro: 'We’re based in Vadodara and have worked for plants across the district for 30 years, from Makarpura GIDC to Lamdapura.',
    areas: ['Makarpura GIDC', 'Lamdapura', 'Nandesari', 'Padra', 'Luna', 'Karjan'],
    clients: ['Nexcel Chemicals', 'Pavan Gases', 'Flint Group India', 'Abbey Chemicals', 'Swastik Chemicals'],
  },
  {
    slug: 'nandesari',
    name: 'Nandesari GIDC',
    title: 'Industrial Contractor in Nandesari GIDC | Jay Ambe',
    description: 'Industrial contractor based in Nandesari, Vadodara. Piping, steel, civil and maintenance for chemical plants in Nandesari GIDC since 1996.',
    headline: 'Nandesari Is Our Home Ground',
    intro: 'Jay Ambe Engineering Works was founded in Nandesari in 1996. We know the estate, its plants and the way they work.',
    areas: ['Nandesari GIDC', 'Akalbara', 'Anjesar'],
    clients: ['Akshar Chemi', 'Oriental Aromatics', 'Sow Chemicals', 'BMS Chemicals', 'Gulbrandsen Chemicals (Akalbara)', 'Riata Life Science (Anjesar)'],
  },
  {
    slug: 'dahej',
    name: 'Dahej',
    title: 'Industrial Contractor in Dahej, Bharuch | Jay Ambe',
    description: 'Industrial construction, piping and maintenance for plants in Dahej, Bharuch. Currently working at Gulbrandsen Chemicals, Dahej.',
    headline: 'Building in Dahej',
    intro: 'We’re currently working at Gulbrandsen Chemicals’ Dahej site, after 15 years with them at Akalbara.',
    areas: ['Dahej', 'Bharuch'],
    clients: ['Gulbrandsen Chemicals (Dahej)'],
  },
  {
    slug: 'padra',
    name: 'Padra & Umraya',
    title: 'Industrial Contractor in Padra & Umraya | Jay Ambe',
    description: 'Civil, piping and plant work for industries in Padra, Umraya, Luna and Kanjat near Vadodara. Clients include Huntsman and Amoli Organics.',
    headline: 'Trusted Around Padra',
    intro: 'The Padra belt is home to several of our long-standing clients, from Umraya to Luna and Kanjat.',
    areas: ['Padra', 'Umraya', 'Luna', 'Kanjat'],
    clients: ['Huntsman (Umraya)', 'Benzo Chemicals (Umraya)', 'Amoli Organics (Luna)', 'M J Paramachem (Luna)', 'Akshay Chemix (Kanjat)'],
  },
  {
    slug: 'makarpura',
    name: 'Makarpura GIDC',
    title: 'Industrial Contractor in Makarpura GIDC, Vadodara | Jay Ambe',
    description: 'Industrial sheds, civil, piping and fire fighting for units in Makarpura GIDC, Vadodara. Vadodara-based contractor since 1996.',
    headline: 'Building and Upgrading Units in Makarpura GIDC',
    intro: 'Makarpura is one of Vadodara’s busiest industrial estates. Many units here are upgrading, expanding or adding sheds, and we build all of it under one contract.',
    areas: ['Makarpura GIDC', 'Vadodara'],
    clients: ['Pavan Gases'],
    focus: ['industrial-shed-construction', 'factory-construction', 'fire-fighting', 'piping'],
  },
  {
    slug: 'manjusar',
    name: 'Manjusar GIDC',
    title: 'Industrial Construction in Manjusar GIDC, Savli | Jay Ambe',
    description: 'Factory, PEB shed, warehouse and precast compound wall construction in Manjusar GIDC near Vadodara. Free site visit and quote.',
    headline: 'New Factories and Sheds in Manjusar GIDC',
    intro: 'Manjusar is a growing industrial estate near Vadodara, with new factories, sheds and warehouses coming up. We build them from foundation to roof, and secure the plot with precast compound walls from our own plant.',
    areas: ['Manjusar GIDC', 'Savli taluka'],
    clients: [],
    nearby: ['Nandesari GIDC clients such as Akshar Chemi and Oriental Aromatics', 'Nexcel Chemicals, Vadodara'],
    focus: ['factory-construction', 'peb-structures', 'warehouse-construction', 'precast-compound-wall'],
  },
  {
    slug: 'savli',
    name: 'Savli',
    title: 'Factory & Industrial Shed Construction in Savli | Jay Ambe',
    description: 'Industrial sheds, PEB buildings, factories and precast compound walls for new units in Savli GIDC and Savli taluka, Vadodara.',
    headline: 'Setting Up a New Unit in Savli?',
    intro: 'Savli’s industrial area keeps attracting new units. If you’re setting up here, we can take the whole job: civil, steel structure or PEB, utilities, fire fighting and compound wall.',
    areas: ['Savli GIDC', 'Savli taluka'],
    clients: [],
    nearby: ['Nandesari GIDC clients such as Akshar Chemi and Oriental Aromatics'],
    focus: ['factory-construction', 'industrial-shed-construction', 'peb-structures', 'precast-compound-wall'],
  },
  {
    slug: 'halol',
    name: 'Halol',
    title: 'Industrial Construction Contractor in Halol GIDC | Jay Ambe',
    description: 'Factory buildings, industrial sheds, warehouses and fire fighting systems for units in Halol GIDC, Panchmahal, from a Vadodara contractor.',
    headline: 'Industrial Construction for Halol GIDC',
    intro: 'Halol is a major manufacturing hub close to Vadodara, with many engineering and supplier units. We build factory buildings, sheds, warehouses and fire systems for new and expanding units.',
    areas: ['Halol GIDC', 'Panchmahal'],
    clients: [],
    nearby: ['Vadodara clients such as Nexcel Chemicals and Pavan Gases'],
    focus: ['factory-construction', 'warehouse-construction', 'industrial-shed-construction', 'fire-fighting'],
  },
  {
    slug: 'waghodia',
    name: 'Waghodia',
    title: 'Industrial Contractor in Waghodia GIDC, Vadodara | Jay Ambe',
    description: 'Civil, steel, piping and fire fighting for chemical and engineering units in Waghodia GIDC, Vadodara. Free site visit and quote.',
    headline: 'Industrial Projects in Waghodia GIDC',
    intro: 'Waghodia GIDC has a mix of chemical and engineering units. Our 30 years with chemical plants across Vadodara means we know how to work safely beside running processes.',
    areas: ['Waghodia GIDC', 'Vadodara district'],
    clients: [],
    nearby: ['Chemical clients across Vadodara, such as Nexcel Chemicals and Gulbrandsen Chemicals'],
    focus: ['industrial-construction', 'piping', 'fire-fighting', 'plant-maintenance'],
  },
];

// ---------- deeper local content for the main locations (unique per page, no invented facts) ----------
const DEEP: Record<string, { sections: { h: string; p: string }[]; faqs: Faq[] }> = {
  vadodara: {
    sections: [
      { h: 'Vadodara’s industrial belt at a glance', p: 'Vadodara district is one of Gujarat’s main industrial regions. Around the city sit established estates such as Nandesari, Makarpura, Waghodia and Savli–Manjusar, with the Padra belt to the west and Halol to the north-east. Chemical, pharmaceutical, engineering and gas companies all operate here, and many of them are expanding or adding new units.' },
      { h: 'What plant owners in Vadodara usually build', p: 'Most enquiries we receive in Vadodara are for new production units and expansions inside running plants, industrial sheds and PEB buildings, warehouses for raw material and finished goods, utility and process piping, fire fighting systems ahead of a fire NOC, and precast compound walls to secure new plots quickly.' },
      { h: 'Planning a project in a Vadodara GIDC estate', p: 'Estates have their own rules for access, working hours and safety, and neighbouring plants may be running hazardous processes. Building plan and fire approvals are handled by your consultants, so the construction schedule should be planned around them. In Gujarat, the monsoon months also affect excavation and concrete work, so foundations are best planned with the season in mind.' },
      { h: 'Why a Vadodara-based contractor helps', p: 'Our office has been in Nandesari, Vadodara since 1996. Being close means quicker site visits, a stable local crew on your site rather than unfamiliar labour, and support for maintenance and modifications long after hand-over.' },
    ],
    faqs: [
      { q: 'Which industrial estates around Vadodara do you work in?', a: 'Nandesari, Makarpura, Manjusar and Savli, Waghodia and the Padra belt, along with other sites across Vadodara district.' },
      { q: 'Do you take projects in Vadodara city as well as the GIDC estates?', a: 'Yes, as long as the work is industrial: factories, sheds, warehouses, plant buildings, piping, fire fighting and compound walls.' },
    ],
  },
  nandesari: {
    sections: [
      { h: 'Nandesari GIDC: a chemical estate', p: 'Nandesari is one of Vadodara’s long-established chemical industrial estates, home to many chemical and process plants. Construction here usually happens beside running units, so the work has to fit around production and the plant’s safety system.' },
      { h: 'Working beside live chemical plants', p: 'Hot work, height work and confined-space work go through the plant’s permit-to-work system. Tie-ins to existing lines are planned with the operations team, and areas are isolated and barricaded. Our crews are used to this way of working because most of our clients run chemical plants.' },
      { h: 'Built for corrosive environments', p: 'Chemical atmospheres attack steel and concrete. Coating specifications, material choices and drainage details matter more here than on an ordinary site, and we agree them with your consultant before fabrication or pouring starts.' },
      { h: 'Our home ground since 1996', p: 'Jay Ambe Engineering Works was founded in Nandesari in 1996 and is still based here. That means fast response for site visits, small jobs and maintenance, and a crew that already knows the estate.' },
    ],
    faqs: [
      { q: 'Is your office in Nandesari GIDC?', a: 'Our office is at A/27 Nilkhant Society, Nandesari, Vadodara, and we have been based in Nandesari since 1996.' },
      { q: 'Can you work inside a running chemical plant in Nandesari?', a: 'Yes, under the plant’s permit-to-work system with trained supervisors. Our record is zero safety incidents.' },
    ],
  },
  dahej: {
    sections: [
      { h: 'Dahej: a coastal chemical hub', p: 'Dahej in Bharuch district is one of Gujarat’s major chemical and petrochemical hubs, on the coast of the Gulf of Khambhat. Large plants and new units keep coming up here, and many are run by companies that also operate in the Vadodara belt.' },
      { h: 'Building on the coast', p: 'Coastal air and soil conditions are harder on steel and concrete. Corrosion protection, concrete specification and drainage need attention from the start, along with foundations suited to the ground conditions your consultant identifies.' },
      { h: 'Mobilising from Vadodara', p: 'We mobilise our own crew and equipment from Vadodara for projects in Dahej, plan material deliveries in advance, and report progress to you every day, just as we do closer to home.' },
      { h: 'Working in Dahej today', p: 'We are currently working at Gulbrandsen Chemicals’ Dahej site, after many years with them at Akalbara near Vadodara.' },
    ],
    faqs: [
      { q: 'Do you have a team in Dahej?', a: 'We mobilise our own crew and equipment from Vadodara for each project in Dahej and keep them on site for the duration of the job.' },
      { q: 'Which client are you working for in Dahej?', a: 'We are currently working at Gulbrandsen Chemicals’ Dahej site.' },
    ],
  },
};
for (const p of locationPages) Object.assign(p, DEEP[p.slug] ?? {});
