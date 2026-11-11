export interface CategoryItem {
  id: string;
  number: string;
  name: string;
  shortName: string;
  slug: string;
  headline: string;
  description: string;
  primaryImage: string;
  productNames: string[];
  productSlugs: string[];
}

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "imaging-radiology",
    number: "01",
    name: "Imaging & Radiology",
    shortName: "Imaging",
    slug: "imaging-radiology",
    headline: "Diagnostic Imaging Systems",
    description: "Medical imaging and diagnostic equipment for healthcare facilities.",
    primaryImage: "/images/omega/ge-32-slice-revolution-ct.png",
    productNames: [
      "SIGNA Explorer MRI",
      "GE 32 Slice Revolution ACTs Expert Edition CT Scan",
      "IGS 320 Cathlab",
      "Brivo XR115 Mobile X-Ray",
    ],
    productSlugs: [
      "signa-explorer-mri",
      "ge-32-slice-revolution-acts-ct-scan",
      "igs-320-cathlab",
      "brivo-xr115-mobile-x-ray",
    ],
  },
  {
    id: "patient-care",
    number: "02",
    name: "Patient Care & Critical Care",
    shortName: "Critical Care",
    slug: "patient-care",
    headline: "Critical & Intensive Care Equipment",
    description: "Equipment across patient monitoring, respiratory care and neonatal care.",
    primaryImage: "/images/omega/b105-patient-monitor.png",
    productNames: [
      "B105 Monitor",
      "Ventilator Carescape R860",
      "Lullaby Warmer Prime",
      "Lullaby LED Phototherapy",
    ],
    productSlugs: [
      "b105-patient-monitor",
      "ventilator-carescape-r860",
      "lullaby-warmer-prime",
      "lullaby-led-phototherapy",
    ],
  },
  {
    id: "anaesthesia",
    number: "03",
    name: "Anaesthesia",
    shortName: "Anaesthesia",
    slug: "anaesthesia",
    headline: "Anaesthesia Delivery Workstations",
    description: "Equipment for anaesthesia applications in operating environments.",
    primaryImage: "/images/omega/carestation-30.png",
    productNames: [
      "Carestation 30",
      "9100C NXT",
    ],
    productSlugs: [
      "carestation-30",
      "9100c-nxt",
    ],
  },
  {
    id: "operation-theatre",
    number: "04",
    name: "Operation Theatre & Surgical Equipment",
    shortName: "Operation Theatre",
    slug: "operation-theatre",
    headline: "Modern Operating Room Systems",
    description: "Equipment for modern operating rooms and surgical applications.",
    primaryImage: "/images/omega/quasar-elite-hd-led-ot-light.png",
    productNames: [
      "Quasar eLite HD LED OT Light",
      "Astramax HD-LED OT Lights",
      "Hydraulic OT Table",
      "Electro/Manual C-Arm Compatible OT Table",
      "LENS Integrated System",
      "Shaver Dyonics Power II",
    ],
    productSlugs: [
      "quasar-elite-hd-led-ot-light",
      "astramax-hd-led-ot-lights",
      "hydraulic-ot-table",
      "electro-compatible-ot-table",
      "lens-integrated-system",
      "shaver-dyonics-power-ii",
    ],
  },
  {
    id: "sterilization-cssd",
    number: "05",
    name: "Sterilization & CSSD",
    shortName: "Sterilization",
    slug: "sterilization-cssd",
    headline: "Central Sterile Supply Systems",
    description: "Sterilization and cleaning equipment for hospital CSSD requirements.",
    primaryImage: "/images/omega/hphv-rectangular-autoclave.png",
    productNames: [
      "HPHV Cylindrical Autoclave",
      "HPHV Rectangular Autoclave",
      "Table Top ETO",
      "Fully Automatic ETO Sterilizer",
      "Ultrasonic Washer",
      "Flash Sterilizer",
    ],
    productSlugs: [
      "hphv-cylindrical-autoclave",
      "hphv-rectangular-autoclave",
      "table-top-eto",
      "fully-automatic-eto-sterilizer",
      "ultrasonic-washer",
      "flash-sterilizer",
    ],
  },
];
