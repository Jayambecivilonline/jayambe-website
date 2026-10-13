// Guide / article pages (/guides/<slug>/) that target "cost" and "how to" searches.
// Honesty rule: no ₹ rates or statistics until the owner provides real figures.
// Explain what DECIDES the answer, then invite a free site visit.
import type { Faq } from './servicePages';

export type Block = { h: string; p?: string; list?: string[] };
export type Guide = {
  slug: string; title: string; description: string; h1: string; intro: string;
  blocks: Block[]; faqs: Faq[]; services: string[]; updated: string;
};

export const guides: Guide[] = [
  {
    slug: 'industrial-shed-cost-gujarat',
    title: 'Industrial Shed Cost per Sq Ft in Gujarat: What Decides It',
    description: 'What decides industrial shed construction cost per sq ft in Gujarat: span, height, steel, roofing, cranes and foundations. How to compare shed quotes.',
    h1: 'Industrial Shed Cost per Sq Ft in Gujarat: What Really Decides the Price',
    intro: 'Ask five contractors for a shed price and you’ll get five different rates per square foot. The difference is rarely profit. It’s what each rate actually includes. Here is what decides the cost, and how to compare quotes fairly.',
    blocks: [
      { h: '1. Span and height', p: 'Wider clear spans and taller eave heights need heavier steel sections. A shed with internal columns usually costs less per sq ft than a column-free one of the same size.' },
      { h: '2. Steel section and weight', p: 'This is the biggest variable. Two quotes with the same “rate” can use very different steel weights. Always ask for the steel tonnage, or the kg per sq ft, behind the price.' },
      { h: '3. Roofing and cladding sheets', p: 'Sheet thickness, coating and profile change both the price and how long the roof lasts. Insulated or polycarbonate sections add cost.' },
      { h: '4. Crane loads and mezzanines', p: 'An EOT crane, or a mezzanine floor, needs heavier columns, crane runway beams and stronger foundations.' },
      { h: '5. Foundations and soil', p: 'Soil conditions, plinth height and flooring specification can change the civil cost a lot. Some quotes leave civil out altogether.' },
      { h: '6. Extras that are often left out', list: ['Gutters, down-take pipes and ventilators', 'Skylights and louvres', 'Industrial flooring', 'Painting and anti-corrosion protection', 'Fire fighting system', 'Compound wall'] },
      { h: 'How to compare two shed quotes', list: ['Check the steel tonnage, not just the rate per sq ft', 'Check the sheet thickness and coating', 'Ask whether foundations and flooring are included', 'Ask who does erection: their own team or a subcontractor', 'Ask how progress will be reported during the job'] },
    ],
    faqs: [
      { q: 'Why is one shed quote so much cheaper than another?', a: 'Usually lighter steel, thinner sheets, or civil work left out. Compare the steel tonnage and what’s included.' },
      { q: 'Can you give me an exact price?', a: 'Yes, after a free site visit. We study your plot and requirements and send a detailed quote.' },
    ],
    services: ['industrial-shed-construction', 'peb-structures', 'warehouse-construction'],
    updated: '2026-10-13',
  },
  {
    slug: 'peb-vs-conventional-steel-shed',
    title: 'PEB vs Conventional Steel Shed: Which Should You Build?',
    description: 'PEB (pre-engineered building) or conventional steel shed? Compare speed, span, flexibility and cost factors to choose the right structure for your plant.',
    h1: 'PEB vs Conventional Steel Shed: Which Is Right for Your Project?',
    intro: 'Both can give you a strong, long-lasting industrial building. The right choice depends on your span, timeline, and how much you may change the building later.',
    blocks: [
      { h: 'What is a PEB?', p: 'A pre-engineered building is designed as a complete system. Tapered columns and rafters are made in a factory to the exact design, then bolted together on site.' },
      { h: 'What is a conventional steel shed?', p: 'A conventional shed uses standard rolled steel sections, cut, fabricated and welded or bolted for the job, often partly on site.' },
      { h: 'When a PEB usually makes sense', list: ['Large, clear-span buildings such as warehouses and big factory halls', 'When speed of erection matters', 'Repeatable, regular building shapes'] },
      { h: 'When a conventional shed usually makes sense', list: ['Smaller sheds and irregular shapes', 'Frequent future modifications', 'Heavy process structures and pipe racks that aren’t simple buildings'] },
      { h: 'What matters in both', p: 'Foundations, anchor bolts and erection quality. A PEB that arrives on site before the foundations are ready isn’t fast at all. That’s why civil and steel should be planned by one team.' },
    ],
    faqs: [
      { q: 'Is PEB always cheaper?', a: 'Not always. It depends on the span, size and design. For large clear spans it is often efficient; for small or irregular sheds a conventional design can be better.' },
      { q: 'Do you build both?', a: 'Yes. We help you choose during the free site visit.' },
    ],
    services: ['peb-structures', 'industrial-shed-construction', 'structural-steel'],
    updated: '2026-10-13',
  },
  {
    slug: 'precast-compound-wall-vs-brick-wall',
    title: 'Precast Compound Wall vs Brick Wall: Price & Speed Guide',
    description: 'Precast compound wall or brick wall for your factory or plot? Compare speed, quality, maintenance and what decides precast wall price per running foot.',
    h1: 'Precast Compound Wall vs Brick Wall: Which Should You Choose?',
    intro: 'A compound wall is often the first thing built on a new site, and the first thing that delays it. Here’s how precast compares with a traditional brick wall.',
    blocks: [
      { h: 'Speed', p: 'Precast panels are cast in a factory and installed on site, so there is no masonry, plastering or curing on your plot. A brick wall is built and cured on site, course by course.' },
      { h: 'Quality and consistency', p: 'Factory casting gives consistent panels. Brick wall quality depends on the masons and the supervision on site.' },
      { h: 'Labour and site management', p: 'Precast needs a small installation team for a short time. Brick needs masons, material storage and water on site for weeks.' },
      { h: 'What decides precast wall price per running foot', list: ['Wall height', 'Panel thickness and reinforcement', 'Column spacing and foundation type', 'Ground conditions on site', 'Distance from the precast plant', 'Gates, barbed wire or other extras'] },
      { h: 'When brick may still make sense', p: 'Very short lengths, unusual shapes, or where a plastered architectural finish is needed.' },
    ],
    faqs: [
      { q: 'Do you make the precast panels yourselves?', a: 'Yes, at our own precast plant, and our own team installs them.' },
      { q: 'How much does a precast compound wall cost?', a: 'It depends on height, length and site conditions. Book a free site visit for an exact quote.' },
    ],
    services: ['precast-compound-wall', 'civil-works'],
    updated: '2026-10-13',
  },
  {
    slug: 'warehouse-construction-guide-gujarat',
    title: 'Warehouse Construction in Gujarat: A Planning Guide',
    description: 'Planning a warehouse in Gujarat? What to decide before construction: structure, flooring, height, docks, fire fighting and compound wall.',
    h1: 'Building a Warehouse in Gujarat: What to Decide Before Construction Starts',
    intro: 'Gujarat’s demand for modern warehousing is growing. A well-planned warehouse is easier to lease, insure and run. These are the decisions that matter most, and they’re best made before work starts.',
    blocks: [
      { h: '1. Structure: PEB or conventional steel', p: 'Large clear spans often suit a PEB. See our PEB vs conventional shed guide.' },
      { h: '2. Clear height', p: 'Taller buildings store more per square foot of land, but need heavier structure. Decide your racking plan first.' },
      { h: '3. Flooring', p: 'Forklift and racking loads decide the floor specification. Floors are hard to fix later, so get them right first time.' },
      { h: '4. Loading and circulation', p: 'Dock positions, truck movement, roads and drainage around the building.' },
      { h: '5. Fire fighting', p: 'Hydrants and sprinklers are required for many warehouses and checked by insurers and fire authorities. Plan them from day one, not after the roof is on.' },
      { h: '6. Boundary', p: 'A precast compound wall is often the quickest way to secure the site at the start.' },
    ],
    faqs: [
      { q: 'Do you build complete warehouses?', a: 'Yes: foundations, structure, flooring, roofing, roads, fire fighting and compound wall.' },
      { q: 'Do you build chemical storage warehouses?', a: 'Yes. Most of our clients are chemical and pharma companies.' },
    ],
    services: ['warehouse-construction', 'peb-structures', 'fire-fighting', 'precast-compound-wall'],
    updated: '2026-10-13',
  },
  {
    slug: 'fire-fighting-system-factory-gujarat',
    title: 'Fire Fighting System for Factories in Gujarat: A Guide',
    description: 'Hydrants, sprinklers, fire water tanks and pump rooms for factories and warehouses in Gujarat. How to plan your fire system so the NOC doesn’t delay start-up.',
    h1: 'Fire Fighting Systems for Factories and Warehouses in Gujarat',
    intro: 'A new plant can be fully built and still unable to start because the fire NOC is pending. Here’s what a typical industrial fire fighting system includes, and how to stop it delaying your project.',
    blocks: [
      { h: 'What a typical system includes', list: ['Fire water storage tank', 'Fire pump house with pumps and piping', 'Hydrant ring main around the buildings', 'Hydrant points and hose reels', 'Sprinkler systems, where required', 'Testing and documentation'] },
      { h: 'Who designs it?', p: 'The system is designed by a qualified fire consultant to the applicable norms and approved by the authorities. The contractor installs and tests it to that design.' },
      { h: 'Why fire systems delay projects', list: ['They’re left until the end of the project', 'Underground ring mains clash with other services', 'Lines fail pressure tests and need rework', 'Documents aren’t ready for the inspection'] },
      { h: 'How to avoid the delay', p: 'Plan the fire system with civil and piping from day one, lay ring mains before the roads, test as you go, and keep records ready for inspection.' },
    ],
    faqs: [
      { q: 'Do you design fire systems?', a: 'We install to your consultant’s approved design and help with site inputs.' },
      { q: 'Can you upgrade an existing plant’s fire system?', a: 'Yes, including extensions to existing hydrant networks.' },
    ],
    services: ['fire-fighting', 'piping', 'warehouse-construction'],
    updated: '2026-10-13',
  },
  {
    slug: 'how-to-choose-industrial-contractor',
    title: 'How to Choose an Industrial Contractor in Gujarat',
    description: 'A practical checklist for choosing an industrial construction contractor in Gujarat: own crew, references, safety, reporting and how to compare quotes.',
    h1: 'How to Choose an Industrial Construction Contractor: A Plant Owner’s Checklist',
    intro: 'The contractor you choose decides when your plant starts earning. Use this checklist before you sign.',
    blocks: [
      { h: '1. Do they have their own crew?', p: 'Contractors who hire labour job by job struggle to keep a stable team. Ask how many of their people are on their own payroll.' },
      { h: '2. Can they show real references?', p: 'Ask for clients you can call, especially ones who have worked with them for years. Repeat clients are the best proof.' },
      { h: '3. How do they report progress?', p: 'Ask to see a sample daily progress report. If they can’t show one, you’ll be chasing them for updates.' },
      { h: '4. What is their safety record?', p: 'Ask about their record and how they work under a plant’s permit system.' },
      { h: '5. How many contracts will you manage?', p: 'Splitting civil, steel, piping and fire fighting between contractors means you manage the gaps. One responsible contractor removes them.' },
      { h: '6. Compare the full cost, not just the quote', p: 'A cheaper quote that delays your start-up by a month can cost far more than it saves. Try our cost-of-delay calculator on the homepage.' },
    ],
    faqs: [
      { q: 'Can I see your daily progress report?', a: 'Yes. There is a real sample on our homepage, with client details hidden.' },
      { q: 'Who have you worked for?', a: '25+ industrial clients across Gujarat. See our clients page.' },
    ],
    services: ['epc', 'industrial-construction', 'factory-construction'],
    updated: '2026-10-13',
  },
];
