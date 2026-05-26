import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Menu() {
  const { t } = useLanguage();
  return (
    <div className="w-full bg-earth-50 pb-32">
      {/* Desszert Section */}
      <section id="dessert" className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-serif text-earth-900 tracking-wide z-10 relative">{t('menu.dessert')}</h2>
          <span className="absolute -translate-y-4 md:-translate-y-8 left-1/2 -translate-x-1/2 text-6xl md:text-7xl font-serif italic text-earth-900/5 whitespace-nowrap -rotate-3 pointer-events-none">
            {t('menu.dessert.subtitle')}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[600px]">
          
          {/* Column 1 - Left stack */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative group rounded-3xl overflow-hidden h-[300px] shadow-lg">
              <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop" alt="Monodesszert" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pt-6 px-6">
                 <h3 className="text-3xl font-serif text-white drop-shadow-md">{t('menu.monodessert')}</h3>
              </div>
            </div>
            
            <div className="relative group rounded-3xl overflow-hidden flex-1 shadow-lg">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" alt="Tortaszelet" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 top-0 pt-6 px-6 bg-gradient-to-b from-black/40 to-transparent">
                 <h3 className="text-3xl font-serif text-white drop-shadow-md">{t('menu.cake')}</h3>
              </div>
            </div>
          </div>

          {/* Column 2 - Right stack (offset) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative group rounded-3xl overflow-hidden flex-1 shadow-lg">
              <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop" alt="Aprósütemény" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 pb-6 px-6 bg-gradient-to-t from-black/60 to-transparent text-center">
                 <h3 className="text-3xl font-serif text-white drop-shadow-md">{t('menu.cookies')}</h3>
              </div>
            </div>
            
            <div className="relative group rounded-3xl overflow-hidden h-[250px] shadow-lg">
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop" alt="Kenyérdesszert" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pt-6 px-6 text-center">
                 <h3 className="text-3xl font-serif text-white drop-shadow-md">{t('menu.bread')}</h3>
              </div>
            </div>
          </div>

          {/* Column 3 - Frosted Glass Information Card */}
          <div className="lg:col-span-4 flex items-center">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: false }}
               className="w-full bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-12 rounded-2xl shadow-2xl z-20"
            >
              <p className="font-sans text-earth-900 leading-relaxed font-medium mb-4">
                {t('menu.desc1')}
              </p>
              <p className="font-sans text-earth-700 leading-relaxed text-sm">
                {t('menu.desc2')}
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Brunch Section */}
      <section id="brunch" className="max-w-7xl mx-auto px-6 md:px-12 pt-24">
         <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-serif text-earth-900 tracking-wide z-10 relative">{t('menu.brunch')}</h2>
          <span className="absolute -translate-y-4 md:-translate-y-8 left-1/2 -translate-x-1/2 text-6xl md:text-7xl font-serif italic text-earth-900/5 whitespace-nowrap -rotate-2 pointer-events-none">
            {t('menu.brunch.subtitle')}
          </span>
        </div>

        <div className="space-y-6">
          {/* Brunch Card 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-earth-50/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/40 shadow-sm transition-transform duration-300 hover:shadow-xl">
             <div className="p-8 md:p-14 flex flex-col justify-center">
                <h3 className="text-2xl font-serif text-earth-900 mb-4 tracking-wide">{t('menu.brunch1.title')}</h3>
                <p className="text-earth-700 font-sans leading-relaxed">
                  {t('menu.brunch1.desc')}
                </p>
             </div>
             <div className="h-64 md:h-auto">
               <img src="https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=800&auto=format&fit=crop" alt="Villás reggeli" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Brunch Card 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-sage-200/40 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/40 shadow-sm transition-transform duration-300 hover:shadow-xl flex-col-reverse md:flex-row">
             <div className="h-64 md:h-auto order-2 md:order-1">
               <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800&auto=format&fit=crop" alt="Könnyed ebéd" className="w-full h-full object-cover" />
             </div>
             <div className="p-8 md:p-14 flex flex-col justify-center order-1 md:order-2">
                <h3 className="text-2xl font-serif text-earth-900 mb-4 tracking-wide">{t('menu.brunch2.title')}</h3>
                <p className="text-earth-700 font-sans leading-relaxed">
                  {t('menu.brunch2.desc')}
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
