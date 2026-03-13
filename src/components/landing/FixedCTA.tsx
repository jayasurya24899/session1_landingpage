// import { motion } from "framer-motion";
// import { useLanguage } from "@/contexts/LanguageContext";

// const FixedCTA = () => {
//   const { t } = useLanguage();

//   return (
//     <motion.div
//       initial={{ y: 80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, delay: 1 }}
//       className="fixed bottom-0 left-0 w-full z-50 border-t border-border/40 backdrop-blur-md bg-background/80"
//     >
//       <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        
//         <div className="hidden sm:block">
//           <p className="text-sm text-muted-foreground font-body font-bold">
//             {t("hero.cta_sub")}
//           </p>
//         </div>

//         <a
//           href="#reserve"
//           className="ml-auto inline-flex items-center justify-center px-6 py-3 bg-gold text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all animate-pulse-gold"
//         >
//           {t("hero.cta")} 
//         </a>

//       </div>
//     </motion.div>
//   );
// };

// export default FixedCTA;

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const FixedCTA = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* ── FOOTER — sits above the fixed bar ── */}
      <footer className="bg-[#06020d] border-t border-white/[0.06] py-5 mb-[74px]">
        <p className="text-center text-white/40 text-xs">
          © {new Date().getFullYear()} All rights reserved.{" "}
          <span className="text-white/60 font-semibold">Brand Bark</span>
          {" "}·{" "}
          <span className="text-white/60 font-semibold">Greenwill Techs</span>
        </p>
      </footer>

      {/* ── FIXED BOTTOM CTA ── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-0 left-0 w-full z-50 border-t border-border/40 backdrop-blur-md bg-background/80"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">

          <div className="hidden sm:block">
            <p className="text-sm text-muted-foreground font-body font-bold">
              {t("hero.cta_sub")}
            </p>
          </div>

          <a
            href="#reserve"
            className="ml-auto inline-flex items-center justify-center px-6 py-3 bg-gold text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all animate-pulse-gold"
          >
            {t("hero.cta")}
          </a>

        </div>
      </motion.div>
    </>
  );
};

export default FixedCTA;