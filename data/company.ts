export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  location: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    full: string;
  };
  phones: string[];
  displayPhones: string[];
  email: string;
  whatsapp: {
    number: string;
    display: string;
    defaultMessage: string;
  };
  operatingHours: string;
  principles: {
    title: string;
    description: string;
  }[];
  brands: {
    name: string;
    category: string;
  }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "Omega Medsurge",
  legalName: "Omega Medsurge",
  tagline: "Medical Equipment & Healthcare Solutions",
  heroHeadline: "Advancing Healthcare Through Medical Technology.",
  heroSupportingText:
    "Delivering access to dependable medical equipment and healthcare solutions for hospitals, healthcare professionals and medical institutions.",
  location: "Hyderabad, Telangana, India",
  address: {
    line1: "Shop No. 1 & 2, Sri Balaji Enclave",
    line2: "D. No. 5-5-212/5/2 & 3",
    area: "Patel Nagar, Nampally",
    city: "Hyderabad",
    pincode: "500001",
    state: "Telangana",
    country: "India",
    full: "Shop No. 1 & 2, Sri Balaji Enclave, D. No. 5-5-212/5/2 & 3, Patel Nagar, Nampally, Hyderabad - 500001, Telangana, India.",
  },
  phones: ["+919346202011", "+919848466685"],
  displayPhones: ["+91 9346202011", "+91 9848466685"],
  email: "omegamedsurge@gmail.com",
  whatsapp: {
    number: "919346202011",
    display: "+91 9346202011",
    defaultMessage:
      "Hello Omega Medsurge, I would like to enquire about your medical equipment solutions.",
  },
  operatingHours: "Monday – Saturday: 9:30 AM – 6:30 PM",
  principles: [
    {
      title: "Customer-Focused Approach",
      description:
        "Dedicated to understanding the operational requirements of hospitals, diagnostic centers, and healthcare providers.",
    },
    {
      title: "Long-Term Relationships",
      description:
        "Building lasting partnerships with healthcare institutions through dependable equipment supply and responsive support.",
    },
    {
      title: "Commitment to Healthcare Innovation",
      description:
        "Providing access to proven medical technologies that support healthcare professionals in patient diagnosis and clinical care.",
    },
    {
      title: "Scientific Integrity & Ethical Practices",
      description:
        "Conducting all business interactions with transparency, ethical standards, and a focus on genuine healthcare value.",
    },
  ],
  brands: [
    { name: "Wipro GE Healthcare", category: "Imaging & Diagnostic Systems" },
    { name: "Johnson & Johnson Medical India", category: "Surgical & Hospital Solutions" },
    { name: "Midmark India", category: "Clinical & Hospital Care Equipment" },
    { name: "Meril India", category: "Medical Devices & Surgical Systems" },
    { name: "MAP Industries", category: "Sterilization & CSSD Systems" },
    { name: "Smith & Nephew", category: "Advanced Surgical & Endoscopy Systems" },
  ],
};

