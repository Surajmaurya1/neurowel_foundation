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
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3
                 bg-green-500 hover:bg-green-600 text-white
                 px-4 py-3 rounded-full shadow-lg transition"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} />
      <span className="font-medium">Chat with us</span>
    </a>
  );
}
