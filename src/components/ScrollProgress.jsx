import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 origin-left z-50 shadow-[0_0_12px_#38bdf8]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
