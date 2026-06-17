import React from "react";
import { Instagram, Award } from "lucide-react";
import { TRAINERS, SOCIALS } from "../mock";

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-white font-display font-bold text-2xl sm:text-3xl">Your Fitness Goals,</p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-lime-grad mt-1">
            Their Expertise
          </h2>
          <p className="text-[#9aa08c] mt-4">
            Train with certified coaches who live and breathe fitness, ready to
            guide your every rep.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAINERS.map((t, i) => (
            <article
              key={t.name}
              className="reveal pk-card group rounded-3xl overflow-hidden"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14160f] via-transparent to-transparent" />
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#11130c]/85 backdrop-blur-md border border-[#2a2e1d] text-[#b4ec51] text-xs font-semibold">
                  <Award size={13} /> {t.exp}
                </span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-white text-lg">{t.name}</h3>
                  <p className="text-[#9aa08c] text-sm mt-0.5">{t.role}</p>
                </div>
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center w-10 h-10 rounded-xl bg-[#0e100a] border border-[#1c1f14] text-[#c8ccbe] hover:bg-[#b4ec51] hover:text-[#14160f] transition-colors"
                  aria-label={`${t.name} Instagram`}
                >
                  <Instagram size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
