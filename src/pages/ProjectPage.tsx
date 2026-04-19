import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projectsData } from '../data';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) return <div className="p-20 text-center">Project not found.</div>;

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="p-6 border-b border-black flex justify-between items-center fixed top-0 w-full bg-white z-50">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl hover:text-primary-600 transition-colors uppercase">
          <ArrowLeft size={20} /> Back
        </Link>
      </nav>

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-12">
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-2 block">{project.category}</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-none">{project.title}</h1>
            <div className="flex flex-wrap gap-4">
              {project.tags.map(tag => {
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
                  <div key={tag} className="flex items-center gap-2 px-3 py-2 border border-black text-xs font-bold uppercase tracking-widest bg-white">
                    <img 
                      src={mapping.custom || `https://skillicons.dev/icons?i=${mapping.icon}`} 
                      alt={tag} 
                      className="w-5 h-5 object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <span>{tag}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mb-16">
            <img 
              src={project.image} 
              className="w-full aspect-video object-cover border border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]" 
              alt={project.title}
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-8">
              <h2 className="text-3xl font-display font-bold border-b border-black pb-4 italic">Overview</h2>
              <p className="text-xl leading-relaxed text-gray-700">{project.fullDesc}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="space-y-4">
                  <h4 className="font-bold uppercase tracking-tighter text-gray-400">The Problem</h4>
                  <p className="text-gray-600">Existing solutions were too bloated and failed to address the specific needs of high-frequency traders who require immediate data reflectiveness.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold uppercase tracking-tighter text-gray-400">The Solution</h4>
                  <p className="text-gray-600">We built a proprietary rendering engine that skips the virtual DOM diffing for high-velocity data streams, resulting in a 300% performance gain.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border border-black p-8 space-y-6">
                <h3 className="text-xl font-display font-bold uppercase tracking-widest">Project Info</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-gray-400 font-bold uppercase block mb-1">Company</span>
                    <span className="font-medium">Confidential Client</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-bold uppercase block mb-1">Duration</span>
                    <span className="font-medium">4 Months</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-bold uppercase block mb-1">Role</span>
                    <span className="font-medium">Lead Frontend Architect</span>
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
  {/* Live Demo Link */}
  <a 
    href={project.liveUrl} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex-1 py-4 bg-indigo-600 text-white font-bold uppercase text-xs tracking-widest flex justify-center items-center gap-2 hover:bg-indigo-700 transition-colors"
  >
    Live Demo <ExternalLink size={14}/>
  </a>

  {/* GitHub Link */}
  <a 
    href={project.githubUrl} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-14 h-14 border border-black flex justify-center items-center hover:bg-black hover:text-white transition-colors"
  >
    <Github size={20}/>
  </a>
</div>

              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
