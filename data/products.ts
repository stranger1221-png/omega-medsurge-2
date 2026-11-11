export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  headline: string;
  description: string;
  heroImage: string;
  itemCount: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
  featured: boolean;
  shortDescription: string;
  overview: string;
  keyApplications?: string[];
  department: string;
}

export const CATEGORIES: ProductCategory[] = [
  {
    id: "imaging-radiology",
    slug: "imaging-radiology",
    name: "Imaging & Radiology",
    headline: "Diagnostic Imaging Systems",
    description: "Medical imaging and diagnostic solutions for modern healthcare facilities.",
    heroImage: "/images/omega/ge-32-slice-revolution-ct.png",
    itemCount: 4,
  },
  {
    id: "patient-care",
    slug: "patient-care",
    name: "Patient Care & Critical Care",
    headline: "Critical & Intensive Care Equipment",
    description: "Equipment supporting patient monitoring, respiratory care and neonatal care.",
    heroImage: "/images/omega/b105-patient-monitor.png",
    itemCount: 4,
  },
  {
    id: "anaesthesia",
    slug: "anaesthesia",
    name: "Anaesthesia",
    headline: "Anaesthesia Delivery Workstations",
    description: "Equipment designed for anaesthesia applications in operating environments.",
    heroImage: "/images/omega/carestation-30.png",
    itemCount: 2,
  },
  {
    id: "operation-theatre",
    slug: "operation-theatre",
    name: "Operation Theatre & Surgical Equipment",
    headline: "Surgical Suites & OT Infrastructure",
    description: "Equipment for modern operating rooms and surgical environments.",
    heroImage: "/images/omega/quasar-elite-hd-led-ot-light.png",
    itemCount: 6,
  },
  {
    id: "sterilization-cssd",
    slug: "sterilization-cssd",
    name: "Sterilization & CSSD",
    headline: "Central Sterile Services Department Equipment",
    description: "Sterilization and cleaning equipment for hospital CSSD requirements.",
    heroImage: "/images/omega/hphv-rectangular-autoclave.png",
    itemCount: 6,
  },
];

export const PRODUCTS: Product[] = [
  // Imaging & Radiology
  {
    id: "signa-explorer-mri",
    slug: "signa-explorer-mri",
    name: "SIGNA Explorer MRI",
    category: "Imaging & Radiology",
    categoryId: "imaging-radiology",
    image: "/images/omega/signa-explorer-mri.png",
    featured: true,
    shortDescription:
      "Advanced magnetic resonance imaging system engineered for diagnostic imaging clarity, patient comfort, and reliable clinical workflow.",
    overview:
      "The SIGNA Explorer MRI system delivers clinical capabilities designed to help healthcare institutions expand their imaging services. Built with advanced magnet and gradient technologies, it enables consistent image quality across neurological, musculoskeletal, abdominal, and vascular diagnostic protocols.",
    keyApplications: [
      "Diagnostic neuro and spine imaging",
      "Musculoskeletal assessment",
      "Body and abdominal imaging",
      "Vascular evaluation",
    ],
    department: "Radiology & Diagnostic Imaging",
  },
  {
    id: "ge-32-slice-revolution-acts-ct-scan",
    slug: "ge-32-slice-revolution-acts-ct-scan",
    name: "GE 32 Slice Revolution ACTs Expert Edition CT Scan",
    category: "Imaging & Radiology",
    categoryId: "imaging-radiology",
    image: "/images/omega/ge-32-slice-revolution-ct.png",
    featured: true,
    shortDescription:
      "High-efficiency computed tomography system tailored for routine and emergency clinical diagnostic scans with optimized dose management.",
    overview:
      "The Revolution ACTs Expert Edition 32-slice CT scanner is designed to provide healthcare centers with dependable scanning performance. It combines high image clarity with streamlined operator workflows and intelligent dose efficiency for routine and specialized cross-sectional imaging.",
    keyApplications: [
      "Routine head, chest, and abdominal CT scans",
      "Trauma and emergency diagnostics",
      "Oncological evaluation",
      "Vascular CT angiographies",
    ],
    department: "Radiology & Diagnostic Imaging",
  },
  {
    id: "igs-320-cathlab",
    slug: "igs-320-cathlab",
    name: "IGS 320 Cathlab",
    category: "Imaging & Radiology",
    categoryId: "imaging-radiology",
    image: "/images/omega/igs-320-cathlab.png",
    featured: true,
    shortDescription:
      "Interventional cardiovascular and fluoroscopy imaging system built for precise catheterization procedures and angiography.",
    overview:
      "The Innova IGS 320 cathlab system provides high-resolution fluoroscopy and angiographic imaging to support interventional cardiologists and radiologists in complex vascular procedures, coronary interventions, and diagnostic fluoroscopy.",
    keyApplications: [
      "Coronary angiography & angioplasty",
      "Peripheral vascular interventions",
      "Pacemaker and cardiac device implantations",
      "Fluoroscopic diagnostic procedures",
    ],
    department: "Cardiology & Interventional Suite",
  },
  {
    id: "brivo-xr115-mobile-x-ray",
    slug: "brivo-xr115-mobile-x-ray",
    name: "Brivo XR115 Mobile X-Ray",
    category: "Imaging & Radiology",
    categoryId: "imaging-radiology",
    image: "/images/omega/brivo-xr115-mobile-xray.png",
    featured: false,
    shortDescription:
      "Maneuverable point-of-care mobile radiography unit designed for bed-side imaging across wards, ICUs, and emergency bays.",
    overview:
      "The Brivo XR115 is a compact mobile X-ray unit designed for maneuverability in hospital corridors and tight patient rooms. It allows radiographers to quickly capture diagnostic exposures at the patient's bedside without transferring critical patients.",
    keyApplications: [
      "Bedside chest and skeletal radiography",
      "Intensive Care Unit (ICU) imaging",
      "Emergency department trauma triage",
      "Post-operative recovery monitoring",
    ],
    department: "Mobile Radiography & Emergency Care",
  },

  // Patient Care & Critical Care
  {
    id: "b105-patient-monitor",
    slug: "b105-patient-monitor",
    name: "B105 Monitor",
    category: "Patient Care & Critical Care",
    categoryId: "patient-care",
    image: "/images/omega/b105-patient-monitor.png",
    featured: true,
    shortDescription:
      "Rugged and dependable multi-parameter patient monitor offering continuous clinical monitoring across sub-acute and intensive care units.",
    overview:
      "The B105 Monitor provides healthcare teams with clear multi-parameter physiological data, including ECG, SpO2, NIBP, temperature, and respiration. Designed for intuitive touch operation and continuous clinical monitoring across diverse hospital departments.",
    keyApplications: [
      "Intensive Care and High Dependency Units (ICU/HDU)",
      "General hospital wards and post-anesthesia care (PACU)",
      "Emergency and triage monitoring",
      "Transport and bedside vitals surveillance",
    ],
    department: "Critical Care & Patient Monitoring",
  },
  {
    id: "ventilator-carescape-r860",
    slug: "ventilator-carescape-r860",
    name: "Ventilator Carescape R860",
    category: "Patient Care & Critical Care",
    categoryId: "patient-care",
    image: "/images/omega/ventilator-carescape-r860.png",
    featured: false,
    shortDescription:
      "Advanced critical care ventilator offering comprehensive respiratory mechanics, protective lung ventilation, and personalized therapy.",
    overview:
      "The CARESCAPE R860 is an intuitive critical care ventilator designed to assist clinicians in protecting patient lung function. Featuring advanced lung assessment tools, comprehensive ventilation modes, and a user-friendly touch interface for neonatal to adult patients.",
    keyApplications: [
      "Invasive and non-invasive mechanical ventilation",
      "Adult, pediatric, and neonatal respiratory support",
      "Protective lung ventilation protocols",
      "Weaning and respiratory mechanics assessment",
    ],
    department: "Intensive Care Unit (ICU)",
  },
  {
    id: "lullaby-warmer-prime",
    slug: "lullaby-warmer-prime",
    name: "Lullaby Warmer Prime",
    category: "Patient Care & Critical Care",
    categoryId: "patient-care",
    image: "/images/omega/lullaby-warmer-prime.png",
    featured: true,
    shortDescription:
      "Precision radiant warmer engineered to provide uniform thermal regulation and access for newborn care in labor and neonatal suites.",
    overview:
      "The Lullaby Warmer Prime delivers uniform heat distribution across the mattress to help maintain newborn body temperature during critical transition periods. Its ergonomic design allows clear clinical access for pediatricians and nursing staff.",
    keyApplications: [
      "Labor and delivery room resuscitation",
      "Neonatal Intensive Care Units (NICU)",
      "Special Care Nursery (SCN)",
      "Thermoregulation during infant procedures",
    ],
    department: "Neonatal & Pediatric Care",
  },
  {
    id: "lullaby-led-phototherapy",
    slug: "lullaby-led-phototherapy",
    name: "Lullaby LED Phototherapy",
    category: "Patient Care & Critical Care",
    categoryId: "patient-care",
    image: "/images/omega/lullaby-led-phototherapy.png",
    featured: false,
    shortDescription:
      "High-performance LED phototherapy system delivering optimal narrow-band blue light irradiance for effective infant hyperbilirubinemia management.",
    overview:
      "The Lullaby LED Phototherapy system utilizes targeted blue LED technology to effectively treat neonatal jaundice. Designed with uniform light coverage, low heat output, and long-lasting optical components suitable for bassinets and open warmers.",
    keyApplications: [
      "Neonatal jaundice treatment",
      "Maternity wards and newborn nurseries",
      "NICU phototherapy regimens",
    ],
    department: "Neonatal & Maternity Care",
  },

  // Anaesthesia
  {
    id: "carestation-30",
    slug: "carestation-30",
    name: "Carestation 30",
    category: "Anaesthesia",
    categoryId: "anaesthesia",
    image: "/images/omega/carestation-30.png",
    featured: true,
    shortDescription:
      "Compact and ergonomic anaesthesia delivery workstation designed for operating rooms requiring dependable gas control and ventilation.",
    overview:
      "The Carestation 30 combines advanced ventilation capabilities, precise gas delivery, and a compact spatial footprint. Built to assist anaesthesiologists throughout surgical cases with intuitive interface controls and reliable safety features.",
    keyApplications: [
      "General surgical anaesthesia administration",
      "Day-care and ambulatory surgery suites",
      "Specialty surgical operating rooms",
      "Closed-circuit and low-flow anaesthesia",
    ],
    department: "Operation Theatre & Anaesthesiology",
  },
  {
    id: "9100c-nxt",
    slug: "9100c-nxt",
    name: "9100C NXT",
    category: "Anaesthesia",
    categoryId: "anaesthesia",
    image: "/images/omega/9100c-nxt.png",
    featured: false,
    shortDescription:
      "Versatile anaesthesia system offering precise ventilation modes and robust gas delivery for diverse patient profiles.",
    overview:
      "The 9100C NXT anaesthesia system delivers accurate ventilation with trusted reliability for a wide spectrum of surgical patients from neonates to adults. Features responsive clinical controls and integrated breathing circuit technology.",
    keyApplications: [
      "Multi-specialty surgical anaesthesia",
      "Hospital operating theatres",
      "Elective and emergency surgical procedures",
    ],
    department: "Operation Theatre & Anaesthesiology",
  },

  // Operation Theatre & Surgical Equipment
  {
    id: "quasar-elite-hd-led-ot-light",
    slug: "quasar-elite-hd-led-ot-light",
    name: "Quasar eLite HD LED OT Light",
    category: "Operation Theatre & Surgical Equipment",
    categoryId: "operation-theatre",
    image: "/images/omega/quasar-elite-hd-led-ot-light.png",
    featured: true,
    shortDescription:
      "High-definition LED surgical lighting system providing shadowless illumination, true colour rendering, and cool light beams.",
    overview:
      "The Quasar eLite HD LED OT Light offers surgical teams high-fidelity illumination with balanced color temperature and depth penetration. Engineered for surgical suites requiring precise visual distinction without thermal emission on tissue.",
    keyApplications: [
      "Major surgical procedures and open surgeries",
      "Minimally invasive and laparoscopic surgery suites",
      "Cardiac, neuro, and orthopedic surgical theatres",
    ],
    department: "Surgical Suite & Operating Rooms",
  },
  {
    id: "astramax-hd-led-ot-lights",
    slug: "astramax-hd-led-ot-lights",
    name: "Astramax HD-LED OT Lights",
    category: "Operation Theatre & Surgical Equipment",
    categoryId: "operation-theatre",
    image: "/images/omega/astramax-hd-led-ot-lights.png",
    featured: false,
    shortDescription:
      "Premium surgical luminaire delivering deep cavity illumination, ultra-high color rendition, and flexible positioning.",
    overview:
      "Astramax HD-LED OT Lights are engineered to deliver clear, uniform lighting fields into deep surgical cavities. Featuring balanced daylight rendering to help surgeons accurately view anatomical structures throughout extensive procedures.",
    keyApplications: [
      "Deep-cavity surgical illumination",
      "General and specialty operating rooms",
      "Surgical teaching and camera-integrated theatres",
    ],
    department: "Surgical Suite & Operating Rooms",
  },
  {
    id: "hydraulic-ot-table",
    slug: "hydraulic-ot-table",
    name: "Hydraulic OT Table",
    category: "Operation Theatre & Surgical Equipment",
    categoryId: "operation-theatre",
    image: "/images/omega/hydraulic-ot-table.png",
    featured: false,
    shortDescription:
      "Sturdy multi-procedure hydraulic surgical operating table designed for smooth patient positioning and high weight stability.",
    overview:
      "This hydraulic operation theatre table provides reliable mechanical movements for diverse surgical disciplines. Constructed with medical-grade stainless steel surfaces, ergonomic patient support pads, and secure locking systems.",
    keyApplications: [
      "General surgery positioning",
      "Gynecology, urology, and ENT surgeries",
      "Emergency trauma operating rooms",
    ],
    department: "Operation Theatre & Surgery",
  },
  {
    id: "electro-compatible-ot-table",
    slug: "electro-compatible-ot-table",
    name: "Electro/Manual C-Arm Compatible OT Table",
    category: "Operation Theatre & Surgical Equipment",
    categoryId: "operation-theatre",
    image: "/images/omega/electro-compatible-ot-table.png",
    featured: false,
    shortDescription:
      "Radiolucent operating table designed for unobstructed C-arm fluoroscopy access during orthopedic and cardiovascular surgeries.",
    overview:
      "Engineered specifically for interventional fluoroscopy and intra-operative radiography, this electro/manual surgical table features a radiolucent tabletop that allows smooth C-arm positioning without image obstruction.",
    keyApplications: [
      "Orthopedic trauma and spine surgery",
      "Intra-operative C-Arm fluoroscopic guidance",
      "Cardiovascular and vascular procedures",
    ],
    department: "Operation Theatre & Fluoroscopy",
  },
  {
    id: "lens-integrated-system",
    slug: "lens-integrated-system",
    name: "LENS Integrated System",
    category: "Operation Theatre & Surgical Equipment",
    categoryId: "operation-theatre",
    image: "/images/omega/lens-integrated-system.svg",
    featured: false,
    shortDescription:
      "Integrated surgical visualization and high-definition endoscopic camera platform designed for modern minimally invasive and arthroscopic operating suites.",
    overview:
      "The LENS Integrated System combines high-definition camera control, LED light source, and image management into an all-in-one surgical visualization solution, facilitating efficient procedural workflows in endoscopic and arthroscopic operating theatres.",
    keyApplications: [
      "Minimally invasive and arthroscopic procedures",
      "Endoscopic surgical visualization",
      "High-definition camera management",
    ],
    department: "Endoscopy & Surgical Visualization",
  },
  {
    id: "shaver-dyonics-power-ii",
    slug: "shaver-dyonics-power-ii",
    name: "Shaver Dyonics Power II",
    category: "Operation Theatre & Surgical Equipment",
    categoryId: "operation-theatre",
    image: "/images/omega/shaver-dyonics-power-ii.svg",
    featured: false,
    shortDescription:
      "Precision surgical resection and soft-tissue debridement shaver system engineered for arthroscopy and orthopedic operating room procedures.",
    overview:
      "The DYONICS POWER II control system provides surgeons with high-torque motor performance, dual-pedal responsiveness, and variable blade speeds for precise soft tissue resection and bone debridement during orthopedic procedures.",
    keyApplications: [
      "Arthroscopic joint debridement",
      "Orthopedic soft tissue resection",
      "Specialty reconstructive surgeries",
    ],
    department: "Orthopedic & Arthroscopic Surgery",
  },

  // Sterilization & CSSD
  {
    id: "hphv-cylindrical-autoclave",
    slug: "hphv-cylindrical-autoclave",
    name: "HPHV Cylindrical Autoclave",
    category: "Sterilization & CSSD",
    categoryId: "sterilization-cssd",
    image: "/images/omega/hphv-cylindrical-autoclave.png",
    featured: false,
    shortDescription:
      "High Pressure High Vacuum cylindrical steam sterilizer engineered for dependable sterilization of hospital surgical instruments.",
    overview:
      "The HPHV Cylindrical Autoclave is built for hospital CSSD departments requiring verified steam sterilization for porous loads, wrapped instrument trays, and surgical textiles. Equipped with cycle monitoring and vacuum pulsating systems.",
    keyApplications: [
      "Surgical instrument sterilization",
      "Hospital CSSD operations",
      "Laboratory and clinical steam sterilization",
    ],
    department: "Central Sterile Services Department (CSSD)",
  },
  {
    id: "hphv-rectangular-autoclave",
    slug: "hphv-rectangular-autoclave",
    name: "HPHV Rectangular Autoclave",
    category: "Sterilization & CSSD",
    categoryId: "sterilization-cssd",
    image: "/images/omega/hphv-rectangular-autoclave.png",
    featured: true,
    shortDescription:
      "Large-capacity High Pressure High Vacuum rectangular horizontal steam sterilizer for high-volume hospital reprocessing.",
    overview:
      "The HPHV Rectangular Autoclave provides high-capacity loading for standard modular sterilization baskets and containers. Built with heavy-duty pressure vessel engineering, automated cycle validation, and door interlocks for hospital CSSDs.",
    keyApplications: [
      "High-volume hospital CSSD workflows",
      "Surgical tray and textile pack sterilization",
      "Continuous sterile processing cycles",
    ],
    department: "Central Sterile Services Department (CSSD)",
  },
  {
    id: "table-top-eto",
    slug: "table-top-eto",
    name: "Table Top ETO",
    category: "Sterilization & CSSD",
    categoryId: "sterilization-cssd",
    image: "/images/omega/table-top-eto.png",
    featured: false,
    shortDescription:
      "Compact ethylene oxide sterilizer for low-temperature sterilization of heat-sensitive and moisture-sensitive medical devices.",
    overview:
      "The Table Top ETO sterilizer offers safe, controlled low-temperature sterilization for delicate surgical instruments, optics, catheter systems, and heat-sensitive implants that cannot undergo conventional steam autoclaving.",
    keyApplications: [
      "Low-temperature sterilization for delicate scopes",
      "Plastic, rubber, and catheter sterilization",
      "Day-surgery centers and specialty clinics",
    ],
    department: "Central Sterile Services Department (CSSD)",
  },
  {
    id: "fully-automatic-eto-sterilizer",
    slug: "fully-automatic-eto-sterilizer",
    name: "Fully Automatic ETO Sterilizer",
    category: "Sterilization & CSSD",
    categoryId: "sterilization-cssd",
    image: "/images/omega/fully-automatic-eto-sterilizer.png",
    featured: false,
    shortDescription:
      "Automated ethylene oxide gas sterilizer with integrated aeration cycle for comprehensive terminal sterilization.",
    overview:
      "Designed for healthcare institutions processing high volumes of moisture-sensitive and heat-vulnerable medical equipment. Provides microprocessor-controlled gas exposure, pressure regulation, and integrated aeration for operator safety.",
    keyApplications: [
      "Institutional low-temperature sterilization",
      "Endoscopic and laparoscopic instrument sets",
      "Implantable medical device reprocessing",
    ],
    department: "Central Sterile Services Department (CSSD)",
  },
  {
    id: "ultrasonic-washer",
    slug: "ultrasonic-washer",
    name: "Ultrasonic Washer",
    category: "Sterilization & CSSD",
    categoryId: "sterilization-cssd",
    image: "/images/omega/ultrasonic-washer.png",
    featured: false,
    shortDescription:
      "High-frequency cavitation ultrasonic cleaning unit for thorough pre-cleaning of cannulated and intricate surgical instruments.",
    overview:
      "The Ultrasonic Washer uses acoustic cavitation to remove organic residues and bio-burden from surgical instruments, micro-forceps, and lumen devices prior to autoclave sterilization, ensuring CSSD compliance.",
    keyApplications: [
      "Decontamination and pre-sterilization wash",
      "Cannulated instrument and lumen cleaning",
      "Micro-surgical tool cleaning",
    ],
    department: "Central Sterile Services Department (CSSD)",
  },
  {
    id: "flash-sterilizer",
    slug: "flash-sterilizer",
    name: "Flash Sterilizer",
    category: "Sterilization & CSSD",
    categoryId: "sterilization-cssd",
    image: "/images/omega/flash-sterilizer.png",
    featured: false,
    shortDescription:
      "Rapid-cycle steam sterilizer designed for urgent turnaround of surgical instruments in emergency operating suite situations.",
    overview:
      "The Flash Sterilizer delivers rapid sterilization cycles for unwrapped surgical items immediately needed in operating suites, maintaining strict temperature and pressure safety parameters.",
    keyApplications: [
      "Point-of-use urgent surgical instrument sterilization",
      "Operating room emergency cycle turnaround",
      "Specialty dental and ophthalmic procedures",
    ],
    department: "Central Sterile Services Department (CSSD)",
  },
];

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter((p) => p.categoryId === categoryId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return PRODUCTS.slice(0, limit);
  return PRODUCTS.filter(
    (p) => p.categoryId === current.categoryId && p.slug !== currentSlug
  ).slice(0, limit);
}

