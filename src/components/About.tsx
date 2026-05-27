import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { lang } = useLanguage();
  const isHu = lang === 'HU';

  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-earth-700/80" />
              <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-earth-100/70">
                {isHu ? 'Rólunk' : 'Our story'}
              </span>
            </div>

            <h2 className="mt-6 text-4xl md:text-6xl font-serif text-earth-50 leading-tight">
              {isHu ? 'Sötét pörkölés. Tiszta élmény.' : 'Dark roast. Bright moments.'}
            </h2>
            <p className="mt-4 text-earth-100/70 leading-relaxed max-w-xl">
              {isHu
                ? 'A Kávélabor a specialty szemléletre épül: gondosan készített eszpresszó, minőségi alapanyagok és barátságos, nyugodt hangulat vár.'
                : 'Kávélabor is built around craftsmanship: espresso pulled with care, coffee roasted with intention, and desserts made in-house.'}
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <div className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                  {isHu ? 'Filozófia' : 'Philosophy'}
                </div>
                <p className="mt-2 text-earth-100/75 leading-relaxed">
                  {isHu
                    ? 'Célunk az egyensúly: intenzív ízek, tiszta lecsengés, mégis közvetlen, otthonos élmény.'
                    : 'We balance intensity with softness — bold flavors, clean finishes, and a warm atmosphere.'}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                <div className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                  {isHu ? 'Szolgáltatások' : 'What we serve'}
                </div>
                <p className="mt-2 text-earth-100/75 leading-relaxed">
                  {isHu
                    ? 'Helyben fogyasztás, szabadtéri ülőhelyek és elviteli lehetőség.'
                    : 'Dine-in, outdoor seating, and takeaway service.'}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="aspect-[4/3] w-full relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,94,60,0.35),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(233,220,207,0.12),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.75))]" />
                <div className="absolute inset-0 opacity-90">
                  {/* Decorative “coffee steam” lines */}
                  <svg viewBox="0 0 600 450" className="w-full h-full">
                    <g fill="none" stroke="rgba(245,242,237,0.12)" strokeWidth="2" strokeLinecap="round">
                      <path d="M120 420 C140 320, 95 280, 130 190" />
                      <path d="M180 420 C205 320, 155 280, 200 160" />
                      <path d="M250 420 C280 320, 230 275, 270 140" />
                      <path d="M320 420 C350 320, 295 275, 340 170" />
                      <path d="M390 420 C420 320, 370 275, 410 190" />
                      <path d="M460 420 C490 320, 440 280, 470 210" />
                    </g>
                  </svg>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                    <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-earth-100/70">
                      {isHu ? 'Minden nap frissen' : 'Crafted daily'}
                    </div>
                    <div className="mt-2 text-earth-50 font-serif text-2xl">
                      {isHu ? 'Specialty kávé Zalaegerszegen.' : 'A quiet bar for bold flavor.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: isHu ? 'Nyitvatartás' : 'Opening hours',
                  value: isHu ? '7:00-14:00' : '7:00-14:00',
                },
                {
                  label: isHu ? 'Elérhetőség' : 'Phone',
                  value: '+36 30 979 4192',
                },
                {
                  label: isHu ? 'Instagram' : 'Instagram',
                  value: '@kavelabor',
                },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                >
                  <div className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                    {s.label}
                  </div>
                  <div className="mt-2 text-earth-50 font-serif text-2xl">{s.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

