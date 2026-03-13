import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToPricing = (e:React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-card/95 backdrop-blur-xl border-t border-border px-4 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-display text-sm font-bold truncate">21 days from now, someone will change.Will it be you?</p>
              <p className="text-xs text-muted-foreground font-body">Starting at ₹999 · Limited seats</p>
            </div>
            <button
              onClick={scrollToPricing}
              className="shrink-0 px-5 py-2.5 bg-gold text-primary-foreground font-body font-semibold text-sm rounded-lg hover:brightness-110 transition-all animate-pulse-gold"
            >
              {t("hero.cta")}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
