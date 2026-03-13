// import { motion } from "framer-motion";
// import ScrollReveal from "./ScrollReveal";
// import { useLanguage } from "@/contexts/LanguageContext";

// const FinalCTASection = () => {
//   const { t } = useLanguage();

//   return (
//     <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
//       {/* Animated gold glow */}
//       <motion.div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, hsl(43 52% 54% / 0.08), transparent 70%)" }}
//         animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative z-10 max-w-2xl mx-auto text-center">
//         <ScrollReveal>
//           <p className="text-sm uppercase tracking-[0.25em] text-gold font-body mb-6">
//             {t("final.label")}
//           </p>
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
//             {t("final.headline1")}{" "}
//             <span className="text-gold-gradient italic">{t("final.headline2")}</span>
//           </h2>
//           <p className="font-body text-lg text-secondary-foreground/70 mb-10">
//             {t("final.body")}
//           </p>
//           <a
//             href="#reserve"
//             className="group relative inline-flex items-center gap-2 px-10 py-5 bg-gold text-primary-foreground font-body font-bold text-lg rounded-lg hover:brightness-110 transition-all animate-pulse-gold overflow-hidden"
//           >
//             <span className="absolute inset-0 bg-gradient-to-r from-gold-light/0 via-gold-light/30 to-gold-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
//             <span className="relative">{t("final.cta")}</span>
//           </a>
//           <p className="font-body text-sm text-muted-foreground mt-4">
//             {t("final.sub")}
//           </p>
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// };

// export default FinalCTASection;

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-white">

      {/* purple ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 blur-[200px] rounded-full"></div>
      </div>

      {/* subtle animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)"
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">

        <ScrollReveal>

          <p className="text-sm uppercase tracking-[0.25em] text-purple-600 font-semibold mb-6">
            {t("final.label")}
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-gray-900">

            {t("final.headline1")}{" "}
            <br></br>

            <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-yellow-500 bg-clip-text text-transparent italic">
              {t("final.headline2")}
            </span>

          </h2>

          <p className="text-lg text-gray-600 mb-10">
            {t("final.body")}
          </p>

          {/* Hero style CTA */}
          <a
            href="#reserve"
            className="group relative inline-flex items-center px-10 py-5 rounded-full
            bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
            text-gray-900 font-bold text-lg
            overflow-hidden transition-all duration-300
            hover:-translate-y-1 hover:scale-105
            shadow-[0_10px_35px_rgba(212,168,74,0.45)]"
          >

            {/* glow border */}
            <span className="absolute inset-0 rounded-full border border-[#e6c06a]/40 group-hover:scale-110 transition-transform duration-500"></span>

            {/* shine animation */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
            translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700"></span>

            <span className="relative flex items-center gap-2">
              {t("final.cta")}
              →
            </span>

          </a>

          <p className="text-sm text-gray-500 mt-4">
            {t("final.sub")}
          </p>

        </ScrollReveal>

      </div>
    </section>
  );
};

export default FinalCTASection;
// import { motion } from "framer-motion";

// const StickyCTA = () => {
//   return (
//     <motion.div
//       initial={{ y: 100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="fixed bottom-6 right-6 z-50"
//     >
//       <a
//         href="#reserve"
//         className="group relative flex items-center gap-2 px-6 py-3 rounded-full
//         bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
//         text-gray-900 font-semibold
//         shadow-[0_10px_35px_rgba(212,168,74,0.45)]
//         hover:-translate-y-1 hover:scale-105
//         transition-all duration-300"
//       >

//         {/* shine */}
//         <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
//         translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700"></span>

//         <span className="relative flex items-center gap-2">
//           Start My 21 Days →
//         </span>

//       </a>
//     </motion.div>
//   );
// };

// export default StickyCTA;