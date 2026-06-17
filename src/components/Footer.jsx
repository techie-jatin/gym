import React from "react";
import { Dumbbell, Search, MapPin, Instagram, Phone, Mail } from "lucide-react";
import { BRAND, SOCIALS, NAV_LINKS } from "../mock";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0c08] border-t border-[#16180f] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-[#b4ec51] text-[#14160f]">
                <Dumbbell size={20} strokeWidth={2.4} />
              </span>
              <span className="font-display font-extrabold text-lg text-white">
                PK<span className="text-[#b4ec51]">FITNESS</span>
              </span>
            </a>
            <p className="text-[#9aa08c] text-sm mt-4 max-w-sm leading-relaxed">
              {BRAND.tagline} Train with purpose, build real strength and become
              part of a community that never settles.
            </p>

            {/* socials */}
            <div className="flex items-center gap-3 mt-6">
              <Social href={SOCIALS.google} label="Google Search">
                <Search size={18} />
              </Social>
              <Social href={SOCIALS.maps} label="Google Maps">
                <MapPin size={18} />
              </Social>
              <Social href={SOCIALS.instagram} label="Instagram">
                <Instagram size={18} />
              </Social>
            </div>
          </div>

          {/* links */}
          <div>
            <h4 className="font-display font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-[#9aa08c] hover:text-[#b4ec51] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-display font-semibold text-white">Get In Touch</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={BRAND.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-sm text-[#9aa08c] hover:text-[#b4ec51] transition-colors">
                  <Phone size={16} className="text-[#b4ec51]" /> {BRAND.phone}
                </a>
              </li>
              <li>
                <a href="mailto:hello@pkfitness.in" className="flex items-center gap-2.5 text-sm text-[#9aa08c] hover:text-[#b4ec51] transition-colors">
                  <Mail size={16} className="text-[#b4ec51]" /> hello@pkfitness.in
                </a>
              </li>
              <li>
                <a href={SOCIALS.maps} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-sm text-[#9aa08c] hover:text-[#b4ec51] transition-colors">
                  <MapPin size={16} className="text-[#b4ec51]" /> Find us on Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#16180f] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6f745f]">© {new Date().getFullYear()} {BRAND.nameFull}. All rights reserved.</p>
          <p className="text-xs text-[#6f745f]">Developed by <a href="https://www.instagram.com/techie.jatin" target="_blank" rel="noreferrer" className="text-[#b4ec51] hover:underline">@techie.jatin</a></p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid place-items-center w-10 h-10 rounded-xl bg-[#0e100a] border border-[#1c1f14] text-[#c8ccbe] hover:bg-[#b4ec51] hover:text-[#14160f] hover:border-[#b4ec51] transition-all duration-300"
    >
      {children}
    </a>
  );
}
