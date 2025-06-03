import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#020715] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Sai Sandeep Mamidala</h2>
            <p className="text-gray-400">Machine Learning Engineer & Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Sandeep2229" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-900/30 p-3 rounded-full hover:bg-blue-800/50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-sandeep-mamidala/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-900/30 p-3 rounded-full hover:bg-blue-800/50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@email.com"
              className="bg-blue-900/30 p-3 rounded-full hover:bg-blue-800/50 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Sai Sandeep Mamidala. All rights reserved.
            </p>
            
            <div className="flex items-center text-gray-400 text-sm">
              <p>Made with</p>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" />
              <p>using React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;