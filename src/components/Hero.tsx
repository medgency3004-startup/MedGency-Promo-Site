import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="bg-orb w-[600px] h-[600px] -top-40 -left-40 animate-pulse-glow" style={{background: 'radial-gradient(circle, rgba(220,38,38,0.6) 0%, rgba(34,197,94,0.5) 50%, rgba(220,38,38,0.3) 100%)'}} />
      <div className="bg-orb bg-orb-green w-[400px] h-[400px] top-1/4 -right-20 animate-pulse-glow delay-200" />
      <div className="bg-orb bg-orb-indigo w-[300px] h-[300px] bottom-20 left-1/4 animate-pulse-glow delay-400" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-muted-foreground">Intelligent Emergency Medical Network</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 animate-fade-up delay-100">
            <span className="gradient-text">Connecting Care</span>
            <br />
            <span className="text-foreground">in Critical Moments</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
            MedGency is an intelligent emergency medical network that bridges the gap between 
            clinics, hospitals, and donors — ensuring that life-saving resources reach where 
            they're needed most, exactly when they're needed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-up delay-300">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 group"
            >
              Support Us
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
