import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import painBg from "@/assets/pain-point-bg.jpg";
import video1 from "@/assets/jaanu_testimonial.mp4";
import video2 from "@/assets/suryasurgical_testimonial.mp4";
import { Play, Pause, Star } from "lucide-react";

const VIDEOS = [
  {
    src: video1,
    name: "Janu Priya",
    role: "Entrepreneur",
    // result: "2X Revenue in 2 Weeks",
  },
  {
    src: video2,
    name: "Surya Prakash",
    role: "Entrepreneur",
    // result: "Launched Business by Day 14",
  },
];

const STYLES = `
  @keyframes videoFadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes playPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.55); }
    50%      { box-shadow: 0 0 0 14px rgba(212,175,55,0); }
  }
`;

const VideoCard = ({ video, index, visible }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
      setStarted(true);
    }
  };

  return (
    <div
      className="flex flex-col gap-4"
      style={{
        animation: visible
          ? `videoFadeUp 0.6s ${0.1 + index * 0.18}s cubic-bezier(.22,1,.36,1) both`
          : "none",
        opacity: 0,
      }}
    >
      {/* Video player */}
      <div
        className="relative rounded-2xl overflow-hidden border border-gold/20 bg-black group cursor-pointer" style={{aspectRatio: "3/4"}}
        onClick={toggle}
      >
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover object-top"
          playsInline
          preload="metadata"
          onEnded={() => setPlaying(false)}
        />

        {/* Overlay — hide once playing */}
        {!playing && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        )}

        {/* Play / Pause button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-16 h-16 rounded-full bg-gold flex items-center justify-center
              transition-all duration-300
              ${playing ? "opacity-0 group-hover:opacity-80 scale-90" : "opacity-100 group-hover:scale-110"}`}
            style={!started ? { animation: "playPulse 2s ease-in-out infinite" } : undefined}
          >
            {playing
              ? <Pause size={22} className="text-gray-900" fill="currentColor" />
              : <Play  size={24} className="text-gray-900 ml-1" fill="currentColor" />
            }
          </div>
        </div>

        {/* Result badge */}
        {!playing && (
          <div className="absolute bottom-4 left-4">
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(212,175,55,0.15)",
                border: "1px solid rgba(212,175,55,0.35)",
                color: "#D4AF37",
              }}
            >
              🏆 {video.result}
            </span>
          </div>
        )}
      </div>

      {/* Author row */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full border border-gold/30 bg-gold/[0.08] flex items-center justify-center flex-shrink-0">
            <span className="text-gold font-bold text-sm">{video.name.charAt(0)}</span>
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-none">{video.name}</p>
            <p className="text-white/35 text-[11px] mt-0.5">{video.role}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-gold text-gold" />
          ))}
        </div>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 px-5 relative overflow-hidden bg-gradient-to-b from-[#06020d] via-[#0b0415] to-[#1b0835]"
    >
      <style>{STYLES}</style>

      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={painBg} alt="" className="w-full h-full object-cover opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06020d]/80 via-transparent to-[#1b0835]/80" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.05] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <ScrollReveal>
          <p className="text-center text-[11px] tracking-[0.35em] uppercase text-gold/60 font-semibold mb-3">
            Hear It From Them
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-black text-center text-white mb-4">
            Real People. <span className="text-gold">Real Results.</span>
          </h2>
          <p className="text-center text-white/40 text-sm max-w-sm mx-auto mb-12 leading-relaxed">
            Watch what happened when they showed up for 21 days.
          </p>
        </ScrollReveal>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {VIDEOS.map((video, i) => (
            <VideoCard key={i} video={video} index={i} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoTestimonials;