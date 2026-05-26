import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'HU' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  'HU': {
    'nav.home': 'Címlap',
    'nav.drinks': 'Ital',
    'nav.dessert': 'Desszert',
    'nav.cake': 'Torta',
    'nav.brunch': 'Brunch',
    'nav.menu': 'Menü',
    'nav.contact': 'Kontakt',
    'nav.gallery': 'Galéria',
    
    'hero.title': 'A Te helyed,',
    'hero.subtitle': 'a Te kávéd.',
    'hero.desc': 'Lépj be hozzánk és érezd magad otthon. Szívvel-lélekkel készített italok és házi sütemények várnak, egy mosoly kíséretében.',
    
    'reveal.title': 'Kávé',
    'reveal.subtitle': 'Anatómiája',
    'reveal.desc': 'Mérnöki precizitás minden cseppben',
    'reveal.temp': 'Hőmérséklet',
    'reveal.pressure': 'Nyomás',
    'reveal.grind': 'Őrlési profil',
    'reveal.grind.val': 'Extra finom',
    'reveal.extraction': 'Kivonás',
    'reveal.extraction.val': '28 Másodperc',
    
    'menu.dessert': 'Desszert',
    'menu.dessert.subtitle': 'Első látásra szerelem!',
    'menu.monodessert': 'Monodesszert',
    'menu.cake': 'Tortaszelet',
    'menu.cookies': 'Aprósütemény',
    'menu.bread': 'Kenyérdesszert',
    'menu.desc1': 'Saját tervezésű desszertjeink a francia vonalt képviselő látványdesszert műhelyünkben készülnek, válogatott alapanyagokból és maximális odafigyeléssel.',
    'menu.desc2': 'Minden egyes édesség a kézműves kreativitás, a kifinomult ízek és az aprólékos kidolgozás találkozása — hogy ne csak ízeiben, hanem megjelenésükben is igazi élményt nyújtsanak. Nem csak a különleges monodesszertek hanem tortaszeletek, pite torták és klasszikus aprósütemények is szerepelnek állandóan változó kínálatunkban.',
    
    'menu.brunch': 'Brunch',
    'menu.brunch.subtitle': 'Kezdjük jól a napot!',
    'menu.brunch1.title': 'Villás reggeli',
    'menu.brunch1.desc': 'A brunch nálunk nyitástól elérhető: a korai reggelitől a késői reggelin át egészen a könnyed délutáni ebédig. Térj be egy tartalmas falatra.',
    'menu.brunch2.title': 'Könnyed ebéd',
    'menu.brunch2.desc': 'Kínálatunkat gondosan állítjuk össze, ahol az elegáns klasszikus ételek mellett nemzetközi, könnyed fogások is helyet kapnak.',
    
    'footer.directions': 'Útvonaltervezés',
    'footer.opening': 'Nyitvatartás:',
    'footer.days1': 'hétfő-péntek: 7:00-19:00',
    'footer.days2': 'szombat-vasárnap: 8:00-19:00'
  },
  'EN': {
    'nav.home': 'Home',
    'nav.drinks': 'Drinks',
    'nav.dessert': 'Dessert',
    'nav.cake': 'Cake',
    'nav.brunch': 'Brunch',
    'nav.menu': 'Menu',
    'nav.contact': 'Contact',
    'nav.gallery': 'Gallery',
    
    'hero.title': 'Your place,',
    'hero.subtitle': 'your coffee.',
    'hero.desc': 'Step in and feel at home. Drinks made with heart and soul, along with homemade cakes, await you with a smile.',
    
    'reveal.title': 'Anatomy',
    'reveal.subtitle': 'of Coffee',
    'reveal.desc': 'Engineering precision in every drop',
    'reveal.temp': 'Temperature',
    'reveal.pressure': 'Pressure',
    'reveal.grind': 'Grind Profile',
    'reveal.grind.val': 'Ultra-Fine',
    'reveal.extraction': 'Extraction',
    'reveal.extraction.val': '28 Seconds',
    
    'menu.dessert': 'Dessert',
    'menu.dessert.subtitle': 'Love at first sight!',
    'menu.monodessert': 'Mono Dessert',
    'menu.cake': 'Cake Slice',
    'menu.cookies': 'Cookies',
    'menu.bread': 'Bread Dessert',
    'menu.desc1': 'Our custom-designed desserts are made in our French-style spectacular dessert workshop, using selected ingredients with maximum care.',
    'menu.desc2': 'Each sweet is a meeting of artisanal creativity, refined flavors, and meticulous detailing — to provide a true experience not only in taste but also in appearance. Our constantly changing selection includes not only special mono desserts but also cake slices, pie cakes, and classic cookies.',
    
    'menu.brunch': 'Brunch',
    'menu.brunch.subtitle': 'Start the day right!',
    'menu.brunch1.title': 'Hearty Breakfast',
    'menu.brunch1.desc': 'Our brunch is available from opening: from early breakfast through late morning meals up to a light afternoon lunch. Stop by for a hearty bite.',
    'menu.brunch2.title': 'Light Lunch',
    'menu.brunch2.desc': 'We carefully curate our menu, featuring international, light dishes alongside elegant classic meals.',
    
    'footer.directions': 'Directions',
    'footer.opening': 'Opening Hours:',
    'footer.days1': 'Monday-Friday: 7:00-19:00',
    'footer.days2': 'Saturday-Sunday: 8:00-19:00'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('HU');

  const t = (key: string) => {
    return translations[lang][key as keyof typeof translations['HU']] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
