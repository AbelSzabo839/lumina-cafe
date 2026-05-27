import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  note: string;
  items: MenuItem[];
};

export default function MenuSection() {
  const { lang } = useLanguage();
  const isHu = lang === 'HU';
  const categories = useMemo<MenuCategory[]>(
    () => [
      {
        id: 'coffee',
        title: isHu ? 'Kávék' : 'Coffee',
        subtitle: isHu ? 'Kávébár klasszikusok' : 'Coffee bar classics',
        note: isHu ? 'Az árak forintban értendők.' : 'Prices are in HUF.',
        items: [
          { name: 'Espresso Macchiato', description: '', price: '1400' },
          { name: 'Cortado', description: '', price: '1400' },
          { name: 'Cappuccino', description: '', price: '1400' },
          { name: 'Naked Cappuccino', description: '', price: '1400' },
          { name: 'Flat White', description: '', price: '1600' },
          { name: 'Café Latte', description: '', price: '1600' },
          { name: 'Café Latte Double Shot', description: '', price: '1800' },
          { name: 'Chai Latte', description: '', price: '1600' },
          { name: 'Chai Latte + Espresso', description: '', price: '1800' },
          { name: 'Matcha Latte', description: '', price: '1800' },
        ],
      },
      {
        id: 'breakfast',
        title: isHu ? 'Reggeli ételek' : 'Breakfast',
        subtitle: isHu ? 'Croissantok és szendvicsek' : 'Croissants and sandwiches',
        note: isHu ? 'A kínálat a helyszínen változhat.' : 'Selection may vary in-store.',
        items: [
          { name: isHu ? 'Vajas croissant' : 'Butter croissant', description: '', price: '600' },
          { name: isHu ? 'Magvas barna croissant' : 'Brown seed croissant', description: '', price: '600' },
          { name: isHu ? 'Croissant lekvárral' : 'Croissant with jam', description: '', price: '800' },
          { name: isHu ? 'Croissant vajjal' : 'Croissant with butter', description: '', price: '800' },
          { name: isHu ? 'Érleltsonkás croissant szendvics' : 'Aged ham croissant sandwich', description: 'croissant, sonka, mozzarella, ricotta, rukkola', price: '1200' },
          { name: isHu ? 'Szalámis croissant szendvics' : 'Salami croissant sandwich', description: 'croissant, szalámi, sajtkrém, saláta', price: '1200' },
          { name: isHu ? 'Prágai / pulykasonkás croissant szendvics' : 'Prague / turkey ham croissant', description: 'croissant, sonka, sajtkrém, saláta', price: '1200' },
        ],
      },
      {
        id: 'eggs',
        title: isHu ? 'Tojásételek' : 'Egg dishes',
        subtitle: isHu ? 'Friss reggeli fogások' : 'Fresh breakfast dishes',
        note: isHu ? 'A legtöbb étel két méretben kérhető.' : 'Most dishes are available in two sizes.',
        items: [
          { name: 'Ham & Eggs', description: '', price: '1400 / 1600' },
          { name: 'Bacon & Eggs', description: '', price: '1400 / 1600' },
          { name: isHu ? 'Sajtos omlett' : 'Cheese omelet', description: '', price: '1400 / 1600' },
          { name: isHu ? 'Sonkás omlett' : 'Ham omelet', description: '', price: '1400 / 1600' },
          { name: isHu ? 'Kecskesajtos-sonkás omlett' : 'Goat cheese & ham omelet', description: '', price: '1400 / 1600' },
          { name: isHu ? 'Lazacos rántotta' : 'Salmon scrambled eggs', description: '', price: '2500' },
          { name: isHu ? 'Tükörtojás / rántotta / omlett' : 'Fried egg / scrambled egg / omelet', description: '', price: '1200 / 1400' },
          { name: isHu ? 'Klasszikus bundás kenyér' : 'Furry bread', description: isHu ? 'fűszeres tejföl' : 'spicy sour cream', price: '1600' },
          { name: isHu ? 'Töltött bundás kenyér' : 'Stuffed furry bread', description: isHu ? 'sajt, sonka, fűszeres tejföl' : 'cheese, ham, spicy sour cream', price: '1800' },
          { name: isHu ? 'Labor reggeli' : 'Lab breakfast', description: 'sonka, bacon, gomba, hagyma, paradicsom, 3 tükörtojás', price: '2000' },
          { name: isHu ? 'Angol reggeli' : 'English breakfast', description: 'bacon, tojás, bab, kolbász, sonka', price: '3000' },
          { name: isHu ? 'Házikolbász sütve' : 'Fried homemade sausage', description: 'mustár, saláta, bab', price: '1800' },
          { name: isHu ? 'Debreceni páros' : 'Fried debreceni', description: 'mustár, saláta, bab', price: '1800' },
        ],
      },
      {
        id: 'sandwich',
        title: isHu ? 'Grillezett szendvicsek' : 'Grilled sandwiches',
        subtitle: isHu ? 'Ciabatta, bagel, bruschetta' : 'Ciabatta, bagel, bruschetta',
        note: isHu ? 'Népszerű szendvics és bagel kínálat.' : 'Popular sandwich and bagel options.',
        items: [
          { name: isHu ? 'Lazacos ciabatta' : 'Salmon ciabatta', description: 'ricotta, füstölt lazac, kapor, rukkola', price: '2000' },
          { name: isHu ? 'Libamájas ciabatta' : 'Goose liver ciabatta', description: 'házi libamáj zsírjában, paprika, saláta', price: '2500' },
          { name: isHu ? 'Pulykamellsonkás ciabatta' : 'Turkey breast ciabatta', description: 'füstölt mozzarella, saláta, paradicsom, majonéz', price: '1800' },
          { name: isHu ? 'Érleltsonkás ciabatta' : 'Aged ham ciabatta', description: 'érlelt olasz sonka, mozzarella, paradicsom', price: '1800' },
          { name: isHu ? 'Füstölt marhahúsos ciabatta' : 'Smoked beef ciabatta', description: 'sajt, saláta, párolt káposzta', price: '2500' },
          { name: isHu ? 'Füstölt csirkés ciabatta' : 'Smoked chicken ciabatta', description: 'sajt, saláta, paradicsom, majonéz', price: '2500' },
          { name: 'Bruschetta (paradicsomos)', description: '', price: '1400' },
          { name: 'Bruschetta (mozzarellás)', description: '', price: '1600' },
          { name: 'Rántottás bagel', description: 'sonka, mozzarella, sajtkrém, saláta, paradicsom', price: '1600' },
          { name: 'Bagel & Eggs', description: 'bacon, tükörtojás, saláta, vöröskáposzta, rukkola', price: '1600' },
          { name: isHu ? 'Lazacos bagel' : 'Salmon bagel', description: 'füstölt lazac, ricotta, kapor, uborka, rukkola', price: '1800' },
          { name: isHu ? 'Pulykás bagel' : 'Turkey ham bagel', description: 'füstölt mozzarella, paradicsom, saláta, majonéz', price: '1400' },
        ],
      },
      {
        id: 'drinks',
        title: isHu ? 'Frissítők' : 'Cold drinks',
        subtitle: isHu ? 'Üdítők és gyümölcslevek' : 'Sodas and juices',
        note: isHu ? 'Hideg italok, szezonális kínálattal.' : 'Cold drinks with seasonal options.',
        items: [
          { name: isHu ? 'Szódás málna / citrom' : 'Soda raspberry / lemon', description: '', price: '1200' },
          { name: isHu ? 'Narancs limonádé' : 'Orange lemonade', description: '', price: '1600' },
          { name: isHu ? 'Jeges friss gyümölcslé' : 'Iced fresh fruit juice', description: '', price: '800' },
          { name: isHu ? 'Üveg friss szóda 0.7L' : 'Bottled fresh soda 0.7L', description: '', price: '1200' },
          { name: isHu ? 'Single origin filter kávé' : 'Single origin filter coffee', description: '', price: '1400' },
          { name: isHu ? 'Cold brew (limitált)' : 'Cold brew (limited)', description: '', price: '1000' },
        ],
      },
    ],
    [isHu],
  );

  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section id="menu" className="scroll-mt-24 relative py-20 md:py-28 bg-earth-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif tracking-wide text-earth-50">
            {isHu ? 'Menü' : 'Menu'}
          </h2>
          <p className="mt-3 text-earth-100/70 max-w-2xl mx-auto">
            {isHu
              ? 'A képeken küldött Kávélabor menü alapján feltöltve.'
              : 'Menu filled based on the provided Kávélabor menu photos.'}
          </p>
        </motion.div>

        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-2xl border text-[11px] tracking-widest uppercase font-semibold transition-colors duration-200 ${
                c.id === activeId
                  ? 'bg-white/10 border-white/25 text-earth-50'
                  : 'bg-white/5 border-white/10 text-earth-50/70 hover:bg-white/10 hover:text-earth-50'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4">
            {active.items.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.02 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-start justify-between gap-5"
              >
                <div>
                  <div className="font-semibold text-earth-50 text-[14px] tracking-wide">{item.name}</div>
                  <div className="text-earth-100/65 text-sm leading-relaxed mt-1">{item.description}</div>
                </div>
                <div className="text-earth-50 font-serif text-[18px] tracking-tight shrink-0">
                  {item.price} Ft
                </div>
              </motion.div>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 h-full sticky top-24">
              <div className="text-[10px] tracking-[0.25em] uppercase text-earth-100/65 font-bold">
                {active.subtitle}
              </div>
              <h3 className="mt-3 text-3xl font-serif text-earth-50">{active.title}</h3>
              <p className="mt-3 text-earth-100/70 leading-relaxed">{active.note}</p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-[11px] tracking-widest uppercase font-semibold text-earth-50/70">
                  {isHu ? 'Tipp' : 'Pairing tip'}
                </div>
                <p className="mt-2 text-earth-100/65 leading-relaxed text-sm">
                  {isHu
                    ? 'Kérj ajánlást a pultnál az adott napi párosításokra.'
                    : 'Ask for today’s pairing recommendation at the counter.'}
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

