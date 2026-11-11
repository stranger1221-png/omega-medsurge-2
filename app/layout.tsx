import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#081B31",
};

export const metadata: Metadata = {
  title: "Omega Medsurge | Medical Equipment & Healthcare Solutions Hyderabad",
  description:
    "Equipping Healthcare for What's Next. Leading supplier of medical devices, radiology systems, critical care monitoring, anaesthesia workstations, OT equipment and CSSD solutions in Hyderabad, Telangana, India.",
  keywords: [
    "Omega Medsurge",
    "Medical Equipment Hyderabad",
    "Hospital Equipment Supplier Telangana",
    "CT Scan Machines",
    "MRI Systems",
    "Patient Monitors",
    "Operation Theatre Lights",
    "Autoclave Sterilizers",
    "Wipro GE Healthcare Hyderabad",
  ],
  authors: [{ name: "Omega Medsurge" }],
  creator: "Omega Medsurge",
  publisher: "Omega Medsurge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://omegamedsurge.in"),
  openGraph: {
    title: "Omega Medsurge | Medical Equipment & Healthcare Technology Solutions",
    description:
      "Equipping Healthcare for What's Next. Advanced medical technology solutions for hospitals, surgical suites, and diagnostic institutions across India.",
    url: "https://omegamedsurge.in",
    siteName: "Omega Medsurge",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-modern-suite.jpg",
        width: 1200,
        height: 630,
        alt: "Omega Medsurge Medical Equipment Solutions",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-lightBg text-textPrimary font-sans antialiased selection:bg-cyan/30 selection:text-midnight">
        <SmoothScrollProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

