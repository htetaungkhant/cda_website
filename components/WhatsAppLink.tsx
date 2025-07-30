import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppLink() {
  return (
    <Link
      href="https://wa.me/447496842781" // +44 7496 842781 => https://api.whatsapp.com/send?phone=447496842781
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-18 md:right-28 z-50 bg-[#60D669] text-white rounded-full shadow-lg hover:bg-green-500 transition-colors cursor-pointer"
    >
      <FaWhatsapp className="w-12 h-12 p-1 md:w-18 md:h-18" />
    </Link>
  );
}
