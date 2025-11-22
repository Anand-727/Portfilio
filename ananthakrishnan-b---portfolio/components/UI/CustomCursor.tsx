import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      
      // Move the icon instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the element is interactive
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Custom Arrow Icon */}
      <div 
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999]
          ${isHovering ? 'text-primary-600 dark:text-primary-400' : 'text-slate-800 dark:text-slate-200'}
        `}
        style={{ willChange: 'transform' }}
      >
        {/* Modern geometric cursor arrow */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md"
        >
          <path 
            d="M3 3L10.5 21.5L13.5 13.5L21.5 10.5L3 3Z" 
            fill="currentColor" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
            className="dark:stroke-slate-800"
          />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;