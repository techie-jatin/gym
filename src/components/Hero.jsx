import React from "react";
import { Clock, Flame, PersonStanding, Dumbbell, Phone, ArrowRight } from "lucide-react";
import { BRAND, HERO_STATS, STATS_STRIP } from "../mock";

const ICONS = { Clock, Flame, PersonStanding, Dumbbell };

const HERO_IMG = "https://images.unsplash.com/photo-1610312856669-2cee66b2949c";

// position classes for the four floating badges
const POS = [
  "top-[14%] left-[2%] sm:left-[6%]",
  "top-[26%] right-[2%] sm:right-[5%]",
  "bottom-[30%] left-[1%] sm:left-[4%]",
  "bottom-[20%] right-[2%] sm:right-[7%]",
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-[72px] overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 lime-radial pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(180,236,81,0.08),transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-10 pb-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2a2e1d] bg-[#0e0f0c]/70 text-[#b4ec51] text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b4ec51] animate-pulse" />
            {BRAND.nameFull}
          </span>
          <h1 className="font-display font-extrabold leading-[0.98] tracking-tight text-[2.6rem] sm:text-6xl lg:text-7xl text-white">
            Sculpt Your <span className="text-lime-grad">Body.</span>
            <br />
            Elevate Your <span className="text-lime-grad">Spirit</span>
          </h1>
          <p className="mt-6 text-[#9aa08c] text-base sm:text-lg max-w-2xl mx-auto">
            Premium strength training, expert coaching and a community that pushes
            you further every single day. Your transformation starts here.
          </p>
        </div>

        {/* Image with floating badges */}
        <div className="relative mt-10 max-w-3xl mx-auto">
          <div className="relative rounded-[28px] overflow-hidden border border-[#1c1f14]">
            <img
              src={HERO_IMG}
              alt="Athlete training"
              className="w-full h-[360px] sm:h-[460px] object-cover object-top grayscale contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
          </div>

          {/* floating stat badges */}
          {HERO_STATS.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <div
                key={s.unit}
                className={`absolute ${POS[i]} ${i % 2 ? "pk-float-slow" : "pk-float"} hidden sm:flex`}
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#11130c]/90 backdrop-blur-md border border-[#2a2e1d] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)]">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#b4ec51] text-[#14160f]">
                    <Icon size={20} strokeWidth={2.4} />
                  </span>
                  <div className="leading-tight">
                    <p className="font-display font-bold text-white text-lg">
                      {s.value}
                      <span className="text-[#b4ec51] text-sm ml-1">{s.unit}</span>
                    </p>
                    <p className="text-[0.7rem] text-[#9aa08c]">{s.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-lime inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-base w-full sm:w-auto justify-center"
          >
            <Phone size={18} strokeWidth={2.5} /> Join Now
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base border border-[#2a2e1d] text-white hover:border-[#b4ec51] hover:text-[#b4ec51] transition-colors w-full sm:w-auto justify-center"
          >
            Explore Programs <ArrowRight size={18} />
          </a>
        </div>

        {/* mobile stat chips */}
        <div className="sm:hidden mt-8 grid grid-cols-2 gap-3">
          {HERO_STATS.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <div key={s.unit} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#11130c] border border-[#25281b]">
                <span className="grid place-items-center w-8 h-8 rounded-lg bg-[#b4ec51] text-[#14160f]">
                  <Icon size={16} strokeWidth={2.4} />
                </span>
                <div className="leading-tight">
                  <p className="font-display font-bold text-white text-sm">{s.value} <span className="text-[#b4ec51]">{s.unit}</span></p>
                  <p className="text-[0.62rem] text-[#9aa08c]">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* stats strip / marquee */}
      <div className="relative border-y border-[#16180f] bg-[#0b0c08] mt-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS_STRIP.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-extrabold text-3xl sm:text-4xl text-lime-grad">{s.value}</p>
              <p className="text-xs sm:text-sm text-[#9aa08c] mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
