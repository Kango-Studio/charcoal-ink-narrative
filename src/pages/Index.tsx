import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Historia from '@/components/Historia';
import Servicos from '@/components/Servicos';
import Estudios from '@/components/Estudios';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Historia />
      <Servicos />
      <Estudios />
      <Footer />
    </div>
  );
};

export default Index;
