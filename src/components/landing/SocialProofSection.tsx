// import { motion } from "framer-motion";
// import ScrollReveal from "./ScrollReveal";
// import { useLanguage } from "@/contexts/LanguageContext";
// import communityImg from "@/assets/community.png";

// const testimonials = [
//   { quote: "I used to snooze my alarm and waste my morning. By Day 7 I was up at 5:30 without an alarm.", name: "Participant", track: "Life Restart" },
//   { quote: "BrandBark session in week 2 gave me more clarity than 6 months of planning alone.", name: "Business Owner", track: "BrandBark" },
//   { quote: "I finally stopped running in circles. The fog lifted and I could see what actually mattered.", name: "Participant", track: "Life Restart" },
//   { quote: "Someone finally held me accountable. That one hour became the anchor of my entire day.", name: "Entrepreneur", track: "BrandBark" },
// ];

// const wallOfLove = [
//   '"The clarity I got in 21 days was unreal."',
//   '"I actually look forward to 5:55 AM now."',
//   '"My business has direction for the first time."',
//   '"This isn\'t a course — it\'s a reset button."',
//   '"Day 14 changed everything for me."',
//   '"I stopped being busy and started being effective."',
//   '"Finally feel like I\'m becoming who I\'m meant to be."',
//   '"Best ₹999 I\'ve ever spent — not even close."',
// ];

// const SocialProofSection = () => {
//   const { t } = useLanguage();

//   return (
//     <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-surface-elevated relative overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[150px] pointer-events-none" />

//       <div className="max-w-5xl mx-auto relative">
//         <ScrollReveal>
//           <p className="text-sm uppercase tracking-[0.25em] text-gold font-body mb-4 text-center">
//             {t("social.label")}
//           </p>
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
//             {t("social.headline")}
//           </h2>
//         </ScrollReveal>

//         {/* Community image banner */}
//         <ScrollReveal>
//           <div className="relative rounded-xl overflow-hidden mb-16 h-48 sm:h-64">
//             <img src={communityImg} alt="1% Community members" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
//             <div className="absolute bottom-6 left-6 right-6">
//               <p className="font-display text-xl md:text-2xl font-bold text-foreground">The 1% Community</p>
//               <p className="font-body text-sm text-muted-foreground">People who chose to show up — and transformed</p>
//             </div>
//           </div>
//         </ScrollReveal>

//         <div className="grid md:grid-cols-2 gap-6 mb-16">
//           {testimonials.map((item, i) => (
//             <ScrollReveal key={i} delay={i * 0.1}>
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-card border border-border rounded-xl p-8 relative overflow-hidden"
//               >
//                 <div className="absolute top-0 left-0 w-12 h-12 bg-gold/5 rounded-br-3xl" />
//                 <p className="text-xs uppercase tracking-[0.15em] text-gold font-body mb-4">{item.track}</p>
//                 <p className="font-display text-lg md:text-xl italic text-foreground leading-relaxed mb-6">
//                   "{item.quote}"
//                 </p>
//                 <p className="font-body text-sm text-muted-foreground">— {item.name}, {item.track}</p>
//               </motion.div>
//             </ScrollReveal>
//           ))}
//         </div>

//         <ScrollReveal delay={0.2}>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
//             {wallOfLove.map((q, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ borderColor: "hsl(43 52% 54% / 0.3)" }}
//                 className="bg-card/50 border border-border/50 rounded-lg p-5 font-body text-sm text-secondary-foreground/70 italic transition-colors"
//               >
//                 {q}
//               </motion.div>
//             ))}
//           </div>
//         </ScrollReveal>

//         <ScrollReveal delay={0.3}>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
//             {["5+ years of transformation work", "Multiple batches completed", "1% who chose to act"].map((stat) => (
//               <p key={stat} className="font-body text-sm text-gold tracking-wide">{stat}</p>
//             ))}
//           </div>
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// };

// export default SocialProofSection;
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import communityImg from "@/assets/community.png";
import painBg from "@/assets/pain-point-bg.jpg";

const testimonials = [
  { quote: "I used to snooze my alarm and waste my morning. By Day 7 I was up at 5:30 without an alarm.", name: "Participant", track: "Life Restart" },
  { quote: "BrandBark session in week 2 gave me more clarity than 6 months of planning alone.", name: "Business Owner", track: "" },
  { quote: "I finally stopped running in circles. The fog lifted and I could see what actually mattered.", name: "Participant", track: "Life Restart" },
  { quote: "Someone finally held me accountable. That one hour became the anchor of my entire day.", name: "Entrepreneur", track: "" },
];

const wallOfLove = [
  '"The clarity I got in 21 days was unreal."',
  '"I actually look forward to 5:55 AM now."',
  '"My business has direction for the first time."',
  '"This isn\'t a course — it\'s a reset button."',
  '"Day 14 changed everything for me."',
  '"I stopped being busy and started being effective."',
  '"Finally feel like I\'m becoming who I\'m meant to be."',
  '"Best ₹999 I\'ve ever spent — not even close."',
];

const SocialProofSection = () => {

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#1b0835] via-[#0b0415] to-[#06020d]">

      {/* Background */}
      <div className="absolute inset-0">
        <img src={painBg} alt="" className="w-full h-full object-cover opacity-10"/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0415]/80 to-[#06020d]"/>
      </div>

      {/* Gold glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/10 blur-[180px] rounded-full"/>

      <div className="max-w-5xl mx-auto relative">

        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.25em] text-gold mb-4 text-center">
            Community
          </p>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
            People Who Showed Up — <span className="text-gold">And What Happened Next</span>
          </h2>
        </ScrollReveal>

        {/* Community banner */}
        <ScrollReveal>
          <div className="relative rounded-xl overflow-hidden mb-16 h-48 sm:h-64">
            <img src={communityImg} alt="1% Community members" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#06020d] via-transparent to-transparent"/>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-xl md:text-2xl font-bold text-white">
                The 1% Community
              </p>
              <p className="text-sm text-white/70">
                People who chose to show up — and transformed
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {testimonials.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="
                bg-white/5
                border border-white/10
                rounded-xl
                p-8
                backdrop-blur
                hover:border-gold/40
                transition
                "
              >

                <p className="text-xs uppercase tracking-[0.15em] text-gold mb-4">
                  {item.track}
                </p>

                <p className="text-lg italic text-white leading-relaxed mb-6">
                  "{item.quote}"
                </p>

                <p className="text-sm text-white/60">
                  — {item.name}, {item.track}
                </p>

              </motion.div>

            </ScrollReveal>
          ))}

        </div>

        {/* Wall of love */}
        <ScrollReveal delay={0.2}>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">

            {wallOfLove.map((q, i) => (

              <motion.div
                key={i}
                whileHover={{ borderColor: "rgba(255,215,0,0.3)" }}
                className="
                bg-white/5
                border border-white/10
                rounded-lg
                p-5
                text-sm
                text-white/70
                italic
                backdrop-blur
                transition
                "
              >
                {q}
              </motion.div>

            ))}

          </div>

        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">

            {[
              "5+ years of transformation work",
              "Multiple batches completed",
              "1% who chose to act"
            ].map((stat) => (

              <p key={stat} className="text-sm text-gold tracking-wide">
                {stat}
              </p>

            ))}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default SocialProofSection;