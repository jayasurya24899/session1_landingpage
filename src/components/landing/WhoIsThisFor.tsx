import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import painBg from "@/assets/pain-point-bg.jpg";
import {
  AlarmClock, BookX, Briefcase,
  LayoutGrid, BrainCircuit, Flame,
} from "lucide-react";

const ALL_ITEMS = [
  { Icon: AlarmClock,   title: "Exhausted Even After Rest"          },
  { Icon: BookX,        title: "Emotions You Can't Explain"    },
  { Icon: Briefcase,    title: "Doing Everything Right. Still Feels Wrong"      },
  { Icon: LayoutGrid,   title: "Same Patterns. Different Day" },
  { Icon: BrainCircuit, title: "Success Outside. Empty Inside" },
  { Icon: Flame,        title: "Lost the Connection to Yourself"    },
];
const LEFT_ITEMS  = ALL_ITEMS.slice(0, 3);
const RIGHT_ITEMS = ALL_ITEMS.slice(3);

/* ── keyframes injected once ────────────────────────────────────────────── */
const STYLES = `
  @keyframes flameGlow {
    0%,100% { box-shadow: 0 0 18px 4px rgba(212,175,55,.45), 0 0 40px 8px rgba(212,175,55,.20); }
    50%      { box-shadow: 0 0 32px 10px rgba(212,175,55,.75), 0 0 70px 20px rgba(212,175,55,.35); }
  }
  @keyframes flameIconPulse {
    0%,100% { filter: drop-shadow(0 0 4px rgba(212,175,55,.6)); }
    50%     { filter: drop-shadow(0 0 12px rgba(212,175,55,1)); }
  }
  @keyframes orbitDots {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes downArrowFade {
    0%,100% { opacity:.5; transform:translateY(0); }
    50%     { opacity:.9; transform:translateY(3px); }
  }
`;

/* ── Horizontal dashed arrow (desktop) ──────────────────────────────────── */
const DashArrowH = ({ dir }) => (
  <svg width="80" height="16" viewBox="0 0 80 16" fill="none"
    className="flex-shrink-0 self-center" style={{ minWidth: 72 }}>
    {dir === "right" ? (
      <>
        <line x1="2" y1="8" x2="70" y2="8"
          stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
        <polygon points="68,3 68,13 80,8" fill="#D4AF37" opacity="0.85" />
      </>
    ) : (
      <>
        <line x1="78" y1="8" x2="10" y2="8"
          stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
        <polygon points="12,3 12,13 0,8" fill="#D4AF37" opacity="0.85" />
      </>
    )}
  </svg>
);

/* ── Vertical dashed arrow (mobile — points down toward next card) ───────── */
const DashArrowV = ({ visible, delay }) => (
  <div
    className={`flex justify-center transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <svg width="16" height="36" viewBox="0 0 16 36" fill="none"
      style={{ animation: "downArrowFade 1.6s ease-in-out infinite" }}>
      <line x1="8" y1="2" x2="8" y2="28"
        stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
      <polygon points="3,26 13,26 8,36" fill="#D4AF37" opacity="0.85" />
    </svg>
  </div>
);

/* ── Desktop arrow column ────────────────────────────────────────────────── */
const ArrowCol = ({ dir, visible, count = 3 }) => (
  <div className="hidden md:flex flex-col gap-7 flex-shrink-0" style={{ width: 80 }}>
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className={`transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: `${300 + i * 130}ms` }}
      >
        <DashArrowH dir={dir} />
      </div>
    ))}
  </div>
);

/* ── Card ────────────────────────────────────────────────────────────────── */
const Card = ({ Icon, title, align, visible, delay, mobile = false }) => {
  const isRight = align === "right";
  return (
    <div
      className={`
        flex items-center gap-4 px-5 py-4 rounded-2xl
        ${mobile
          ? "w-full max-w-[340px] mx-auto flex-row"
          : `w-[240px] md:w-[300px] flex-shrink-0 ${isRight ? "flex-row-reverse" : "flex-row"}`
        }
        bg-white/[0.05] border border-gold/25 backdrop-blur-sm
        hover:border-gold/55 hover:bg-white/[0.07]
        hover:shadow-[0_0_28px_rgba(212,175,55,0.16)]
        cursor-default group
        transition-all duration-700 ease-out
        ${visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : mobile
            ? "opacity-0 translate-y-6"
            : isRight
              ? "opacity-0 translate-x-10"
              : "opacity-0 -translate-x-10"
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="
        w-11 h-11 rounded-full flex-shrink-0
        border border-gold/30 bg-gold/[0.08]
        flex items-center justify-center
        group-hover:bg-gold/15 group-hover:border-gold/50
        transition-all duration-300
      ">
        <Icon size={20} className="text-gold" strokeWidth={1.5} />
      </div>
      <span className={`
        font-display font-bold text-white leading-snug
        ${mobile ? "text-lg text-left" : `text-lg md:text-xl ${isRight ? "text-right" : "text-left"}`}
      `}>
        {title}
      </span>
    </div>
  );
};

/* ── Center Orb (shared between mobile + desktop) ───────────────────────── */
const Orb = ({ lit, visible, showCTA, size = "md" }) => {
  const dim = size === "sm"
    ? { outer: 160, cls: "w-40 h-40" }
    : { outer: 224, cls: "w-48 h-48 md:w-56 md:h-56" };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className={`relative ${dim.cls} flex items-center justify-center`}>

        {/* Outer dashed spinning ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-dashed border-gold/18"
          style={{ animation: lit ? "spinSlow 22s linear infinite" : "none" }}
        />

        {/* Mid ring */}
        <div
          className="absolute inset-4 rounded-full border border-gold/22 transition-all duration-1000 delay-300"
          style={{ boxShadow: lit ? "0 0 44px rgba(212,175,55,0.22)" : "none" }}
        />

        {/* Inner filled circle */}
        <div
          className="absolute inset-9 rounded-full bg-gradient-to-br from-gold/12 to-gold/4 border border-gold/35 transition-all duration-1000 delay-500"
          style={{ boxShadow: lit ? "0 0 32px rgba(212,175,55,0.35)" : "none" }}
        />

        {/* Orbiting dots wrapper */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ animation: lit ? "orbitDots 6s linear infinite" : "none" }}
        >
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold"
              style={{
                width: 8, height: 8,
                top:  `${50 - 47 * Math.cos((deg * Math.PI) / 180)}%`,
                left: `${50 + 47 * Math.sin((deg * Math.PI) / 180)}%`,
                transform: "translate(-50%,-50%)",
                opacity: lit ? 0.9 : 0,
                boxShadow: lit ? "0 0 8px 2px rgba(212,175,55,0.95)" : "none",
                transition: `opacity 0.5s ${700 + i * 90}ms`,
              }}
            />
          ))}
        </div>

        {/* Flame center */}
        <div
          className={`
            relative z-10 text-center
            transition-all duration-700 delay-[600ms]
            ${lit ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
        >
          <div className="flex justify-center mb-2">
            <div
              className="w-14 h-14 rounded-full border border-gold/50 bg-gold/10 flex items-center justify-center"
              style={{ animation: lit ? "flameGlow 2s ease-in-out infinite" : "none" }}
            >
              <Flame
                size={26} className="text-gold" strokeWidth={1.5}
                style={{ animation: lit ? "flameIconPulse 2s ease-in-out infinite" : "none" }}
              />
            </div>
          </div>
          <p className="font-display font-black text-gold text-[10px] tracking-widest uppercase leading-tight">
            The<br/>1% Life
          </p>
        </div>
      </div>

      {/* CTA button */}
      {showCTA && (
        <a
          href="#reserve"
          className={`
            px-9 py-3 rounded-full text-sm font-bold
            bg-gradient-to-r from-[#c9a227] to-gold text-black
            hover:-translate-y-0.5 transition-all duration-200
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
          style={{
            transitionDelay: "900ms",
            transitionProperty: "opacity,transform",
            boxShadow: "0 4px 22px rgba(212,175,55,0.32)",
          }}
        >
          Reserve My Spot →
        </a>
      )}
    </div>
  );
};

/* ── Main ────────────────────────────────────────────────────────────────── */
const WhoIsThisFor = () => {
  const [visible, setVisible] = useState(false);
  const [lit,     setLit]     = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          setTimeout(() => setLit(true), 400);
          obs.disconnect();
        }
      },
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
        <img src={painBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06020d]/70 via-transparent to-[#1b0835]/80" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.07] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute left-[10%] top-[30%] w-[180px] h-[180px] bg-purple-900/25 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute right-[10%] bottom-[30%] w-[180px] h-[180px] bg-purple-900/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <ScrollReveal>
          <p className="text-center text-[11px] tracking-[0.35em] uppercase text-gold/60 font-semibold mb-3">
            Is This You?
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-center text-white mb-4">
            This Is For You <span className="text-gold">If…</span>
          </h2>
          <p className="text-center text-white/45 text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed">
            If even one of these hits — you're exactly who this was built for.
          </p>
        </ScrollReveal>

        {/* ════════════════════════════════════
            MOBILE LAYOUT  (< md)
            Orb → arrow → card → arrow → card…
        ════════════════════════════════════ */}
        <div className="flex flex-col items-center gap-0 md:hidden">

          {/* Orb at top on mobile */}
          <Orb lit={lit} visible={visible} showCTA={false} size="sm" />

          {/* All 6 cards stacked with arrows between */}
          <div className="flex flex-col items-center w-full mt-6 gap-0">
            {ALL_ITEMS.map((item, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                {/* Down arrow before each card (except first) */}
                {i > 0 && <DashArrowV visible={visible} delay={200 + i * 100} />}
                <Card
                  Icon={item.Icon}
                  title={item.title}
                  align="left"
                  visible={visible}
                  delay={150 + i * 100}
                  mobile={true}
                />
              </div>
            ))}
          </div>

          {/* CTA at bottom on mobile */}
          <div className="mt-8">
            <a
              href="#reserve"
              className={`
                inline-block px-10 py-3.5 rounded-full text-base font-bold
                bg-gradient-to-r from-[#c9a227] to-gold text-black
                hover:-translate-y-0.5 transition-all duration-200
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
              style={{
                transitionDelay: "1100ms",
                transitionProperty: "opacity,transform",
                boxShadow: "0 4px 22px rgba(212,175,55,0.32)",
              }}
            >
              Reserve My Spot →
            </a>
          </div>
        </div>

        {/* ════════════════════════════════════
            DESKTOP LAYOUT  (md+)
            [left cards] [→] [orb] [←] [right cards]
        ════════════════════════════════════ */}
        <div className="hidden md:flex items-center justify-center gap-0">

          {/* LEFT CARDS */}
          <div className="flex flex-col gap-7 items-end">
            {LEFT_ITEMS.map((item, i) => (
              <Card key={i} Icon={item.Icon} title={item.title}
                align="left" visible={visible} delay={i * 130} />
            ))}
          </div>

          {/* → arrows */}
          <ArrowCol dir="right" visible={visible} />

          {/* ORB */}
          <Orb lit={lit} visible={visible} showCTA={true} />

          {/* ← arrows */}
          <ArrowCol dir="left" visible={visible} />

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-7 items-start">
            {RIGHT_ITEMS.map((item, i) => (
              <Card key={i} Icon={item.Icon} title={item.title}
                align="right" visible={visible} delay={(i + 3) * 130} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;