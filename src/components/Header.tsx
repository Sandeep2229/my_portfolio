import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-white text-xl font-bold tracking-wider">
          SAI SANDEEP MAMIDALA<span className="text-blue-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/Sandeep2229" target="_blank" rel="noopener noreferrer" 
             className="text-white/70 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/sai-sandeep-mamidala/" target="_blank" rel="noopener noreferrer"
             className="text-white/70 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:contact@email.com" className="text-white/70 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="flex flex-col space-y-4 px-4">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white transition-colors py-2 text-sm uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex space-x-6 py-4">
            <a href="https://github.com/Sandeep2229" target="_blank" rel="noopener noreferrer" 
               className="text-white/70 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sai-sandeep-mamidala/" target="_blank" rel="noopener noreferrer"
               className="text-white/70 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@email.com" className="text-white/70 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;