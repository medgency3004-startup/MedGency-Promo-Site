import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
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
                href="https://in.linkedin.com/company/medgency1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 group"
              >
                Connect with us
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=medgency3004@gmail.com&su=Schedule%20Demo%20Request&body=Hi%20MedGency%20team,%0D%0A%0D%0AI'd%20like%20to%20schedule%20a%20demo.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks!"
                target="_blank"
                rel="noopener noreferrer"
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
