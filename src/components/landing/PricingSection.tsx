
// import { motion } from "framer-motion";
// import ScrollReveal from "./ScrollReveal";
// import { useLanguage } from "@/contexts/LanguageContext";
// import painBg from "@/assets/pain-point-bg.jpg";

// interface PricingTierProps {
//   label: string;
//   price: string;
//   validity: string;
//   includes: string[];
//   cta: string;
//   highlighted?: boolean;
// }

// const PricingTier = ({ label, price, validity, includes, cta, highlighted }: PricingTierProps) => {

//   return (
//     <motion.div
//       whileHover={{ y: -6, transition: { duration: 0.3 } }}
//       className={`relative rounded-xl p-8 flex flex-col h-full border overflow-visible transition-shadow duration-500 ${
//         highlighted
//           ? "border-gold bg-card gold-glow hover:shadow-[0_0_60px_-10px_hsl(43_52%_54%/0.4)]"
//           : "border-border bg-card hover:border-gold/20 hover:shadow-[0_0_30px_-10px_hsl(43_52%_54%/0.15)]"
//       }`}
//     >

//       {highlighted && (
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
//       )}

//       <h3 className="font-display text-xl font-bold mb-1">{label}</h3>

//       <p className="text-xs text-muted-foreground mb-6">
//         {validity}
//       </p>

//       <p className="font-display text-4xl font-bold text-gold mb-6">
//         {price}
//       </p>

//       <ul className="space-y-3 mb-8 flex-1">
//         {includes.map((item) => (
//           <li key={item} className="flex items-start gap-3 text-sm text-secondary-foreground/80">
//             <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
//             {item}
//           </li>
//         ))}
//       </ul>

//       <a
//         href="#reserve"
//         className={`group relative block text-center px-6 py-3 font-semibold rounded-lg transition-all overflow-hidden ${
//           highlighted
//             ? "bg-gold text-primary-foreground hover:brightness-110"
//             : "bg-secondary text-secondary-foreground hover:bg-gold/20 hover:text-gold border border-border"
//         }`}
//       >
//         <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

//         <span className="relative">{cta}</span>
//       </a>

//     </motion.div>
//   );
// };

// const PricingSection = () => {

//   const { t } = useLanguage();

//   return (
//     <section
//       className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#1b0835] via-[#0b0415] to-[#06020d]"
//       id="reserve"
//     >

//       {/* Background */}
//       <div className="absolute inset-0">
//         <img src={painBg} alt="" className="w-full h-full object-cover opacity-10" />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0415]/80 to-[#06020d]" />
//       </div>

//       {/* Gold glow */}
//       <div className="absolute left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/10 blur-[180px] rounded-full" />

//       <div className="max-w-6xl mx-auto relative">

//         <ScrollReveal>
//           <p className="text-sm uppercase tracking-[0.25em] text-gold mb-4 text-center">
//             {t("pricing.label")}
//           </p>

//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
//             {t("pricing.headline")}
//           </h2>

//           <p className="text-white/70 text-center mb-16 max-w-xl mx-auto">
//             {t("pricing.sub")}
//           </p>
//         </ScrollReveal>

//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

//           <ScrollReveal delay={0.05}>
//             <PricingTier
//               label={t("pricing.t1_label")}
//               price="₹999"
//               validity="One 21-day batch · Per person"
//               includes={[
//                 "Daily Life Restart session (8:30–9:30 PM)",
//                 "21-day transformation workbook",
//                 "Internal clarity & discipline system"
//               ]}
//               cta="Join for ₹999 →"
//             />
//           </ScrollReveal>

//           <ScrollReveal delay={0.15}>
//             <PricingTier
//               label={t("pricing.t3_label")}
//               price="₹4,999"
//               validity="6 months · Access to all 6 monthly batches"
//               includes={[
//                 "Each batch goes deeper — returning members always gain more",
//                 "Access to the 1% conscious community",
//                 "Any online weekend sessions — always FREE for you",
//               ]}
//               cta="Get 6-Month Access →"
//               highlighted
//             />
//           </ScrollReveal>


//         </div>

        

//       </div>
//     </section>
//   );
// };

// export default PricingSection;

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import painBg from "@/assets/pain-point-bg.jpg";

interface PricingTierProps {
  label: string;
  price: string;
  validity: string;
  includes: string[];
  cta: string;
  highlighted?: boolean;
  href?: string;
}

const PricingTier = ({ label, price, validity, includes, cta, highlighted, href = "#reserve" }: PricingTierProps) => {

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`relative rounded-xl p-8 flex flex-col h-full border overflow-visible transition-shadow duration-500 ${
        highlighted
          ? "border-gold bg-card gold-glow hover:shadow-[0_0_60px_-10px_hsl(43_52%_54%/0.4)]"
          : "border-border bg-card hover:border-gold/20 hover:shadow-[0_0_30px_-10px_hsl(43_52%_54%/0.15)]"
      }`}
    >

      {highlighted && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      )}

      <h3 className="font-display text-xl font-bold mb-1">{label}</h3>

      <p className="text-xs text-muted-foreground mb-6">
        {validity}
      </p>

      <p className="font-display text-4xl font-bold text-gold mb-6">
        {price}
      </p>

      <ul className="space-y-3 mb-8 flex-1">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-secondary-foreground/80">
            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`group relative block text-center px-6 py-3 font-semibold rounded-lg transition-all overflow-hidden ${
          highlighted
            ? "bg-gold text-primary-foreground hover:brightness-110"
            : "bg-secondary text-secondary-foreground hover:bg-gold/20 hover:text-gold border border-border"
        }`}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <span className="relative">{cta}</span>
      </a>

    </motion.div>
  );
};

const PricingSection = () => {

  const { t } = useLanguage();

  return (
    <section
      className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#1b0835] via-[#0b0415] to-[#06020d]"
      id="reserve"
    >

      {/* Background */}
      <div className="absolute inset-0">
        <img src={painBg} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0415]/80 to-[#06020d]" />
      </div>

      {/* Gold glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/10 blur-[180px] rounded-full" />

      <div className="max-w-6xl mx-auto relative">

        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.25em] text-gold mb-4 text-center">
            {t("pricing.label")}
          </p>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
            {t("pricing.headline")}
          </h2>

          <p className="text-white/70 text-center mb-16 max-w-xl mx-auto">
            {t("pricing.sub")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

          <ScrollReveal delay={0.05}>
            <PricingTier
              label={t("pricing.t1_label")}
              price="₹999"
              validity="One 21-day batch · Per person"
              includes={[
                "Daily Life Restart session (8:30–9:30 PM)",
                "21-day transformation workbook",
                "Internal clarity & discipline system"
              ]}
              cta="Join for ₹999 →"
              href="https://rzp.io/rzp/F4YNfMU"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <PricingTier
              label={t("pricing.t3_label")}
              price="₹4,999"
              validity="6 months · Access to all 6 monthly batches"
              includes={[
                "Each batch goes deeper — returning members always gain more",
                "Access to the 1% conscious community",
                "Any online weekend sessions — always FREE for you",
              ]}
              cta="Get 6-Month Access →"
              highlighted
              href="https://rzp.io/rzp/F4YNfMU"
            />
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

export default PricingSection;