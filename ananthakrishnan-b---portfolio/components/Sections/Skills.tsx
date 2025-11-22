import React from 'react';
import { Code, Globe, Cpu } from 'lucide-react';
import SectionTitle from '../UI/SectionTitle';
import { Skill } from '../../types';

const skills: Skill[] = [
  { name: "Java", level: 85, category: 'language' },
  { name: "Python", level: 80, category: 'language' },
  { name: "JavaScript", level: 75, category: 'language' },
  { name: "React.js", level: 78, category: 'web' },
  { name: "Node.js", level: 85, category: 'web' },
  { name: "Machine Learning", level: 75, category: 'ai' },
  { name: "Computer Vision", level: 80, category: 'ai' },
  { name: "OpenCV", level: 75, category: 'ai' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
       {/* Decorative Gradients */}
       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-100/40 dark:from-purple-900/20 to-transparent rounded-bl-full pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100/40 dark:from-indigo-900/20 to-transparent rounded-tr-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Skills & Expertise" subtitle="Technical Proficiency" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['language', 'web', 'ai'].map((category) => (
            <div key={category} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:border-indigo-50 dark:hover:border-indigo-900 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100 dark:border-slate-700 group">
                <div className="text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {category === 'language' && <Code size={24} />}
                    {category === 'web' && <Globe size={24} />}
                    {category === 'ai' && <Cpu size={24} />}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white capitalize">
                    {category === 'ai' ? 'AI & Machine Learning' : category === 'web' ? 'Web Development' : 'Programming Languages'}
                </h3>
              </div>
              
              <div className="space-y-6">
                {skills.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{skill.name}</span>
                      <span className="text-slate-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden transition-colors duration-300">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out bg-[length:200%_100%] animate-shimmer"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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

export default Skills;