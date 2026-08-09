import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices or reduced motion
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => setIsVisible(false);

    // Track interactive hover elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (isTouch || !isVisible) return;

    let animationFrameId;
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };
    followCursor();

    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isVisible, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        className={`fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? 'scale-150 bg-blue-400 shadow-[0_0_12px_#38bdf8]' : ''
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Trailing Aura Ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 border border-blue-400/50 rounded-full pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          isHovered ? 'scale-175 border-cyan-300 bg-cyan-500/10' : ''
        }`}
        style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
