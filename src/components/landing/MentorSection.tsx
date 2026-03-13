// import ScrollReveal from "./ScrollReveal";
// import { useLanguage } from "@/contexts/LanguageContext";
// import mentorImg from "@/assets/mentor.jpeg";

// const MentorSection = () => {
//   const { t } = useLanguage();

//   const credentials = [t("mentor.c1"), t("mentor.c2"), t("mentor.c3"), t("mentor.c4")];
//   const achievements = [t("mentor.a1"), t("mentor.a2"), t("mentor.a3"), t("mentor.a4"), t("mentor.a5")];

//   return (
//     <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-[150px] pointer-events-none" />

//       <div className="max-w-5xl mx-auto relative">
//         <ScrollReveal>
//           <p className="text-sm uppercase tracking-[0.25em] text-gold font-body mb-4 text-center">
//             {t("mentor.label")}
//           </p>
//         </ScrollReveal>

//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start mt-12">
//           <ScrollReveal className="md:col-span-2">
//             <div className="bg-card border border-border rounded-xl aspect-[3/4] relative overflow-hidden group">
//               <img src={mentorImg} alt="Mr. Kishore Raveendiran" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//               <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <p className="font-display text-xl font-bold text-foreground">Mr. Kishore Raveendiran</p>
//                 <p className="font-body text-sm text-gold">{t("mentor.title")}</p>
//               </div>
//             </div>
//           </ScrollReveal>

//           <ScrollReveal delay={0.15} className="md:col-span-3">
//             <div className="bg-card border border-border rounded-xl p-8 md:p-10 relative overflow-hidden">
//               <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

//               <h3 className="font-display text-3xl md:text-4xl font-bold mb-1">
//                 <span className="text-gold-gradient">Mr. Kishore Raveendiran</span>
//               </h3>
//               <p className="font-body text-muted-foreground mb-6">{t("mentor.title")}</p>
//               <p className="font-body text-xs text-muted-foreground mb-6 uppercase tracking-widest">{t("mentor.org")}</p>

//               <blockquote className="font-display text-lg md:text-xl italic text-foreground border-l-2 border-gold pl-6 mb-8">
//                 "{t("mentor.quote")}"
//               </blockquote>

//               <div className="flex flex-wrap gap-2 mb-8">
//                 {credentials.map((c) => (
//                   <span key={c} className="text-xs font-body bg-gold/10 text-gold px-3 py-1.5 rounded-full">{c}</span>
//                 ))}
//               </div>

//               <p className="font-body text-sm font-semibold text-foreground mb-4">{t("mentor.helps")}</p>
//               <ul className="space-y-3">
//                 {achievements.map((a) => (
//                   <li key={a} className="flex items-start gap-3 font-body text-sm text-secondary-foreground/80">
//                     <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
//                     {a}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MentorSection;

import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import mentorImg from "@/assets/mentor.jpeg";

const MentorSection = () => {
  const { t } = useLanguage();

  const credentials = [
    t("mentor.c1"),
    t("mentor.c2"),
    t("mentor.c3"),
    t("mentor.c4"),
  ];

  const achievements = [
    t("mentor.a1"),
    t("mentor.a2"),
    t("mentor.a3"),
    t("mentor.a4"),
    t("mentor.a5"),
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-white">

      {/* purple ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-purple-500/10 blur-[200px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">

        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.25em] text-purple-600 font-semibold mb-4 text-center">
            {t("mentor.label")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start mt-12">

          {/* Mentor Image */}
          <ScrollReveal className="md:col-span-2">
            <div className="bg-white/60 backdrop-blur-xl border border-purple-200 rounded-2xl aspect-[3/4] relative overflow-hidden group shadow-lg">

              <img
                src={mentorImg}
                alt="Mr. Kishore Raveendiran"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <p className="text-lg font-bold text-gray-900">
                  Mr. Kishore Raveendiran
                </p>

                <p className="text-sm text-purple-600 font-medium">
                  {t("mentor.title")}
                </p>

              </div>

            </div>
          </ScrollReveal>

          {/* Mentor Info */}
          <ScrollReveal delay={0.15} className="md:col-span-3">
            <div className="bg-white/60 backdrop-blur-xl border border-purple-200 rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-lg">

              {/* top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

              <h3 className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">
                <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-yellow-500 bg-clip-text text-transparent">
                  Mr. Kishore Raveendiran
                </span>
              </h3>

              <p className="text-gray-600 mb-6">
                {t("mentor.title")}
              </p>

              <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">
                {t("mentor.org")}
              </p>

              <blockquote className="text-lg md:text-xl italic border-l-2 border-purple-400 pl-6 mb-8 text-gray-700">
                "{t("mentor.quote")}"
              </blockquote>

              {/* credentials */}
              <div className="flex flex-wrap gap-2 mb-8">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="text-xs bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full border border-purple-200"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <p className="text-sm font-semibold mb-4 text-gray-900">
                {t("mentor.helps")}
              </p>

              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default MentorSection;

