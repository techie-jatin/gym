import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../mock";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section id="stories" className="relative py-20 lg:py-28 bg-[#0b0c08] border-y border-[#16180f]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-white font-display font-bold text-2xl sm:text-3xl">Your Success</p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-lime-grad mt-1">
            Stories, Our Inspiration
          </h2>
          <p className="text-[#9aa08c] mt-4">
            Real members. Real transformations. The proof is in their progress.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="mt-12 hidden md:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TCard key={t.name} t={t} delay={i * 70} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-12 md:hidden">
          <TCard t={TESTIMONIALS[active]} delay={0} />
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="grid place-items-center w-11 h-11 rounded-full border border-[#25281b] text-white hover:border-[#b4ec51] hover:text-[#b4ec51] transition-colors" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <span key={i} className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-[#b4ec51]" : "w-2 bg-[#2a2e1d]"}`} />
              ))}
            </div>
            <button onClick={next} className="grid place-items-center w-11 h-11 rounded-full border border-[#25281b] text-white hover:border-[#b4ec51] hover:text-[#b4ec51] transition-colors" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TCard({ t, delay }) {
  return (
    <article className="reveal pk-card rounded-3xl p-6 flex flex-col" style={{ transitionDelay: `${delay}ms` }}>
      <Quote size={30} className="text-[#b4ec51]" />
      <p className="text-[#d4d8c9] text-[0.95rem] leading-relaxed mt-3 flex-1">"{t.quote}"</p>
      <div className="flex mt-5 gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className="text-[#b4ec51] fill-[#b4ec51]" />
        ))}
      </div>
      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[#1c1f14]">
        <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale border border-[#2a2e1d]" />
        <div>
          <h4 className="font-display font-semibold text-white">{t.name}</h4>
          <p className="text-[#b4ec51] text-xs font-semibold">{t.result}</p>
        </div>
      </div>
    </article>
  );
}
