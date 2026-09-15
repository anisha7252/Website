import React, { useState, useEffect, useRef } from 'react';

const CHARS = '!<>-_\\\\/[]{}—=+*^?#________';

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '', duration = 1500 }) => {
  const [displayText, setDisplayText] = useState(text.replace(/./g, ' '));
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;
    hasRun.current = true;

    let startTime: number;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const fraction = Math.min(progress / duration, 1);
      
      const newText = text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        // Resolve letters progressively
        if (index / text.length < fraction) {
          return char;
        }
        // Show random characters for unresolved parts
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join('');
      
      setDisplayText(newText);

      if (progress < duration) {
        frameId = requestAnimationFrame(animate);
      } else {
        setDisplayText(text); // Ensure final state
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [text, duration, isIntersecting]);

  return (
    <span ref={containerRef} className={className}>
      {displayText}
    </span>
  );
};
