import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import coffeeVideo from '../../vecteezy_coffee-beans-falling-in-slow-motion-against-a-warm-moody_74507439.mp4';

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const { t, lang } = useLanguage();

  // Scrub the video directly from scroll progress:
  // - scroll down => progress increases => time moves forward
  // - scroll up   => progress decreases => time moves backward
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!videoRef.current || duration == null) return;
    const video = videoRef.current;
    const nextTime = Math.max(0, Math.min(duration, latest * duration));
    // Avoid tiny seek spam that can cause jitter.
    if (Math.abs(video.currentTime - nextTime) > 0.05) {
      video.currentTime = nextTime;
    }
  });

  return (
    <section
      id="home"
      ref={containerRef}
      className="scroll-mt-24 relative w-full h-[130vh] overflow-hidden bg-black text-white"
    >
      <div className="sticky top-0 h-screen w-full">
        {/* Video background (fixed within the hero via sticky) */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src={coffeeVideo}
            className="w-full h-full object-cover"
            muted
            playsInline
            controls={false}
            preload="auto"
            onLoadedMetadata={(e) => {
              const videoElement = e.currentTarget;
              if (videoElement.duration && !Number.isNaN(videoElement.duration)) {
                setDuration(videoElement.duration);
                videoElement.currentTime = 0;
                videoElement.pause();
              }
            }}
          />
          {/* Dim overlay so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex flex-col items-center text-center bg-white/5 p-10 md:p-14 lg:p-16 rounded-3xl backdrop-blur-xl border border-white/10 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.9)] max-w-3xl"
          >
            <div className="px-6 py-2 mb-6 bg-black/35 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] tracking-[0.2em] font-bold uppercase shadow-sm">
              Lumina Cafe
            </div>

            <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight leading-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
              Lumina Cafe
              <br />
              <span className="text-earth-100/80 italic">{t('hero.subtitle')}</span>
            </h1>

            <p className="text-lg md:text-xl text-earth-50/90 font-sans font-medium leading-relaxed max-w-2xl">
              {t('hero.desc')}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors font-semibold tracking-widest text-[11px] uppercase"
              >
                {lang === 'HU' ? 'Menü megtekintése' : 'View Menu'}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
