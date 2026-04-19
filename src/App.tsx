/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/ui/curved-menu';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  User, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import React, { useState, useEffect, type ReactNode, type FormEvent } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './lib/firebase';
import { educationData, projectsData } from './data';
import EducationPage from './pages/EducationPage';
import ProjectPage from './pages/ProjectPage';
import { useLocation } from 'react-router-dom';
import Quote from '@/components/ui/quote-section';
import HeroBackground from '@/components/ui/hero-background';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If we are on the home path exactly, and it's a fresh load (no hash or just /)
    // we want to ensure we start at the top (Hero).
    // React Router might remember scroll position, so we force-scrolling for Home.
    if (pathname === '/' && !hash) {
      window.scrollTo(0, 0);
    }

    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// --- Home Components ---

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-9xl font-display font-bold text-black mb-8 leading-none tracking-tighter">
            Digital <br />
            <span className="text-primary-600 italic">Visionary</span>
          </h1>
          <p className="max-w-3xl mx-auto text-2xl md:text-3xl text-gray-800 mb-12 font-sans font-light leading-relaxed">
            I'm Shafiah, a software engineer passionate about <br className="hidden md:block" />
            building beautiful, functional, and user-centric web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-10 py-5 bg-black text-white rounded-none font-bold uppercase tracking-widest text-sm shadow-[8px_8px_0px_0px_rgba(139,92,246,0.3)] flex items-center gap-2 border border-black"
            >
              View My Work <ArrowRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/ShafiahNoor.pdf"
              download="Shafiah_Resume.pdf"
              className="px-10 py-5 bg-white text-black border border-black rounded-none font-bold uppercase tracking-widest text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ children, subtitle }: { children: ReactNode; subtitle?: string }) => (
  <div className="text-left mb-20 border-l-4 border-primary-500 pl-8">
    {subtitle && (
      <span className="text-sm font-bold tracking-[0.3em] text-primary-500 uppercase mb-4 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-5xl md:text-7xl font-display font-bold text-black uppercase tracking-tighter italic">
      {children}
    </h2>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-none overflow-hidden bg-white border border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative z-10">
              <img 
                src="/Shafiah Noor.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500  brightness-110 contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="Philosophy">About Shafiah</SectionHeading>
            <div className="space-y-8 text-gray-800 text-xl leading-relaxed font-light">
              <p>
                Engineering is an art form. I believe a website should be more than just code—it should be a seamless bridge between human needs and technological possibilities.
              </p>
              <p>
                With a focus on performance and minimalist aesthetics, I build applications that feel as good as they look. My approach is disciplined and user-centric, ensuring every pixel has a purpose.
              </p>
              
              <div className="pt-12 grid grid-cols-2 gap-8 border-t border-black/10">
                <div className="p-6 border border-black bg-primary-50/30">
                  <h4 className="font-display font-bold text-black text-4xl">100%</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mt-2">Commitment</p>
                </div>
                <div className="p-6 border border-black">
                  <h4 className="font-display font-bold text-black text-4xl">4+</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mt-2">Projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-32 bg-gray-50 border-y border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Timeline">Background</SectionHeading>
        
        <div className="space-y-0 border border-black">
          {educationData.sort((a, b) => b.type === 'college' ? 1 : -1).map((item, i) => (
            <Link 
              to={`/education/${item.id}`}
              key={item.id}
              className={`block p-10 bg-white hover:bg-primary-50 transition-all group relative overflow-hidden ${i !== educationData.length - 1 ? 'border-b border-black' : ''}`}
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12 pr-24 md:pr-48">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-widest">{item.year}</span>
                  <h3 className="text-3xl font-display font-bold text-black uppercase tracking-tighter">{item.school}</h3>
                </div>
                <div className="md:text-right">
                  <p className="text-xl font-display font-medium text-black italic">{item.degree}</p>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-tight mt-1">{item.desc}</p>
                </div>
                <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 group-hover:border-primary-500 group-hover:bg-primary-500 transition-all duration-300 flex items-center justify-center">
                    <ArrowUpRight size={24} className="text-black group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Development',
      items: [
        { name: 'HTML', icon: 'html' },
        { name: 'CSS', icon: 'css' },
        { name: 'React', icon: 'react' },
        { name: 'Java', icon: 'java' },
        { name: 'Python', icon: 'python' },
        { name: 'Firebase', icon: 'firebase' }
      ],
    },
    {
      title: 'Design',
      items: [
        { name: 'Figma', icon: 'figma' },
        { name: 'Canva', icon: null, customIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURXSVJcJLHRlQApPQ2jJBniDiuSsdos84MA&s' }
      ],
    },
    {
      title: 'AI Tools',
      items: [
        { name: 'Gemini 3', icon: null, customIcon: 'https://static.vecteezy.com/system/resources/previews/046/861/646/non_2x/gemini-icon-on-a-transparent-background-free-png.png' },
        { name: 'Lovart', icon: null, customIcon: 'https://fastly.mwm-storage.mwmcdn.com/raw_files/14efa6fb-b632-4d63-9d75-ee1d616d4252?height=640&format=webp' },
        { name: 'Lovable', icon: null, customIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysfvFgHMVChk-7glLKWvdIJLLoA2aau0m1g&s' }
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Capabilities">My Skills</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className={`p-10 ${idx !== skillCategories.length - 1 ? 'md:border-r border-b md:border-b-0 border-black' : ''} hover:bg-primary-50 transition-colors group`}
            >
              <h3 className="text-2xl font-display font-bold text-black uppercase tracking-tighter mb-8 italic">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.items.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-2 px-3 py-2 border border-black bg-white group-hover:bg-white transition-colors"
                  >
                    <img 
                      src={skill.customIcon || `https://skillicons.dev/icons?i=${skill.icon}`} 
                      alt={skill.name} 
                      className="w-6 h-6 object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Archive">Portfolio</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projectsData.map((project, i) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className="group block relative overflow-hidden border border-black"
            >
              <div className="aspect-video relative overflow-hidden border-b border-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Simplified hover: only arrow */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 bg-white flex items-center justify-center text-black"
                  >
                    <ArrowUpRight size={32} />
                  </motion.div>
                </div>
              </div>
              <div className="p-8 bg-white">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em] mb-2">{project.category}</p>
                    <h3 className="text-3xl font-display font-bold text-black uppercase tracking-tighter">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => {
                    const iconMap: { [key: string]: { icon?: string, custom?: string } } = {
                      'React': { icon: 'react' },
                      'Framer Motion': { icon: 'framer' },
                      'Tailwind': { icon: 'tailwind' },
                      'Next.js': { icon: 'nextjs' },
                      'Firebase': { icon: 'firebase' },
                      'TypeScript': { icon: 'ts' },
                      'Node.js': { icon: 'nodejs' },
                      'PostgreSQL': { icon: 'postgres' },
                      'Redux': { icon: 'redux' },
                      'Shopify': { icon: 'shopify' },
                      'CSS Modules': { icon: 'css' },
                      'Python': { icon: 'python' },
                      'JavaScript': { icon: 'js' },
                      'MongoDB': { icon: 'mongodb' },
                      'Express': { icon: 'express' },
                      'HTML': { icon: 'html' },
                      'CSS': { icon: 'css' },
                      'Gemini': { custom: 'https://static.vecteezy.com/system/resources/previews/046/861/646/non_2x/gemini-icon-on-a-transparent-background-free-png.png' },
                      'Canva': { custom: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURXSVJcJLHRlQApPQ2jJBniDiuSsdos84MA&s' }
                    };
                    const mapping = iconMap[tag] || { icon: 'web' };
                    return (
                      <div key={tag} className="flex items-center gap-1.5 px-2 py-1 border border-black/10 text-[10px] font-bold uppercase tracking-widest bg-gray-50">
                        <img 
                          src={mapping.custom || `https://skillicons.dev/icons?i=${mapping.icon}`} 
                          alt={tag} 
                          className="w-3.5 h-3.5 object-contain"
                          referrerPolicy="no-referrer"
                        />
                        <span>{tag}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSending) return;
    
    setIsSending(true);
    try {
      // Store details in Firestore
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      setIsSent(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary-400 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Communication</span>
            <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-10 tracking-tighter uppercase italic leading-none">
              Start a <br /><span className="text-primary-400">Dialogue.</span>
            </h2>
            <div className="flex flex-col gap-6">
              <a href="mailto:zilshafiah@gmail.com" className="text-3xl text-white font-display hover:text-primary-400 transition-all font-light border-b border-white/20 pb-4 w-fit">
                zilshafiah@gmail.com
              </a>
              <div className="flex gap-8 text-white/50 font-bold uppercase tracking-widest text-xs">
                <a href="https://www.linkedin.com/in/shafiah-noor-270b66363/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
                <a href="https://github.com/Shafiah-Noor" target="_blank" rel="noopener noreferrer" className="hover:text-white">Github</a>
                <a href="#" className="hover:text-white">Dribbble</a>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-none border-2 border-primary-500 shadow-[20px_20px_0px_0px_rgba(139,92,246,0.2)]">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-8">
                <div className="border-b-2 border-black pb-2">
                  <label className="inline-block text-[10px] font-bold text-black uppercase tracking-widest bg-primary-100 px-1 mb-1">Identity</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent text-black text-xl font-display focus:outline-none placeholder:text-gray-200 italic" 
                    placeholder="Name" 
                  />
                </div>
                <div className="border-b-2 border-black pb-2">
                  <label className="inline-block text-[10px] font-bold text-black uppercase tracking-widest bg-primary-100 px-1 mb-1">Electronic Mail</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent text-black text-xl font-display focus:outline-none placeholder:text-gray-200 italic" 
                    placeholder="Email Address" 
                  />
                </div>
                <div className="border-b-2 border-black pb-2">
                  <label className="inline-block text-[10px] font-bold text-black uppercase tracking-widest bg-primary-100 px-1 mb-1">Mission</label>
                  <textarea 
                    rows={3} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent text-black text-xl font-display focus:outline-none placeholder:text-gray-200 italic resize-none" 
                    placeholder="Project details" 
                  />
                </div>
              </div>
              <button
                className={`w-full py-6 font-bold uppercase tracking-[0.2em] text-sm transition-all shadow-xl ${
                  isSent 
                    ? 'bg-green-600 text-white cursor-default' 
                    : isSending 
                      ? 'bg-gray-400 text-white cursor-wait'
                      : 'bg-black text-white hover:bg-primary-600'
                }`}
                type="submit"
                disabled={isSent || isSending}
              >
                {isSent ? 'Sent!' : isSending ? 'Sending...' : 'Dispatch Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalFooter = () => (
  <section className="py-12 bg-white border-t border-black/5">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-xl md:text-2xl text-black font-medium" style={{ fontFamily: "'Dancing Script', cursive" }}>
        made with ❤️ by Shafiah
      </p>
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <About />
    <Education />
    <Skills />
    <Projects />
    <Quote />
    <Contact />
    <FinalFooter />
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden selection:bg-primary-200 selection:text-black">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education/:id" element={<EducationPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
