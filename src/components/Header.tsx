import { useState, useEffect } from 'react';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass ${
        scrolled ? 'py-1' : 'py-1'
      }`}
    >
      <div className="container mx-auto px-1 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-1 group transition-transform duration-300 group-hover:scale-110 mt-2 -ml-24">
          <img 
            src="/logo.png" 
            alt="MedGency Logo" 
            className="h-32 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#workflows"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Workflows
          </a>
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Who We Serve
          </a>
          <a
            href="/"
            className="btn-primary text-sm px-6 py-2.5"
          >
            Get Started
          </a>
        </nav>

        <button className="md:hidden text-foreground p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
