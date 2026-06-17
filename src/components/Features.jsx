import React from "react";
import { Dumbbell, UserCheck, CalendarClock, Sparkles, ArrowUpRight } from "lucide-react";
import { FEATURES } from "../mock";

const ICONS = { Dumbbell, UserCheck, CalendarClock, Sparkles };

export default function Features() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#0b0c08] border-y border-[#16180f]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-white font-display font-bold text-2xl sm:text-3xl">Discover</p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-lime-grad mt-1">
            What Sets Us Apart
          </h2>
          <p className="text-[#9aa08c] mt-4">
            Everything under one roof to help you train harder, recover smarter and
            stay consistent.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            const active = f.highlight;
            return (
              <div
                key={f.title}
                className={`reveal group rounded-3xl p-6 transition-all duration-350 ${
                  active
                    ? "bg-gradient-to-b from-[#1c240e] to-[#11160a] border border-[#b4ec51]/40"
                    : "pk-card"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid place-items-center w-12 h-12 rounded-2xl ${
                      active
                        ? "bg-[#b4ec51] text-[#14160f]"
                        : "bg-[#b4ec51]/12 text-[#b4ec51] border border-[#b4ec51]/25"
                    }`}
                  >
                    <Icon size={22} strokeWidth={2.3} />
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-[#3a3f2c] group-hover:text-[#b4ec51] transition-colors"
                  />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mt-5">{f.title}</h3>
                <p className="text-[#9aa08c] text-sm mt-2 leading-relaxed">{f.desc}</p>
                {active && (
                  <span className="inline-block mt-4 text-xs font-semibold px-3 py-1 rounded-full bg-[#b4ec51] text-[#14160f]">
                    Most Loved
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
