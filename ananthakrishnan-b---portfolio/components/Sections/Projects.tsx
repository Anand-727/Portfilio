import React from 'react';
import { Github, ExternalLink, Eye, Shield, ShoppingCart } from 'lucide-react';
import SectionTitle from '../UI/SectionTitle';
import { Project } from '../../types';

const projects: (Project & { icon: React.ReactNode })[] = [
  {
    title: "Smart Attendance System",
    description: "Automated attendance system utilizing advanced computer vision algorithms for real-time face detection and recognition.",
    tech: ["Python", "OpenCV", "LBPH", "Computer Vision"],
    features: ["Real-time Detection", "Auto Logging", "Analytics"],
    icon: <Eye size={28} />
  },
  {
    title: "Threat Detection AI",
    description: "Intelligent security system using Convolutional Neural Networks (CNN) to classify and alert on potential threats.",
    tech: ["Python", "TensorFlow", "XGBoost", "CNN"],
    features: ["CNN Classification", "Real-time Alerts", "Scalable"],
    icon: <Shield size={28} />
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack solution featuring personalized AI recommendations and a secure payment gateway integration.",
    tech: ["React.js", "Node.js", "MongoDB", "ML"],
    features: ["AI Recommendations", "Secure Payments", "Responsive"],
    icon: <ShoppingCart size={28} />
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionTitle title="Recent Projects" subtitle="My Portfolio" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.2)] hover:border-purple-200 dark:hover:border-purple-500/30 transition-all duration-300 flex flex-col transform hover:-translate-y-1">
              <div className="p-8 flex flex-col flex-grow relative">
                 {/* Top gradient line */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl group-hover:bg-gradient-to-br group-hover:from-primary-50 group-hover:to-purple-50 dark:group-hover:from-slate-700 dark:group-hover:to-slate-700 group-hover:text-primary-600 dark:group-hover:text-purple-400 transition-all duration-300">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-700 hover:scale-110 hover:rotate-6 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]" title="View Code">
                      <Github size={20} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-700 hover:scale-110 hover:rotate-6 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]" title="Live Demo">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-700 group-hover:to-purple-700 dark:group-hover:from-primary-400 dark:group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-2.5 py-1 rounded-full group-hover:border-purple-200 dark:group-hover:border-purple-500/50 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-all duration-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <ul className="border-t border-slate-100 dark:border-slate-700 pt-4 space-y-2 transition-colors duration-300">
                    {project.features.map((feat, i) => (
                      <li key={i} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-pink-500 transition-colors"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;