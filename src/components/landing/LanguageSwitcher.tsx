import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-card/80 backdrop-blur-xl border border-border rounded-full p-1 shadow-lg"
    >
      <button
        onClick={() => setLang("en")}
        className={`relative px-4 py-2 text-xs font-body font-semibold rounded-full transition-all duration-300 ${
          lang === "en" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {lang === "en" && (
          <motion.div
            layoutId="lang-bg"
            className="absolute inset-0 bg-gold rounded-full"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      <button
        onClick={() => setLang("ta")}
        className={`relative px-4 py-2 text-xs font-body font-semibold rounded-full transition-all duration-300 ${
          lang === "ta" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {lang === "ta" && (
          <motion.div
            layoutId="lang-bg"
            className="absolute inset-0 bg-gold rounded-full"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">தமிழ்</span>
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;
