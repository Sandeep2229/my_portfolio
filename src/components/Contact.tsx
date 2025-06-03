import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (formRef.current) {
            formRef.current.style.opacity = '1';
            formRef.current.style.transform = 'translateX(0)';
          }
          if (infoRef.current) {
            infoRef.current.style.opacity = '1';
            infoRef.current.style.transform = 'translateX(0)';
          }
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
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-b from-[#091124] to-[#020715]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full md:w-7/12 bg-[#0d1630] p-8 rounded-lg shadow-lg opacity-0 transform translate-x-[-50px] transition-all duration-1000"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#162040] text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#162040] text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#162040] text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#162040] text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
            >
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </button>
            
            {formStatus.submitted && (
              <div className={`mt-6 px-4 py-3 rounded-lg ${formStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
          
          {/* Contact Information */}
          <div 
            ref={infoRef}
            className="w-full md:w-5/12 opacity-0 transform translate-x-[50px] transition-all duration-1000 delay-300"
          >
            <div className="bg-[#0d1630] p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-300">New York, United States</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Address</h4>
                    <p className="text-gray-300">mss9430@nyu.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone Number</h4>
                    <p className="text-gray-300">+1 9296785723</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map or additional info */}
            <div className="bg-[#0d1630] p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Available For</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Full-time Positions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Freelance Projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Consulting
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Research Collaborations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;