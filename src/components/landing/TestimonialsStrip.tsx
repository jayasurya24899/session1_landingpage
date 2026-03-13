import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import painBg from "@/assets/pain-point-bg.jpg";
import {
  TrendingUp, Rocket, Crown,
  Quote, Star,
} from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    Icon: TrendingUp,
    result: "2X Revenue in 2 Weeks",
    name: "Ranjith K.",
    role: "E-commerce Founder",
    week: "Week 1 — Clarity",
    quote:
      "Week 1 alone restructured how I run my mornings. The clarity session hit different — my revenue doubled before I even hit Day 14.",
  },
  {
    Icon: Rocket,
    result: "Launched His Business by Day 14",
    name: "Arun S.",
    role: "First-time Entrepreneur",
    week: "Week 2 — Structure",
    quote:
      "I sat on my idea for 8 months. The system in Week 2 removed every excuse. I launched before Day 14 and already have paying customers.",
  },
  {
    Icon: Crown,
    result: "Business Tycoon in 1 Month",
    name: "Meera T.",
    role: "Sales Professional",
    week: "Week 3 — Momentum",
    quote:
      "Closed 3 clients in 30 days. The Week 3 identity shift is the only thing that's ever made discipline feel like who I am, not what I force.",
  },
];

const STYLES = `
  @keyframes cardRise {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes badgePop {
    0%   { opacity: 0; transform: scale(0.8); }
    70%  { transform: scale(1.06); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes iconSpin {
    0%,100% { transform: rotate(-6deg) scale(1);   }
    50%     { transform: rotate(6deg)  scale(1.08); }
  }
`;

/* ─── CARD ──────────────────────────────────────────────────────────────────── */
const Card = ({ data, index, visible }) => (
  <div
    className="relative flex flex-col rounded-2xl border border-gold/20 backdrop-blur-sm overflow-hidden
      hover:border-gold/45 hover:shadow-[0_0_36px_rgba(212,175,55,0.12)]
      transition-all duration-300 cursor-default group"
    style={{
      background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
      animation: visible
        ? `cardRise 0.6s ${0.15 + index * 0.16}s cubic-bezier(.22,1,.36,1) both`
        : "none",
      opacity: 0,
    }}
  >
    {/* gold top accent line */}
    <div className="h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

    <div className="p-6 flex flex-col flex-1">

      {/* icon + result badge row */}
      <div className="flex items-start justify-between gap-3 mb-5">

        {/* vector icon circle */}
        <div
          className="w-12 h-12 rounded-full border border-gold/30 bg-gold/[0.08] flex items-center justify-center flex-shrink-0
            group-hover:bg-gold/[0.14] group-hover:border-gold/50 transition-all duration-300"
          style={{
            animation: visible
              ? `iconSpin 3s ${0.4 + index * 0.16}s ease-in-out infinite`
              : "none",
          }}
        >
          <data.Icon size={22} className="text-gold" strokeWidth={1.5} />
        </div>

        {/* week pill */}
        <span
          className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full flex-shrink-0"
          style={{
            background: "rgba(212,175,55,0.10)",
            border: "1px solid rgba(212,175,55,0.25)",
            color: "#D4AF37",
          }}
        >
          {data.week}
        </span>
      </div>

      {/* result headline */}
      <div
        className="mb-4"
        style={{
          animation: visible
            ? `badgePop 0.5s ${0.35 + index * 0.16}s cubic-bezier(.34,1.56,.64,1) both`
            : "none",
          opacity: 0,
        }}
      >
        <h3 className="font-display font-black text-gold text-xl leading-snug">
          {data.result}
        </h3>
      </div>

      {/* quote */}
      <div className="relative flex-1 mb-5">
        <Quote
          size={18}
          className="absolute -top-1 -left-1 text-gold/20"
          strokeWidth={1.5}
        />
        <p className="text-white/55 text-sm leading-relaxed pl-5">
          {data.quote}
        </p>
      </div>

      {/* divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

      {/* author row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          {/* avatar placeholder — initials */}
          <div
            className="w-9 h-9 rounded-full border border-gold/30 bg-gold/[0.08] flex items-center justify-center flex-shrink-0"
          >
            <span className="text-gold font-bold text-sm leading-none">
              {data.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-none">{data.name}</p>
            <p className="text-white/35 text-[11px] mt-0.5">{data.role}</p>
          </div>
        </div>

        {/* stars */}
        <div className="flex gap-0.5 flex-shrink-0">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-gold text-gold" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ─── MAIN ──────────────────────────────────────────────────────────────────── */
const TestimonialsStrip = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 px-5 relative overflow-hidden bg-gradient-to-b from-[#06020d] via-[#0b0415] to-[#1b0835]"
    >
      <style>{STYLES}</style>

      {/* BG */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src={painBg} alt="" className="w-full h-full object-cover opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06020d]/80 via-transparent to-[#1b0835]/80" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.06] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <ScrollReveal>
          <p className="text-center text-[11px] tracking-[0.35em] uppercase text-gold/60 font-semibold mb-3">
            Real Results · Real People
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-center text-white mb-4">
            People Who Showed Up —{" "}
            <span className="text-gold">And What Happened Next</span>
          </h2>
          <p className="text-center text-white/40 text-sm max-w-sm mx-auto mb-12 leading-relaxed">
            Not vague inspiration. Specific outcomes, specific weeks, specific people.
          </p>
        </ScrollReveal>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} data={t} index={i} visible={visible} />
          ))}
        </div>

        {/* BOTTOM TRUST BAR */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          style={{
            animation: visible ? "cardRise 0.5s 0.65s ease both" : "none",
            opacity: 0,
          }}
        >
          {[
            { Icon: TrendingUp, text: "400+ Members" },
            { Icon: Star,       text: "4.9 Avg Rating"  },
            { Icon: Crown,      text: "3 Cohorts Done"  },
          ].map(({ Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
              <Icon size={15} className="text-gold/70" strokeWidth={1.5} />
              <span>{text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsStrip;