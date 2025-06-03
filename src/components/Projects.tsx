import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Bone Fracture Detection",
      description: "Developed a deep learning model to detect bone fractures in X-ray images, achieving 93% accuracy with a CNN architecture.",
      image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn"],
      githubUrl: "https://github.com/Sandeep2229/BoneFractureDetection"
    },
    {
      id: 2,
      title: "Driver Drowsiness Detection",
      description: "Created a real-time system that monitors driver's facial features to detect signs of drowsiness and alert them to prevent accidents.",
      image: "https://images.pexels.com/photos/7196618/pexels-photo-7196618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "OpenCV", "Keras", "Computer Vision"],
      githubUrl: "https://github.com/Sandeep2229/Driver_Drowsiness_detection"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with product catalog, user authentication, cart management, and payment processing.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      githubUrl: "https://github.com/Sandeep2229"
    },
    {
      id: 4,
      title: "Healthcare Data Analysis",
      description: "Analysis platform for healthcare data to identify patterns and insights, helping medical professionals make informed decisions.",
      image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "Pandas", "Matplotlib", "SQL", "Scikit-learn"],
      githubUrl: "https://github.com/Sandeep2229"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && projectsRef.current) {
          const projectCards = projectsRef.current.querySelectorAll('.project-card');
          
          projectCards.forEach((card, index) => {
            setTimeout(() => {
              (card as HTMLElement).style.opacity = '1';
              (card as HTMLElement).style.transform = 'translateY(0)';
            }, index * 150);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-b from-[#0a1023] to-[#0f1729]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          My <span className="text-blue-400">Projects</span>
        </h2>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card group relative bg-[#0d1630] rounded-xl overflow-hidden shadow-xl opacity-0 transform translate-y-12 transition-all duration-700 ease-out hover:shadow-blue-900/20"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1630] via-[#0d1630]/80 to-transparent opacity-90"></div>
                
                {/* Project links */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900/80 p-2 rounded-full text-white hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600/80 p-2 rounded-full text-white hover:bg-blue-500 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-blue-900/30 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className={`absolute bottom-0 left-0 w-1 bg-blue-500 transition-all duration-500 ease-out ${activeProject === project.id ? 'h-full' : 'h-0'}`}></div>
              <div className={`absolute top-0 right-0 h-1 bg-blue-500 transition-all duration-500 ease-out delay-100 ${activeProject === project.id ? 'w-full' : 'w-0'}`}></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Sandeep2229" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-400 hover:border-blue-600 font-medium py-2 px-6 rounded-full transition-all duration-300"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;