import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "Neurowel Foundation",
  description: "NGO Empowering Communities",
 icons: {
    icon: "/faviconlogo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
         <WhatsAppButton />
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
