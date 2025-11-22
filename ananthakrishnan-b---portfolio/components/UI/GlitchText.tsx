import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  // Removed glitch effect for professional theme
  return (
    <span className={className}>{text}</span>
  );
};

export default GlitchText;