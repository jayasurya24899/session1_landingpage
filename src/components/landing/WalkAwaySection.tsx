import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import {
  Sparkles,
  Target,
  Brain,
  Rocket,
  Map,
  ShieldCheck
} from "lucide-react";

const outcomes = [
  {
    title: "Clarity",
    text: "A clear personal direction for the next 6–12 months instead of constant uncertainty.",
    icon: Sparkles,
  },
  {
    title: "Focus System",
    text: "A daily structure that protects your focus and helps you move forward consistently.",
    icon: Target,
  },
  {
    title: "Decision Framework",
    text: "A simple mental model to cut through noise and make faster, better decisions.",
    icon: Brain,
  },
  {
    title: "Momentum",
    text: "The discipline to act daily instead of staying stuck in overthinking.",
    icon: Rocket,
  },
  {
    title: "Personal Blueprint",
    text: "A repeatable clarity map you can return to whenever life becomes noisy again.",
    icon: Map,
  },
  {
    title: "Inner Stability",
    text: "Confidence in your direction so external chaos doesn't control your choices.",
    icon: ShieldCheck,
  },
];

const WalkAwaySection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 bg-white relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">

        {/* Heading */}
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.25em] text-purple-600 font-semibold text-center mb-4">
            The Outcomes
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
            What You'll Walk Away With
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Not motivation. Not theory. Real internal shifts that change how you
            think, decide, and move forward after these 21 days.
          </p>
        </ScrollReveal>

        {/* GRID */}
        <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        md:gap-8
        items-stretch
        ">

          {outcomes.map((item, index) => {

            const Icon = item.icon;

            return (
              <ScrollReveal key={index} delay={index * 0.1}>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative p-[1px] rounded-2xl overflow-hidden h-full"
                >

                  {/* rotating glowing border */}
                  <div
                    className="
                    absolute inset-0
                    rounded-2xl
                    bg-[conic-gradient(from_0deg,rgba(168,85,247,0.6),rgba(250,204,21,0.6),rgba(168,85,247,0.6))]
                    animate-spin-slow
                    opacity-60
                    blur-[2px]
                    "
                  ></div>

                  {/* CARD */}
                  <div
                    className="
                    relative
                    h-full
                    flex
                    flex-col
                    bg-white/70
                    backdrop-blur-xl
                    rounded-2xl
                    p-7 sm:p-8
                    border border-purple-200
                    shadow-lg
                    group-hover:shadow-xl
                    group-hover:scale-[1.02]
                    transition-all duration-300
                    "
                  >

                    {/* ICON */}
                    <div className="
                    mb-5
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-purple-100
                    text-purple-600
                    ">
                      <Icon size={22} />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>

                    {/* TEXT */}
                    <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              </ScrollReveal>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WalkAwaySection;