import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { lang } = useLanguage();
  const isHu = lang === 'HU';

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-earth-100/70">
              {isHu ? 'Kapcsolat' : 'Contact'}
            </div>
            <h2 className="mt-5 text-4xl md:text-6xl font-serif text-earth-50 leading-tight">
              {isHu ? 'Elérhetőség' : 'Let’s talk.'}
            </h2>
            <p className="mt-4 text-earth-100/70 leading-relaxed">
              {isHu
                ? 'Keress minket telefonon vagy közösségi felületeinken.'
                : 'Reach us by phone or on our social channels.'}
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-earth-700/90 mt-1" />
                <div>
                  <div className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                    {isHu ? 'Cím' : 'Address'}
                  </div>
                  <div className="mt-1 text-earth-50/90">Mérleg tér 4, 8900 Zalaegerszeg, Hungary</div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-start gap-4">
                <Phone className="w-5 h-5 text-earth-700/90 mt-1" />
                <div>
                  <div className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                    {isHu ? 'Telefon' : 'Phone'}
                  </div>
                  <div className="mt-1 text-earth-50/90">+36 30 979 4192</div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-start gap-4">
                <Mail className="w-5 h-5 text-earth-700/90 mt-1" />
                <div>
                  <div className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/65">
                    Email
                  </div>
                  <div className="mt-1 text-earth-50/90">kavelabor2014@gmail.com</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
              <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-earth-100/70">
                {isHu ? 'Nyitvatartás és szolgáltatások' : 'Opening hours & services'}
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  { dayHu: 'hétfő', dayEn: 'monday', hours: '7:00 - 14:00' },
                  { dayHu: 'kedd', dayEn: 'tuesday', hours: '7:00 - 14:00' },
                  { dayHu: 'szerda', dayEn: 'wednesday', hours: '7:00 - 14:00' },
                  { dayHu: 'csütörtök', dayEn: 'thursday', hours: '7:00 - 14:00' },
                  { dayHu: 'péntek', dayEn: 'friday', hours: '7:00 - 14:00' },
                  { dayHu: 'szombat', dayEn: 'saturday', hours: '8:00 - 14:00' },
                  { dayHu: 'vasárnap', dayEn: 'sunday', hours: '8:00 - 14:00' },
                ].map((d) => (
                  <div
                    key={d.dayEn}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 flex items-center justify-between"
                  >
                    <span className="text-earth-100/80 capitalize">{isHu ? d.dayHu : d.dayEn}</span>
                    <span className="text-earth-50 font-medium">{d.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-[11px] tracking-widest uppercase font-semibold text-earth-100/70">
                  {isHu ? 'Szolgáltatások' : 'Services'}
                </div>
                <p className="mt-2 text-earth-100/75">
                  {isHu
                    ? 'Helyben fogyasztás • Szabadtéri ülőhelyek • Bolti átvétel'
                    : 'Dine-in • Outdoor seating • Store pickup'}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.facebook.com/kavelabor/?locale=hu_HU"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-[11px] uppercase tracking-widest font-semibold"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/kavelabor/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors text-[11px] uppercase tracking-widest font-semibold"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

