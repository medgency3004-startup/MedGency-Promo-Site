import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Logo Background */}
        <div className="absolute inset-0 flex items-end justify-center pb-20 opacity-10 -z-10">
          <img 
            src="/plain-logo.jpg" 
            alt="MedGency Logo Background" 
            className="h-96 w-96 object-cover"
          />
        </div>
        <div className="mb-16 max-w-sm">
          <p className="text-muted-foreground mb-6">
            Connecting care in critical moments. An intelligent emergency medical 
            network bridging healthcare providers and donors.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/medgency/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://in.linkedin.com/company/medgency1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://medium.com/@medgency3004"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 mt-16">
          <p className="text-sm text-muted-foreground">
            © 2026 MedGency. Terms and conditions applied.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
