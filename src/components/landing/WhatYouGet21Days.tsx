import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import painBg from "@/assets/pain-point-bg.jpg";
import { Compass, Brain, Flame, Crown, ChevronRight } from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────────────────────── */
const WEEKS = [
  {
    week: "Week 1", days: "Day 1–7", theme: "Clarity",
    color: "#D4AF37", Icon: Compass, side: "left",
    points: [
      "Identify your core life purpose",
      "Break your biggest mental block",
      "Build your first daily power routine",
    ],
  },
  {
    week: "Week 2", days: "Day 8–14", theme: "Structure",
    color: "#a78bfa", Icon: Brain, side: "right",
    points: [
      "Design your personal system",
      "Eliminate distractions for good",
      "Take aligned action every single day",
    ],
  },
  {
    week: "Week 3", days: "Day 15–21", theme: "Momentum",
    color: "#f97316", Icon: Flame, side: "left",
    points: [
      "Lock in your identity shift",
      "Build habits that outlast motivation",
      "Enter the 1% — and stay there",
    ],
  },
];

/* ─── KEYFRAMES ─────────────────────────────────────────────────────────────── */
const STYLES = `
  @keyframes spineDraw {
    0%   { stroke-dashoffset: 1200; opacity:0; }
    10%  { opacity:1; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes arrowHeadFall {
    0%,50% { opacity:0; transform:translateY(-10px); }
    100%   { opacity:1; transform:translateY(0); }
  }
  @keyframes dotPop {
    0%   { transform:translate(-50%,-50%) scale(0); opacity:0; }
    70%  { transform:translate(-50%,-50%) scale(1.4); }
    100% { transform:translate(-50%,-50%) scale(1); opacity:1; }
  }
  @keyframes lineGrow {
    from { transform: scaleX(0); opacity:0; }
    to   { transform: scaleX(1); opacity:1; }
  }
  @keyframes slideL {
    from { opacity:0; transform:translateX(-28px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes slideR {
    from { opacity:0; transform:translateX(28px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes slideUp {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes targetRing {
    0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0), 0 0 0 0 rgba(212,175,55,0); }
    50%     { box-shadow: 0 0 0 14px rgba(212,175,55,0.10), 0 0 0 28px rgba(212,175,55,0.04); }
  }
`;

/* ─── CARD ──────────────────────────────────────────────────────────────────── */
const Card = ({ data, delay, lit, mobile = false }) => {
  const isLeft = data.side === "left";
  const anim   = mobile ? "slideUp"
               : isLeft  ? "slideL" : "slideR";
  return (
    <div
      className={`
        p-5 rounded-2xl border backdrop-blur-sm
        hover:scale-[1.02] transition-transform duration-300 cursor-default group
        ${mobile ? "w-full text-left" : isLeft ? "text-right" : "text-left"}
      `}
      style={{
        background: `linear-gradient(135deg,${data.color}09,${data.color}03)`,
        borderColor: `${data.color}28`,
        boxShadow: `0 4px 22px ${data.color}0d`,
        animation: lit ? `${anim} 0.55s ${delay}s cubic-bezier(.22,1,.36,1) both` : "none",
        opacity: 0,
      }}
    >
      {/* pill */}
      <span
        className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-3"
        style={{ background:`${data.color}18`, color:data.color, border:`1px solid ${data.color}28` }}
      >
        {data.days}
      </span>

      {/* theme */}
      <h3 className="font-display font-black text-2xl md:text-3xl mb-0.5" style={{ color:data.color }}>
        {data.theme}
      </h3>
      <p className="text-white/35 text-[10px] font-bold tracking-widest uppercase mb-4">{data.week}</p>

      {/* points */}
      <div className={`flex flex-col gap-1.5 ${mobile || !isLeft ? "items-start" : "items-end"}`}>
        {data.points.map((pt, i) => (
          <div key={i} className={`flex items-center gap-1.5 ${mobile || !isLeft ? "flex-row" : "flex-row-reverse"}`}>
            <ChevronRight size={11} style={{ color:data.color, opacity:0.65, flexShrink:0 }} />
            <span className="text-white/65 text-sm leading-snug">{pt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── SPINE (desktop only) ──────────────────────────────────────────────────── */
const SpineDot = ({ color, delay, lit, left }) => (
  <>
    {/* horizontal connector */}
    <div
      className="absolute h-[1.5px]"
      style={{
        width: 44,
        background: `linear-gradient(${left ? "to right" : "to left"}, transparent, ${color}80)`,
        top: "50%", left: "50%",
        transformOrigin: left ? "left center" : "right center",
        transform: left ? "translateY(-50%)" : "translateX(-100%) translateY(-50%)",
        animation: lit ? `lineGrow 0.4s ${delay + 0.15}s ease both` : "none",
        opacity: 0,
      }}
    />
    {/* dot */}
    <div
      className="absolute rounded-full z-20"
      style={{
        width:14, height:14,
        background: color,
        top:"50%", left:"50%",
        boxShadow: `0 0 12px 3px ${color}70`,
        animation: lit ? `dotPop 0.45s ${delay}s cubic-bezier(.34,1.56,.64,1) both` : "none",
        opacity:0,
      }}
    />
  </>
);

/* ─── MAIN ──────────────────────────────────────────────────────────────────── */
const WhatYouGet21Days = () => {
  const [lit, setLit] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setLit(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 px-5 relative overflow-hidden bg-gradient-to-b from-[#1b0835] via-[#0b0415] to-[#06020d]"
    >
      <style>{STYLES}</style>

      {/* BG */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src={painBg} alt="" className="w-full h-full object-cover opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b0835]/80 via-transparent to-[#06020d]/90" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-[580px] h-[580px] bg-gold/[0.06] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <ScrollReveal>
          <p className="text-center text-[11px] tracking-[0.35em] uppercase text-gold/60 font-semibold mb-3">
            Your Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center text-white mb-4">
            What Happens in <span className="text-gold">21 Days</span>
          </h2>
          <p className="text-center text-white/40 text-sm md:text-base max-w-md mx-auto mb-16 leading-relaxed">
            Three weeks. Each builds on the last. By day 21 — you won't recognise who you were on day 1.
          </p>
        </ScrollReveal>

        {/* ═══════════ MOBILE (< md) ═══════════ */}
        <div className="flex flex-col gap-5 md:hidden">
          {/* Arrowhead */}
          <div className="flex justify-center mb-2">
            <div className="w-0 h-0"
              style={{
                borderLeft:"9px solid transparent", borderRight:"9px solid transparent",
                borderBottom:"18px solid #D4AF37",
                filter:"drop-shadow(0 0 8px rgba(212,175,55,0.8))",
                animation: lit ? "arrowHeadFall 0.6s 0.1s ease both" : "none",
                opacity:0,
              }}
            />
          </div>

          {WEEKS.map((w, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              {/* connector dot */}
              <div className="w-3 h-3 rounded-full relative flex-shrink-0"
                style={{
                  background: w.color,
                  boxShadow:`0 0 10px 3px ${w.color}70`,
                  animation: lit ? `dotPop 0.45s ${0.2 + i * 0.3}s cubic-bezier(.34,1.56,.64,1) both` : "none",
                  opacity:0,
                }}
              />
              {/* vertical line between cards */}
              {i > 0 && (
                <div className="w-[2px] h-8 -mt-2 -mb-2 rounded-full"
                  style={{ background:`linear-gradient(to bottom,${WEEKS[i-1].color}60,${w.color}60)` }}
                />
              )}
              <Card data={w} delay={0.15 + i * 0.28} lit={lit} mobile />
            </div>
          ))}

          {/* Target bottom mobile */}
          <div className="flex flex-col items-center mt-4"
            style={{ animation: lit ? "slideUp 0.6s 1.2s ease both" : "none", opacity:0 }}>
            <div className="relative flex items-center justify-center rounded-full"
              style={{
                width:88, height:88,
                background:"rgba(212,175,55,0.04)", border:"2px solid rgba(212,175,55,0.18)",
                animation: lit ? "targetRing 2.5s 1.8s ease-in-out infinite" : "none",
              }}>
              <div className="absolute rounded-full"
                style={{ width:58, height:58, background:"rgba(212,175,55,0.07)", border:"2px solid rgba(212,175,55,0.28)" }} />
              <div className="absolute rounded-full flex items-center justify-center"
                style={{ width:30, height:30, background:"rgba(212,175,55,0.15)", border:"1.5px solid rgba(212,175,55,0.55)", boxShadow:"0 0 16px rgba(212,175,55,0.4)" }}>
                <Crown size={13} className="text-gold" strokeWidth={1.5} />
              </div>
            </div>
            <p className="font-display font-black text-gold text-sm tracking-widest uppercase mt-3">You. Day 21.</p>
            <p className="text-white/35 text-xs mt-1">The 1% starts here.</p>
          </div>
        </div>

        {/* ═══════════ DESKTOP (md+) ═══════════ */}
        <div className="hidden md:block relative">

          {/* Arrow spine SVG — absolutely centered */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] pointer-events-none"
            style={{ height: "calc(100% - 80px)" }}>
            <svg width="2" height="100%" viewBox="0 2 2 1000"
              preserveAspectRatio="none" className="w-full h-full absolute top-0 left-0">
              <defs>
                <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#D4AF37" stopOpacity="0.9" />
                  <stop offset="50%"  stopColor="#a78bfa" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <line x1="1" y1="0" x2="1" y2="1000"
                stroke="url(#sg)" strokeWidth="2"
                strokeDasharray="1200" strokeDashoffset="1200"
                style={{ animation: lit ? "spineDraw 1.6s 0.05s ease forwards" : "none" }}
              />
            </svg>
          </div>

          {/* Arrowhead at top of spine */}
          <div className="flex justify-center mb-8 relative z-10">
            <div className="w-0 h-0"
              style={{
                borderLeft:"10px solid transparent", borderRight:"10px solid transparent",
                borderBottom:"20px solid #D4AF37",
                filter:"drop-shadow(0 0 10px rgba(212,175,55,0.85))",
                animation: lit ? "arrowHeadFall 0.7s 0.08s ease both" : "none",
                opacity:0,
              }}
            />
          </div>

          {/* Week rows */}
          <div className="flex flex-col gap-16">
            {WEEKS.map((w, i) => {
              const isLeft = w.side === "left";
              const delay  = 0.4 + i * 0.38;
              return (
                <div key={i} className={`flex items-center w-full ${isLeft ? "flex-row" : "flex-row-reverse"}`}>

                  {/* Card side */}
                  <div className="w-[calc(50%-60px)] flex-shrink-0">
                    <Card data={w} delay={delay} lit={lit} />
                  </div>

                  {/* Spine column (120px) */}
                  <div className="w-[120px] flex-shrink-0 relative" style={{ height:80 }}>
                    <SpineDot color={w.color} delay={delay} lit={lit} left={isLeft} />
                    {/* icon badge offset from dot */}
                    <div
                      className="absolute rounded-full flex items-center justify-center z-20"
                      style={{
                        width:32, height:32,
                        background:`${w.color}18`,
                        border:`1.5px solid ${w.color}45`,
                        top:"50%",
                        left: isLeft ? "calc(50% + 26px)" : "calc(50% - 58px)",
                        transform:"translateY(-50%)",
                        animation: lit ? `slideUp 0.4s ${delay+0.2}s ease both` : "none",
                        opacity:0,
                      }}
                    >
                      <w.Icon size={14} style={{ color:w.color }} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Empty side */}
                  <div className="w-[calc(50%-60px)] flex-shrink-0" />
                </div>
              );
            })}
          </div>

          {/* Target / landing circle */}
          <div className="flex flex-col items-center mt-12 relative z-10"
            style={{ animation: lit ? "slideUp 0.7s 1.6s ease both" : "none", opacity:0 }}>
            <div className="relative flex items-center justify-center rounded-full"
              style={{
                width:110, height:110,
                background:"rgba(212,175,55,0.04)", border:"2px solid rgba(212,175,55,0.20)",
                animation: lit ? "targetRing 2.5s 2.2s ease-in-out infinite" : "none",
              }}>
              <div className="absolute rounded-full"
                style={{ width:74, height:74, background:"rgba(212,175,55,0.07)", border:"2px solid rgba(212,175,55,0.28)" }} />
              <div className="absolute rounded-full flex items-center justify-center"
                style={{ width:40, height:40, background:"rgba(212,175,55,0.15)", border:"1.5px solid rgba(212,175,55,0.55)", boxShadow:"0 0 20px rgba(212,175,55,0.4)" }}>
                <Crown size={16} className="text-gold" strokeWidth={1.5} />
              </div>
            </div>
            <p className="font-display font-black text-gold text-sm tracking-widest uppercase mt-4">You. Day 21.</p>
            <p className="text-white/35 text-xs mt-1">The 1% starts here.</p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 text-center"
          style={{ animation: lit ? "slideUp 0.6s 2s ease both" : "none", opacity:0 }}>
          <a href="#reserve"
            className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full font-bold text-base text-black
              bg-gradient-to-r from-[#c9a227] to-gold hover:-translate-y-0.5 transition-all duration-200"
            style={{ boxShadow:"0 4px 24px rgba(212,175,55,0.35)" }}>
            Start My 21 Days →
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhatYouGet21Days;