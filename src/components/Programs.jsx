import React from "react";
import { ArrowRight, Activity, Timer } from "lucide-react";
import { PROGRAMS, BRAND } from "../mock";

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-white font-display font-bold text-2xl sm:text-3xl">Train Smarter</p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-lime-grad mt-1">
            Unleash Your Potential
          </h2>
          <p className="text-[#9aa08c] mt-4">
            Pick a program built for your goal. Every plan is structured, tracked
            and coached for real, lasting results.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p, i) => (
            <article
              key={p.title}
              className="reveal pk-card group rounded-3xl overflow-hidden"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              {/* image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale contrast-[1.05] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14160f] via-[#14160f]/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#b4ec51] text-[#14160f] text-xs font-bold">
                  {p.tag}
                </span>
              </div>

              {/* body */}
              <div className="p-5">
                <h3 className="font-display font-bold text-white text-xl">{p.title}</h3>

                {/* stat pills */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#0e100a] border border-[#1c1f14]">
                    <Activity size={18} className="text-[#b4ec51]" />
                    <div className="leading-tight">
                      <p className="font-display font-bold text-white text-sm">{p.stats.left.v}</p>
                      <p className="text-[0.65rem] text-[#9aa08c] uppercase tracking-wide">{p.stats.left.u}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#0e100a] border border-[#1c1f14]">
                    <Timer size={18} className="text-[#b4ec51]" />
                    <div className="leading-tight">
                      <p className="font-display font-bold text-white text-sm">{p.stats.right.v}</p>
                      <p className="text-[0.65rem] text-[#9aa08c] uppercase tracking-wide">{p.stats.right.u}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#b4ec51] hover:gap-3 transition-all"
                >
                  Start this program <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
