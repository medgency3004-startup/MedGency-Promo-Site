import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-up" style={{ backgroundColor: 'rgba(43, 59, 85, 1)', color: 'rgba(255, 255, 255, 1)' }}>
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 1)' }}>Intelligent Emergency Medical Network</span>
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
              href="https://docs.google.com/forms/d/e/1FAIpQLSfi2NtnhgpAc9dQZQRUg6fQcdONx0igLOaphUqE_xkkxNEV_Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 group"
            >
              Support Us
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=medgency3004@gmail.com&su=Schedule%20Demo%20Request&body=Hi%20MedGency%20team,%0D%0A%0D%0AI'd%20like%20to%20schedule%20a%20demo.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ backgroundColor: 'rgba(43, 59, 85, 1)', color: 'rgba(248, 250, 252, 1)' }}
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
