// Extra keyword-rich FAQs per service (the questions people actually type into Google).
// Shown together with the service's own FAQs and the shared FAQs built in the page template.
// Honesty rule: no invented prices, durations or certifications.
import type { Faq } from './servicePages';

export const serviceFaqs: Record<string, Faq[]> = {
  epc: [
    { q: 'What is an EPC contractor?', a: 'An EPC contractor takes responsibility for engineering, procurement and construction under one contract. Instead of managing several contractors, you deal with one team that is accountable for the whole project.' },
    { q: 'What is the difference between EPC and turnkey?', a: 'Both mean one contractor delivers the project ready to use. “Turnkey” stresses handing over a finished facility; “EPC” describes the scope: engineering, procurement and construction. In practice, we agree the exact scope with you in the quote.' },
    { q: 'Is EPC more expensive than hiring separate contractors?', a: 'The quote may look similar, but EPC removes the delays and gaps between trades, and delays are usually the biggest hidden cost. Try the cost-of-delay calculator on our homepage.' },
    { q: 'Do you take EPC projects for chemical plants in Gujarat?', a: 'Yes. Chemical plants are our main work, along with pharmaceutical and industrial gas plants across Gujarat.' },
  ],
  'pre-construction': [
    { q: 'What is pre-construction planning?', a: 'It is the work done before mobilisation: site study, scope and drawing review, work sequence, schedule, and material and manpower planning.' },
    { q: 'Why does pre-construction planning matter?', a: 'Most delays are decided before work starts: missing drawings, late material, or trades that wait on each other. Planning removes those causes in advance.' },
    { q: 'How long does pre-construction planning take?', a: 'It depends on the size of the project. We agree the timeline with you after the first site visit.' },
    { q: 'Do you charge for the first site visit?', a: 'No. The first site visit and quote are free, with no obligation.' },
  ],
  procurement: [
    { q: 'What does procurement include in construction?', a: 'Material take-off from drawings, sourcing to specification, delivery planning, inspection on receipt and records for hand-over.' },
    { q: 'Can we use our own approved vendors?', a: 'Yes. We follow your approved vendor list where you have one.' },
    { q: 'Can we supply some material ourselves?', a: 'Yes. Tell us what you will supply and we plan the work around it.' },
    { q: 'Why combine procurement with construction?', a: 'When the same team buys and builds, deliveries follow the work sequence, so crews are not left waiting for material.' },
  ],
  'industrial-construction': [
    { q: 'Which is the best industrial construction company in Vadodara?', a: 'Look for long client relationships, an own crew, real progress reporting and a clean safety record. We have been building in Vadodara since 1996, report progress daily and have zero safety incidents. See our clients page and judge for yourself.' },
    { q: 'What types of industrial buildings do you construct?', a: 'Plant and process buildings, factory buildings, industrial sheds, PEB structures, warehouses, utility buildings and related civil, steel, piping and fire fighting work.' },
    { q: 'Do you build greenfield and brownfield projects?', a: 'Yes. New plants on empty land (greenfield) and new units or expansions inside running plants (brownfield).' },
    { q: 'How much does industrial construction cost in Gujarat?', a: 'It depends on the building type, size, structure, foundations and services. We give a detailed quote after a free site visit.' },
  ],
  'factory-construction': [
    { q: 'How much does it cost to build a factory in Gujarat?', a: 'It depends on plot conditions, building size and height, structure type (PEB or conventional), flooring, utilities and fire fighting. We give an exact quote after a free site visit and drawing review.' },
    { q: 'Do you build factories in GIDC estates?', a: 'Yes, in GIDC estates across Vadodara district including Nandesari, Makarpura, Manjusar, Savli, Waghodia and the Padra belt.' },
    { q: 'Can you build machine foundations?', a: 'Yes. Machine foundations and equipment pedestals are part of our civil scope.' },
    { q: 'Do you handle the fire fighting system for a new factory?', a: 'Yes. We plan it from day one so the fire NOC doesn’t delay your start-up.' },
  ],
  'industrial-shed-construction': [
    { q: 'Who is the best industrial shed contractor near me in Vadodara?', a: 'Choose a contractor who does foundations, steel and roofing with their own team, explains the steel tonnage in the quote and reports progress daily. That is how we work.' },
    { q: 'What roofing sheets do you use for industrial sheds?', a: 'We use the sheet type and thickness specified for your project and explain the options in our quote.' },
    { q: 'Can you extend an existing industrial shed?', a: 'Yes. We extend and modify existing sheds as well as build new ones.' },
  ],
  'peb-structures': [
    { q: 'What is a PEB structure?', a: 'A pre-engineered building is designed as a complete system. Columns and rafters are made in a factory to the design and bolted together on site.' },
    { q: 'What is the PEB shed cost per sq ft?', a: 'It depends on span, height, loads and cladding. Read our PEB vs conventional shed guide, or book a free site visit for a quote.' },
    { q: 'Do you do PEB erection in Vadodara?', a: 'Yes. Foundations, anchor bolts and erection across Vadodara district and Gujarat.' },
  ],
  'warehouse-construction': [
    { q: 'How much does warehouse construction cost in Gujarat?', a: 'It depends on area, clear height, structure, flooring loads, docks and fire fighting. We give a detailed quote after a free site visit.' },
    { q: 'What flooring is best for a warehouse?', a: 'It depends on forklift and racking loads. The floor specification should be decided before construction, because floors are hard to fix later.' },
    { q: 'Do warehouses need fire fighting systems?', a: 'Many warehouses need hydrants and sprinklers, and insurers check fire protection. Your fire consultant confirms the requirement; we install and test it.' },
    { q: 'Do you build warehouses near Vadodara?', a: 'Yes, in Vadodara district and across Gujarat, including Manjusar, Savli, Halol and Dahej.' },
  ],
  'civil-works': [
    { q: 'What does industrial civil work include?', a: 'Excavation and earthwork, foundations, equipment pedestals, RCC structures, plant roads, drainage and compound walls.' },
    { q: 'Who is a good industrial civil contractor in Vadodara?', a: 'Pick a contractor who reports measured quantities, not just “almost done”. Our daily reports show cubic metres executed, manpower and equipment.' },
    { q: 'Do you have equipment for excavation?', a: 'Equipment such as excavators and JCBs is deployed to suit each job.' },
    { q: 'Can you do civil work inside a running plant?', a: 'Yes, under the plant’s permit-to-work and safety rules.' },
  ],
  'structural-steel': [
    { q: 'What structural steel work do you do?', a: 'Pipe racks, pipe supports, platforms, ladders, walkways, equipment support structures, industrial sheds and roofing.' },
    { q: 'Do you fabricate in a workshop or on site?', a: 'It depends on the job. We plan fabrication and erection during the site visit.' },
    { q: 'Can you erect steel in a running plant?', a: 'Yes, with planned lifts under the plant’s permit system.' },
    { q: 'Do you supply the steel?', a: 'We can procure steel to your specification or erect steel you supply.' },
  ],
  'precast-compound-wall': [
    { q: 'What is the precast compound wall price per running foot?', a: 'It depends on wall height, panel thickness, column spacing, ground conditions and distance from our plant. Book a free site visit for an exact quote.' },
    { q: 'Is a precast compound wall better than a brick wall?', a: 'Precast is faster to install and more consistent in quality, with no masonry or curing on site. Read our precast vs brick wall guide.' },
    { q: 'Do you make the precast panels yourselves?', a: 'Yes, at our own precast plant, and our own team installs them.' },
  ],
  piping: [
    { q: 'What is the difference between process piping and utility piping?', a: 'Process piping carries the plant’s products and chemicals. Utility piping carries services such as water, air, steam and nitrogen. We do both.' },
    { q: 'Do you do hydro testing of pipelines?', a: 'Yes. Lines are pressure-tested and documented before hand-over.' },
    { q: 'Can you do tie-ins in a running plant?', a: 'Yes, planned with your operations team under the permit system to keep downtime short.' },
    { q: 'Who is a reliable piping contractor near me in Vadodara?', a: 'We have done piping for chemical and gas plants around Vadodara since 1996, with our own fitters and welders.' },
  ],
  mechanical: [
    { q: 'What equipment do you erect?', a: 'Tanks, vessels, columns, heat exchangers and rotating equipment such as pumps and compressors.' },
    { q: 'Do you do equipment alignment?', a: 'Yes, installation and alignment are part of our scope.' },
    { q: 'Do you plan heavy lifts?', a: 'Yes. Lifts are planned in the job plan and cranes are deployed to suit.' },
    { q: 'Do you do piping hook-up after erection?', a: 'Yes, under the same contract.' },
  ],
  'fire-fighting': [
    { q: 'What does a fire hydrant system include?', a: 'Fire water storage, a pump house with pumps and piping, a hydrant ring main, hydrant points and hose reels, plus testing and documentation.' },
    { q: 'How do I get a fire NOC for my factory?', a: 'Your fire consultant designs the system and applies for approval; we install and test it to that design and keep records ready for inspection.' },
    { q: 'Can you extend the fire system in an existing plant?', a: 'Yes, including extensions to existing hydrant networks.' },
  ],
  'plant-maintenance': [
    { q: 'What does plant maintenance include?', a: 'Mechanical maintenance, piping repairs and modifications, civil repairs, structural modifications and support during shutdowns.' },
    { q: 'Do you offer annual maintenance contracts (AMC)?', a: 'Contact us to discuss what your plant needs.' },
    { q: 'Can you respond to small jobs quickly?', a: 'We are based in Nandesari, Vadodara, close to the main industrial estates. Talk to us about your plant’s needs.' },
    { q: 'Do you work in chemical plants?', a: 'Yes. Chemical and industrial gas plants are our main maintenance clients.' },
  ],
  shutdown: [
    { q: 'What is a plant shutdown or turnaround?', a: 'A planned stop of a running plant to carry out maintenance, repairs, inspections and modifications that can’t be done while it runs.' },
    { q: 'How early should we plan a shutdown with a contractor?', a: 'As early as possible, so the scope, material and crew are ready before the plant stops.' },
    { q: 'Can you supply a large crew for a shutdown?', a: 'We deploy our own crew sized to the job. Tell us the scope and dates and we’ll tell you honestly what we can deploy.' },
    { q: 'How will we know shutdown progress?', a: 'Through a daily progress report: manpower, work done and equipment.' },
  ],
};
