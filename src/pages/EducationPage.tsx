import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { educationData } from '../data';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';

export default function EducationPage() {
  const { id } = useParams();
  const education = educationData.find(e => e.id === id);

  if (!education) return <div className="p-20 text-center">Education record not found.</div>;

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="p-6 border-b border-black flex justify-between items-center fixed top-0 w-full bg-white z-50">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl hover:text-primary-600 transition-colors uppercase">
          <ArrowLeft size={20} /> Back
        </Link>
      </nav>

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2">
              <img 
                src={education.image} 
                className="w-full aspect-[4/5] object-cover border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" 
                alt={education.school}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="mb-8">
                <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-2 block">{education.type}</span>
                <h1 className="text-5xl font-display font-bold mb-4">{education.school}</h1>
                <div className="flex gap-6 text-gray-500 font-medium font-sans">
                  <div className="flex items-center gap-2"><Calendar size={18}/> {education.year}</div>
                  <div className="flex items-center gap-2"><MapPin size={18}/> {education.location}</div>
                </div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <h2 className="text-2xl font-display font-bold text-black border-b border-black pb-2 italic">{education.degree}</h2>
                <p className="whitespace-pre-line font-light">{education.fullDesc}</p>
                
                <div className="pt-8 grid grid-cols-2 gap-4">
                  <div className="border border-black p-4 bg-primary-50/20">
                    <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400 mb-1">{education.gpaLabel}</h4>
                    <span className="text-xl font-display font-bold italic text-black">{education.gpa}</span>
                  </div>
                  <div className="border border-black p-4">
                    <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400 mb-1">Status</h4>
                    <span className="text-xl font-display font-bold italic text-black">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
