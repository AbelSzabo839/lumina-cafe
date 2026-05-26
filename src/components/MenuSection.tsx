import { motion } from 'motion/react';
import { useMemo, useState } from 'react';

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
  const categories = useMemo<MenuCategory[]>(
    () => [
      {
        id: 'espresso',
        title: 'Espresso',
        subtitle: 'Bold, precise, crafted.',
        note: 'Double-shot energy with silky crema.',
        items: [
          { name: 'Espresso', description: 'Short, intense, caramel notes.', price: '3.50' },
          { name: 'Americano', description: 'Espresso + hot water, clean finish.', price: '4.50' },
          { name: 'Macchiato', description: 'Espresso marked with velvety foam.', price: '4.90' },
          { name: 'Cappuccino', description: 'Balanced body with a cloud of foam.', price: '5.30' },
        ],
      },
      {
        id: 'coffee',
        title: 'Coffee',
        subtitle: 'Slow-brewed comfort.',
        note: 'Daily roast, brewed for clarity and depth.',
        items: [
          { name: 'Pour-Over', description: 'Single origin, hand-poured.', price: '6.20' },
          { name: 'Latte', description: 'Espresso with smooth steamed milk.', price: '5.90' },
          { name: 'Mocha', description: 'Cocoa + espresso, softly sweet.', price: '6.40' },
          { name: 'Cold Brew', description: '12-hour steep, naturally sweet.', price: '6.80' },
        ],
      },
      {
        id: 'tea',
        title: 'Tea',
        subtitle: 'Warm rituals.',
        note: 'A gentle break between sips.',
        items: [
          { name: 'Earl Grey', description: 'Bergamot tea with a refined aroma.', price: '4.90' },
          { name: 'Jasmine Green', description: 'Light, fragrant, and calming.', price: '4.70' },
          { name: 'Mint Infusion', description: 'Fresh mint with soothing finish.', price: '4.60' },
        ],
      },
      {
        id: 'desserts',
        title: 'Desserts',
        subtitle: 'Made in-house.',
        note: 'Pair your drink with something sweet.',
        items: [
          { name: 'Cheesecake', description: 'Creamy, tangy, perfectly chilled.', price: '6.90' },
          { name: 'Chocolate Torte', description: 'Deep cocoa layers with a soft bite.', price: '7.20' },
          { name: 'Cinnamon Roll', description: 'Warm spice, buttery glaze.', price: '5.90' },
          { name: 'Seasonal Cake', description: 'Rotating selection of house specials.', price: '7.50' },
        ],
      },
    ],
    [],
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
          <h2 className="text-4xl md:text-6xl font-serif tracking-wide text-earth-50">Menu</h2>
          <p className="mt-3 text-earth-100/70 max-w-2xl mx-auto">
            Espresso, coffee, tea, and desserts — curated for a dark, cozy kind of comfort.
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
                  €{item.price}
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
                  Pairing tip
                </div>
                <p className="mt-2 text-earth-100/65 leading-relaxed text-sm">
                  Ask for today’s pairing recommendation at the counter.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

