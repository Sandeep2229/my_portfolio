import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (imageRef.current) {
            imageRef.current.style.transform = 'translateX(0)';
            imageRef.current.style.opacity = '1';
          }
          if (contentRef.current) {
            contentRef.current.style.transform = 'translateX(0)';
            contentRef.current.style.opacity = '1';
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-b from-[#020715] to-[#091124]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image */}
          <div
            ref={imageRef}
            className="w-full md:w-5/12 transform translate-x-[-100px] opacity-0 transition-all duration-1000 ease-out"
          >
            <div className="relative">
              <div className="w-full h-72 md:h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/Sandeep2229/profile_photo/main/profilephoto.png"
                  alt="Sai Sandeep Mamidala"
                  className="w-full h-72 md:h-96 rounded-lg overflow-hidden"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg font-medium">Sai Sandeep Mamidala</p>
                <p className="text-blue-300 text-sm">M.S. Computer Engineering @ NYU</p>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-blue-400"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-blue-400"></div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="w-full md:w-7/12 transform translate-x-[100px] opacity-0 transition-all duration-1000 ease-out delay-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4">UX-Focused ML Engineer & Full-Stack Developer</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I’m a passionate engineer blending Machine Learning and UX Design to create impactful, user-centered products.
              With experience in healthcare AI, computer vision, and full-stack development, I build solutions that balance
              technical innovation with intuitive interfaces.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At NYU, I’m pursuing my Master’s in Computer Engineering, with a focus on ML, MLOps, and Embedded Systems.
              I’ve collaborated on diagnostic AI tools, fact-checking platforms, and RAG-based observability dashboards —
              always aiming to make tech smarter and simpler.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Education</h4>
                <p className="text-gray-300">M.S. Computer Engineering</p>
                <p className="text-gray-400 text-sm">New York University</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Location</h4>
                <p className="text-gray-300">New York, United States</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-transparent hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-400 hover:border-blue-600 font-medium py-2 px-6 rounded-full transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
