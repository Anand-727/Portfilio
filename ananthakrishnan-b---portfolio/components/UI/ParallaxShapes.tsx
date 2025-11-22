import React, { useEffect, useState } from 'react';

const ParallaxShapes: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Shape 1: Top Right (Fast Mover) - Purple */}
      <div 
        className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-[100px] transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      
      {/* Shape 2: Middle Left (Slow Mover) - Indigo */}
      <div 
        className="absolute top-[40%] -left-[10%] w-[35vw] h-[35vw] bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-[80px] transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />

      {/* Shape 3: Bottom Right (Medium Mover) - Pink */}
      <div 
        className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-pink-200/20 dark:bg-pink-900/20 rounded-full blur-[90px] transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      
      {/* Shape 4: Tiny accent (Very Fast) */}
      <div 
         className="absolute top-[20%] left-[20%] w-32 h-32 bg-blue-200/10 dark:bg-blue-900/20 rounded-full blur-[40px] transition-transform duration-75 ease-out"
         style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />
    </div>
  );
};

export default ParallaxShapes;