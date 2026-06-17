import React from "react";
import { Phone } from "lucide-react";
import { BRAND } from "../mock";

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#c7f56b] via-[#b4ec51] to-[#9bd23c] px-6 sm:px-12 py-14 text-center">
          {/* subtle texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_45%)] pointer-events-none" />

          <div className="relative">
            <h2 className="font-display font-extrabold text-[#11160a] text-4xl sm:text-6xl leading-[1.02]">
              Connect. Engage. Transform.
            </h2>
            <p className="text-[#1c2a0a]/80 mt-4 max-w-xl mx-auto text-base sm:text-lg">
              Join PK Fitness Centre today and take the first step toward the
              strongest version of yourself.
            </p>

            <div className="mt-8">
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#11160a] text-[#b4ec51] font-bold hover:bg-[#0a0d05] transition-colors"
              >
                <Phone size={18} strokeWidth={2.5} /> Join Now · {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
