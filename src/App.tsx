import Nav from './components/Nav';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative w-full min-h-screen bg-black text-earth-50">
        <Nav />
        
        <main className="pt-20 md:pt-24">
          <Hero />
          <MenuSection />
          <About />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}
