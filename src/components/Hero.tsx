import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    
    if (title && subtitle && button) {
      title.style.opacity = '0';
      subtitle.style.opacity = '0';
      button.style.opacity = '0';
      
      setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 500);
      
      setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 1000);
      
      setTimeout(() => {
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }, 1500);
    }

    // Create particle animation
    if (particlesRef.current) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-white/20 pointer-events-none';
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random opacity
        particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        
        // Animation
        particle.animate(
          [
            { transform: 'translateY(0) rotate(0deg)', opacity: particle.style.opacity },
            { transform: `translateY(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`, opacity: '0' }
          ],
          {
            duration: Math.random() * 10000 + 5000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
            delay: Math.random() * 2000
          }
        );
        
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1729] via-[#0a1023] to-[#020715] z-0"></div>
      
      {/* Particle container */}
      <div ref={particlesRef} className="absolute inset-0 z-10 pointer-events-none"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 transform translate-y-10"
        >
          Sai Sandeep Mamidala
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-blue-400 mb-8 max-w-2xl mx-auto transition-all duration-1000 transform translate-y-10"
        >
          Computer Science Professional • Machine Learning Engineer • Full Stack Developer
        </p>
        <div 
          ref={buttonRef}
          className="transition-all duration-1000 transform translate-y-10"
        >
          <a 
            href="#about" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Explore My Work
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;