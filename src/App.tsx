import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Sai Sandeep Mamidala - Portfolio';
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-8 h-8 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference border-2 border-white';
    cursor.style.transition = 'transform 0.1s ease-out';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'fixed w-2 h-2 rounded-full bg-white pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference';
    document.body.appendChild(cursorDot);
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    });
    
    document.addEventListener('mousedown', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.borderColor = 'rgba(59, 130, 246, 0.8)';
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = 'white';
      });
    });
    
    // Cleanup
    return () => {
      document.body.removeChild(cursor);
      document.body.removeChild(cursorDot);
    };
  }, []);

  return (
    <div className="bg-[#020715] min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <MusicPlayer />
      <ScrollToTop />
    </div>
  );
}

export default App;