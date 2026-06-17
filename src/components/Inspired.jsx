import React from "react";
import { Target, HeartPulse, TrendingUp, Users, Check } from "lucide-react";
import { INSPIRE_POINTS } from "../mock";

const ICONS = { Target, HeartPulse, TrendingUp, Users };

const IMG = "https://images.unsplash.com/photo-1628884879718-60dd217d5c9b";

export default function Inspired() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-white font-display font-bold text-2xl sm:text-3xl">Inspired to</p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-lime-grad mt-1">
            Inspire Your Best Self
          </h2>
          <p className="text-[#9aa08c] mt-4">
            We blend science-backed training with relentless motivation so every
            member discovers what they are truly capable of.
          </p>
        </div>

        {/* Card */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch">
          {/* points */}
          <div className="pk-card rounded-3xl p-6 sm:p-8 reveal">
            <div className="grid sm:grid-cols-2 gap-5">
              {INSPIRE_POINTS.map((p) => {
                const Icon = ICONS[p.icon];
                return (
                  <div
                    key={p.title}
                    className="flex gap-3.5 p-4 rounded-2xl bg-[#0e100a] border border-[#1c1f14] hover:border-[#b4ec51]/40 transition-colors"
                  >
                    <span className="shrink-0 grid place-items-center w-11 h-11 rounded-xl bg-[#b4ec51]/12 text-[#b4ec51] border border-[#b4ec51]/25">
                      <Icon size={20} strokeWidth={2.3} />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-white text-[0.98rem]">{p.title}</h3>
                      <p className="text-[#9aa08c] text-sm mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {["No judgement zone", "Personalised nutrition tips", "24/7 member support", "Free trial session"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-[#c8ccbe]">
                  <span className="grid place-items-center w-5 h-5 rounded-full bg-[#b4ec51] text-[#14160f]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* image */}
          <div className="relative rounded-3xl overflow-hidden border border-[#1c1f14] min-h-[340px] reveal">
            <img src={IMG} alt="Training" className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex flex-col gap-1 px-5 py-4 rounded-2xl bg-[#11130c]/85 backdrop-blur-md border border-[#2a2e1d]">
                <p className="font-display font-extrabold text-3xl text-lime-grad">100%</p>
                <p className="text-sm text-[#c8ccbe]">Commitment to your transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
