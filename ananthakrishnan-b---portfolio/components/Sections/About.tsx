import React from 'react';
import { Award, GraduationCap, Brain, Database, Cloud, ExternalLink } from 'lucide-react';
import SectionTitle from '../UI/SectionTitle';
import { Education } from '../../types';

const educationData: Education[] = [
  {
    degree: "Bachelor of Engineering in CSE",
    institution: "Panimalar Engineering College",
    year: "2020 - 2024",
    details: "CGPA: 7.97/10.0 | Specialized in Problem Solving, AI & ML. Active participant in coding competitions and tech workshops."
  },
  {
    degree: "Higher Secondary Education",
    institution: "Jaya Matriculation Hr. Sec. School",
    year: "2018 - 2020",
    details: "Focus on Computer Science and Mathematics. Developed foundation in programming logic and algorithms."
  },
  {
    degree: "High School Education",
    institution: "Smt. Krishna Moolchand Maheshwari Vivekananda Vidyalaya",
    year: "2005 - 2018",
    details: "Early exposure to computer fundamentals and logical thinking. Consistently excelled in mathematics and science."
  }
];

const certificationData = [
  {
    title: "Artificial Intelligence",
    description: "Advanced mastery of AI algorithms, neural networks, and machine learning models for predictive analysis.",
    icon: <Brain size={20} />,
    link: "https://drive.google.com/file/d/1cZqygXKeV5DutDOCqobxMn5Old0hA7e7/view?usp=drive_link"
  },
  {
    title: "Database Management",
    description: "Expertise in SQL/NoSQL database design, optimization techniques, and ensuring data integrity.",
    icon: <Database size={20} />,
    link: "https://drive.google.com/file/d/1BPEtFJt--P0rEmfGslqKdH9uWH4H_DB0/view?usp=drive_link"
  },
  {
    title: "AWS Academy Graduate",
    description: "Comprehensive training in cloud computing, serverless architecture, and AWS infrastructure management.",
    icon: <Cloud size={20} />,
    link: "https://drive.google.com/file/d/1whXQu8NUPkdxZAvr7UAe7lDYUTr61hc_/view?usp=drive_link"
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="About Me" subtitle="My Story" />

        <div className="max-w-4xl mx-auto">
          {/* Bio Section - Centered */}
          <div className="text-center mb-12 space-y-8">
            <div className="prose prose-lg text-slate-600 dark:text-slate-300 mx-auto transition-colors duration-300">
              <p className="text-lg leading-relaxed">
                I am a passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 font-bold">Computer Science Engineer</span> driven by the convergence of artificial intelligence and human creativity. 
                My goal is to architect solutions that not only solve complex problems but push the boundaries of what technology can achieve.
              </p>
            </div>
            
            <div className="inline-block relative py-2">
                <p className="italic text-slate-500 dark:text-slate-400 text-lg relative z-10 px-8 transition-colors duration-300">
                    "Innovation distinguishes between a leader and a follower."
                </p>
                <span className="absolute top-0 left-0 text-4xl text-primary-200 dark:text-primary-900 -translate-y-1/4 font-serif select-none">"</span>
                <span className="absolute bottom-0 right-0 text-4xl text-primary-200 dark:text-primary-900 translate-y-1/4 font-serif select-none">"</span>
            </div>

            {/* Stats - Centered Row */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="group bg-white dark:bg-slate-800 p-6 rounded-2xl text-center border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:border-indigo-100 dark:hover:border-indigo-900 transition-all duration-300 w-48">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-purple-600 mb-2 font-heading">10+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="group bg-white dark:bg-slate-800 p-6 rounded-2xl text-center border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:border-pink-100 dark:hover:border-pink-900 transition-all duration-300 w-48">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600 mb-2 font-heading">5+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Certifications</div>
              </div>
            </div>
          </div>

          {/* Education & Certs - Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* Education Column */}
            <div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-8 flex items-center justify-center md:justify-start gap-2 group transition-colors duration-300">
                <GraduationCap className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                Education
              </h3>
              
              <div className="space-y-8 border-l-2 border-slate-100 dark:border-slate-800 pl-8 ml-3 transition-colors duration-300">
                {educationData.map((edu, index) => (
                  <div key={index} className="relative group text-left">
                    <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-700 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-purple-500 transition-all duration-300 shadow-sm"></div>
                    <div className="bg-white dark:bg-slate-800 p-4 -m-4 rounded-xl group-hover:bg-slate-50/50 dark:group-hover:bg-slate-700/50 transition-colors duration-300">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.institution}</p>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded mb-2 inline-block border border-slate-200 dark:border-slate-600">{edu.year}</span>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
               <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-8 flex items-center justify-center gap-2 group transition-colors duration-300">
                <Award className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                Certifications
              </h3>
              <div className="flex flex-col gap-6">
                {certificationData.map((cert, i) => {
                  const cardClasses = "group p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:border-purple-100 dark:hover:border-purple-900 transition-all duration-300 flex gap-4 items-start w-full text-left hover:scale-[1.02]";
                  
                  const content = (
                    <>
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-700 text-primary-600 dark:text-primary-400 group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-300 shrink-0 mt-1 shadow-sm">
                        {cert.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors mb-1 flex items-center gap-2">
                          {cert.title}
                          {cert.link && <ExternalLink size={14} className="text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{cert.description}</p>
                      </div>
                    </>
                  );

                  return cert.link ? (
                    <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                      {content}
                    </a>
                  ) : (
                    <div key={i} className={cardClasses}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;