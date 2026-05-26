import { motion } from 'motion/react';
import { Droplets, Thermometer, Wind, Coffee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CinematicReveal() {
  const { t } = useLanguage();
  return (
    <section className="py-32 bg-earth-50 relative overflow-hidden flex flex-col justify-center items-center">
        
      {/* Atmospheric Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-earth-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-earth-200 rounded-full blur-[80px] opacity-40 pointer-events-none"></div>

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl md:text-7xl font-serif text-earth-900 leading-none tracking-tight">{t('reveal.title')} <br className="hidden md:block"/><span className="italic opacity-60">{t('reveal.subtitle')}</span></h2>
        <p className="font-sans text-earth-900/50 mt-4 tracking-widest uppercase text-[10px] font-bold">{t('reveal.desc')}</p>
      </div>
      
      <div className="relative w-full max-w-5xl flex items-center justify-center min-h-[500px]">
        
        {/* Energy Effect */}
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           viewport={{ once: false, margin: "-100px" }}
           className="absolute inset-0 m-auto w-[400px] h-[400px] border-[0.5px] border-earth-900/10 rounded-full bg-earth-300/30 blur-[60px] pointer-events-none"
        />

        {/* Central Product Wrapper */}
        <motion.div 
           initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
           whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           viewport={{ once: false, margin: "-100px" }}
           className="relative z-10 w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl border border-white/5"
        >
           <img 
             src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop" 
             alt="Premium Espresso Extraction" 
             className="w-full h-full object-cover scale-110" 
           />
        </motion.div>

        {/* Exploding HUD Elements */}
        {/* Element 1: Temp */}
        <motion.div 
           initial={{ x: 0, y: 0, opacity: 0 }}
           whileInView={{ x: -280, y: -200, opacity: 1 }}
           transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
           viewport={{ once: false, margin: "-100px" }}
           className="absolute z-20 top-1/2 left-1/2 -px-6 -py-3 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
        >
           <div className="w-56 p-6 bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl flex items-center gap-4">
             <div className="p-2 bg-earth-700/10 rounded-lg">
               <Thermometer className="text-earth-700 w-6 h-6" />
             </div>
             <div>
                <div className="text-[9px] uppercase tracking-widest text-earth-700 font-bold mb-1">{t('reveal.temp')}</div>
                <div className="font-serif italic text-xl text-earth-900">93.5°C</div>
             </div>
           </div>
        </motion.div>

        {/* Element 2: Pressure */}
        <motion.div 
           initial={{ x: 0, y: 0, opacity: 0 }}
           whileInView={{ x: 260, y: -150, opacity: 1 }}
           transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
           viewport={{ once: false, margin: "-100px" }}
           className="absolute z-20 top-1/2 left-1/2 -px-6 -py-3 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
        >
           <div className="w-64 p-6 bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl flex items-center gap-4">
             <div className="p-2 bg-earth-800/10 rounded-lg">
               <Wind className="text-earth-800 w-6 h-6" />
             </div>
             <div>
                <div className="text-[9px] uppercase tracking-widest text-earth-700 font-bold mb-1">{t('reveal.pressure')}</div>
                <div className="font-serif italic text-xl text-earth-900">9 Bar</div>
             </div>
           </div>
        </motion.div>

        {/* Element 3: Grind */}
        <motion.div 
           initial={{ x: 0, y: 0, opacity: 0 }}
           whileInView={{ x: -250, y: 180, opacity: 1 }}
           transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
           viewport={{ once: false, margin: "-100px" }}
           className="absolute z-20 top-1/2 left-1/2 -px-6 -py-3 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
        >
           <div className="w-60 p-6 bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl flex items-center gap-4">
             <div className="p-2 bg-earth-700/10 rounded-lg">
               <Coffee className="text-earth-700 w-6 h-6" />
             </div>
             <div>
                <div className="text-[9px] uppercase tracking-widest text-earth-700 font-bold mb-1">{t('reveal.grind')}</div>
                <div className="font-serif italic text-xl text-earth-900">{t('reveal.grind.val')}</div>
             </div>
           </div>
        </motion.div>

        {/* Element 4: Origin */}
        <motion.div 
           initial={{ x: 0, y: 0, opacity: 0 }}
           whileInView={{ x: 260, y: 200, opacity: 1 }}
           transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
           viewport={{ once: false, margin: "-100px" }}
           className="absolute z-20 top-1/2 left-1/2 -px-6 -py-3 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
        >
           <div className="w-64 p-6 bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl flex items-center gap-4">
             <div className="p-2 bg-earth-800/10 rounded-lg">
               <Droplets className="text-earth-800 w-6 h-6" />
             </div>
             <div>
                <div className="text-[9px] uppercase tracking-widest text-earth-700 font-bold mb-1">{t('reveal.extraction')}</div>
                <div className="font-serif italic text-xl text-earth-900">{t('reveal.extraction.val')}</div>
             </div>
           </div>
        </motion.div>
        
        {/* Mobile Elements (Stacked) */}
        <div className="md:hidden flex flex-col gap-4 mt-8 px-6 w-full relative z-20">
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: false }}
             className="w-full p-4 bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl flex items-center justify-between"
           >
              <div>
                <div className="text-[9px] uppercase tracking-widest text-earth-700 font-bold mb-1">{t('reveal.temp')}</div>
                <div className="font-serif italic text-lg text-earth-900">93.5°C</div>
             </div>
             <Thermometer className="text-earth-700 w-5 h-5" />
           </motion.div>
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: false }}
             className="w-full p-4 bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl flex items-center justify-between"
           >
              <div>
                <div className="text-[9px] uppercase tracking-widest text-earth-700 font-bold mb-1">{t('reveal.pressure')}</div>
                <div className="font-serif italic text-lg text-earth-900">9 Bar</div>
             </div>
             <Wind className="text-earth-700 w-5 h-5" />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
