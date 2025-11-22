import React, { useEffect, useState } from 'react';
import { Terminal, Cpu, Code, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = ["Computer Science Engineer", "AI & ML Specialist", "Full-Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const current = roles[roleIndex];
      
      if (isDeleting) {
        setText(current.substring(0, text.length - 1));
      } else {
        setText(current.substring(0, text.length + 1));
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 bg-transparent overflow-hidden">
      
      {/* Static backgrounds removed in favor of global ParallaxShapes */}

      <div className="container mx-auto px-6 z-10 text-center">

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold mb-6 text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 animate-shimmer bg-[length:200%_auto]">Ananthakrishnan</span>
        </h1>

        <div className="h-8 mb-8 text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300">
          I am a <span className="text-slate-900 dark:text-white">{text}</span>
          <span className="animate-pulse ml-1 text-primary-500">|</span>
        </div>

        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed transition-colors duration-300">
          Transforming ideas into robust, scalable, and innovative digital solutions. 
          Specializing in building exceptional web applications and intelligent systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="https://github.com/Anand-727" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-lg font-semibold overflow-hidden shadow-lg shadow-primary-500/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:tracking-wider"
          >
             <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <span className="relative flex items-center gap-2">View Work <ArrowRight size={18} /></span>
          </a>
          <a href="#contact" className="px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold hover:border-purple-300 dark:hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:tracking-wider">
            Contact Me
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <Terminal size={24} />, label: "Problem Solver", desc: "Optimized Algorithms" },
            { icon: <Cpu size={24} />, label: "AI Architect", desc: "Neural Networks" },
            { icon: <Code size={24} />, label: "Full Stack", desc: "Scalable Systems" }
          ].map((item, idx) => (
            <div key={idx} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-purple-100/50 dark:hover:shadow-purple-900/20 hover:border-purple-100 dark:hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-700 group-hover:bg-gradient-to-br group-hover:from-primary-50 group-hover:to-purple-50 dark:group-hover:from-slate-700 dark:group-hover:to-slate-700 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{item.label}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;