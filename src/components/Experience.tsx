import { useEffect, useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience';
}

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineItems: TimelineItem[] = [
    {
      year: "2024 - 2026",
      title: "Master of Science in Computer Engineering",
      organization: "New York University",
      description: "Focused on Machine Learning, MLOps, Deep Learning, Embedded Systems, and User Experience Design.",
      type: "education"
    },
    {
      year: "Feb 2025 – Present",
      title: "UX Research + Design Intern",
      organization: "Care Companion (NYU Project)",
      description: "Designed patient-facing and technician dashboards for AI-based diagnostic tools using Figma, collaborated with ML/backend teams, and conducted usability studies.",
      type: "experience"
    },
    {
      year: "May 2025",
      title: "UX Designer – Hack Night",
      organization: "Microsoft RAG App (NY Tech Week)",
      description: "Designed observability dashboards for a RAG-based LLM app using Comet Opik and Weaviate, including flow mapping and system feedback UI.",
      type: "experience"
    },
    {
      year: "May 2023",
      title: "Bachelor of Technology in ECE",
      organization: "SRM Institute of Science and Technology",
      description: "Graduated with honors. Developed skills in data structures, embedded systems, and digital design.",
      type: "education"
    },
    {
      year: "Dec 2022",
      title: "Academic Intern",
      organization: "Hewlett Packard Enterprise (HPE)",
      description: "Built dashboards and interactive server visualizations; evaluated accessibility compliance in UIs.",
      type: "experience"
    },
    {
      year: "Dec 2022",
      title: "Research Intern",
      organization: "National University of Singapore (NUS)",
      description: "Engineered a CNN-based fracture detection model with ResNet/VGG; improved diagnostic reliability and deployed for clinical use.",
      type: "experience"
    },
    {
      year: "Sep 2022",
      title: "ML Project: Driver Drowsiness Detection",
      organization: "SRM Minor Project",
      description: "Built OpenCV-based real-time alert system using SVM and deep learning, deployed on embedded platforms.",
      type: "experience"
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
        if (entry.isIntersecting && timelineRef.current) {
          const items = timelineRef.current.querySelectorAll('.timeline-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).style.opacity = '1';
              (item as HTMLElement).style.transform = 'translateY(0)';
            }, index * 200);
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
    <section ref={sectionRef} id="experience" className="py-20 bg-gradient-to-b from-[#0f1729] to-[#091124]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Education & <span className="text-blue-400">Experience</span>
        </h2>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-800/50"></div>

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`timeline-item relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } mb-16 opacity-0 transform translate-y-12 transition-all duration-700`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div
                  className={`relative p-6 rounded-lg shadow-lg ${item.type === 'education' ? 'bg-purple-900/20' : 'bg-blue-900/20'
                    } border-l-4 ${item.type === 'education' ? 'border-purple-500' : 'border-blue-500'
                    } ml-6 md:ml-0 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}
                >
                  <span
                    className={`absolute top-6 ${index % 2 === 0 ? 'md:-left-4 left-[-34px]' : 'left-[-34px] md:-right-4'
                      } w-8 h-8 rounded-full flex items-center justify-center ${item.type === 'education' ? 'bg-purple-500' : 'bg-blue-500'
                      } shadow-lg`}
                  >
                    <span className="text-white text-xs font-bold">
                      {index + 1}
                    </span>
                  </span>

                  <div className="ml-2">
                    <span
                      className={`inline-block px-3 py-1 text-xs rounded-full mb-3 ${item.type === 'education' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'
                        }`}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className={`text-sm ${item.type === 'education' ? 'text-purple-300' : 'text-blue-300'} mb-3`}>
                      {item.organization}
                    </p>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
