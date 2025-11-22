import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white relative inline-block transition-colors duration-300">
        {title}
        <span className="block w-12 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full shadow-sm"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;