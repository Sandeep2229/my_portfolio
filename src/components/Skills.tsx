import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillBarsRef = useRef<HTMLDivElement>(null);

  const technicalSkills: Skill[] = [
    { name: "Machine Learning", percentage: 90, color: "bg-purple-500" },
    { name: "Deep Learning", percentage: 85, color: "bg-blue-500" },
    { name: "Python", percentage: 92, color: "bg-green-500" },
    { name: "Computer Vision", percentage: 88, color: "bg-red-500" },
    { name: "TensorFlow/Keras", percentage: 85, color: "bg-yellow-500" },
    { name: "Java", percentage: 80, color: "bg-indigo-500" },
  ];

  const otherSkills: Skill[] = [
    { name: "JavaScript/TypeScript", percentage: 85, color: "bg-yellow-600" },
    { name: "React.js", percentage: 80, color: "bg-blue-400" },
    { name: "Node.js", percentage: 75, color: "bg-green-600" },
    { name: "SQL/NoSQL", percentage: 82, color: "bg-red-400" },
    { name: "Docker", percentage: 70, color: "bg-blue-600" },
    { name: "AWS", percentage: 75, color: "bg-orange-500" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && skillBarsRef.current) {
          const skillBars = skillBarsRef.current.querySelectorAll('.skill-bar');
          
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = `${bar.getAttribute('data-percentage')}%`;
              (bar as HTMLElement).style.opacity = '1';
            }, index * 100);
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
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-b from-[#091124] to-[#0a1023]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Technical <span className="text-blue-400">Skills</span>
        </h2>
        
        <div ref={skillBarsRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8 border-b border-blue-400 pb-2 inline-block">
              Core Competencies
            </h3>
            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-blue-400">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`skill-bar h-full ${skill.color} rounded-full opacity-0 transition-all duration-1000 ease-out`}
                      style={{ width: '0%' }}
                      data-percentage={skill.percentage}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional Skills */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8 border-b border-blue-400 pb-2 inline-block">
              Additional Technologies
            </h3>
            <div className="space-y-8">
              {otherSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-blue-400">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`skill-bar h-full ${skill.color} rounded-full opacity-0 transition-all duration-1000 ease-out`}
                      style={{ width: '0%' }}
                      data-percentage={skill.percentage}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Knowledge Areas */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            Knowledge Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Neural Networks", "Computer Vision", "NLP", "Data Science", 
              "Web Development", "Mobile Development", "Cloud Computing", 
              "Database Management", "Algorithm Design", "System Architecture",
              "RESTful APIs", "Big Data"
            ].map((item, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full border border-blue-500/30 hover:bg-blue-800/50 transition-all cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;