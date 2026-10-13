// Extra SEO copy for each service page: the primary keyword, keyword-rich "about" paragraphs,
// and the locations most relevant to the service. Keyed by service slug.
// Honesty rule: only facts the owner has confirmed (since 1996, own crew, daily report,
// 0 safety incidents, own precast plant, client names from clientHistory).

export type ServiceSeo = { keyword: string; about: string[]; areas: string[] };

export const serviceSeo: Record<string, ServiceSeo> = {
  epc: {
    keyword: 'EPC and turnkey industrial contractor in Vadodara',
    about: [
      'Jay Ambe Engineering Works is an EPC and turnkey industrial contractor based in Nandesari, Vadodara, working across Gujarat since 1996. Instead of hiring separate contractors for civil, structural steel, piping, mechanical and fire fighting, you get one contract and one team responsible for the whole job.',
      'Our EPC clients are mainly chemical, pharmaceutical and industrial gas companies. We work from your consultant’s drawings, procure material to specification, build with our own crew, and send you a daily progress report until hand-over.',
    ],
    areas: ['vadodara', 'nandesari', 'manjusar', 'dahej'],
  },
  'pre-construction': {
    keyword: 'pre-construction planning for industrial projects in Gujarat',
    about: [
      'Pre-construction planning decides most of a project’s schedule before the first foundation is poured. We study your site, review drawings and scope, and plan the sequence of civil, steel, piping, mechanical and fire fighting work, so every trade knows what comes next.',
      'For plant owners in Vadodara and across Gujarat, this means fewer stoppages for “one more drawing”, material that arrives when the crew needs it, and testing and approvals planned from day one.',
    ],
    areas: ['vadodara', 'nandesari', 'manjusar'],
  },
  procurement: {
    keyword: 'procurement for industrial construction projects in Gujarat',
    about: [
      'Procurement for industrial projects only works when it follows the construction schedule. As part of our construction contracts, we source material and equipment to your specification and approved vendor list, and plan deliveries around the work sequence.',
      'Because the same team buys and builds, procurement and site work never fall out of step, a common cause of idle crews on Gujarat project sites.',
    ],
    areas: ['vadodara', 'nandesari'],
  },
  'industrial-construction': {
    keyword: 'industrial construction company in Vadodara',
    about: [
      'Jay Ambe Engineering Works is an industrial construction company in Vadodara, building new plants, expansions and new units across Gujarat since 1996. We build plant buildings, process areas, sheds and warehouses, and handle civil, structural steel, piping, mechanical and fire fighting work under one contract.',
      'Our clients include Sicgil India, Gulbrandsen Chemicals, Deepak Nitrite, Huntsman and Nexcel Chemicals. We deploy our own skilled crew, report progress daily, and have a record of zero safety incidents.',
    ],
    areas: ['vadodara', 'nandesari', 'makarpura', 'manjusar', 'padra', 'dahej'],
  },
  'factory-construction': {
    keyword: 'factory construction contractor in Vadodara',
    about: [
      'Planning a new factory in Vadodara or elsewhere in Gujarat? We build complete factory buildings, from site preparation and machine foundations to the steel structure, roofing, flooring, utilities and fire fighting system.',
      'Because one team handles every trade, your factory is ready when your machines arrive. We work in GIDC estates across Vadodara district and beyond, with a daily progress report from start to hand-over.',
    ],
    areas: ['vadodara', 'makarpura', 'manjusar', 'savli', 'halol', 'waghodia'],
  },
  'industrial-shed-construction': {
    keyword: 'industrial shed contractor in Vadodara',
    about: [
      'We are an industrial shed contractor in Vadodara, building steel sheds for factories, workshops, processing units and warehouses across Gujarat. Foundations, fabrication, erection, roofing, cladding and flooring are all done by one team.',
      'When you compare industrial shed quotes, ask about steel tonnage, sheet thickness and what’s included. We explain all of it in our quote, and in our guide to industrial shed cost per sq ft in Gujarat.',
    ],
    areas: ['vadodara', 'makarpura', 'manjusar', 'savli', 'halol', 'waghodia', 'padra'],
  },
  'peb-structures': {
    keyword: 'PEB shed contractor in Vadodara',
    about: [
      'PEB (pre-engineered building) structures are a fast way to build large factories and warehouses. We handle the parts that decide whether a PEB is really fast: foundations and anchor bolts, erection, roofing and cladding, flooring and drainage.',
      'With civil and erection planned by one team in Vadodara, the steel goes straight from delivery to erection. We build PEB structures across Gujarat, especially in the Vadodara district’s GIDC estates.',
    ],
    areas: ['vadodara', 'manjusar', 'savli', 'halol', 'waghodia'],
  },
  'warehouse-construction': {
    keyword: 'warehouse construction company in Gujarat',
    about: [
      'Gujarat’s demand for modern warehousing is growing, and a well-built warehouse is easier to lease, insure and run. We build warehouses and storage sheds with steel or PEB structures, industrial flooring, roofing, roads, fire fighting systems and precast compound walls.',
      'Most of our clients are chemical and pharma companies, so we understand industrial storage needs. Based in Vadodara, we build warehouses across Gujarat.',
    ],
    areas: ['vadodara', 'manjusar', 'savli', 'halol', 'dahej'],
  },
  'civil-works': {
    keyword: 'industrial civil contractor in Vadodara',
    about: [
      'We are an industrial civil contractor in Vadodara, doing excavation, foundations, equipment pedestals, RCC structures, plant roads and drainage for factories and process plants across Gujarat.',
      'Our daily progress reports show measured civil work, such as cubic metres excavated, along with manpower and equipment on site, so you always know exactly where your civil work stands.',
    ],
    areas: ['vadodara', 'nandesari', 'makarpura', 'manjusar', 'padra'],
  },
  'structural-steel': {
    keyword: 'structural steel fabrication and erection in Vadodara',
    about: [
      'We fabricate and erect structural steel for industrial plants in Vadodara and across Gujarat: pipe racks, platforms, equipment support structures, walkways and industrial sheds.',
      'Our structural steel work is planned together with civil and piping, so steel is ready when the piping team needs it. We work in new plants and inside running plants under their permit system.',
    ],
    areas: ['vadodara', 'nandesari', 'padra', 'dahej'],
  },
  'precast-compound-wall': {
    keyword: 'precast compound wall in Vadodara',
    about: [
      'We make precast compound walls at our own precast plant and install them across Vadodara and Gujarat. They suit factories, warehouses, industrial plots and project sites where you need the boundary up quickly.',
      'Because panels are cast in the factory, quality is consistent and there is no masonry or curing on your site. Read our guide comparing precast compound walls with brick walls.',
    ],
    areas: ['vadodara', 'manjusar', 'savli', 'halol', 'waghodia', 'padra'],
  },
  piping: {
    keyword: 'piping contractor in Vadodara',
    about: [
      'We are a process and utility piping contractor in Vadodara, fabricating, erecting and testing plant piping for chemical, pharmaceutical and industrial gas plants across Gujarat.',
      'Our own fitters and welders handle new lines and tie-ins in running plants. Every line is pressure-tested and documented before hand-over, because piping is judged on the day it’s tested.',
    ],
    areas: ['vadodara', 'nandesari', 'padra', 'dahej'],
  },
  mechanical: {
    keyword: 'equipment erection contractor in Gujarat',
    about: [
      'We erect and align tanks, vessels, columns and rotating equipment for process plants in Vadodara and across Gujarat, with lifts planned in advance and safe working in live plants.',
      'Equipment erection is planned together with civil, steel and piping hook-up under one contract, so equipment goes straight from delivery to its foundation.',
    ],
    areas: ['vadodara', 'nandesari', 'dahej'],
  },
  'fire-fighting': {
    keyword: 'fire fighting system contractor in Vadodara',
    about: [
      'We install fire fighting systems for factories, plants and warehouses in Vadodara and across Gujarat: fire hydrant systems, sprinklers, fire water ring mains and pump house piping, all pressure-tested and documented.',
      'We install to your fire consultant’s approved design and plan the system from day one with civil and piping, so the fire NOC inspection doesn’t delay your start-up. Read our guide to fire fighting systems for factories in Gujarat.',
    ],
    areas: ['vadodara', 'makarpura', 'manjusar', 'halol', 'waghodia', 'dahej'],
  },
  'plant-maintenance': {
    keyword: 'plant maintenance contractor in Vadodara',
    about: [
      'We provide mechanical, piping, civil and structural maintenance for running chemical and process plants around Vadodara, working safely under your permit-to-work system.',
      'Some of our clients have worked with us for decades. Sicgil India has been a client since 1996, because a contractor who knows your plant is worth more than a cheaper one who doesn’t.',
    ],
    areas: ['vadodara', 'nandesari', 'padra', 'waghodia'],
  },
  shutdown: {
    keyword: 'shutdown maintenance contractor in Gujarat',
    about: [
      'We carry out planned shutdown and turnaround jobs for chemical and process plants in Vadodara and across Gujarat, with every job planned before day one: scope, material and crew ready before the plant stops.',
      'Our own skilled crew and a daily progress report help you finish inside the shutdown window. Over the years we have done jobs at chemical plants and oil and petrochemical sites.',
    ],
    areas: ['vadodara', 'nandesari', 'padra', 'dahej'],
  },
};
