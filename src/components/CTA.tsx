import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="bg-orb bg-orb-indigo w-[600px] h-[600px] left-1/2 -translate-x-1/2 top-0 animate-pulse-glow" />
      <div className="bg-orb bg-orb-green w-[400px] h-[400px] left-1/4 bottom-0 animate-pulse-glow delay-200" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="glass-card p-12 md:p-16 rounded-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Join{' '}
              <span className="gradient-text-indigo">MEDGENCY</span>
              {' '}today
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Be part of the intelligent emergency medical network that's transforming 
              how life-saving resources reach those who need them most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="btn-primary flex items-center gap-2 group"
              >
                Connect with us
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="/"
                className="btn-secondary"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
