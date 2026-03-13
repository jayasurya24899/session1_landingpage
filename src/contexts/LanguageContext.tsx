import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ta";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Hero
  "hero.eyebrow": {
    en: "1% Community · 21 Day Transformation · Batch Starts March 21",
    ta: "1% சமூகம் · 21 நாள் மாற்றம் · மார்ச் 14 தொடங்குகிறது",
  },
  "hero.headline1": {
    en: "You haven't lost your potential.",
    ta: "நீங்கள் உங்கள் திறனை இழக்கவில்லை.",
  },
  "hero.headline2": {
    en: "You've just never had 21 focused days to find it.",
    ta: "அதைக் கண்டறிய 21 கவனமான நாட்கள் உங்களுக்கு கிடைக்கவில்லை.",
  },
  "hero.sub": {
    en: "One hour a day. 21 days. Live sessions that take you from fog to clarity — in life, in business, or both.",
    ta: "ஒரு நாளைக்கு ஒரு மணி நேரம். 21 நாட்கள். மூடுபனியிலிருந்து தெளிவுக்கு — வாழ்க்கையில், தொழிலில், அல்லது இரண்டிலும்.",
  },
  "hero.social1": {
    en: "Join the 1% who chose to show up",
    ta: "வந்த 1% இல் சேருங்கள்",
  },
  "hero.social2": {
    en: "Led by Mr. Kishore Raveendiran — 5+ years in transformation",
    ta: "திரு. கிஷோர் ரவீந்திரன் தலைமையில் — 5+ ஆண்டுகள் மாற்ற அனுபவம்",
  },
  "hero.cta": {
    en: "Start My 21 Days →",
    ta: "உங்கள் இடத்தை பதிவு செய்யுங்கள் →",
  },
  "hero.cta_sub": {
    en: "21 days from now, someone will change. Will it be you?",
    ta: "மார்ச் 14 தொடங்குகிறது · வரையறுக்கப்பட்ட இடங்கள்",
  },
  "hero.fud1": {
    en: "Online · Live · No recordings needed — just show up",
    ta: "ஆன்லைன் · நேரலை · பதிவுகள் தேவையில்லை — வாருங்கள்",
  },
  "hero.fud2": {
    en: "Starts at ₹999 · Less than ₹48 per session",
    ta: "₹999 இல் தொடங்குகிறது · ஒரு அமர்வுக்கு ₹48 க்கும் குறைவு",
  },
  "hero.days": { en: "Days", ta: "நாட்கள்" },
  "hero.hours": { en: "Hours", ta: "மணி" },
  "hero.min": { en: "Min", ta: "நிமி" },
  "hero.sec": { en: "Sec", ta: "வினா" },

  // Pain Point
  "pain.p1": {
    en: "Most people aren't lazy. They're",
    ta: "பெரும்பாலானோர் சோம்பேறிகள் அல்ல. அவர்கள்",
  },
  "pain.unclear": { en: "unclear", ta: "தெளிவற்றவர்கள்" },
  "pain.p1_rest": {
    en: ". You scroll, you plan, you intend — but the days blur together and the version of you that \"has it figured out\" keeps getting pushed to next week. Next month. Next year.",
    ta: ". நீங்கள் ஸ்க்ரோல் செய்கிறீர்கள், திட்டமிடுகிறீர்கள், நினைக்கிறீர்கள் — ஆனால் நாட்கள் ஒன்றாக கலந்துவிடுகின்றன, 'எல்லாம் புரிந்துகொண்ட' நீங்கள் அடுத்த வாரத்திற்கு தள்ளிப்போகிறீர்கள்.",
  },
  "pain.p2_start": {
    en: "And the longer you wait, the harder it gets. Not because you're incapable — but because no one has ever given you a",
    ta: "நீங்கள் எவ்வளவு நேரம் காத்திருக்கிறீர்களோ, அவ்வளவு கடினமாகிறது. நீங்கள் இயலாதவர் என்பதால் அல்ல — ஆனால் யாரும் உங்களுக்கு ஒரு",
  },
  "pain.container": {
    en: "structured, focused container",
    ta: "கட்டமைக்கப்பட்ட, கவனமான சூழல்",
  },
  "pain.p2_rest": {
    en: " to actually work on yourself. Your business stays stuck because",
    ta: " வழங்கவில்லை. உங்கள் தொழில் நிலைத்து நிற்கிறது, ஏனெனில்",
  },
  "pain.you": { en: "YOU", ta: "நீங்கள்" },
  "pain.p2_end": {
    en: " stay stuck. Your mornings get eaten by noise before you've even had one clear thought. The gap between where you are and where you want to be doesn't close on its own.",
    ta: " நிலைத்து நிற்கிறீர்கள். ஒரு தெளிவான எண்ணத்திற்கு முன்பே உங்கள் காலைகள் சத்தத்தால் விழுங்கப்படுகின்றன.",
  },
  "pain.p3_start": {
    en: "That's exactly what the",
    ta: "அதற்காகத்தான்",
  },
  "pain.program": {
    en: "1% Community 21-Day Transformation",
    ta: "1% சமூகம் 21-நாள் மாற்றம்",
  },
  "pain.p3_mid": {
    en: " was built for. Not a course. Not a video series.",
    ta: " உருவாக்கப்பட்டது. ஒரு பாடநெறி அல்ல. ஒரு வீடியோ தொடர் அல்ல.",
  },
  "pain.live": {
    en: "Live daily sessions",
    ta: "தினசரி நேரலை அமர்வுகள்",
  },
  "pain.p3_end": {
    en: " — with a mentor who has spent 5+ years studying human behavior, mindset, and real-world transformation.",
    ta: " — 5+ ஆண்டுகள் மனித நடத்தை, மனநிலை மற்றும் நிஜ உலக மாற்றத்தை ஆய்வு செய்த வழிகாட்டியுடன்.",
  },
  "pain.closer": {
    en: "21 days. One focused hour. The shift starts March 21.",
    ta: "21 நாட்கள். ஒரு கவனமான மணி நேரம். மாற்றம் மார்ச் 14 தொடங்குகிறது.",
  },

  // Sessions
  "sessions.label": { en: "The Sessions", ta: "அமர்வுகள்" },
  "sessions.headline": { en: "One Decision", ta: "இரண்டு பாதைகள். ஒரு முடிவு." },
  "sessions.sub": { en: "Pick what you need — or take both.", ta: "தேவையானதைத் தேர்ந்தெடுங்கள் — அல்லது இரண்டையும் எடுங்கள்." },
  "sessions.s1_label": { en: "Session 01 — Life Restart", ta: "அமர்வு 01 — வாழ்க்கை மறுதொடக்கம்" },
  "sessions.s1_time": { en: "8:30 – 9:30 PM · Daily · 21 Days · Online", ta: "காலை 5:55 – 6:45 · தினமும் · 21 நாட்கள் · ஆன்லைன்" },
  "sessions.s1_headline": { en: "One hour. One shift. Every single day.", ta: "சத்தத்திற்கு முன் உங்கள் நாளைத் தொடங்குங்கள்." },
  "sessions.s1_body": {
    en: "This session cuts through the noise - building the clarity, discipline, and identity that actually moves your life forward.",
    ta: "இந்த அமர்வு உள் தெளிவு, ஒழுக்கம் மற்றும் முன்னேறும் அடையாளத்தை மீண்டும் கட்டமைக்கிறது.",
  },
  "sessions.s1_for": {
    en: "Anyone feeling stuck, foggy, or running on autopilot in life",
    ta: "வாழ்க்கையில் சிக்கியுள்ள, மூடுபனியான அல்லது ஆட்டோபைலட்டில் ஓடுபவர்கள்",
  },
  "sessions.s1_cta": { en: "Join Life Restart →", ta: "வாழ்க்கை மறுதொடக்கத்தில் சேருங்கள் →" },
  "sessions.s2_label": { en: "Session 02 — BrandBark", ta: "அமர்வு 02 — BrandBark" },
  "sessions.s2_time": { en: "4:30 – 5:45 PM · Daily · 21 Days · Online", ta: "மாலை 4:30 – 5:45 · தினமும் · 21 நாட்கள் · ஆன்லைன்" },
  "sessions.s2_headline": { en: "Stop building on unclear foundations.", ta: "தெளிவற்ற அடித்தளத்தில் கட்டுவதை நிறுத்துங்கள்." },
  "sessions.s2_body": {
    en: "BrandBark gives you sharp brand identity, business direction, and execution clarity — so your effort finally goes the right way. Mind, wellness, and strategy for real business growth.",
    ta: "BrandBark உங்களுக்கு கூர்மையான பிராண்ட் அடையாளம், தொழில் திசை மற்றும் செயல்படுத்தல் தெளிவை வழங்குகிறது.",
  },
  "sessions.s2_for": {
    en: "Entrepreneurs and business owners who are busy but not growing",
    ta: "பிஸியாக இருக்கும் ஆனால் வளராத தொழில்முனைவோர்",
  },
  "sessions.s2_cta": { en: "Join BrandBark →", ta: "BrandBark இல் சேருங்கள் →" },
  "sessions.for_label": { en: "Who it's for:", ta: "யாருக்கு:" },

  // Social Proof
  "social.label": { en: "Real Stories", ta: "உண்மைக் கதைகள்" },
  "social.headline": { en: "People who showed up — and what happened next.", ta: "வந்தவர்கள் — அதன் பிறகு என்ன நடந்தது." },

  // Mentor
  "mentor.label": { en: "Your Mentor", ta: "உங்கள் வழிகாட்டி" },
  "mentor.title": { en: "Serial Entrepreneur · Author · Spiritual Strategist", ta: "தொடர் தொழில்முனைவர் · எழுத்தாளர் · ஆன்மீக உத்திகாரர்" },
  "mentor.org": { en: "Founder, Greenwill Techs & Brand Bark", ta: "நிறுவனர், Greenwill Techs & Brand Bark" },
  "mentor.quote": {
    en: "This 21-day session is the result of years of deep study, real-world experience, and hands-on transformation work.",
    ta: "இந்த 21 நாள் அமர்வு ஆண்டுகள் ஆழமான படிப்பு, நிஜ உலக அனுபவம் மற்றும் நேரடி மாற்றப் பணியின் விளைவு.",
  },
  "mentor.helps": { en: "What He Helps People Achieve:", ta: "அவர் மக்கள் அடைய உதவுவது:" },
  "mentor.a1": { en: "Develop clarity and internal stability", ta: "தெளிவு மற்றும் உள் நிலைத்தன்மையை வளர்த்தல்" },
  "mentor.a2": { en: "Build disciplined thinking and execution", ta: "ஒழுக்கமான சிந்தனை மற்றும் செயல்படுத்தலை உருவாக்குதல்" },
  "mentor.a3": { en: "Break limiting patterns and inconsistent habits", ta: "கட்டுப்படுத்தும் வடிவங்களை உடைத்தல்" },
  "mentor.a4": { en: "Rebuild identity aligned with growth and purpose", ta: "வளர்ச்சி மற்றும் நோக்கத்துடன் அடையாளத்தை மீட்டெடுத்தல்" },
  "mentor.a5": { en: "Guide individuals from confusion to consistent forward movement", ta: "குழப்பத்திலிருந்து நிலையான முன்னோக்கி நகர்வுக்கு வழிகாட்டுதல்" },
  "mentor.c1": { en: "5+ Years · Human Behavior & Mindset", ta: "5+ ஆண்டுகள் · மனித நடத்தை & மனநிலை" },
  "mentor.c2": { en: "Clarity & Discipline Systems", ta: "தெளிவு & ஒழுக்க அமைப்புகள்" },
  "mentor.c3": { en: "Identity Rebuilding & Life Transformation", ta: "அடையாள மறுகட்டமைப்பு & வாழ்க்கை மாற்றம்" },
  "mentor.c4": { en: "Business Strategy & Brand Clarity", ta: "தொழில் உத்தி & பிராண்ட் தெளிவு" },

  // Pricing
  "pricing.label": { en: "Choose Your Pass", ta: "உங்கள் பாஸை தேர்ந்தெடுங்கள்" },
  "pricing.headline": { en: "One decision. Six months of access.", ta: "ஒரு முடிவு. ஆறு மாத அணுகல்." },
  "pricing.sub": {
    en: "₹999 = ₹47.57 per session · Less than a dinner out — for a shift that lasts",
    ta: "₹999 = ஒரு அமர்வுக்கு ₹47.57 · ஒரு இரவு உணவை விட குறைவு — நிலைத்த மாற்றத்திற்கு",
  },
  "pricing.t1_label": { en: "Life Restart", ta: "வாழ்க்கை மறுதொடக்கம்" },
  "pricing.t2_label": { en: "BrandBark", ta: "BrandBark" },
  "pricing.t3_label": { en: "Life Restart · 6-Month", ta: "வாழ்க்கை மறுதொடக்கம் · 6 மாதம்" },
  "pricing.t4_label": { en: "All Access", ta: "முழு அணுகல்" },
  "pricing.best_value": { en: "⭐ Best Value", ta: "⭐ சிறந்த மதிப்பு" },
  "pricing.note": {
    en: "Weekend Online Sessions — Once a month · Complimentary with ₹4,999 & ₹9,999 passes",
    ta: "வார இறுதி ஆன்லைன் அமர்வுகள் — மாதம் ஒருமுறை · ₹4,999 & ₹9,999 பாஸ்களுடன் இலவசம்",
  },

  // Final CTA
  "final.label": { en: "March 21 · The Shift Begins", ta: "மார்ச் 14 · மாற்றம் தொடங்குகிறது" },
  "final.headline1": { en: "21 days from now,", ta: "இன்றிலிருந்து 21 நாட்களில்," },
  "final.headline2": { en: "you'll be different.", ta: "நீங்கள் வேறுபட்டிருப்பீர்கள்." },
  "final.body": {
    en: "The only question is whether you join this batch — or keep waiting for the version of you that \"has time later.\"",
    ta: "ஒரே கேள்வி — நீங்கள் இந்த தொகுதியில் சேருவீர்களா அல்லது \"பின்னர் நேரம் இருக்கும்\" என்ற உங்களுக்காக காத்திருப்பீர்களா.",
  },
  "final.cta": { en: "Reserve My Seat →", ta: "எனது இடத்தை பதிவு செய்யுங்கள் →" },
  "final.sub": { en: "Online · Live · Limited seats per batch", ta: "ஆன்லைன் · நேரலை · வரையறுக்கப்பட்ட இடங்கள்" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
