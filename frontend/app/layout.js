import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import WhatsAppButton from "./components/WhatsAppButton";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Neurowel Foundation",
  description: "NGO Empowering Communities",
  icons: {
    icon: "/faviconlogo.jpeg",
  },
};


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-white text-slate-900`}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
