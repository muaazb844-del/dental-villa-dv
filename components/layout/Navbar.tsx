"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#111827]/55 backdrop-blur-xl">
    <div className="mx-auto flex max-w-[1350px] items-center justify-between px-10 py-3">

        <div className="flex items-center">
         <img
  src="/logo.png"
  alt="Dental Villa"
  className="h-12 w-auto object-contain"
 />
        </div>

        {/* Desktop Menu */}

       {/* Desktop Menu */}

<nav className="hidden items-center gap-10 lg:flex">
  <a
    href="#"
    className="font-medium text-white transition duration-300 hover:text-blue-400"
  >
    Home
  </a>

  <a
    href="#services"
    className="font-medium text-white transition duration-300 hover:text-blue-400"
  >
    Services
  </a>

  <a
    href="#doctor"
    className="font-medium text-white transition duration-300 hover:text-blue-400"
  >
    Doctor
  </a>

  <a
    href="#reviews"
    className="font-medium text-white transition duration-300 hover:text-blue-400"
  >
    Reviews
  </a>

  <a
    href="#contact"
    className="font-medium text-white transition duration-300 hover:text-blue-400"
  >
    Contact
  </a>
</nav>

       {/* Desktop Buttons */}

<div className="hidden items-center gap-4 lg:flex">

  <a
    href="tel:+923465714761"
    className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black"
  >
    <Phone size={18} />
    Call Now
  </a>

  <a
    href="#contact"
    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-700"
  >
    Book Appointment
  </a>

</div>

{/* Mobile Menu Button */}

<button
  className="text-white transition hover:text-blue-400 lg:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X size={30} /> : <Menu size={30} />}
</button>

</div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t bg-white shadow-xl lg:hidden">

          <nav className="flex flex-col gap-5 p-6">

            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="#doctor" onClick={() => setMenuOpen(false)}>
              Doctor
            </a>

            <a href="#reviews" onClick={() => setMenuOpen(false)}>
              Reviews
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a
              href="tel:+923465714761"
              className="rounded-xl border border-[#0A2540] py-3 text-center"
            >
              📞 Call Now
            </a>

            <a
  href="#contact"
  onClick={() => setMenuOpen(false)}
  className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
>
  Book Appointment
</a>

          </nav>

        </div>
      )}

    </header>
  );
}