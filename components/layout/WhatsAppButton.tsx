"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "923479714761";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        shadow-[0_10px_30px_rgba(37,211,102,0.45)]
        transition-all
        duration-300
        hover:scale-110
        hover:bg-[#22c35e]
      "
    >
      <FaWhatsapp className="text-white text-[38px]" />
    </a>
  );
}