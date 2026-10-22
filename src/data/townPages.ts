// Town keyword pages: /<town>/<service>/, e.g. /savli/warehouse-construction/ (owner request, 22 Oct 2026).
// Only towns where the owner works. Each page has its own local intro and FAQs; the town context and
// the service scope are shared. Name only real clients (from clientHistory) in or near each town.
// Vadodara is covered by /vadodara/<slug>/ (keywordPages.ts) and the "industrial construction" keyword
// of each town by its /locations/<slug>/ page, so neither is repeated here.
import type { Faq } from './servicePages';
import { keywordPages } from './keywordPages';

export type Town = {
  slug: string; name: string; loc: string;   // loc = /locations/<loc>/ slug
  where: string;                              // "in Savli GIDC and Savli taluka"
  context: string[];                          // 2 paragraphs, shared by the town's pages
  clients: string[]; nearby?: string[];       // real clients only
};

export const towns: Town[] = [
  {
    slug: 'karjan', name: 'Karjan', loc: 'karjan', where: 'in Karjan and along NH48',
    context: [
      'Karjan sits on NH48 between Vadodara and Bharuch, on the main road and rail corridor of south Gujarat. Units here have quick access both to Vadodara and to the Bharuch, Ankleshwar and Dahej belt, which makes it a practical location for factories, workshops and storage.',
      'We have worked in Karjan before, and Belex is among our past clients there. From our base in Nandesari, a site in Karjan is easy to reach for visits, supervision and follow-up after hand-over.',
    ],
    clients: ['Belex, Karjan'],
  },
  {
    slug: 'por', name: 'Por', loc: 'por', where: 'in Por, Ramangamdi and the NH48 belt south of Vadodara',
    context: [
      'Por, with the Por–Ramangamdi GIDC estate, lies just south of Vadodara city along NH48, close to Makarpura and the expressway. It suits factories, workshops and warehouses that serve Vadodara and the south Gujarat corridor.',
      'We have not yet built inside Por itself, so we will not claim clients here. Our nearest work is in Makarpura GIDC and Vadodara city, a short drive away, and our office in Nandesari can reach Por sites quickly.',
    ],
    clients: [], nearby: ['Pavan Gases, Makarpura GIDC', 'Nexcel Chemicals, Vadodara'],
  },
  {
    slug: 'dahej', name: 'Dahej', loc: 'dahej', where: 'in Dahej and Bharuch district',
    context: [
      'Dahej, in Bharuch district, is one of Gujarat’s largest chemical and petrochemical hubs, with big plants, an SEZ and a port. Sites are large, near the coast, and most are chemical or process plants with strict safety systems and permit-to-work rules.',
      'We are working in Dahej right now, at Gulbrandsen Chemicals’ site, after many years with Gulbrandsen at Akalbara. Our crew and supervisors already work to the safety and permit standards Dahej plants expect.',
    ],
    clients: ['Gulbrandsen Chemicals, Dahej (running now)'],
  },
  {
    slug: 'manjusar', name: 'Manjusar', loc: 'manjusar', where: 'in Manjusar GIDC and Savli taluka',
    context: [
      'Manjusar GIDC, in Savli taluka north of Vadodara, is a growing estate where new factories, sheds and warehouses keep coming up. Many plots are new, which means building from an empty plot: compound wall, shed, floor, roads, drainage and fire fighting.',
      'Our office in Nandesari is close by, and we have worked for industrial clients across the northern side of Vadodara for decades, including Nandesari GIDC units such as Akshar Chemi and Oriental Aromatics.',
    ],
    clients: [], nearby: ['Akshar Chemi, Nandesari', 'Oriental Aromatics, Nandesari', 'Nexcel Chemicals, Vadodara'],
  },
  {
    slug: 'savli', name: 'Savli', loc: 'savli', where: 'in Savli GIDC and Savli taluka',
    context: [
      'Savli GIDC and the industrial area around Savli taluka have drawn many new units in recent years. Most projects here are new set-ups on open plots, where planning the plot layout, truck movement and future expansion at the start saves money later.',
      'Savli is a short drive from our Nandesari office. We have worked for industrial clients on the northern side of Vadodara for decades, including Nandesari GIDC units such as Akshar Chemi and Oriental Aromatics.',
    ],
    clients: [], nearby: ['Akshar Chemi, Nandesari', 'Oriental Aromatics, Nandesari'],
  },
  {
    slug: 'makarpura', name: 'Makarpura', loc: 'makarpura', where: 'in Makarpura GIDC, Vadodara',
    context: [
      'Makarpura GIDC is one of Vadodara’s oldest and busiest industrial estates, inside the city on its southern side. Most plots are already built up, so most work here is upgrading: new or extended sheds on old plots, new floors and roofs, rebuilt internal roads, often while the unit keeps running.',
      'We have worked in Makarpura GIDC, including for Pavan Gases, and we are used to tight plots, narrow access and working around live production.',
    ],
    clients: ['Pavan Gases, Makarpura GIDC'],
  },
];

// The four keywords built per town, with the parent service and the shared scope content.
const kw = (slug: string) => keywordPages.find((k) => k.slug === slug)!;
export type TownService = {
  slug: string; label: string; topic: string; service: string; guides: string[];
  scope: string[]; decides: { h: string; p: string }[]; mistakes: string[];
  hooks: (town: string) => string[];
};
export const townServices: TownService[] = [
  {
    slug: 'warehouse-construction', label: 'Warehouse Construction', topic: 'warehouse construction', service: 'warehouse-construction',
    guides: ['warehouse-construction-guide-gujarat', 'peb-vs-conventional-steel-shed'],
    scope: kw('warehouse-construction').scope, decides: kw('warehouse-construction').decides, mistakes: kw('warehouse-construction').mistakes,
    hooks: (t) => [`PEB or steel warehouses and godowns in ${t}`, 'Floors built for forklifts and racking', 'Roads, docks, fire fighting and compound wall from one team'],
  },
  {
    slug: 'industrial-shed-construction', label: 'Industrial Shed Construction', topic: 'industrial shed construction', service: 'industrial-shed-construction',
    guides: ['industrial-shed-cost-gujarat', 'peb-vs-conventional-steel-shed'],
    scope: [
      'Steel and PEB industrial sheds',
      'Foundations, plinth and anchor bolts matched to the steel',
      'Roofing and wall cladding, gutters, ventilators and skylights',
      'Crane runway beams and gantry girders',
      'Mezzanine floors and platforms',
      'Industrial floor slab inside the shed',
      'Extensions to existing sheds',
    ],
    decides: [
      { h: 'Span and height', p: 'Wider clear spans and taller eaves need heavier steel. Internal columns can cut cost if your layout allows them.' },
      { h: 'Steel weight', p: 'Two quotes at the same rate per sq ft can use very different steel tonnage. Ask for the weight behind the price.' },
      { h: 'Roofing specification', p: 'Sheet thickness, coating and profile decide how long the roof lasts, especially near chemical plants.' },
      { h: 'Cranes and future loads', p: 'A crane or mezzanine, now or later, needs heavier columns and foundations. Plan for it at the start.' },
    ],
    mistakes: [
      'Comparing quotes only by rate per sq ft',
      'No allowance for a future crane or mezzanine',
      'Foundations and steel by different contractors, with nobody owning the anchor bolts',
      'Undersized gutters that overflow inside the shed in the monsoon',
    ],
    hooks: (t) => [`Steel and PEB sheds in ${t}, foundation to roof`, 'Steel weight and roofing spelled out in the quote', 'Our own crew, with a daily progress report'],
  },
  {
    slug: 'road-construction', label: 'Road Construction', topic: 'road construction', service: 'civil-works',
    guides: ['rcc-road-construction-cost-factors', 'rcc-vs-bitumen-road-factory'],
    scope: kw('road-construction').scope, decides: kw('road-construction').decides, mistakes: kw('road-construction').mistakes,
    hooks: (t) => [`RCC plant roads, approach roads and yards in ${t}`, 'Designed for loaded trucks, tankers and cranes', 'Drains and crossings built with the road'],
  },
  {
    slug: 'industrial-flooring', label: 'Industrial Flooring', topic: 'industrial flooring', service: 'civil-works',
    guides: ['industrial-floor-slab-guide'],
    scope: kw('industrial-flooring').scope, decides: kw('industrial-flooring').decides, mistakes: kw('industrial-flooring').mistakes,
    hooks: (t) => [`RCC floor slabs for factories and warehouses in ${t}`, 'Designed for forklifts, racking and machines', 'Base, joints and curing done right, so it doesn’t crack'],
  },
];

// Unique content per page: title (≤60), description (≤160), H1, local intro and local FAQs.
type Local = { title: string; description: string; h1: string; intro: string; faqs: Faq[] };
export const local: Record<string, Local> = {
  // ---------- Karjan ----------
  'karjan/warehouse-construction': {
    title: 'Warehouse Construction in Karjan, Vadodara | Jay Ambe',
    description: 'Warehouse and godown construction in Karjan on NH48: PEB or steel structure, forklift floors, docks, roads and fire fighting from one Vadodara team.',
    h1: 'Warehouse Construction in Karjan',
    intro: 'Karjan’s position on NH48, halfway between Vadodara and Bharuch, makes it a natural place for warehouses that serve both markets. A warehouse here will see heavy truck traffic from the highway, so yard size, turning space and dock positions matter as much as the building. We build the whole warehouse: structure, floor, docks, yard, drains, fire fighting and compound wall.',
    faqs: [
      { q: 'Do you build warehouses in Karjan?', a: 'Yes. We build warehouses and godowns in and around Karjan, and we have worked in Karjan before.' },
      { q: 'Can the yard handle highway trucks?', a: 'Yes. Yard, turning space and roads are designed for the heaviest trucks you expect.' },
      { q: 'Can you also build the compound wall?', a: 'Yes, with precast walls from our own plant.' },
    ],
  },
  'karjan/industrial-shed-construction': {
    title: 'Industrial Shed Construction in Karjan | Jay Ambe',
    description: 'Steel and PEB industrial sheds in Karjan, Vadodara district: foundations, steel, roofing, crane beams and floor by one team with daily progress reports.',
    h1: 'Industrial Shed Construction in Karjan',
    intro: 'Sheds in Karjan range from workshops and fabrication units to processing sheds for units supplying the Bharuch–Ankleshwar belt. Whatever the use, the questions are the same: what span and height you need, whether a crane is coming, and how much steel is really in the quote. We design the shed around your process and build it from foundation to roof.',
    faqs: [
      { q: 'Do you build sheds in Karjan?', a: 'Yes, steel and PEB sheds in Karjan and along NH48.' },
      { q: 'Can you add a crane to the shed later?', a: 'Yes, if it is planned at the start. Columns and foundations are sized for the future crane.' },
      { q: 'Do you extend existing sheds?', a: 'Yes, including matching the new bay to the existing structure.' },
    ],
  },
  'karjan/road-construction': {
    title: 'Road Construction in Karjan for Factories | Jay Ambe',
    description: 'RCC internal roads, approach roads and truck yards for factories and plants in Karjan, built for heavy NH48 traffic, with drains and crossings.',
    h1: 'Road Construction for Factories in Karjan',
    intro: 'Factories in Karjan often take trucks straight off NH48, so approach roads and yards carry loaded vehicles from day one. A road built for cars fails quickly under that traffic. We build RCC approach roads, internal plant roads and yards with the base, thickness, joints and drains designed for the trucks you actually run.',
    faqs: [
      { q: 'Do you build approach roads from the highway to the factory?', a: 'Yes, approach roads, internal roads and yards for industrial sites in and around Karjan.' },
      { q: 'RCC or bitumen for my Karjan site?', a: 'For heavy trucks, RCC usually lasts longer. We advise after seeing your site and traffic.' },
      { q: 'Do you build drains along the road?', a: 'Yes, side drains and culverts are built with the road.' },
    ],
  },
  'karjan/industrial-flooring': {
    title: 'Industrial Flooring Contractor in Karjan | Jay Ambe',
    description: 'Industrial RCC floor slabs in Karjan for factories, warehouses and sheds, designed for forklifts, racking and machine loads, with proper base and joints.',
    h1: 'Industrial Flooring in Karjan',
    intro: 'Whether it is a new warehouse along NH48 or an older shed in Karjan that needs its floor replaced, the floor has to carry forklifts, racking and machines without cracking. We build RCC floor slabs from the ground up: compaction, base, reinforcement, joints and curing, designed for your real loads.',
    faqs: [
      { q: 'Do you lay industrial floors in Karjan?', a: 'Yes, for new and existing factories, warehouses and sheds.' },
      { q: 'Can you replace an old cracked floor?', a: 'Yes, in phases if the unit needs to keep working.' },
      { q: 'How do I get a quote?', a: 'Book a free site visit. We check the loads, area and ground, then quote.' },
    ],
  },
  // ---------- Por ----------
  'por/warehouse-construction': {
    title: 'Warehouse Construction in Por GIDC, Vadodara | Jay Ambe',
    description: 'Warehouse and godown construction in Por–Ramangamdi near Vadodara: PEB or steel structure, forklift floors, docks, yards and fire fighting.',
    h1: 'Warehouse Construction in Por',
    intro: 'Por sits on NH48 just south of Vadodara, close to the expressway, which makes it a good spot for distribution and storage serving the city and the south Gujarat corridor. A warehouse here should be planned for fast truck turnaround: dock positions, yard size and a floor that takes forklifts and racking from the first day.',
    faqs: [
      { q: 'Do you build warehouses in Por?', a: 'Yes. We build warehouses and godowns in Por, Ramangamdi and the NH48 belt south of Vadodara.' },
      { q: 'Have you worked in Por before?', a: 'Not inside Por itself yet. Our nearest work is in Makarpura GIDC and Vadodara city, a short drive away.' },
      { q: 'Can you build docks and canopies?', a: 'Yes, loading docks, ramps and canopies are part of our warehouse work.' },
    ],
  },
  'por/industrial-shed-construction': {
    title: 'Industrial Shed Construction in Por GIDC | Jay Ambe',
    description: 'Steel and PEB industrial sheds in Por–Ramangamdi GIDC near Vadodara, from foundations and steel to roofing, crane beams and floor.',
    h1: 'Industrial Shed Construction in Por',
    intro: 'Por–Ramangamdi GIDC has a mix of new and established units, and sheds here are often workshops, fabrication bays or production halls. We build steel and PEB sheds in Por from foundation to roof, with the steel weight and roofing specification written into the quote, so you can compare it honestly.',
    faqs: [
      { q: 'Do you build sheds in Por GIDC?', a: 'Yes, steel and PEB sheds in Por and Ramangamdi.' },
      { q: 'How far is Por from your office?', a: 'Our office is in Nandesari, Vadodara, and we can reach Por sites quickly for visits and supervision.' },
      { q: 'Do you do the shed floor too?', a: 'Yes, the floor slab, plinth and drainage around the shed.' },
    ],
  },
  'por/road-construction': {
    title: 'Road Construction in Por, Vadodara | Jay Ambe',
    description: 'RCC internal roads, approach roads and yards for factories and warehouses in Por–Ramangamdi near Vadodara, with drains and road crossings.',
    h1: 'Road Construction for Factories in Por',
    intro: 'Units in Por see heavy trucks from NH48 and the expressway, and internal roads and yards wear quickly if they were built thin or on weak base. We build RCC roads and yards for factories and warehouses in Por, designed for your heaviest vehicle, with drains and crossings built at the same time.',
    faqs: [
      { q: 'Do you build roads inside factories in Por?', a: 'Yes, internal roads, approach roads, yards and parking areas.' },
      { q: 'Can you rebuild a damaged road in a running unit?', a: 'Yes, in phases so your gate and trucks keep moving.' },
      { q: 'What decides the cost of a road?', a: 'Traffic loads, slab thickness, base, joints and drainage. Our cost guide explains each.' },
    ],
  },
  'por/industrial-flooring': {
    title: 'Industrial Flooring in Por GIDC, Vadodara | Jay Ambe',
    description: 'Industrial RCC floor slabs in Por–Ramangamdi near Vadodara for factories, warehouses and sheds, built for forklifts, racking and machines.',
    h1: 'Industrial Flooring in Por',
    intro: 'A warehouse or workshop in Por lives on its floor: forklifts, pallet trucks, racking and machines all load it every day. We build RCC floor slabs in Por with proper compaction, base, reinforcement, joints and curing, designed for the loads you will actually put on them.',
    faqs: [
      { q: 'Do you build industrial floors in Por?', a: 'Yes, for new and existing factories, warehouses and sheds in Por and Ramangamdi.' },
      { q: 'Why do floors crack?', a: 'Mostly poor compaction below, late joints or loads the floor was not designed for.' },
      { q: 'Can you work while the unit runs?', a: 'Yes, by replacing the floor in sections.' },
    ],
  },
  // ---------- Dahej ----------
  'dahej/warehouse-construction': {
    title: 'Warehouse Construction in Dahej, Bharuch | Jay Ambe',
    description: 'Warehouses and storage buildings in Dahej for chemical and process plants: PEB or steel structure, floors, roads, drainage and fire fighting.',
    h1: 'Warehouse Construction in Dahej',
    intro: 'In Dahej, a warehouse is usually part of a chemical or process plant: raw material stores, finished goods, drums and packed products, sometimes hazardous. That changes the fire system, the floor and the drainage. We are working in Dahej now, and we build warehouses to the safety and permit standards Dahej plants run on.',
    faqs: [
      { q: 'Do you build warehouses in Dahej?', a: 'Yes. We are currently working in Dahej at Gulbrandsen Chemicals’ site.' },
      { q: 'Can you build stores for chemical products?', a: 'Yes, to your consultant’s design, including the fire system, floor and drainage the stored material needs.' },
      { q: 'Do you work under plant permit systems?', a: 'Yes. Our crew works under permit-to-work, with trained supervisors.' },
    ],
  },
  'dahej/industrial-shed-construction': {
    title: 'Industrial Shed Construction in Dahej | Jay Ambe',
    description: 'Steel and PEB industrial sheds in Dahej for chemical and process plants, with corrosion-resistant roofing, foundations, crane beams and floors.',
    h1: 'Industrial Shed Construction in Dahej',
    intro: 'Sheds in Dahej face two things most sheds don’t: a coastal climate and a chemical atmosphere. Both attack steel and roof sheets. We build sheds in Dahej with the surface preparation, paint system and roofing chosen for that environment, and we work inside running plants under their permit system.',
    faqs: [
      { q: 'Do you build sheds inside Dahej plants?', a: 'Yes, including inside running chemical plants under permit.' },
      { q: 'How do you protect steel near the coast?', a: 'Proper surface preparation, a paint system suited to the atmosphere and the right roofing sheets.' },
      { q: 'Are you working in Dahej now?', a: 'Yes, at Gulbrandsen Chemicals’ Dahej site.' },
    ],
  },
  'dahej/road-construction': {
    title: 'Road Construction in Dahej Plants | Jay Ambe',
    description: 'RCC plant roads, tanker bays and yards in Dahej for chemical and petrochemical plants, designed for heavy tankers, spills and coastal monsoon.',
    h1: 'Road Construction in Dahej Plants',
    intro: 'Roads in Dahej plants carry tankers and heavy trucks, and in chemical areas they must stand up to oil and chemical spills. Coastal ground and heavy monsoon make drainage critical. We build RCC plant roads, tanker bays and yards in Dahej with the base, thickness, joints and drains designed for those conditions.',
    faqs: [
      { q: 'Do you build roads inside Dahej plants?', a: 'Yes, plant roads, tanker bays and yards, under the plant’s permit system.' },
      { q: 'Why RCC for chemical plants?', a: 'Oils and solvents damage bitumen, and heavy tankers rut it. RCC usually lasts longer.' },
      { q: 'Do you plan drainage with the road?', a: 'Yes. In Dahej’s monsoon, drains and levels are as important as the slab.' },
    ],
  },
  'dahej/industrial-flooring': {
    title: 'Industrial Flooring in Dahej Plants | Jay Ambe',
    description: 'Industrial RCC floor slabs for chemical and process plants in Dahej: warehouses, process areas and sheds, built for loads, spills and drainage.',
    h1: 'Industrial Flooring in Dahej',
    intro: 'Floors in Dahej plants take forklifts, drums, equipment and, in process areas, chemical spills that must drain away safely. We build RCC floor slabs for warehouses, sheds and process areas in Dahej with the slopes, joints and drainage the area needs, to your consultant’s specification where special finishes are required.',
    faqs: [
      { q: 'Do you build floors in Dahej plants?', a: 'Yes, for warehouses, sheds and process areas, under the plant’s permit system.' },
      { q: 'Can floors slope to drains?', a: 'Yes. Slopes, drains and kerbs are planned with the slab.' },
      { q: 'Do you do chemical-resistant finishes?', a: 'We build the RCC slab to the specification, and coordinate special finishes with your consultant.' },
    ],
  },
  // ---------- Manjusar ----------
  'manjusar/warehouse-construction': {
    title: 'Warehouse Construction in Manjusar GIDC | Jay Ambe',
    description: 'New warehouse construction in Manjusar GIDC, Savli: plot layout, PEB or steel structure, forklift floors, docks, roads and compound wall.',
    h1: 'Warehouse Construction in Manjusar GIDC',
    intro: 'Most warehouses in Manjusar are built on new plots, which is the best time to get the layout right: where the building sits, how trucks enter and turn, where the docks go and where future expansion will fit. We plan this with you, then build the whole warehouse, starting with a precast compound wall to secure the plot.',
    faqs: [
      { q: 'Do you build warehouses in Manjusar GIDC?', a: 'Yes, from empty plot to finished warehouse.' },
      { q: 'Can you plan the plot layout?', a: 'Yes, together with your architect: building position, truck movement and future expansion.' },
      { q: 'Can you secure the plot first?', a: 'Yes, with precast compound walls from our own plant.' },
    ],
  },
  'manjusar/industrial-shed-construction': {
    title: 'Industrial Shed Construction in Manjusar GIDC | Jay Ambe',
    description: 'PEB and steel industrial sheds for new factories in Manjusar GIDC near Vadodara, from foundations to roofing, floor, roads and fire fighting.',
    h1: 'Industrial Shed Construction in Manjusar GIDC',
    intro: 'New units in Manjusar usually start with a shed: a production hall, a workshop or a store. Because the plot is empty, the shed, floor, roads, drains and fire system can all be planned together, which is cheaper and faster than adding them one by one. We build the shed and everything around it.',
    faqs: [
      { q: 'Do you build PEB sheds in Manjusar?', a: 'Yes, PEB and conventional steel sheds for new units in Manjusar GIDC.' },
      { q: 'Can you do the full factory, not just the shed?', a: 'Yes: wall, shed, floor, roads, drainage and fire fighting.' },
      { q: 'How close is your office?', a: 'Our office is in Nandesari, close to Manjusar.' },
    ],
  },
  'manjusar/road-construction': {
    title: 'Road Construction in Manjusar GIDC | Jay Ambe',
    description: 'RCC internal roads, approach roads and yards for new factories and warehouses in Manjusar GIDC, planned with levels and storm water drains.',
    h1: 'Road Construction in Manjusar GIDC',
    intro: 'On a new Manjusar plot, the internal roads should be planned with the site levels and drains before anything else is built, so water always has a path away from your buildings. We build RCC internal roads, approach roads and yards for new units in Manjusar, with crossings left for future pipes and cables.',
    faqs: [
      { q: 'Do you build internal roads in Manjusar GIDC?', a: 'Yes, internal roads, yards and approach roads for new and existing units.' },
      { q: 'Should roads be built before or after the shed?', a: 'Levels and drains should be planned first; the road is usually finished after heavy construction traffic is over.' },
      { q: 'Do you leave crossings for future services?', a: 'Yes, sleeves for pipes and cables are laid before the concrete.' },
    ],
  },
  'manjusar/industrial-flooring': {
    title: 'Industrial Flooring in Manjusar GIDC | Jay Ambe',
    description: 'Industrial RCC floor slabs for new factories and warehouses in Manjusar GIDC, Savli, designed for forklifts, racking and machine loads.',
    h1: 'Industrial Flooring in Manjusar GIDC',
    intro: 'New plots in Manjusar are often filled and levelled before building, and filled ground is where floors fail if it is not compacted properly. We build industrial floors in Manjusar starting below the slab: filling in layers, compaction, base, then a slab designed for your forklifts, racking and machines.',
    faqs: [
      { q: 'Do you build floors for new factories in Manjusar?', a: 'Yes, as part of the full factory or as a separate job.' },
      { q: 'My plot was filled. Is that a problem?', a: 'Not if the fill is compacted in layers before the floor is built. We check it first.' },
      { q: 'Can the floor take racking?', a: 'Yes, when it is designed for your racking loads.' },
    ],
  },
  // ---------- Savli ----------
  'savli/warehouse-construction': {
    title: 'Warehouse Construction in Savli GIDC | Jay Ambe',
    description: 'Warehouse and godown construction in Savli GIDC and Savli taluka: PEB or steel structure, forklift floors, docks, roads, fire fighting and wall.',
    h1: 'Warehouse Construction in Savli',
    intro: 'Savli’s open plots give room to build warehouses the right way: enough yard for trucks, docks where they work best, and space to extend later. We plan the layout with you, then build the structure, floor, docks, roads, drains, fire system and compound wall as one job, so you are not coordinating several contractors.',
    faqs: [
      { q: 'Do you build warehouses in Savli?', a: 'Yes, in Savli GIDC and across Savli taluka.' },
      { q: 'Can you plan for future expansion?', a: 'Yes. We leave space and structural provision for the next bay.' },
      { q: 'Do you do the fire system too?', a: 'Yes, hydrants and sprinklers to your fire consultant’s design.' },
    ],
  },
  'savli/industrial-shed-construction': {
    title: 'Industrial Shed Construction in Savli GIDC | Jay Ambe',
    description: 'Steel and PEB industrial sheds in Savli GIDC near Vadodara: foundations, steel, roofing, crane beams, mezzanines and floors from one team.',
    h1: 'Industrial Shed Construction in Savli',
    intro: 'Many new units in Savli need large production sheds, sometimes with cranes or mezzanines. Those decisions change the steel, the columns and the foundations, so they need to be made before design, not after. We help you decide, then build the shed from foundation to roof with our own crew.',
    faqs: [
      { q: 'Do you build sheds with cranes in Savli?', a: 'Yes. Crane runway beams and foundations are designed in from the start.' },
      { q: 'PEB or conventional steel for my Savli shed?', a: 'It depends on span, size and use. Our PEB vs conventional guide explains the choice.' },
      { q: 'How quickly can you visit?', a: 'Savli is a short drive from our Nandesari office. Book a free site visit.' },
    ],
  },
  'savli/road-construction': {
    title: 'Road Construction in Savli for Factories | Jay Ambe',
    description: 'RCC internal roads, approach roads and truck yards for factories and warehouses in Savli GIDC and Savli taluka, with drains and crossings.',
    h1: 'Road Construction for Factories in Savli',
    intro: 'Savli units are spread out, and many plots need a proper approach road and internal roads before trucks can use them in every season. We build RCC approach roads, internal roads and yards in Savli, designed for loaded trucks and built with the drains that keep them working through the monsoon.',
    faqs: [
      { q: 'Do you build approach roads in Savli?', a: 'Yes, approach roads, internal plant roads and yards.' },
      { q: 'Will the road survive the monsoon?', a: 'When the base, levels and drains are right, yes. That is where we start.' },
      { q: 'Do you also build storm water drains?', a: 'Yes, drains and culverts are part of our civil works.' },
    ],
  },
  'savli/industrial-flooring': {
    title: 'Industrial Flooring Contractor in Savli | Jay Ambe',
    description: 'Industrial RCC floor slabs for factories, sheds and warehouses in Savli GIDC, built for forklifts, racking and machines, with proper joints.',
    h1: 'Industrial Flooring in Savli',
    intro: 'Production sheds and warehouses in Savli need floors that take machines, forklifts and racking without cracking or dusting. We build RCC floor slabs in Savli with compaction, base, reinforcement, joints and curing designed for your loads, and isolate machine foundations so vibration does not crack the floor.',
    faqs: [
      { q: 'Do you build industrial floors in Savli?', a: 'Yes, for new and existing factories, sheds and warehouses.' },
      { q: 'Can you build machine foundations in the same job?', a: 'Yes, isolated from the floor slab.' },
      { q: 'How do I get a price?', a: 'Book a free site visit; we quote after checking loads, area and ground.' },
    ],
  },
  // ---------- Makarpura ----------
  'makarpura/warehouse-construction': {
    title: 'Warehouse Construction in Makarpura GIDC | Jay Ambe',
    description: 'Warehouses and stores in Makarpura GIDC, Vadodara: new buildings on old plots, conversions and extensions, with floors, roofs and fire fighting.',
    h1: 'Warehouse Construction in Makarpura GIDC',
    intro: 'In Makarpura, a new warehouse usually means building on a plot that already has buildings, or converting an old shed into storage. Space is tight and access is narrow, so the sequence of work matters. We plan around your running unit and build the structure, floor, roof and fire system without stopping your business.',
    faqs: [
      { q: 'Can you convert an old shed into a warehouse?', a: 'Yes. We check the structure, then upgrade the floor, roof and fire system as needed.' },
      { q: 'Have you worked in Makarpura GIDC?', a: 'Yes, including for Pavan Gases.' },
      { q: 'Can you work while my unit runs?', a: 'Yes, with the work area separated and phased.' },
    ],
  },
  'makarpura/industrial-shed-construction': {
    title: 'Industrial Shed Construction in Makarpura GIDC | Jay Ambe',
    description: 'New, extended and rebuilt industrial sheds in Makarpura GIDC, Vadodara: steel or PEB, roofing, crane beams and floors, built around running units.',
    h1: 'Industrial Shed Construction in Makarpura GIDC',
    intro: 'Most shed work in Makarpura is extending or rebuilding: a new bay beside an old one, a taller shed for a crane, or a replacement for a structure that has aged. Matching new steel to old and working beside live production is routine for us. We build the shed and keep your unit running.',
    faqs: [
      { q: 'Can you extend my existing shed in Makarpura?', a: 'Yes, matching the new bay to the existing structure.' },
      { q: 'Can you rebuild an old shed?', a: 'Yes, in phases where possible, so production can continue.' },
      { q: 'Do you replace roof sheets?', a: 'Yes, including leak repair and corroded sheet replacement.' },
    ],
  },
  'makarpura/road-construction': {
    title: 'Road Construction in Makarpura GIDC | Jay Ambe',
    description: 'Rebuilding internal roads and yards in Makarpura GIDC, Vadodara: RCC roads, drains and crossings, phased so trucks and production keep moving.',
    h1: 'Road Construction in Makarpura GIDC',
    intro: 'Internal roads in older Makarpura units have often been patched for years. Rebuilding them properly means new base, new slab, joints and drains, while trucks still need to get in and out. We phase the work so your gate keeps working, and lay crossings for pipes and cables before the new concrete goes down.',
    faqs: [
      { q: 'Can you rebuild roads while my unit is running?', a: 'Yes, in phases so traffic keeps moving.' },
      { q: 'Why does my road keep breaking?', a: 'Usually weak base, standing water or a slab too thin for the traffic. We check all three.' },
      { q: 'Do you fix waterlogging too?', a: 'Yes, by correcting levels and adding drains.' },
    ],
  },
  'makarpura/industrial-flooring': {
    title: 'Industrial Floor Replacement in Makarpura GIDC',
    description: 'Industrial floor repair and replacement in Makarpura GIDC, Vadodara: new RCC slabs for factories and warehouses, phased around running production.',
    h1: 'Industrial Floor Replacement in Makarpura GIDC',
    intro: 'Old factory floors in Makarpura crack, sink and dust after years of forklifts and machines. Replacing a floor in a running unit needs planning: which area first, where machines move, and how long each section cures. We replace floors section by section, with proper base, joints and curing, so the new floor lasts.',
    faqs: [
      { q: 'Can you replace my factory floor in sections?', a: 'Yes, so production continues around the section being rebuilt.' },
      { q: 'Do you also build new floors?', a: 'Yes, for new sheds and warehouses in Makarpura and across Vadodara.' },
      { q: 'How long before we can use the new floor?', a: 'It depends on the slab and loads; curing time is planned into the schedule.' },
    ],
  },
};
