import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Dumbbell } from "lucide-react";
import { BRAND, NAV_LINKS } from "../mock";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#1c1f14]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-[#b4ec51] text-[#14160f] shadow-[0_6px_20px_-6px_rgba(180,236,81,0.7)]">
            <Dumbbell size={20} strokeWidth={2.4} />
          </span>
          <span className="font-display font-extrabold tracking-tight text-[1.05rem] text-white">
            PK<span className="text-[#b4ec51]">FITNESS</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[0.92rem] text-[#c8ccbe] hover:text-[#b4ec51] transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-[#b4ec51] after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-lime inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm"
          >
            <Phone size={16} strokeWidth={2.5} />
            Join Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-lg border border-[#25281b] text-white"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#0b0c08] border-b border-[#1c1f14] ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <ul className="px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[#c8ccbe] hover:text-[#b4ec51] border-b border-[#16180f] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-lime flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold"
            >
              <Phone size={16} strokeWidth={2.5} /> Join Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
