export interface Brand {
  id: string;
  name: string;
  category: string;
  description: string;
  tagline: string;
}

export const BRANDS: Brand[] = [
  {
    id: "wipro-ge",
    name: "Wipro GE Healthcare",
    category: "Imaging & Diagnostic Systems",
    description: "Advanced imaging technologies including MRI, CT Scanners, Cath Labs and Ultrasound systems.",
    tagline: "Diagnostic Innovation",
  },
  {
    id: "jnj",
    name: "Johnson & Johnson Medical India",
    category: "Surgical & Hospital Solutions",
    description: "Innovative surgical devices and solutions advancing clinical outcomes in operating theatres.",
    tagline: "Surgical Excellence",
  },
  {
    id: "midmark",
    name: "Midmark India",
    category: "Clinical & Hospital Care Equipment",
    description: "Hospital beds, patient examination tables, and clinical workflow equipment for modern wards.",
    tagline: "Clinical Care",
  },
  {
    id: "meril",
    name: "Meril India",
    category: "Medical Devices & Surgical Systems",
    description: "Specialized vascular intervention, orthopaedics, and endosurgical equipment.",
    tagline: "Medical Technology",
  },
  {
    id: "map-industries",
    name: "MAP Industries",
    category: "Sterilization & CSSD Systems",
    description: "High-pressure autoclaves, ETO sterilizers, and central sterile supply department solutions.",
    tagline: "Infection Prevention",
  },
  {
    id: "smith-nephew",
    name: "Smith & Nephew",
    category: "Advanced Surgical & Endoscopy Systems",
    description: "Pioneering arthroscopic, endoscopy, and precision surgical instruments.",
    tagline: "Surgical Precision",
  },
];

