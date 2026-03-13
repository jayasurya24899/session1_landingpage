
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import heroBg from "@/assets/hero-bg.jpg";
// import mentorImg from "@/assets/mentor.jpeg";
// import { useLanguage } from "@/contexts/LanguageContext";

// const getTimeLeft = () => {
//   const target = new Date("2026-03-21T00:00:00+05:30").getTime();
//   const now = Date.now();
//   const diff = Math.max(0, target - now);

//   return {
//     days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//     hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//     minutes: Math.floor((diff / (1000 * 60)) % 60),
//     seconds: Math.floor((diff / 1000) % 60),
//   };
// };

// const HeroSection = () => {
//   const [time, setTime] = useState(getTimeLeft());
//   const { t } = useLanguage();

//   useEffect(() => {
//     const id = setInterval(() => setTime(getTimeLeft()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

//       {/* Background */}
//       <div className="absolute inset-0">

//         <img
//           src={heroBg}
//           alt=""
//           className="w-full h-full object-cover opacity-10"
//         />

//         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[200px] rounded-full" />

//       </div>

//       {/* Mobile-first container */}
//       <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-2 gap-10 items-center">

//         {/* RIGHT CONTENT FIRST ON MOBILE */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="order-1 lg:order-2 text-center lg:text-left max-w-xl mx-auto"
//         >

//           {/* Eyebrow */}
//           <p className="inline-block bg-purple-50 border border-purple-200 text-purple-700 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4">
//             {t("hero.eyebrow")}
//           </p>

//           {/* Headline */}
//           <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 text-gray-900">

//             {t("hero.headline1")}{" "}

//             <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-yellow-500 bg-clip-text text-transparent italic">

//               <TypeAnimation
//                 sequence={[
//                   t("hero.headline2"),
//                   2000,
//                   "21 focused days to change everything",
//                   2000,
//                   "clarity, discipline and direction",
//                   2000,
//                 ]}
//                 wrapper="span"
//                 speed={40}
//                 repeat={Infinity}
//                 cursor
//               />

//             </span>

//           </h1>

//           {/* Subtext */}
//           <p className="text-base sm:text-lg text-gray-600 mb-6">
//             {t("hero.sub")}
//           </p>

//           {/* Countdown */}
// <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-8 max-w-sm mx-auto lg:mx-0">

//   {[
//     { val: time.days, label: "Days" },
//     { val: time.hours, label: "Hours" },
//     { val: time.minutes, label: "Min" },
//     { val: time.seconds, label: "Sec" },
//   ].map((item) => (
//     <div
//       key={item.label}
//       className="flex flex-col items-center justify-center
//       h-[70px] sm:h-[80px]
//       bg-white border border-purple-100
//       rounded-xl shadow-sm"
//     >

//       <span className="text-xl sm:text-2xl font-bold text-purple-700 leading-none">
//         {String(item.val).padStart(2, "0")}
//       </span>

//       <span className="text-[11px] sm:text-xs text-gray-500 mt-1">
//         {item.label}
//       </span>

//     </div>
//   ))}

// </div>
// ```


//           {/* CTA BUTTON */}
//           <a
//             href="#reserve"
//             className="group relative inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 rounded-full
//             bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
//             text-gray-900 font-semibold
//             overflow-hidden transition-all duration-300
//             hover:-translate-y-1 hover:scale-105
//             shadow-[0_10px_35px_rgba(212,168,74,0.45)]"
//           >

//             <span className="absolute inset-0 rounded-full border border-[#e6c06a]/40 group-hover:scale-110 transition-transform duration-500"></span>

//             <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
//             translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700"></span>

//             <span className="relative flex items-center gap-2">
//               {t("hero.cta")} →
//             </span>

//           </a>

//           <p className="text-xs sm:text-sm text-gray-500 mt-3">
//             {t("hero.cta_sub")}
//           </p>

//         </motion.div>

//         {/* IMAGE SECOND ON MOBILE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="order-2 lg:order-1 flex flex-col items-center"
//         >

//           {/* Image */}
//           <div className="relative mb-6">

//             <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-[32px]" />

//             <img
//               src={mentorImg}
//               alt="Mentor"
//               className="relative w-[260px] sm:w-[340px] md:w-[420px] rounded-[28px] object-cover shadow-xl border border-purple-200"
//             />

//           </div>

//           {/* Event Details */}
//           <div className="grid grid-cols-2 gap-3 max-w-xs sm:max-w-md w-full">

//             {[
//               { label: "Date", value: "21 March 2026" },
//               { label: "Time", value: "5:55 AM – 6:45 AM" },
//               { label: "Duration", value: "21 Days" },
//               { label: "Language", value: "English" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white border border-purple-100 rounded-lg p-3 text-center shadow-sm"
//               >
//                 <p className="text-[11px] text-gray-500">{item.label}</p>
//                 <p className="text-sm font-semibold text-gray-800">
//                   {item.value}
//                 </p>
//               </div>
//             ))}

//           </div>

//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import heroBg from "@/assets/hero-bg.jpg";
// import mentorImg from "@/assets/mentor.jpeg";
// import { useLanguage } from "@/contexts/LanguageContext";

// const getTimeLeft = () => {
//   const target = new Date("2026-03-21T00:00:00+05:30").getTime();
//   const now = Date.now();
//   const diff = Math.max(0, target - now);
//   return {
//     days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
//     hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
//     minutes: Math.floor((diff / (1000 * 60)) % 60),
//     seconds: Math.floor((diff / 1000) % 60),
//   };
// };

// const HeroSection = () => {
//   const [time, setTime] = useState(getTimeLeft());
//   const { t } = useLanguage();

//   useEffect(() => {
//     const id = setInterval(() => setTime(getTimeLeft()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <>
//       {/* ── ANNOUNCEMENT BAR ── */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 border-b border-purple-600/30 py-2 px-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4">
//           <span className="text-yellow-400 text-sm animate-pulse">🔥</span>
//           <p className="text-white/90 text-xs sm:text-sm font-medium">
//             Next cohort closes in{" "}
//             <span className="font-mono font-bold text-yellow-400">
//               {time.days}d {String(time.hours).padStart(2,"0")}h{" "}
//               {String(time.minutes).padStart(2,"0")}m{" "}
//               {String(time.seconds).padStart(2,"0")}s
//             </span>
//           </p>
//           <a
//             href="#reserve"
//             className="hidden sm:inline-block px-3 py-0.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs font-bold hover:bg-yellow-400/30 transition-colors"
//           >
//             Claim Spot →
//           </a>
//         </div>
//       </div>

//       {/* ── HERO SECTION (same design, pt-9 to clear the bar) ── */}
//       <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-9">

//         {/* Background — unchanged */}
//         <div className="absolute inset-0">
//           <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10" />
//           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[200px] rounded-full" />
//         </div>

//         {/* Mobile-first container — unchanged grid */}
//         <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-2 gap-10 items-center">

//           {/* RIGHT CONTENT FIRST ON MOBILE */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="order-1 lg:order-2 text-center lg:text-left max-w-xl mx-auto"
//           >
//             {/* Eyebrow — unchanged */}
//             <p className="inline-block bg-purple-50 border border-purple-200 text-purple-700 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4">
//               {t("hero.eyebrow")}
//             </p>

//             {/* ── OUTCOME-FIRST HEADLINE ── */}
//             <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 text-gray-900">
//               Rewire your identity in{" "}
//               <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-yellow-500 bg-clip-text text-transparent italic">
//                 <TypeAnimation
//                   sequence={[
//                     "21 days",
//                     2000,
//                     "21 focused days",
//                     2000,
//                     "21 days — for good",
//                     2000,
//                   ]}
//                   wrapper="span"
//                   speed={40}
//                   repeat={Infinity}
//                   cursor
//                 />
//               </span>
//               {" "}— even if you've{" "}
//               <span className="relative inline-block">
//                 <span className="relative z-10">failed before</span>
//                 <span className="absolute bottom-0.5 left-0 right-0 h-2 bg-yellow-200/60 rounded -z-0" />
//               </span>
//             </h1>

//             {/* Subtext — unchanged */}
//             <p className="text-base sm:text-lg text-gray-600 mb-6">
//               {t("hero.sub")}
//             </p>

//             {/* Countdown — unchanged */}
//             <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-8 max-w-sm mx-auto lg:mx-0">
//               {[
//                 { val: time.days,    label: "Days"  },
//                 { val: time.hours,   label: "Hours" },
//                 { val: time.minutes, label: "Min"   },
//                 { val: time.seconds, label: "Sec"   },
//               ].map((item) => (
//                 <div
//                   key={item.label}
//                   className="flex flex-col items-center justify-center h-[70px] sm:h-[80px] bg-white border border-purple-100 rounded-xl shadow-sm"
//                 >
//                   <span className="text-xl sm:text-2xl font-bold text-purple-700 leading-none">
//                     {String(item.val).padStart(2, "0")}
//                   </span>
//                   <span className="text-[11px] sm:text-xs text-gray-500 mt-1">
//                     {item.label}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA BUTTON — unchanged */}
//             <a
//               href="#reserve"
//               className="group relative inline-flex justify-center items-center w-full sm:w-auto px-8 py-4 rounded-full
//                 bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
//                 text-gray-900 font-semibold overflow-hidden transition-all duration-300
//                 hover:-translate-y-1 hover:scale-105
//                 shadow-[0_10px_35px_rgba(212,168,74,0.45)]"
//             >
//               <span className="absolute inset-0 rounded-full border border-[#e6c06a]/40 group-hover:scale-110 transition-transform duration-500" />
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
//               <span className="relative flex items-center gap-2">
//                 {t("hero.cta")} →
//               </span>
//             </a>

//             <p className="text-xs sm:text-sm text-gray-500 mt-3">
//               {t("hero.cta_sub")}
//             </p>
//           </motion.div>

//           {/* IMAGE SECOND ON MOBILE — unchanged */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="order-2 lg:order-1 flex flex-col items-center"
//           >
//             <div className="relative mb-6">
//               <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-[32px]" />
//               <img
//                 src={mentorImg}
//                 alt="Mentor"
//                 className="relative w-[260px] sm:w-[340px] md:w-[420px] rounded-[28px] object-cover shadow-xl border border-purple-200"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-3 max-w-xs sm:max-w-md w-full">
//               {[
//                 { label: "Date",     value: "21 March 2026"  },
//                 { label: "Time",     value: "5:55 AM – 6:45 AM" },
//                 { label: "Duration", value: "21 Days"        },
//                 { label: "Language", value: "English"        },
//               ].map((item, i) => (
//                 <div key={i} className="bg-white border border-purple-100 rounded-lg p-3 text-center shadow-sm">
//                   <p className="text-[11px] text-gray-500">{item.label}</p>
//                   <p className="text-sm font-semibold text-gray-800">{item.value}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;


// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import heroBg from "@/assets/hero-bg.jpg";
// import mentorImg from "@/assets/mentor.jpeg";

// const getTimeLeft = () => {
//   const target = new Date("2026-03-21T00:00:00+05:30").getTime();
//   const diff = Math.max(0, target - Date.now());
//   return {
//     days:    Math.floor(diff / 86400000),
//     hours:   Math.floor((diff / 3600000)  % 24),
//     minutes: Math.floor((diff / 60000)    % 60),
//     seconds: Math.floor((diff / 1000)     % 60),
//   };
// };

// const HeroSection = () => {
//   const [time, setTime] = useState(getTimeLeft());
//   const seats = 78;

//   useEffect(() => {
//     const id = setInterval(() => setTime(getTimeLeft()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <>
//       {/* ── ANNOUNCEMENT BAR ── */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 border-b border-purple-600/30">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 sm:gap-4">
//           <span className="text-yellow-400 animate-pulse text-sm"></span>
//           <p className="text-white text-xs sm:text-sm font-medium flex items-center gap-1.5 flex-wrap justify-center">
//             <span>Next cohort closes in</span>
//             <span className="font-mono font-bold text-yellow-400">
//               {time.days}d {String(time.hours).padStart(2,"0")}h{" "}
//               {String(time.minutes).padStart(2,"0")}m{" "}
//               <span className="text-red-400 animate-pulse">
//                 {String(time.seconds).padStart(2,"0")}s
//               </span>
//             </span>
//           </p>
//           <a
//             href="#reserve"
//             className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
//               bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 hover:bg-yellow-400/30 transition"
//           >
//             Claim Spot →
//           </a>
//         </div>
//       </div>

//       {/* ── HERO ── */}
//       <section className="relative bg-white overflow-hidden pt-9 min-h-screen flex items-center">

//         {/* BG */}
//         <div className="absolute inset-0 pointer-events-none">
//           <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10" />
//           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[200px] rounded-full" />
//         </div>

//         <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-10 sm:py-16">

//           {/* ══════════════ MOBILE layout (< lg) — stacked single column ══════════════ */}
//           <div className="flex flex-col items-center gap-8 lg:hidden">

//             {/* 1. Eyebrow pill */}
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.45 }}
//               className="inline-block bg-purple-50 border border-purple-200 text-purple-700
//                 px-4 py-1 rounded-full text-xs font-semibold tracking-wide text-center"
//             >
//               🎯 21-Day Life Transformation Program
//             </motion.p>

//             {/* 2. Headline */}
//             <motion.h1
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.08 }}
//               className="text-[1.75rem] sm:text-4xl font-bold text-gray-900 leading-tight text-center px-1"
//             >
//               Rewire your identity in{" "}
//               <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-yellow-500 bg-clip-text text-transparent italic">
//                 <TypeAnimation
//                   sequence={["21 days", 2000, "21 focused days", 2000, "21 days that change everything", 2000]}
//                   wrapper="span" speed={40} repeat={Infinity}
//                 />
//               </span>
//               {" "}— even if you've{" "}
//               <span className="relative inline-block">
//                 <span className="relative z-10">failed before</span>
//                 <span className="absolute bottom-0.5 left-0 right-0 h-2 bg-yellow-200/60 rounded" />
//               </span>
//             </motion.h1>

//             {/* 3. Pain line */}
//             <motion.p
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.18 }}
//               className="text-base text-gray-600 text-center leading-relaxed max-w-sm"
//             >
//               Most people already know what to do.{" "}
//               <span className="text-gray-800 font-semibold">
//                 They just can't make themselves do it consistently.
//               </span>
//             </motion.p>

//             {/* 4. Social proof */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.28 }}
//               className="flex items-center gap-3"
//             >
//               <div className="flex -space-x-2">
//                 {[1,2,3,4,5].map(i => (
//                   <img key={i} src={`https://i.pravatar.cc/40?img=${i}`}
//                     className="w-8 h-8 rounded-full border-2 border-white" alt="" />
//                 ))}
//               </div>
//               <p className="text-sm text-gray-600">
//                 <strong>2,400+</strong> · ⭐⭐⭐⭐⭐ 4.9
//               </p>
//             </motion.div>

//             {/* 5. Mentor image — compact on mobile */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.55, delay: 0.3 }}
//               className="relative w-full max-w-[280px]"
//             >
//               <div className="absolute inset-0 bg-purple-400/20 blur-2xl rounded-3xl" />
//               <img src={mentorImg} alt="Mentor"
//                 className="relative w-full rounded-3xl object-cover shadow-xl border border-purple-100" />
//               {/* live badge */}
//               <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur
//                 px-2.5 py-1 rounded-full shadow border border-green-100">
//                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
//                 <span className="text-[10px] font-bold text-green-700">Live Daily</span>
//               </div>
//             </motion.div>

//             {/* 6. Countdown */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.38 }}
//               className="grid grid-cols-4 gap-2.5 w-full max-w-xs"
//             >
//               {[
//                 { v: time.days, l: "Days" },
//                 { v: time.hours, l: "Hours" },
//                 { v: time.minutes, l: "Min" },
//                 { v: time.seconds, l: "Sec" },
//               ].map(({ v, l }) => (
//                 <div key={l} className="bg-purple-50 border border-purple-100 rounded-xl py-3 text-center">
//                   <div className="text-xl font-bold text-purple-700 font-mono leading-none">
//                     {String(v).padStart(2,"0")}
//                   </div>
//                   <div className="text-[10px] text-gray-500 mt-0.5">{l}</div>
//                 </div>
//               ))}
//             </motion.div>

//             {/* 7. Scarcity bar */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.44 }}
//               className="w-full max-w-xs"
//             >
//               <div className="flex justify-between text-xs mb-1.5">
//                 <span className="text-purple-600 font-semibold">{seats}% seats filled</span>
//                 <span className="text-gray-400">Limited spots</span>
//               </div>
//               <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${seats}%` }}
//                   transition={{ duration: 1.1, delay: 0.8, ease: "easeOut" }}
//                 />
//               </div>
//             </motion.div>

//             {/* 8. Price */}
//             <motion.div
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.48 }}
//               className="text-center"
//             >
//               <p className="text-sm text-gray-400 line-through">₹22,000+ value</p>
//               <p className="text-4xl font-black text-purple-700">₹999</p>
//               <p className="text-xs text-purple-500 font-semibold mt-0.5">or start FREE for 3 days</p>
//             </motion.div>

//             {/* 9. CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 14 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.54 }}
//               className="w-full max-w-xs flex flex-col items-center gap-2"
//             >
//               <a href="#reserve"
//                 className="group relative w-full text-center py-4 rounded-full font-bold text-gray-900
//                   bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
//                   shadow-[0_8px_28px_rgba(212,168,74,0.40)]
//                   hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
//                   translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
//                 <span className="relative text-sm sm:text-base">
//                   Yes, I Want to Start My Transformation →
//                 </span>
//               </a>
//               <p className="text-xs text-gray-400 text-center">
//                 ✓ Free for 3 days &nbsp;·&nbsp; ✓ No credit card &nbsp;·&nbsp; ✓ Cancel anytime
//               </p>
//             </motion.div>

//             {/* 10. Guarantee */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.62 }}
//               className="w-full max-w-xs bg-green-50 border border-green-100 rounded-2xl p-4 flex items-start gap-3"
//             >
//               <span className="text-green-600 text-lg flex-shrink-0">🛡️</span>
//               <div>
//                 <p className="text-xs font-bold text-green-800">21-Day "You'll Feel Different" Guarantee</p>
//                 <p className="text-[11px] text-green-700 mt-0.5 leading-relaxed">
//                   If you don't feel transformed, we coach you for free until you do.
//                 </p>
//               </div>
//             </motion.div>

//             {/* 11. Event detail pills */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.68 }}
//               className="grid grid-cols-2 gap-2.5 w-full max-w-xs"
//             >
//               {[
//                 { label: "Date",     value: "21 March 2026"    },
//                 { label: "Time",     value: "5:55 – 6:45 AM"   },
//                 { label: "Duration", value: "21 Days"           },
//                 { label: "Language", value: "English"           },
//               ].map((item, i) => (
//                 <div key={i} className="bg-white border border-purple-100 rounded-xl p-3 text-center shadow-sm">
//                   <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">{item.label}</p>
//                   <p className="text-sm font-bold text-gray-800 mt-0.5">{item.value}</p>
//                 </div>
//               ))}
//             </motion.div>

//           </div>

//           {/* ══════════════ DESKTOP layout (lg+) — two column ══════════════ */}
//           <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">

//             {/* LEFT — headline + CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="inline-block bg-purple-50 border border-purple-200 text-purple-700
//                 px-4 py-1 rounded-full text-sm font-semibold mb-5">
//                 🎯 21-Day Life Transformation Program
//               </p>

//               <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-5">
//                 Rewire your identity in{" "}
//                 <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-yellow-500 bg-clip-text text-transparent italic">
//                   <TypeAnimation
//                     sequence={["21 days", 2000, "21 focused days", 2000, "21 days that change everything", 2000]}
//                     wrapper="span" speed={40} repeat={Infinity}
//                   />
//                 </span>
//                 {" "}— even if you've{" "}
//                 <span className="relative inline-block">
//                   <span className="relative z-10">failed before</span>
//                   <span className="absolute bottom-1 left-0 right-0 h-2.5 bg-yellow-200/55 rounded" />
//                 </span>
//               </h1>

//               <p className="text-lg text-gray-600 mb-7 leading-relaxed">
//                 Most people already know what to do.{" "}
//                 <span className="text-gray-800 font-semibold">
//                   They just can't make themselves do it consistently.
//                 </span>
//               </p>

//               {/* Social proof */}
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="flex -space-x-2">
//                   {[1,2,3,4,5].map(i => (
//                     <img key={i} src={`https://i.pravatar.cc/40?img=${i}`}
//                       className="w-9 h-9 rounded-full border-2 border-white" alt="" />
//                   ))}
//                 </div>
//                 <p className="text-sm text-gray-600">
//                   <strong>400+ members</strong> · ⭐⭐⭐⭐⭐ 4.9 rating
//                 </p>
//               </div>

//               <a href="#reserve"
//                 className="group relative inline-flex items-center px-9 py-4 rounded-full font-semibold text-gray-900
//                   bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
//                   shadow-[0_10px_35px_rgba(212,168,74,0.45)]
//                   hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
//                   translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
//                 <span className="relative">Yes, I Want to Start My Transformation →</span>
//               </a>

//               <p className="text-sm text-gray-400 mt-3">
//                 ✓ Free for 3 days &nbsp;·&nbsp; ✓ No credit card &nbsp;·&nbsp; ✓ Cancel anytime
//               </p>
//             </motion.div>

//             {/* RIGHT — conversion card */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.15 }}
//               className="max-w-md mx-auto w-full"
//             >
//               <div className="bg-white border border-purple-100 rounded-3xl shadow-2xl overflow-hidden">
//                 <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#a78bfa] to-[#D4AF37]" />
//                 <div className="p-7">

//                   {/* image */}
//                   <div className="relative mb-5">
//                     <div className="absolute inset-0 bg-purple-400/15 blur-2xl rounded-2xl" />
//                     <img src={mentorImg} alt="Mentor"
//                       className="relative w-full rounded-2xl object-cover shadow-md border border-purple-100" />
//                     <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur
//                       px-2.5 py-1 rounded-full shadow border border-green-100">
//                       <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
//                       <span className="text-[10px] font-bold text-green-700">Live Daily Sessions</span>
//                     </div>
//                   </div>

//                   {/* countdown */}
//                   <p className="text-[10px] font-bold tracking-widest uppercase text-purple-500 mb-2 text-center">
//                     Cohort Closes In
//                   </p>
//                   <div className="grid grid-cols-4 gap-2 mb-5">
//                     {[
//                       { v: time.days, l: "Days" },
//                       { v: time.hours, l: "Hours" },
//                       { v: time.minutes, l: "Min" },
//                       { v: time.seconds, l: "Sec" },
//                     ].map(({ v, l }) => (
//                       <div key={l} className="bg-purple-50 rounded-xl py-3 text-center border border-purple-100">
//                         <div className="text-xl font-bold text-purple-700 font-mono leading-none">
//                           {String(v).padStart(2,"0")}
//                         </div>
//                         <div className="text-[10px] text-gray-400 mt-0.5">{l}</div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* scarcity */}
//                   <div className="mb-5">
//                     <div className="flex justify-between text-xs mb-1.5">
//                       <span className="text-purple-600 font-semibold">{seats}% seats filled</span>
//                       <span className="text-gray-400">Limited spots</span>
//                     </div>
//                     <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
//                       <motion.div
//                         className="h-full bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full"
//                         initial={{ width: 0 }}
//                         animate={{ width: `${seats}%` }}
//                         transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
//                       />
//                     </div>
//                   </div>

//                   {/* price */}
//                   <div className="text-center mb-5 p-3 bg-yellow-50 rounded-xl border border-yellow-100">
//                     <p className="text-sm text-gray-400 line-through">₹22,000+ value</p>
//                     <p className="text-3xl font-black text-purple-700">₹999</p>
//                     <p className="text-xs text-purple-500 font-semibold mt-0.5">or start </p>
//                   </div>

//                   {/* CTA */}
//                   <a href="#reserve"
//                     className="block w-full text-center py-4 rounded-2xl font-bold text-gray-900
//                       bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
//                       shadow-[0_6px_22px_rgba(212,168,74,0.38)]
//                       hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-200"
//                   >
//                     Start My 21 Days →
//                   </a>

//                   {/* micro trust */}
//                   <p className="text-[11px] text-gray-400 text-center mt-3">
//                     ✓ Free 3 days &nbsp;·&nbsp; ✓ No card &nbsp;·&nbsp; ✓ Cancel anytime
//                   </p>

//                   {/* guarantee */}
//                   <div className="mt-4 flex items-start gap-2.5 p-3 bg-green-50 rounded-xl border border-green-100">
//                     <span className="text-green-600 flex-shrink-0">🛡️</span>
//                     <div>
//                       <p className="text-xs font-bold text-green-800">21-Day "You'll Feel Different" Guarantee</p>
//                       <p className="text-[11px] text-green-700 mt-0.5 leading-relaxed">
//                         If you don't transform, we coach you for free until you do.
//                       </p>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import heroBg from "@/assets/hero-bg.jpg";
// import mentorImg from "@/assets/mentor.jpeg";
// import member1 from "@/assets/img_1.jpeg";
// import member2 from "@/assets/img_2.jpeg";
// import member3 from "@/assets/img_3.jpeg";
// import member4 from "@/assets/img_4.jpeg";
// import member5 from "@/assets/img_5.jpeg";
// import member6 from "@/assets/img_6.jpeg";

// const getTimeLeft = () => {
//   const target = new Date("2026-03-21T00:00:00+05:30").getTime();
//   const diff = Math.max(0, target - Date.now());
//   return {
//     days:    Math.floor(diff / 86400000),
//     hours:   Math.floor((diff / 3600000)  % 24),
//     minutes: Math.floor((diff / 60000)    % 60),
//     seconds: Math.floor((diff / 1000)     % 60),
//   };
// };

// const HeroSection = () => {
//   const [time, setTime] = useState(getTimeLeft());
//   const seats = 78;

//   useEffect(() => {
//     const id = setInterval(() => setTime(getTimeLeft()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <>
//       {/* ── ANNOUNCEMENT BAR ── */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 border-b border-purple-600/30">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 sm:gap-4">
//           <span className="text-yellow-400 animate-pulse text-sm"></span>
//           <p className="text-white text-xs sm:text-sm font-medium flex items-center gap-1.5 flex-wrap justify-center">
//             <span>Next cohort closes in</span>
//             <span className="font-mono font-bold text-yellow-400">
//               {time.days}d {String(time.hours).padStart(2,"0")}h{" "}
//               {String(time.minutes).padStart(2,"0")}m{" "}
//               <span className="text-red-400 animate-pulse">
//                 {String(time.seconds).padStart(2,"0")}s
//               </span>
//             </span>
//           </p>
//           <a
//             href="#reserve"
//             className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
//               bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 hover:bg-yellow-400/30 transition"
//           >
//             Claim Spot →
//           </a>
//         </div>
//       </div>

//       {/* ── HERO ── */}
//       <section className="relative bg-white overflow-hidden pt-9 min-h-screen flex items-center">

//         {/* BG */}
//         <div className="absolute inset-0 pointer-events-none">
//           <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10" />
//           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[200px] rounded-full" />
//         </div>

//         <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-10 sm:py-16">

//           {/* ══════════════ MOBILE layout (< lg) — stacked single column ══════════════ */}
//           <div className="flex flex-col items-center gap-8 lg:hidden">

//             {/* 1. Eyebrow pill */}
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.45 }}
//               className="inline-block bg-purple-50 border border-purple-200 text-purple-700
//                 px-4 py-1 rounded-full text-xs font-semibold tracking-wide text-center"
//             >
//               🎯 21-Day Life Transformation Program
//             </motion.p>

//             {/* 2. Headline */}
//             <motion.h1
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.08 }}
//               className="text-[1.75rem] sm:text-4xl font-bold text-gray-900 leading-tight text-center px-1"
//             >
//               Rewire your identity in{" "}
//               <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-yellow-500 bg-clip-text text-transparent italic">
//                 <TypeAnimation
//                   sequence={["21 days", 2000, "21 focused days", 2000, "21 days that change everything", 2000]}
//                   wrapper="span" speed={40} repeat={Infinity}
//                 />
//               </span>
//               {" "}— even if you've{" "}
//               <span className="relative inline-block">
//                 <span className="relative z-10">failed before</span>
//                 <span className="absolute bottom-0.5 left-0 right-0 h-2 bg-yellow-200/60 rounded" />
//               </span>
//             </motion.h1>

//             {/* 3. Pain line */}
//             <motion.p
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.18 }}
//               className="text-base text-gray-600 text-center leading-relaxed max-w-sm"
//             >
//               Most people already know what to do.{" "}
//               <span className="text-gray-800 font-semibold">
//                 They just can't make themselves do it consistently.
//               </span>
//             </motion.p>

//             {/* 4. Social proof */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.28 }}
//               className="flex items-center gap-3"
//             >
//               <div className="flex -space-x-2">
//                 {[
//                   {src:member1,pos:"center center"},
//                   {src:member2,pos:"center top"},
//                   {src:member3,pos:"center center"},
//                   {src:member4,pos:"center center"},
//                   {src:member5,pos:"center top"},
//                   {src:member6,pos:"center top"},
//                 ].map(({src,pos},i) => (
//                   <img key={i} src={src}
//                     className="w-8 h-8 rounded-full border-2 border-white object-cover"
//                     style={{objectPosition: pos}} alt="" />
//                 ))}
//               </div>
//               <p className="text-sm text-gray-600">
//                 <strong>400+</strong> · ⭐⭐⭐⭐⭐ 4.9
//               </p>
//             </motion.div>

//             {/* 5. Mentor image — compact on mobile */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.55, delay: 0.3 }}
//               className="relative w-full max-w-[280px]"
//             >
//               <div className="absolute inset-0 bg-purple-400/20 blur-2xl rounded-3xl" />
//               <img src={mentorImg} alt="Mentor"
//                 className="relative w-full rounded-3xl object-cover shadow-xl border border-purple-100" />
//               {/* live badge */}
//               <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur
//                 px-2.5 py-1 rounded-full shadow border border-green-100">
//                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
//                 <span className="text-[10px] font-bold text-green-700">Live Daily</span>
//               </div>
//             </motion.div>

//             {/* 6. Countdown */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.38 }}
//               className="grid grid-cols-4 gap-2.5 w-full max-w-xs"
//             >
//               {[
//                 { v: time.days, l: "Days" },
//                 { v: time.hours, l: "Hours" },
//                 { v: time.minutes, l: "Min" },
//                 { v: time.seconds, l: "Sec" },
//               ].map(({ v, l }) => (
//                 <div key={l} className="bg-purple-50 border border-purple-100 rounded-xl py-3 text-center">
//                   <div className="text-xl font-bold text-purple-700 font-mono leading-none">
//                     {String(v).padStart(2,"0")}
//                   </div>
//                   <div className="text-[10px] text-gray-500 mt-0.5">{l}</div>
//                 </div>
//               ))}
//             </motion.div>

//             {/* 7. Scarcity bar */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.44 }}
//               className="w-full max-w-xs"
//             >
//               <div className="flex justify-between text-xs mb-1.5">
//                 <span className="text-purple-600 font-semibold">{seats}% seats filled</span>
//                 <span className="text-gray-400">Limited spots</span>
//               </div>
//               <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${seats}%` }}
//                   transition={{ duration: 1.1, delay: 0.8, ease: "easeOut" }}
//                 />
//               </div>
//             </motion.div>

//             {/* 8. Price */}
//             <motion.div
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.48 }}
//               className="text-center"
//             >
//               <p className="text-sm text-gray-400 line-through">₹22,000+ value</p>
//               <p className="text-4xl font-black text-purple-700">₹999</p>
//               <p className="text-xs text-purple-500 font-semibold mt-0.5">or start FREE for 3 days</p>
//             </motion.div>

//             {/* 9. CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 14 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.54 }}
//               className="w-full max-w-xs flex flex-col items-center gap-2"
//             >
//               <a href="#reserve"
//                 className="group relative w-full text-center py-4 rounded-full font-bold text-gray-900
//                   bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
//                   shadow-[0_8px_28px_rgba(212,168,74,0.40)]
//                   hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
//                   translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
//                 <span className="relative text-sm sm:text-base">
//                   Yes, I Want to Start My Transformation →
//                 </span>
//               </a>
//               <p className="text-xs text-gray-400 text-center">
//                 ✓ Free for 3 days &nbsp;·&nbsp; ✓ No credit card &nbsp;·&nbsp; ✓ Cancel anytime
//               </p>
//             </motion.div>

//             {/* 10. Guarantee */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.62 }}
//               className="w-full max-w-xs bg-green-50 border border-green-100 rounded-2xl p-4 flex items-start gap-3"
//             >
//               <span className="text-green-600 text-lg flex-shrink-0">🛡️</span>
//               <div>
//                 <p className="text-xs font-bold text-green-800">21-Day "You'll Feel Different" Guarantee</p>
//                 <p className="text-[11px] text-green-700 mt-0.5 leading-relaxed">
//                   If you don't feel transformed, we coach you for free until you do.
//                 </p>
//               </div>
//             </motion.div>

//             {/* 11. Event detail pills */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.68 }}
//               className="grid grid-cols-2 gap-2.5 w-full max-w-xs"
//             >
//               {[
//                 { label: "Date",     value: "21 March 2026"    },
//                 { label: "Time",     value: "5:55 – 6:45 AM"   },
//                 { label: "Duration", value: "21 Days"           },
//                 { label: "Language", value: "English"           },
//               ].map((item, i) => (
//                 <div key={i} className="bg-white border border-purple-100 rounded-xl p-3 text-center shadow-sm">
//                   <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">{item.label}</p>
//                   <p className="text-sm font-bold text-gray-800 mt-0.5">{item.value}</p>
//                 </div>
//               ))}
//             </motion.div>

//           </div>

//           {/* ══════════════ DESKTOP layout (lg+) — two column ══════════════ */}
//           <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">

//             {/* LEFT — headline + CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="inline-block bg-purple-50 border border-purple-200 text-purple-700
//                 px-4 py-1 rounded-full text-sm font-semibold mb-5">
//                 🎯 21-Day Life Transformation Program
//               </p>

//               <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-5">
//                 Rewire your identity in{" "}
//                 <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-yellow-500 bg-clip-text text-transparent italic">
//                   <TypeAnimation
//                     sequence={["21 days", 2000, "21 focused days", 2000, "21 days that change everything", 2000]}
//                     wrapper="span" speed={40} repeat={Infinity}
//                   />
//                 </span>
//                 {" "}— even if you've{" "}
//                 <span className="relative inline-block">
//                   <span className="relative z-10">failed before</span>
//                   <span className="absolute bottom-1 left-0 right-0 h-2.5 bg-yellow-200/55 rounded" />
//                 </span>
//               </h1>

//               <p className="text-lg text-gray-600 mb-7 leading-relaxed">
//                 Most people already know what to do.{" "}
//                 <span className="text-gray-800 font-semibold">
//                   They just can't make themselves do it consistently.
//                 </span>
//               </p>

//               {/* Social proof */}
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="flex -space-x-2">
//                   {[
//                     {src:member1,pos:"center 10%"},
//                     {src:member2,pos:"center top"},
//                     {src:member3,pos:"center center"},
//                     {src:member4,pos:"center center"},
//                     {src:member5,pos:"center top"},
//                     {src:member6,pos:"center top"},
//                   ].map(({src,pos},i) => (
//                     <img key={i} src={src}
//                       className="w-9 h-9 rounded-full border-2 border-white object-cover"
//                       style={{objectPosition: pos}} alt="" />
//                   ))}
//                 </div>
//                 <p className="text-sm text-gray-600">
//                   <strong>400+ members</strong> · ⭐⭐⭐⭐⭐ 4.9 rating
//                 </p>
//               </div>

//               <a href="#reserve"
//                 className="group relative inline-flex items-center px-9 py-4 rounded-full font-semibold text-gray-900
//                   bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
//                   shadow-[0_10px_35px_rgba(212,168,74,0.45)]
//                   hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
//                   translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
//                 <span className="relative">Yes, I Want to Start My Transformation →</span>
//               </a>

//               <p className="text-sm text-gray-400 mt-3">
//                 ✓ Free for 3 days &nbsp;·&nbsp; ✓ No credit card &nbsp;·&nbsp; ✓ Cancel anytime
//               </p>
//             </motion.div>

//             {/* RIGHT — conversion card */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.15 }}
//               className="max-w-md mx-auto w-full"
//             >
//               <div className="bg-white border border-purple-100 rounded-3xl shadow-2xl overflow-hidden">
//                 <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#a78bfa] to-[#D4AF37]" />
//                 <div className="p-7">

//                   {/* image */}
//                   <div className="relative mb-5">
//                     <div className="absolute inset-0 bg-purple-400/15 blur-2xl rounded-2xl" />
//                     <img src={mentorImg} alt="Mentor"
//                       className="relative w-full rounded-2xl object-cover shadow-md border border-purple-100" />
//                     <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur
//                       px-2.5 py-1 rounded-full shadow border border-green-100">
//                       <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
//                       <span className="text-[10px] font-bold text-green-700">Live Daily Sessions</span>
//                     </div>
//                   </div>

//                   {/* countdown */}
//                   <p className="text-[10px] font-bold tracking-widest uppercase text-purple-500 mb-2 text-center">
//                     Cohort Closes In
//                   </p>
//                   <div className="grid grid-cols-4 gap-2 mb-5">
//                     {[
//                       { v: time.days, l: "Days" },
//                       { v: time.hours, l: "Hours" },
//                       { v: time.minutes, l: "Min" },
//                       { v: time.seconds, l: "Sec" },
//                     ].map(({ v, l }) => (
//                       <div key={l} className="bg-purple-50 rounded-xl py-3 text-center border border-purple-100">
//                         <div className="text-xl font-bold text-purple-700 font-mono leading-none">
//                           {String(v).padStart(2,"0")}
//                         </div>
//                         <div className="text-[10px] text-gray-400 mt-0.5">{l}</div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* scarcity */}
//                   <div className="mb-5">
//                     <div className="flex justify-between text-xs mb-1.5">
//                       <span className="text-purple-600 font-semibold">{seats}% seats filled</span>
//                       <span className="text-gray-400">Limited spots</span>
//                     </div>
//                     <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
//                       <motion.div
//                         className="h-full bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full"
//                         initial={{ width: 0 }}
//                         animate={{ width: `${seats}%` }}
//                         transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
//                       />
//                     </div>
//                   </div>

//                   {/* price */}
//                   <div className="text-center mb-5 p-3 bg-yellow-50 rounded-xl border border-yellow-100">
//                     <p className="text-sm text-gray-400 line-through">₹22,000+ value</p>
//                     <p className="text-3xl font-black text-purple-700">₹999</p>
//                     <p className="text-xs text-purple-500 font-semibold mt-0.5">or start FREE for 3 days</p>
//                   </div>

//                   {/* CTA */}
//                   <a href="#reserve"
//                     className="block w-full text-center py-4 rounded-2xl font-bold text-gray-900
//                       bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
//                       shadow-[0_6px_22px_rgba(212,168,74,0.38)]
//                       hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-200"
//                   >
//                     Start My 21 Days →
//                   </a>

//                   {/* micro trust */}
//                   <p className="text-[11px] text-gray-400 text-center mt-3">
//                     ✓ Free 3 days &nbsp;·&nbsp; ✓ No card &nbsp;·&nbsp; ✓ Cancel anytime
//                   </p>

//                   {/* guarantee */}
//                   <div className="mt-4 flex items-start gap-2.5 p-3 bg-green-50 rounded-xl border border-green-100">
//                     <span className="text-green-600 flex-shrink-0">🛡️</span>
//                     <div>
//                       <p className="text-xs font-bold text-green-800">21-Day "You'll Feel Different" Guarantee</p>
//                       <p className="text-[11px] text-green-700 mt-0.5 leading-relaxed">
//                         If you don't transform, we coach you for free until you do.
//                       </p>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroBg from "@/assets/hero-bg.jpg";
import mentorImg from "@/assets/mentor.jpeg";
import member1 from "@/assets/img_1.jpeg";
import member2 from "@/assets/img_2.jpeg";
import member3 from "@/assets/img_3.jpeg";
import member4 from "@/assets/img_4.jpeg";
import member5 from "@/assets/img_5.jpeg";
import member6 from "@/assets/img_6.jpeg";
import { CalendarDays } from "lucide-react";
import { Clock } from "lucide-react";
import { Timer } from "lucide-react";
import { Globe } from "lucide-react";
const getTimeLeft = () => {
  const target = new Date("2026-03-21T00:00:00+05:30").getTime();
  const diff = Math.max(0, target - Date.now());
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff / 3600000)  % 24),
    minutes: Math.floor((diff / 60000)    % 60),
    seconds: Math.floor((diff / 1000)     % 60),
  };
};

const HeroSection = () => {
  const [time, setTime] = useState(getTimeLeft());
  const seats = 78;

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 border-b border-purple-600/30">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 sm:gap-4">
          <span className="text-yellow-400 animate-pulse text-sm"></span>
          <p className="text-white text-xs sm:text-sm font-medium flex items-center gap-1.5 flex-wrap justify-center">
            <span>Next cohort closes in</span>
            <span className="font-mono font-bold text-yellow-400">
              {time.days}d {String(time.hours).padStart(2,"0")}h{" "}
              {String(time.minutes).padStart(2,"0")}m{" "}
              <span className="text-red-400 animate-pulse">
                {String(time.seconds).padStart(2,"0")}s
              </span>
            </span>
          </p>
          <a
            href="#reserve"
            className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
              bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 hover:bg-yellow-400/30 transition"
          >
            Claim Spot →
          </a>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden pt-9 min-h-screen flex items-center">

        {/* BG */}
        <div className="absolute inset-0 pointer-events-none">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[200px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-10 sm:py-16">

          {/* ══════════════ MOBILE layout (< lg) — stacked single column ══════════════ */}
          <div className="flex flex-col items-center gap-8 lg:hidden">

            {/* 1. Eyebrow pill */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-block bg-purple-50 border border-purple-200 text-purple-700
                px-4 py-1 rounded-full text-xs font-semibold tracking-wide text-center"
            >
              🎯 21-Day Life Transformation Program
            </motion.p>

            {/* 2. Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-[1.75rem] sm:text-4xl font-bold text-gray-900 leading-tight text-center px-1"
            >
              Rewire your identity in{" "}
              <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-yellow-500 bg-clip-text text-transparent italic">
                <TypeAnimation
                  sequence={["21 days", 2000, "21 focused days", 2000, "21 days that change everything", 2000]}
                  wrapper="span" speed={40} repeat={Infinity}
                />
              </span>
              {" "}— even if you've{" "}
              <span className="relative inline-block">
                <span className="relative z-10">failed before</span>
                <span className="absolute bottom-0.5 left-0 right-0 h-2 bg-yellow-200/60 rounded" />
              </span>
            </motion.h1>

            {/* 3. Pain line */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base text-gray-600 text-center leading-relaxed max-w-sm"
            >
              Most people already know what to do.{" "}
              <span className="text-gray-800 font-semibold">
                They just can't make themselves do it consistently.
              </span>
            </motion.p>

            {/* 4. Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[
                  {src:member1,pos:"center 30%"},
                  {src:member2,pos:"center top"},
                  {src:member3,pos:"center center"},
                  {src:member4,pos:"center center"},
                  {src:member5,pos:"center top"},
                  {src:member6,pos:"center top"},
                ].map(({src,pos},i) => (
                  <img key={i} src={src}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    style={{objectPosition: pos}} alt="" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <strong>400+</strong> · ⭐⭐⭐⭐⭐ 4.9
              </p>
            </motion.div>

            {/* 5. Mentor image — compact on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="relative w-full max-w-[280px]"
            >
              <div className="absolute inset-0 bg-purple-400/20 blur-2xl rounded-3xl" />
              <img src={mentorImg} alt="Mentor"
                className="relative w-full rounded-3xl object-cover shadow-xl border border-purple-100" />
              {/* live badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur
                px-2.5 py-1 rounded-full shadow border border-green-100">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-green-700">Live Daily</span>
              </div>
            </motion.div>

            {/* 6. Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="grid grid-cols-4 gap-2.5 w-full max-w-xs"
            >
              {[
                { v: time.days, l: "Days" },
                { v: time.hours, l: "Hours" },
                { v: time.minutes, l: "Min" },
                { v: time.seconds, l: "Sec" },
              ].map(({ v, l }) => (
                <div key={l} className="bg-purple-50 border border-purple-100 rounded-xl py-3 text-center">
                  <div className="text-xl font-bold text-purple-700 font-mono leading-none">
                    {String(v).padStart(2,"0")}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{l}</div>
                </div>
              ))}
            </motion.div>

            {/* 7. Scarcity bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="w-full max-w-xs"
            >
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-purple-600 font-semibold">{seats}% seats filled</span>
                <span className="text-gray-400">Limited spots</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${seats}%` }}
                  transition={{ duration: 1.1, delay: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* 8. Price */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="text-center"
            >
              <p className="text-sm text-gray-400 line-through">₹22,000+ value</p>
              <p className="text-4xl font-black text-purple-700">₹999</p>
              <p className="text-xs text-purple-500 font-semibold mt-0.5">or start FREE for 3 days</p>
            </motion.div>

            {/* 9. CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.54 }}
              className="w-full max-w-xs flex flex-col items-center gap-2"
            >
              <a href="#reserve"
                className="group relative w-full text-center py-4 rounded-full font-bold text-gray-900
                  bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
                  shadow-[0_8px_28px_rgba(212,168,74,0.40)]
                  hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                  translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
                <span className="relative text-sm sm:text-base">
                  Yes, I Want to Start My Transformation →
                </span>
              </a>
              <p className="text-xs text-gray-400 text-center">
                ✓ Free for 3 days &nbsp;·&nbsp; ✓ No credit card &nbsp;·&nbsp; ✓ Cancel anytime
              </p>
            </motion.div>

            {/* 10. Guarantee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.62 }}
              className="w-full max-w-xs bg-green-50 border border-green-100 rounded-2xl p-4 flex items-start gap-3"
            >
              <span className="text-green-600 text-lg flex-shrink-0">🛡️</span>
              <div>
                <p className="text-xs font-bold text-green-800">21-Day "You'll Feel Different" Guarantee</p>
                <p className="text-[11px] text-green-700 mt-0.5 leading-relaxed">
                  If you don't feel transformed, we coach you for free until you do.
                </p>
              </div>
            </motion.div>

            {/* 11. Event detail pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.68 }}
              className="grid grid-cols-2 gap-2.5 w-full max-w-xs"
            >
              {[
                { label: "Date",     value: "21 March 2026"    },
                { label: "Time",     value: "5:55 – 6:45 AM"   },
                { label: "Duration", value: "21 Days"           },
                { label: "Language", value: "English"          },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-purple-100 rounded-xl p-3 text-center shadow-sm">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">{item.label}</p>
                  <p className="text-sm font-bold text-gray-800 mt-0.5">{item.value}</p>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ══════════════ DESKTOP layout (lg+) — two column ══════════════ */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — headline + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="inline-block bg-purple-50 border border-purple-200 text-purple-700
                px-4 py-1 rounded-full text-sm font-semibold mb-5">
                🎯 21-Day Life Transformation Program
              </p>

              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-5">
                Rewire your identity in{" "}
                <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-yellow-500 bg-clip-text text-transparent italic">
                  <TypeAnimation
                    sequence={["21 days", 2000, "21 focused days", 2000, "21 days that change everything", 2000]}
                    wrapper="span" speed={40} repeat={Infinity}
                  />
                </span>
                {" "}— even if you've{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">failed before</span>
                  <span className="absolute bottom-1 left-0 right-0 h-2.5 bg-yellow-200/55 rounded" />
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-7 leading-relaxed">
                Most people already know what to do.{" "}
                <span className="text-gray-800 font-semibold">
                  They just can't make themselves do it consistently.
                </span>
              </p>

              {/* Social proof */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex -space-x-2">
                  {[
                    {src:member1,pos:"center 5%"},
                    {src:member2,pos:"center top"},
                    {src:member3,pos:"center center"},
                    {src:member4,pos:"center center"},
                    {src:member5,pos:"center top"},
                    {src:member6,pos:"center top"},
                  ].map(({src,pos},i) => (
                    <img key={i} src={src}
                      className="w-9 h-9 rounded-full border-2 border-white object-cover"
                      style={{objectPosition: pos}} alt="" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <strong>400+ members</strong> · ⭐⭐⭐⭐⭐ 4.9 rating
                </p>
              </div>

              <a href="#reserve"
                className="group relative inline-flex items-center px-9 py-4 rounded-full font-semibold text-gray-900
                  bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
                  shadow-[0_10px_35px_rgba(212,168,74,0.45)]
                  hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
                  translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
                <span className="relative">Yes, I Want to Start My Transformation →</span>
              </a>

              <p className="text-sm text-gray-400 mt-3">
                ✓ Free for 3 days &nbsp;·&nbsp; ✓ No credit card &nbsp;·&nbsp; ✓ Cancel anytime
              </p>

              {/* ── Event details strip ── */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  { Icon: CalendarDays, label: "Starts",        value: "21 March 2026"  },
                  { Icon: Clock,        label: "Every Morning",  value: "8:30 – 9:30 PM" },
                  { Icon: Timer,        label: "Duration",       value: "21 Days"        },
                  // { Icon: Globe,        label: "Language",       value: "English & Tamil"},
                ].map(({ Icon, label, value }, i) => (
                  <div key={i}
                    className="flex items-center gap-2.5 bg-purple-50 border border-purple-100
                      rounded-xl px-3.5 py-2.5"
                  >
                    <Icon size={16} className="text-purple-500 flex-shrink-0" strokeWidth={1.8} />
                    <div>
                      <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider leading-none">
                        {label}
                      </p>
                      <p className="text-sm font-bold text-gray-800 mt-0.5 leading-none">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — conversion card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-md mx-auto w-full"
            >
              <div className="bg-white border border-purple-100 rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#a78bfa] to-[#D4AF37]" />
                <div className="p-7">

                  {/* image */}
                  <div className="relative mb-5">
                    <div className="absolute inset-0 bg-purple-400/15 blur-2xl rounded-2xl" />
                    <img src={mentorImg} alt="Mentor"
                      className="relative w-full rounded-2xl object-cover shadow-md border border-purple-100" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur
                      px-2.5 py-1 rounded-full shadow border border-green-100">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold text-green-700">Live Daily Sessions</span>
                    </div>
                  </div>

                  {/* countdown */}
                  <p className="text-[10px] font-bold tracking-widest uppercase text-purple-500 mb-2 text-center">
                    Cohort Closes In
                  </p>
                  <div className="grid grid-cols-4 gap-2 mb-5">
                    {[
                      { v: time.days, l: "Days" },
                      { v: time.hours, l: "Hours" },
                      { v: time.minutes, l: "Min" },
                      { v: time.seconds, l: "Sec" },
                    ].map(({ v, l }) => (
                      <div key={l} className="bg-purple-50 rounded-xl py-3 text-center border border-purple-100">
                        <div className="text-xl font-bold text-purple-700 font-mono leading-none">
                          {String(v).padStart(2,"0")}
                        </div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{l}</div>
                      </div>
                    ))}
                  </div>

                  {/* scarcity */}
                  <div className="mb-5">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-purple-600 font-semibold">{seats}% seats filled</span>
                      <span className="text-gray-400">Limited spots</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${seats}%` }}
                        transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* price */}
                  <div className="text-center mb-5 p-3 bg-yellow-50 rounded-xl border border-yellow-100">
                    <p className="text-sm text-gray-400 line-through">₹22,000+ value</p>
                    <p className="text-3xl font-black text-purple-700">₹999</p>
                    <p className="text-xs text-purple-500 font-semibold mt-0.5">or start FREE for 3 days</p>
                  </div>

                  {/* CTA */}
                  <a href="#reserve"
                    className="block w-full text-center py-4 rounded-2xl font-bold text-gray-900
                      bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
                      shadow-[0_6px_22px_rgba(212,168,74,0.38)]
                      hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Start My 21 Days →
                  </a>

                  {/* micro trust */}
                  <p className="text-[11px] text-gray-400 text-center mt-3">
                    ✓ Free 3 days &nbsp;·&nbsp; ✓ No card &nbsp;·&nbsp; ✓ Cancel anytime
                  </p>

                  {/* guarantee */}
                  <div className="mt-4 flex items-start gap-2.5 p-3 bg-green-50 rounded-xl border border-green-100">
                    <span className="text-green-600 flex-shrink-0">🛡️</span>
                    <div>
                      <p className="text-xs font-bold text-green-800">21-Day "You'll Feel Different" Guarantee</p>
                      <p className="text-[11px] text-green-700 mt-0.5 leading-relaxed">
                        If you don't transform, we coach you for free until you do.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;