import React from "react";
import { ArrowRight } from "lucide-react";
import { EXPERIENCE, BRAND } from "../mock";

export default function Experience() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#0b0c08] border-y border-[#16180f]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-white font-display font-bold text-2xl sm:text-3xl">Experience</p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-lime-grad mt-1">
            Fitness Like Never Before
          </h2>
          <p className="text-[#9aa08c] mt-4">
            Choose how you want to train. Both paths are built to keep you
            accountable and moving forward.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {EXPERIENCE.map((e, i) => (
            <div
              key={e.title}
              className="reveal relative rounded-3xl overflow-hidden border border-[#1c1f14] min-h-[340px] group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={e.img}
                alt={e.title}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/55 to-transparent" />

              {/* circular badge */}
              <div className="absolute top-6 right-6 pk-float">
                <div className="grid place-items-center w-24 h-24 rounded-full bg-[#b4ec51] text-[#14160f] text-center shadow-[0_14px_40px_-12px_rgba(180,236,81,0.7)]">
                  <div className="leading-none">
                    <p className="font-display font-extrabold text-2xl">{e.badge.value}</p>
                    <p className="text-[0.6rem] font-semibold mt-0.5">{e.badge.unit}</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-7">
                <h3 className="font-display font-bold text-2xl text-white">{e.title}</h3>
                <p className="text-[#c8ccbe] text-sm mt-2 max-w-md">{e.desc}</p>
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-lime mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm"
                >
                  Get Started <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
