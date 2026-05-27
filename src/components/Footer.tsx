import { Leaf } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();
  const isHu = lang === 'HU';

  return (
    <footer className="bg-black/40 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Leaf className="w-10 h-10 text-earth-700" />
            <div>
              <div className="font-serif font-bold text-2xl tracking-widest text-earth-50 uppercase">
                Kávélabor
              </div>
              <div className="text-xs tracking-[0.2em] text-earth-100/60 uppercase mt-1">
                Specialty Coffee • Zalaegerszeg
              </div>
            </div>
          </div>

          <div className="text-sm text-earth-100/70">
            <div>Mérleg tér 4, 8900 Zalaegerszeg, Hungary</div>
            <div className="mt-1">
              {isHu
                ? 'Hétfő-Péntek: 7:00-14:00 · Szombat-Vasárnap: 8:00-14:00'
                : 'Monday-Friday: 7:00-14:00 · Saturday-Sunday: 8:00-14:00'}
            </div>
            <div className="mt-1">+36 30 979 4192 · kavelabor2014@gmail.com</div>
            <div className="mt-1">facebook.com/kavelabor · instagram.com/kavelabor</div>
            <div className="mt-3">
              &copy; {new Date().getFullYear()} Kávélabor.{' '}
              {isHu ? 'Minden jog fenntartva.' : 'All rights reserved.'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
