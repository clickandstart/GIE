export const site = {
  name: "GIE Holding",
  shortName: "GIE",
  legalName: "Gursel Import Export",
  founded: 1938,
  description:
    "GIE Holding is an Istanbul-based international group active in commodity trading, food raw materials, construction and logistics, with new ventures in commerce and mobility in development.",
  email: "fuat@fuatgursel.com",
  url: "https://www.gurselimportexport.com",
  address: {
    lines: [
      "Tomtom Mahallesi",
      "İstiklal Caddesi, Beyoğlu No. 187 K2",
      "Istanbul, Türkiye",
    ],
  },
  phones: [
    { label: "Commercial office", value: "+971 55 269 3659", href: "+971552693659" },
    { label: "Türkiye", value: "+90 552 481 9302", href: "+905524819302" },
    { label: "Greece", value: "+30 690 662 5021", href: "+306906625021" },
  ],
  banks: [
    "T.C. Ziraat Bankası",
    "ICBC Bank",
    "BBVA Bank",
    "Half Bank",
    "İş Bankası",
    "Kuwait Bank",
    "QNB Bank",
    "Vakıf Bank",
    "Deutsche Bank",
  ],
};

export const nav = [
  { label: "Group", href: "/group" },
  { label: "Divisions", href: "/divisions" },
  { label: "Markets", href: "/markets" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "GIE Holding · Istanbul · Since 1938",
  title: ["We connect the", "world of commodities."],
  body: "GIE helps companies buy raw materials and goods directly from certified, reliable producers — with a single partner overseeing quality, price, logistics and payment.",
  primaryCta: { label: "Explore our divisions", href: "/divisions" },
  secondaryCta: { label: "Request a quotation", href: "/contact" },
  stats: [
    { value: "1938", label: "Founded in Istanbul" },
    { value: "04", label: "Operating divisions" },
    { value: "05", label: "Continents served" },
    { value: "30+", label: "Commodity lines" },
  ],
  ticker: [
    "Sugar",
    "Crude oil",
    "Wheat",
    "Copper cathodes",
    "Gold",
    "Soybean",
    "Aluminium A7",
    "Ferrous scrap",
    "Coffee",
    "Cement",
    "Timber",
    "Rice",
  ],
};

export const intro = {
  eyebrow: "Who we are",
  title: "A complete partner for essential supply.",
  body: [
    "Trading houses earn their place by knowing exactly who stands behind a cargo. GIE works with certified producers and refineries, negotiates directly and stays accountable from the first enquiry to the final delivery.",
    "Our teams assess quality and price, structure the procedure, and follow the goods through documentation, inspection and transport — so that a complex import becomes a single, predictable operation for our clients.",
  ],
  quote:
    "We help companies that want to buy raw materials and other goods from certified and reliable direct producers.",
  facts: [
    { label: "Headquarters", value: "Istanbul, Türkiye" },
    { label: "Network", value: "EU · USA · Middle East · Africa · Asia · Oceania" },
    { label: "Registrations", value: "International chambers of commerce" },
  ],
};

export type Division = {
  slug: string;
  no: string;
  title: string;
  tagline: string;
  summary: string;
  image: string;
  alt: string;
  points: string[];
  detail: string[];
};

export const divisions: Division[] = [
  {
    slug: "commodities",
    no: "01",
    title: "Commodities & metals",
    tagline: "Sugar, oil, metals and precious materials",
    summary:
      "Partnerships with producers and refineries across Central and South America and Asia, covering food-grade commodities and non-ferrous metals.",
    image: "/images/commodities.webp",
    alt: "Raw materials: sacks of grain, copper coils, oil pumpjack, rice and gold coins",
    points: [
      "Co-producer of sugar in Central and South America",
      "Official distributor for major refineries across Asia",
      "Grade A ferrous scrap, rail R50 and R65, aluminium and copper cathodes",
      "Gold and silver trading",
    ],
    detail: [
      "The first strategic sector for GIE is commodities: raw materials of primary importance for food use — sugar, oil, wheat — as well as ferrous and non-ferrous metals.",
      "In sugar we have stipulated partnership agreements for production throughout Central and South America, becoming to all intents and purposes a co-producer. In oil we have established partnerships with producers of refined and crude oil throughout Asia, becoming the official distributor of some major refineries while supplying large volumes competitively.",
      "Ferrous material is sourced as grade A scrap, used and new rail R50 and R65, down to aluminium of all qualities including copper cathodes. Alongside this, GIE's interest in the gold and silver trade has developed in recent years.",
    ],
  },
  {
    slug: "food",
    no: "02",
    title: "Food raw materials",
    tagline: "Grains, oils, sugar and proteins",
    summary:
      "A dedicated agri desk trading oils, cereals, sugar, coffee, pulses and proteins, with direct relationships in China and Africa.",
    image: "/images/food-world.webp",
    alt: "World map composed of spices, grains and seeds",
    points: [
      "Sunflower, corn, soybean and rapeseed oils",
      "Soft and durum wheat, grains, flours and rice",
      "Sugar ICUMSA 45, ICUMSA 150, VHP 600–1200",
      "Coffee, pulses, bovine and pork cuts",
    ],
    detail: [
      "From 2020 GIE embraced the trade of raw materials of the highest quality: oils, olives, corn, soybeans, rapeseed, sunflower, various seeds and peanuts, coconut; then soft and durum wheat and sugar of all qualities.",
      "Different industries with dedicated employees handle the various product families. In recent years we have intensified our relations with China and Africa.",
      "Years of experience — first as an international tourist company in the early 1950s, then in construction, and finally in the trading of raw materials — support every contract. We are registered with several chambers of commerce, starting with the Chinese one, with the certificates and permits required for the import and export of raw materials and foods.",
    ],
  },
  {
    slug: "construction",
    no: "03",
    title: "Construction",
    tagline: "Real estate, infrastructure, commissioning",
    summary:
      "Project management for residential and public works, from design and procurement to commissioning, with specialised in-house personnel.",
    image: "/images/construction.webp",
    alt: "Large construction site with cranes and residential towers",
    points: [
      "Residential developments and large public works",
      "Transport infrastructure, motorway construction and maintenance",
      "Planning and control from design to implementation",
      "Specialised personnel for construction and commissioning",
    ],
    detail: [
      "The real estate sector has allowed us to carry out important works both in the residential sector and in the construction of large public works, with engineering works for transport infrastructures and the construction and maintenance of motorways.",
      "Our activity requires managing projects ranging from constraints to the supply of raw materials, and planning and control from design to implementation with the support of professionals and lawyers.",
      "We rely on specialised personnel with a specific background in construction and commissioning management, design and planning capability for national and international projects, and a collaborative approach that integrates with the client's organisation — including through qualified partnerships.",
    ],
  },
  {
    slug: "logistics",
    no: "04",
    title: "Logistics",
    tagline: "Sea, land, air and rail",
    summary:
      "More than forty years moving goods worldwide, with consolidated partnerships across every mode of transport.",
    image: "/images/logistics.webp",
    alt: "Container ship, trucks and rail freight at sunset",
    points: [
      "Full-container, break-bulk and bulk shipping",
      "Road transport in Turkey and across borders",
      "Air and rail freight for time-critical cargo",
      "Documentation, insurance and customs coordination",
    ],
    detail: [
      "We have been involved in transporting goods from one place to another in the world for over forty years, by any means of transport. Results achieved nationally and continuous demand have allowed us to consolidate partnerships with companies that operate with the same passion and seriousness.",
      "This is why we are able to provide a service in the land, air, sea and railway sectors, diversified according to need.",
      "Capillarity, quality and reliability of service, timely information and communication make us an ideal partner in a global market: from transport in general with complete assistance to the organisation of national and international markets, with efficient means and personnel able to give maximum support.",
    ],
  },
];

export const markets = [
  {
    id: "precious",
    title: "Precious metals",
    note: "Physical metal, refined and assayed, from established producers.",
    items: ["Gold", "Silver", "Platinum", "Palladium"],
  },
  {
    id: "industrial",
    title: "Industrial metals",
    note: "Ferrous and non-ferrous raw materials for manufacturing.",
    items: [
      "Copper",
      "Copper products",
      "Aluminium A7",
      "Scrap",
      "Bauxite",
      "Cobalt",
      "Nickel",
      "Zinc",
      "Molybdenum",
      "Steel",
      "Tin",
      "Cement",
    ],
  },
  {
    id: "energy",
    title: "Energy",
    note: "Crude, refined products and bio-based feedstock.",
    items: [
      "Crude oil",
      "Petroleum products",
      "Petroleum derivatives",
      "Bio raw materials for biofuels",
    ],
  },
  {
    id: "wood",
    title: "Wood",
    note: "Large volumes of timber from mine and forestry producers.",
    items: ["Different types of Brazil wood", "Industrial timber"],
  },
  {
    id: "food",
    title: "Food raw materials",
    note: "Oils, cereals, sugar, coffee, pulses and proteins.",
    items: [
      "Sunflower",
      "Corn oil",
      "Soybean",
      "Rapeseed",
      "ICUMSA 45",
      "ICUMSA 150",
      "VHP 600–1200",
      "Grains and flours",
      "Rice",
      "Coffee",
      "Various beans",
      "Bovine and pork cuts",
    ],
  },
];

export const foodProducts = [
  {
    name: "Soybean non-GMO",
    text: "Made from grains of conventional soy, with a protein content above 60% and an environmentally friendly profile.",
  },
  {
    name: "Soybean GMO",
    text: "Used in human and animal food, supplied in bulk volumes against contract.",
  },
  {
    name: "Wheat",
    text: "A staple grain milled into flour and used for bread, animal feed and as an ingredient in brewing beer.",
  },
  {
    name: "Wheat flour",
    text: "Produced by grinding wheat; among grains it is unique in its capacity to produce gluten, which gives strength and influences the texture of breads and cakes.",
  },
  {
    name: "Blando wheat",
    text: "As in other cereals commonly used in swine feed, common wheat with low minerals and vitamins.",
  },
  {
    name: "Soybean meal",
    text: "Used in foods and animal feed, mainly as a protein supplement and as a source of metabolised energy.",
  },
  {
    name: "White rice",
    text: "Rice with husk, bran and germ removed: it changes taste, texture and appearance and helps prevent deterioration while prolonging shelf life.",
  },
  {
    name: "Bovine and pork cuts",
    text: "The ox allows 21 types of cuts among those considered first and second quality, generated by the cuts themselves.",
  },
];

export const expertise = [
  {
    title: "The right manufacturer",
    text: "We guarantee the best producer for every need, selected and verified at origin rather than through intermediaries.",
  },
  {
    title: "The best supply at the best price",
    text: "Direct negotiation, transparent cost structures and volumes that keep landed prices competitive.",
  },
  {
    title: "The most suitable procedure",
    text: "Contracts, payment instruments and inspection routines structured around each client's business and risk profile.",
  },
  {
    title: "Sales in other countries",
    text: "We provide solutions for selling into additional markets and through numerous channels.",
  },
  {
    title: "Barriers removed",
    text: "Logistical, linguistic and fiscal obstacles are handled by one team, from documentation to delivery.",
  },
];

export const timeline = [
  {
    year: "1938",
    title: "A family enterprise in Istanbul",
    text: "The Gursel company is founded by the father of engineer Osman Fuat Gursel. Its first activity is the management of several theatres in the centre of Istanbul, hosting operettas, theatre and cinema until the 1960s.",
  },
  {
    year: "1970",
    title: "Engineering and tourism",
    text: "After concluding his engineering degree, Osman Fuat Gursel enters the tourism sector, developing it nationally and internationally, and organises tourist tours throughout Turkish territory.",
  },
  {
    year: "Following years",
    title: "From agency to trading house",
    text: "Travellers from various parts of Europe and the world rely on the representative of the Gursel agency. The agency takes the name GURSEL, then GURSEL IMPORT AND EXPORT, and finally GIE GURSEL IMPORT EXPORT — dealing in commodities nationally and internationally, with commercial contacts all over the world.",
  },
  {
    year: "2020",
    title: "Food raw materials",
    text: "The company embraces the trade of high-quality food raw materials — oils, cereals, sugar, coffee and proteins — intensifying relations with China and Africa.",
  },
  {
    year: "Today",
    title: "Four divisions, one partner",
    text: "Commodities, food raw materials, construction and logistics operate under a single structure, with a registered office in Istanbul and commercial contacts across Europe, the Middle East, Africa and Asia.",
  },
];

export const values = [
  {
    title: "Capacity",
    text: "Volumes, producer relationships and financial structure that allow us to commit to large programmes, not only single cargoes.",
  },
  {
    title: "Ethics",
    text: "Transparent origin, documented quality and agreements that protect both the producer and the buyer.",
  },
  {
    title: "Continuity",
    text: "Long relationships with exporters, importers, distributors, buyers and agents — commercial and human capital built over decades.",
  },
  {
    title: "Foresight",
    text: "Attention to innovation and market trends, with the intention to open offices on different continents to stay close to the flow of business.",
  },
];

export const regions = [
  { name: "European Union", note: "Sourcing, distribution and intercompany trade" },
  { name: "United States", note: "Metals and food raw materials" },
  { name: "Middle East", note: "Commercial office, Gulf and Levant" },
  { name: "South Africa", note: "Mining and agri supply" },
  { name: "China", note: "Chamber registration, food and metals" },
  { name: "Korea", note: "Industrial materials" },
  { name: "Australia", note: "Raw materials" },
];

export type GroupUnit = {
  id: string;
  status: "Operating" | "In development";
  name: string;
  field: string;
  text: string;
  href?: string;
  image?: string;
};

export const groupIntro = {
  eyebrow: "The group",
  title: "One house, several ways to trade.",
  body: [
    "GIE began in 1938 as a family enterprise and grew by following the movement of goods: first people, then raw materials, then infrastructure and transport. Today the group operates four divisions under one structure and is extending into new sectors where the same competence applies — sourcing, financing, moving and selling at scale.",
    "The holding sets the standard: direct relationships with producers, disciplined documentation and a single point of accountability for every client, whichever division carries the work.",
  ],
  note: "Ventures marked “in development” are initiatives under definition. They are not yet operating companies, and nothing on this page constitutes a commercial offer.",
  stats: [
    { value: "1938", label: "Group origins" },
    { value: "04", label: "Operating divisions" },
    { value: "02", label: "Ventures in development" },
    { value: "05", label: "Continents served" },
  ],
};

export const groupUnits: GroupUnit[] = [
  {
    id: "trading",
    status: "Operating",
    name: "Trading house",
    field: "Commodities, metals & food raw materials",
    text: "The historic core of the group: sugar, oils, cereals, ferrous and non-ferrous metals, precious metals and energy products, sourced from producers and refineries and delivered to industrial buyers.",
    href: "/divisions#commodities",
    image: "/images/commodities.webp",
  },
  {
    id: "construction",
    status: "Operating",
    name: "Construction",
    field: "Real estate, infrastructure & commissioning",
    text: "Residential and public works, transport infrastructure and motorway construction and maintenance, with in-house project management from design to commissioning.",
    href: "/divisions#construction",
    image: "/images/construction.webp",
  },
  {
    id: "logistics",
    status: "Operating",
    name: "Logistics platform",
    field: "Sea, land, air & rail",
    text: "More than forty years of moving goods worldwide, with consolidated partnerships across every mode of transport and full assistance on documentation and customs.",
    href: "/divisions#logistics",
    image: "/images/logistics.webp",
  },
  {
    id: "commerce",
    status: "In development",
    name: "Commerce platform",
    field: "Digital marketplace · consumer goods",
    text: "A marketplace model for consumer products, built on the group's sourcing network, warehousing and last-mile partnerships. Scope, markets and launch timing are being defined.",
    image: "/images/materials.webp",
  },
  {
    id: "mobility",
    status: "In development",
    name: "Automotive",
    field: "New brand · manufacturing in Türkiye",
    text: "A new automotive brand linked to a manufacturing project in Türkiye. The brand identity, product range and industrial plan are in preparation and will be announced separately.",
  },
];

export const groupPrinciples = [
  {
    title: "One counterparty",
    text: "Clients contract with the group, not with a chain of intermediaries. Responsibility for quality, timing and payment stays in one place.",
  },
  {
    title: "Shared infrastructure",
    text: "Sourcing, inspection, freight and documentation are handled by the same teams across divisions, so a new venture starts with an operating backbone rather than a blank page.",
  },
  {
    title: "Patience with capital",
    text: "New sectors are entered only where the group can commit volume, people and financing for the long term — the way it has traded since 1938.",
  },
];
