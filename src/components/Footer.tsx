import { Github, Twitter } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Workflows', 'Integrations', 'Pricing'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Status'],
  'Content Library': ['Case Studies', 'Guides', 'Webinars', 'API Docs'],
};

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
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <p className="text-muted-foreground mb-6 max-w-sm">
              Connecting care in critical moments. An intelligent emergency medical 
              network bridging healthcare providers and donors.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="/"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
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

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 mt-16">
          <p className="text-sm text-muted-foreground">
            © 2026 MedGency. Terms and conditions applied.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
