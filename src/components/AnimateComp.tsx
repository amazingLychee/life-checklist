'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimateComp = ({ children }: { children: React.ReactNode }) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(divRef);

  const animVariants = {
    hidden: {
      y: '2rem',
      opacity: 0,
    },
    visible: {
      y: '0rem',
      opacity: 1,
      transition: { duration: 0.8, ease: [0.3, 0, 0, 1] },
    },
  };

  return (
    <motion.div
      ref={divRef}
      variants={animVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default AnimateComp;
