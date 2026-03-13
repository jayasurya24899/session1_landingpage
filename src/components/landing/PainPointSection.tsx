// import ScrollReveal from "./ScrollReveal";
// import { useLanguage } from "@/contexts/LanguageContext";
// import painBg from "@/assets/pain-point-bg.jpg";

// const PainPointSection = () => {
//   const { t } = useLanguage();

//   return (
//     <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
//       {/* Background image */}
//       <div className="absolute inset-0">
//         <img src={painBg} alt="" className="w-full h-full object-cover opacity-20" />
//         <div className="absolute inset-0 bg-background/80" />
//       </div>

//       {/* Decorative ember glow */}
//       <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

//       <div className="max-w-3xl mx-auto relative">
//         <ScrollReveal>
//           <p className="font-body text-lg md:text-xl leading-relaxed text-secondary-foreground/80 mb-10">
//             {t("pain.p1")} <span className="text-gold font-semibold">{t("pain.unclear")}</span>
//             {t("pain.p1_rest")}
//           </p>
//         </ScrollReveal>

//         <div className="section-divider my-10" />

//         <ScrollReveal delay={0.1}>
//           <p className="font-body text-lg md:text-xl leading-relaxed text-secondary-foreground/70 mb-10">
//             {t("pain.p2_start")}{" "}
//             <span className="text-ember font-semibold">{t("pain.container")}</span>
//             {t("pain.p2_rest")}{" "}
//             <em className="font-display italic text-foreground">{t("pain.you")}</em>
//             {t("pain.p2_end")}
//           </p>
//         </ScrollReveal>

//         <div className="section-divider my-10" />

//         <ScrollReveal delay={0.2}>
//           <p className="font-body text-lg md:text-xl leading-relaxed text-foreground">
//             {t("pain.p3_start")}{" "}
//             <span className="text-gold-gradient font-semibold">{t("pain.program")}</span>
//             {t("pain.p3_mid")}{" "}
//             <span className="text-gold font-semibold">{t("pain.live")}</span>
//             {t("pain.p3_end")}
//           </p>
//           <p className="font-display text-2xl md:text-3xl italic text-gold mt-8">
//             {t("pain.closer")}
//           </p>
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// };

// export default PainPointSection;
// import ScrollReveal from "./ScrollReveal";
// import painBg from "@/assets/pain-point-bg.jpg";
// import { Clock, Ban, ClipboardCopy } from "lucide-react";

// const PainPointSection = () => {

//   const items = [
//     {
//       number: "01",
//       title: "The Real Problem",
//       text: "Most people aren’t lazy — they’re unclear about life and business. Plans stay plans while both personal growth and business stall.",
//       icon: Clock
//     },
//     {
//       number: "02",
//       title: "Why It Happens",
//       text: "Not lack of talent — lack of structure and daily focus. Without clarity, both your inner self and business stay stuck.",
//       icon: Ban
//     },
//     {
//       number: "03",
//       title: "Why This Exists",
//       text: "The 1% Community – 21 Day Transformation was built for this. Daily guided sessions for personal clarity and business direction.",
//       icon: ClipboardCopy
//     }
//   ];

//   return (
//     <section className="py-24 px-6 relative overflow-hidden">

//       {/* Background */}
//       <div className="absolute inset-0">
//         <img src={painBg} alt="" className="w-full h-full object-cover opacity-10"/>
//         <div className="absolute inset-0 bg-background/90"/>
//       </div>

//       {/* Gold glow background */}
//       <div className="absolute left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/10 blur-[180px] rounded-full"/>

//       <div className="max-w-6xl mx-auto relative">

//         {/* Title */}
//         <ScrollReveal>
//           <h2 className="font-display text-3xl md:text-4xl text-center mb-20">
//             The Story Most People <span className="text-gold">Never Notice</span>
//           </h2>
//         </ScrollReveal>

//         {/* Timeline */}
//         <div className="grid md:grid-cols-3 gap-12 text-center relative">

//           {items.map((item, index) => {

//             const Icon = item.icon;

//             return (
//               <ScrollReveal key={index} delay={index * 0.1}>

//                 <div className="
//                 group
//                 relative
//                 p-8
//                 rounded-2xl
//                 transition-all duration-300
//                 hover:bg-card/40
//                 hover:backdrop-blur-xl
//                 hover:border
//                 hover:border-gold/40
//                 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
//                 ">

//                   {/* Icon */}
//                   <div className="flex justify-center mb-6">
//                     <div className="
//                     w-16 h-16
//                     rounded-full
//                     border border-gold/30
//                     flex items-center justify-center
//                     text-gold
//                     bg-card/40
//                     backdrop-blur
//                     group-hover:bg-gold/10
//                     transition
//                     ">
//                       <Icon size={26}/>
//                     </div>
//                   </div>

//                   {/* Timeline line */}
//                   <div className="w-full h-[2px] bg-border mb-6 relative">
//                     <span className="
//                     absolute left-1/2 -translate-x-1/2 -top-[6px]
//                     w-4 h-4 bg-gold rounded-full
//                     shadow-[0_0_12px_rgba(255,215,0,0.8)]
//                     "></span>
//                   </div>

//                   {/* Number */}
//                   <p className="text-xs tracking-widest text-muted-foreground mb-2">
//                     {item.number}
//                   </p>

//                   {/* Title */}
//                   <h3 className="font-display text-xl font-semibold mb-3">
//                     {item.title}
//                   </h3>

//                   {/* Gold underline */}
//                   <div className="w-10 h-[2px] bg-gold mx-auto mb-4 group-hover:w-16 transition-all"/>

//                   {/* Text */}
//                   <p className="text-secondary-foreground/80 text-sm leading-relaxed">
//                     {item.text}
//                   </p>

//                 </div>

//               </ScrollReveal>
//             )
//           })}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default PainPointSection;
import ScrollReveal from "./ScrollReveal";
import painBg from "@/assets/pain-point-bg.jpg";
import { Clock, Ban, ClipboardCopy } from "lucide-react";

const PainPointSection = () => {

  const items = [
    {
      number: "01",
      title: "The Real Problem",
      text: "Most people aren’t lazy — they’re unclear about life and business. Plans stay plans while both personal growth and business stall.",
      icon: Clock
    },
    {
      number: "02",
      title: "Why It Happens",
      text: "Not lack of talent — lack of structure and daily focus. Without clarity, both your inner self and business stay stuck.",
      icon: Ban
    },
    {
      number: "03",
      title: "Why This Exists",
      text: "The 1% Community – 21 Day Transformation was built for this. Daily guided sessions for personal clarity and business direction.",
      icon: ClipboardCopy
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#1b0835] via-[#0b0415] to-[#06020d]">

      {/* Smooth merge from previous section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#1b0835] via-transparent to-transparent opacity-70"></div>

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={painBg}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0415]/80 to-[#06020d]"></div>
      </div>

      {/* Gold glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/10 blur-[180px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* Title */}
        <ScrollReveal>
          {/* <h2 className="font-display text-3xl md:text-4xl text-center mb-20 text-white"> */}
          <h2 className="font-display text-3xl md:text-4xl text-center mb-24 text-white relative z-10">
            The Story Most People <span className="text-gold">Never Notice</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-12 text-center relative">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (
              <ScrollReveal key={index} delay={index * 0.1}>

                <div
                  className="
                  group
                  relative
                  p-8
                  rounded-2xl
                  transition-all duration-300
                  hover:bg-white/5
                  hover:backdrop-blur-xl
                  hover:border
                  hover:border-gold/40
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                "
                >

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div
                      className="
                      w-16 h-16
                      rounded-full
                      border border-gold/30
                      flex items-center justify-center
                      text-gold
                      bg-white/5
                      backdrop-blur
                      group-hover:bg-gold/10
                      transition
                    "
                    >
                      <Icon size={26} />
                    </div>
                  </div>

                  {/* Timeline line */}
                  <div className="w-full h-[2px] bg-white/10 mb-6 relative">
                    <span
                      className="
                      absolute left-1/2 -translate-x-1/2 -top-[6px]
                      w-4 h-4 bg-gold rounded-full
                      shadow-[0_0_12px_rgba(255,215,0,0.8)]
                    "
                    ></span>
                  </div>

                  {/* Number */}
                  <p className="text-xs tracking-widest text-white/50 mb-2">
                    {item.number}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>

                  {/* Gold underline */}
                  <div className="w-10 h-[2px] bg-gold mx-auto mb-4 group-hover:w-16 transition-all" />

                  {/* Text */}
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.text}
                  </p>

                </div>

              </ScrollReveal>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default PainPointSection;