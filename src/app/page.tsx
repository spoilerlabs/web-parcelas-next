import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Proyecto from '@/components/Proyecto';
import Panguipulli from '@/components/Panguipulli';
import Galeria from '@/components/Galeria';
import Atractivos from '@/components/Atractivos';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Proyecto />
        <Panguipulli />
        <Galeria />
        <Atractivos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
