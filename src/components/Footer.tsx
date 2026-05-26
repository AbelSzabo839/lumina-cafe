import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Leaf className="w-10 h-10 text-earth-700" />
            <div>
              <div className="font-serif font-bold text-2xl tracking-widest text-earth-50 uppercase">
                Lumina Cafe
              </div>
              <div className="text-xs tracking-[0.2em] text-earth-100/60 uppercase mt-1">
                Espresso • Coffee • Desserts
              </div>
            </div>
          </div>

          <div className="text-sm text-earth-100/70">
            <div>8900 Zalaegerszeg, Rákóczi Ferenc u. 24.</div>
            <div className="mt-1">
              Mon–Fri: 7:00–19:00 · Sat–Sun: 8:00–19:00
            </div>
            <div className="mt-3">&copy; {new Date().getFullYear()} Lumina Cafe. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
