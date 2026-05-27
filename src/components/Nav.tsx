import { motion } from 'motion/react';
import { Leaf, Menu as MenuIcon, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links: Array<{ href: string; label: string }> = [
    { href: '#home', label: t('nav.home') },
    { href: '#menu', label: t('nav.menu') },
    { href: '#about', label: lang === 'HU' ? 'Rólunk' : 'About' },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black/50 backdrop-blur-xl border-b border-white/10"
    >
      <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2 group cursor-pointer">
        <div className="flex flex-col items-center">
          <Leaf className="w-8 h-8 text-earth-700/90 group-hover:text-sage-200 transition-colors duration-300" />
          <span className="font-serif font-semibold text-xl tracking-widest text-earth-50 mt-1 uppercase">Kávélabor</span>
          <span className="text-[0.5rem] tracking-[0.2em] font-sans text-earth-100/60 uppercase">
            Specialty Coffee • Zalaegerszeg
          </span>
        </div>
      </a>

      <div className="flex items-center gap-3">
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-earth-50/70 hover:text-earth-50 font-sans tracking-[0.2em] text-[11px] uppercase font-semibold transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}

          <div className="hidden items-center gap-2 border-l border-white/10 pl-6">
            <button
              onClick={() => setLang('HU')}
              className={`font-medium px-2 py-1 rounded-md text-[10px] tracking-widest uppercase border shadow-sm transition-all ${
                lang === 'HU'
                  ? 'text-earth-50 bg-white/10 border-white/20'
                  : 'text-earth-50/70 hover:text-earth-50 border-transparent bg-transparent'
              }`}
            >
              HU
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`font-medium px-2 py-1 rounded-md text-[10px] tracking-widest uppercase border shadow-sm transition-all ${
                lang === 'EN'
                  ? 'text-earth-50 bg-white/10 border-white/20'
                  : 'text-earth-50/70 hover:text-earth-50 border-transparent bg-transparent'
              }`}
            >
              EN
            </button>
          </div>
        </ul>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-5 h-5 text-earth-50" /> : <MenuIcon className="w-5 h-5 text-earth-50" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="md:hidden absolute top-[72px] left-0 right-0 px-6"
        >
          <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="py-3 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-earth-50/80 hover:text-earth-50 transition-colors duration-200 text-[13px] font-semibold border-b border-white/5 last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="hidden px-4 py-3 border-t border-white/10 flex gap-2">
                <button
                  onClick={() => {
                    setLang('HU');
                    setOpen(false);
                  }}
                  className={`flex-1 rounded-xl px-3 py-2 text-[12px] tracking-widest uppercase border shadow-sm transition-all ${
                    lang === 'HU'
                      ? 'text-earth-50 bg-white/10 border-white/20'
                      : 'text-earth-50/70 hover:text-earth-50 border-white/0 bg-white/5'
                  }`}
                >
                  HU
                </button>
                <button
                  onClick={() => {
                    setLang('EN');
                    setOpen(false);
                  }}
                  className={`flex-1 rounded-xl px-3 py-2 text-[12px] tracking-widest uppercase border shadow-sm transition-all ${
                    lang === 'EN'
                      ? 'text-earth-50 bg-white/10 border-white/20'
                      : 'text-earth-50/70 hover:text-earth-50 border-white/0 bg-white/5'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
