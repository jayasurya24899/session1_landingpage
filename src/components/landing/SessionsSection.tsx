
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import lifeRestartImg from "@/assets/life-restart.jpg";
import brandbarkImg from "@/assets/brandbark.jpg";

interface SessionCardProps {
  label: string;
  time: string;
  headline: string;
  body: string;
  forWho: string;
  forLabel: string;
  price: string;
  cta: string;
  image: string;
}

const SessionCard = ({
  label,
  time,
  headline,
  body,
  forWho,
  forLabel,
  price,
  cta,
  image,
}: SessionCardProps) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ duration: 0.25 }}
    className="relative flex flex-col h-full overflow-hidden rounded-2xl
    bg-white/60 backdrop-blur-xl
    border border-purple-200
    shadow-lg hover:shadow-xl
    transition-all duration-300"
  >
    {/* image */}
    <div className="relative h-48 sm:h-56 overflow-hidden">
      <img
        src={image}
        alt={headline}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent" />

      {/* label */}
      <span className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200 backdrop-blur-sm">
        {label}
      </span>
    </div>

    <div className="p-8 md:p-10 flex flex-col flex-1 text-gray-800">
      <p className="text-xs text-gray-500 mb-4">{time}</p>

      <h3 className="text-2xl md:text-5xl font-bold mb-4 text-gray-900">
        {headline}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6 flex-1">
        {body}
      </p>

      <p className="text-sm text-gray-500 mb-4">
        <span className="text-gray-900 font-medium">{forLabel}</span>{" "}
        {forWho}
      </p>

      <div className="border-t border-purple-100 my-6"></div>

      <div className="flex items-end justify-between gap-4 flex-wrap">
        <p className="text-3xl font-bold text-purple-700">
          {price}
        </p>

        <a
          href="#reserve"
          className="group relative inline-flex items-center px-6 py-3 rounded-full
          bg-gradient-to-r from-[#f5d48f] via-[#e6c06a] to-[#d4a84a]
          text-gray-900 font-semibold
          overflow-hidden transition-all duration-300
          hover:-translate-y-0.5 hover:scale-[1.03]
          shadow-md"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
          translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700"></span>

          <span className="relative flex items-center gap-2">
            {cta}
            →
          </span>
        </a>
      </div>
    </div>
  </motion.div>
);

const SessionsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-white">

      {/* purple ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">

        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.25em] text-purple-600 mb-4 text-center font-semibold">
            {t("sessions.label")}
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
            {t("sessions.headline")}
          </h2>
<br></br>
          {/* <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            {t("sessions.sub")}
          </p> */}
        </ScrollReveal>

        {/* <div className="grid md:grid-cols-1 gap-8"> */}
        <div className="flex justify-center">
  <div className="w-full max-w-xl">

          <ScrollReveal delay={0.1}>
            <SessionCard
              label={t("sessions.s1_label")}
              time={t("sessions.s1_time")}
              headline={t("sessions.s1_headline")}
              body={t("sessions.s1_body")}
              forWho={t("sessions.s1_for")}
              forLabel={t("sessions.for_label")}
              price="₹999"
              cta={t("sessions.s1_cta")}
              image={lifeRestartImg}
            />
          </ScrollReveal>

          {/* <ScrollReveal delay={0.2}>
            <SessionCard
              label={t("sessions.s2_label")}
              time={t("sessions.s2_time")}
              headline={t("sessions.s2_headline")}
              body={t("sessions.s2_body")}
              forWho={t("sessions.s2_for")}
              forLabel={t("sessions.for_label")}
              price="₹1,999"
              cta={t("sessions.s2_cta")}
              image={brandbarkImg}
            />
          </ScrollReveal> */}
</div>
        </div>

      </div>
    </section>
  );
};

export default SessionsSection;
