"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919999999999"; 
  const message = "Hello, I want to chat with you.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
   <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed bottom-5 right-5 z-50
    flex items-center justify-center
    bg-green-500 hover:bg-green-600 text-white
    shadow-lg transition
    w-14 h-14 rounded-full
    md:w-auto md:h-auto md:px-4 md:py-3 md:rounded-full
  "
  aria-label="Chat with us on WhatsApp"
>
  <FaWhatsapp size={26} />

  
  <span className="hidden md:inline ml-2 font-medium">
    Chat with us
  </span>
</a>


  );
}
