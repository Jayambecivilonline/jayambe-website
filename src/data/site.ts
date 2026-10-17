// Single source of truth for company facts. Anything marked `confirmed: false`
// renders with a yellow TODO outline in the site until the owner confirms it.

export const FOUNDED = 1996;
export const YEARS = new Date().getFullYear() - FOUNDED;

export const company = {
  name: 'Jay Ambe Engineering Works',
  short: 'Jay Ambe Engg. Works',
  founder: 'Vipulbhai Padhiyar',
  phone: '+91 73835 03062', // confirmed by owner
  phoneHref: 'tel:+917383503062',
  whatsapp: 'https://wa.me/917383503062?text=' + encodeURIComponent('Hello Jay Ambe Engineering Works, I would like to discuss a project.'),
  email: 'jayambecivil@gmail.com',
  address: 'A/27 Nilkhant Society, Nandesari, Vadodara, Gujarat, India', // confirmed by owner
  city: 'Vadodara',
  // Google Business Profile (owner shared 14 Oct 2026) and other official listings
  googleProfile: 'https://share.google/4s6v9Az60OgH4YRtl',
  googleKg: 'https://www.google.com/search?kgmid=/g/11x7qm2rwj',
  indiamart: 'https://m.indiamart.com/jay-ambeengineering-works',
  mapEmbed: 'https://www.google.com/maps?q=' + encodeURIComponent('Jay Ambe Engineering Works, A/27 Nilkhant Society, Nandesari, Vadodara') + '&output=embed',
};

// Client names only. No logos until permission is given.
// `clients` = the two names used in short lines ("Trusted on projects for …").
export const clients = ['Sicgil India', 'Gulbrandsen Chemicals'];

// Names shown in the homepage "Clients we've worked with" strip.
export const featuredClients = [
  'Sicgil India', 'Gulbrandsen Chemicals', 'Deepak Nitrite', 'Huntsman',
  'Flint Group India', 'Oriental Aromatics', 'Synergia Life Sciences', 'Amoli Organics',
];

// Full job history, as listed by the owner (13 Oct 2026). Don't add clients or years
// that aren't in the owner's list. `running: true` = job still running (updated by owner 13 Oct 2026).
export type ClientJob = { name: string; place?: string; years?: string; running?: boolean };
export const clientHistory: ClientJob[] = [
  { name: 'Sicgil India Ltd.', years: '1996 – present', running: true },
  { name: 'Deepak Nitrite Ltd.', years: '1996 – 1999' },
  { name: 'Abbey Chemicals', place: 'Lamdapura', years: '1997 – 2008' },
  { name: 'Belex', place: 'Karjan' },
  { name: 'Modern Petrofils' },
  { name: 'Sow Chemicals', place: 'Nandesari' },
  { name: 'M J Paramachem', place: 'Luna' },
  { name: 'BMS Chemicals', place: 'Akalbara & Nandesari', years: '2002 – 2008' },
  { name: 'Paragon Chemicals', years: '2002 – 2016' },
  { name: 'Swastik Chemicals', place: 'Lamdapura' },
  { name: 'Indian Oil Corporation Ltd. (IOCL)', place: 'Bajwa', years: '2002 – 2008' },
  { name: 'Indian Petrochemicals Corporation Ltd. (IPCL)', years: '2007' },
  { name: 'Reliance Industries Ltd.', years: '2008' },
  { name: 'Benzo Chemicals', place: 'Umraya' },
  { name: 'Refoil Earth Pvt. Ltd.' },
  { name: 'Munjushar project' },
  { name: 'Gulbrandsen Chemicals', place: 'Akalbara', years: '2005 – 2020' },
  { name: 'Gulbrandsen Chemicals', place: 'Dahej', running: true },
  { name: 'Super Chemicals' },
  { name: 'Hindustan Petroleum Corporation Ltd. (HPCL)' },
  { name: 'Amoli Organics', place: 'Luna', years: '2013 – 2017' },
  { name: 'Akshay Chemix', place: 'Kanjat, Padra' },
  { name: 'Akshar Chemi', place: 'Nandesari' },
  { name: 'Huntsman Pvt. Ltd.', place: 'Umraya, Padra' },
  { name: 'Som Distillery', place: 'Bhopal' },
  { name: 'Synergia Life Sciences Pvt. Ltd.' },
  { name: 'Riata Life Science Pvt. Ltd.', place: 'Anjesar' },
  { name: 'Flint Group India Pvt. Ltd.', place: 'Lamdapura' },
  { name: 'Pavan Gases', place: 'Makarpura GIDC' },
  { name: 'Oriental Aromatics', place: 'Nandesari' },
  { name: 'Jecon Engineering' },
  { name: 'Nexcel Chemicals', place: 'Vadodara', running: true },
  { name: 'Shakti Gases', running: true }, // confirmed running by owner
];
// Distinct client companies (Gulbrandsen appears twice, at two sites).
export const CLIENT_COUNT = new Set(clientHistory.map((c) => c.name)).size;

// Every stat must be true. Sources: founding year (owner), safety record (owner, 13 Oct 2026),
// daily reports (owner), 200 workers on one site (from a real daily progress report).
export const stats = [
  { value: `${YEARS}`, label: `Years building in Gujarat, since ${FOUNDED}`, confirmed: true },
  { value: '0', label: 'Safety incidents', confirmed: true },
  { value: 'Daily', label: 'Progress report to every client', confirmed: true },
  { value: '200', label: 'Workers deployed on a single site', confirmed: true },
];

export type Service = { slug: string; name: string; blurb: string };
export type ServiceGroup = { name: string; icon: string; services: Service[] };

// Final list still to be confirmed by the owner.
export const serviceGroups: ServiceGroup[] = [
  {
    name: 'Project Delivery',
    icon: '📐',
    services: [
      { slug: 'epc', name: 'EPC Services', blurb: 'Engineering, procurement and construction under one contract.' },
      { slug: 'pre-construction', name: 'Pre-construction & Planning', blurb: 'Site study, scope, schedule and cost planning before work starts.' },
      { slug: 'procurement', name: 'Procurement', blurb: 'Sourcing of material and equipment to specification and on time.' },
    ],
  },
  {
    name: 'Construction',
    icon: '🏗️',
    services: [
      { slug: 'industrial-construction', name: 'Industrial Construction', blurb: 'Plant buildings, sheds and process areas built to industrial standards.' },
      { slug: 'factory-construction', name: 'Factory Building Construction', blurb: 'New factory buildings, from foundation to roof, ready for your machines.' },
      { slug: 'industrial-shed-construction', name: 'Industrial Shed Construction', blurb: 'Steel industrial sheds for factories, workshops and processing units.' },
      { slug: 'peb-structures', name: 'PEB Structures', blurb: 'Pre-engineered buildings: foundations, erection and roofing.' },
      { slug: 'warehouse-construction', name: 'Warehouse Construction', blurb: 'Warehouses and storage sheds for industrial and logistics use.' },
      { slug: 'civil-works', name: 'Civil Works', blurb: 'Foundations, equipment pedestals, roads and drainage.' },
      { slug: 'structural-steel', name: 'Structural Steel Fabrication & Erection', blurb: 'Pipe racks, platforms, sheds and steel structures.' },
      { slug: 'precast-compound-wall', name: 'Precast Compound Walls', blurb: 'Compound walls made at our own precast plant, then delivered and installed on your site.' },
    ],
  },
  {
    name: 'MEP & Utilities',
    icon: '⚙️',
    services: [
      { slug: 'piping', name: 'Process & Utility Piping', blurb: 'Fabrication, erection and testing of plant piping.' },
      { slug: 'mechanical', name: 'Mechanical & Equipment Erection', blurb: 'Erection and alignment of tanks, vessels and rotating equipment.' },
      { slug: 'fire-fighting', name: 'Fire Fighting Systems', blurb: 'Hydrant, sprinkler and fire water network installation.' },
    ],
  },
  {
    name: 'Maintenance',
    icon: '🔧',
    services: [
      { slug: 'plant-maintenance', name: 'Plant Maintenance', blurb: 'Ongoing mechanical and civil maintenance for running plants.' },
      { slug: 'shutdown', name: 'Shutdown & Turnaround', blurb: 'Planned shutdown jobs completed inside the window.' },
    ],
  },
];

export const industries = ['Chemicals', 'Pharmaceuticals', 'Oil & Gas / Petrochemicals', 'Manufacturing', 'Energy', 'Infrastructure'];
