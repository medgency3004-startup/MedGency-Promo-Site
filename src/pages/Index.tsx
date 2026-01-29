import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Workflows from '@/components/Workflows';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
