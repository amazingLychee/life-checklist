// src/components/AnimateText.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimateTextProps {
  text: string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  style?: React.CSSProperties;
  delay?: number;
  offset?: number;
  duration?: number;
  ease?: [number, number, number, number];
  className?: string;
}

const AnimateText: React.FC<AnimateTextProps> = ({
  text,
  type = 'div',
  style,
  delay = 0,
  offset = 0.1,
  duration = 0.7,
  ease = [0.3, 0, 0, 1],
  className,
}) => {
  const words = text.split(' ');

  const ref = useRef<
    | HTMLHeadingElement
    | HTMLParagraphElement
    | HTMLDivElement
    | HTMLSpanElement
    | null
  >(null);

  const variants = {
    hidden: { y: '100%' },
    visible: { y: 0 },
    exit: { y: '100%' },
  };

  const isInView = useInView(ref);

  return type === 'h1' ? (
    <motion.h1
      ref={ref as React.RefObject<HTMLHeadingElement>}
      style={{ ...style }}
      className={className}
    >
      {words.map((word, index) => {
        return (
          <span
            key={index}
            style={{ overflow: 'hidden', display: 'inline-block' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              exit="exit"
              variants={variants}
              transition={{
                duration: duration,
                delay: delay + index * offset,
                ease: ease,
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </motion.h1>
  ) : type === 'h2' ? (
    <motion.h2
      ref={ref as React.RefObject<HTMLHeadingElement>}
      style={{ ...style }}
      className={className}
    >
      {words.map((word, index) => {
        return (
          <span
            key={index}
            style={{ overflow: 'hidden', display: 'inline-block' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial={`hidden`}
              animate={isInView ? `visible` : `hidden`}
              exit={`exit`}
              variants={variants}
              transition={{
                duration: duration,
                delay: delay + index * offset,
                ease: ease,
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </motion.h2>
  ) : type === 'h3' ? (
    <motion.h3
      ref={ref as React.RefObject<HTMLHeadingElement>}
      style={{ ...style }}
      className={className}
    >
      {words.map((word, index) => {
        return (
          <span
            key={index}
            style={{ overflow: 'hidden', display: 'inline-block' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              exit="exit"
              variants={variants}
              transition={{
                duration: duration,
                delay: delay + index * offset,
                ease: ease,
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </motion.h3>
  ) : type === 'h4' ? (
    <motion.h4
      ref={ref as React.RefObject<HTMLHeadingElement>}
      style={{ ...style }}
      className={className}
    >
      {words.map((word, index) => {
        return (
          <span
            key={index}
            style={{ overflow: 'hidden', display: 'inline-block' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              exit="exit"
              variants={variants}
              transition={{
                duration: duration,
                delay: delay + index * offset,
                ease: ease,
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </motion.h4>
  ) : type === 'h5' ? (
    <motion.h5
      ref={ref as React.RefObject<HTMLHeadingElement>}
      style={{ ...style }}
      className={className}
    >
      {words.map((word, index) => {
        return (
          <span
            key={index}
            style={{ overflow: 'hidden', display: 'inline-block' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              exit="exit"
              variants={variants}
              transition={{
                duration: duration,
                delay: delay + index * offset,
                ease: ease,
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </motion.h5>
  ) : type === 'h6' ? (
    <motion.h6
      ref={ref as React.RefObject<HTMLHeadingElement>}
      style={{ ...style }}
      className={className}
    >
      {words.map((word, index) => {
        return (
          <span
            key={index}
            style={{ overflow: 'hidden', display: 'inline-block' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              exit="exit"
              variants={variants}
              transition={{
                duration: duration,
                delay: delay + index * offset,
                ease: ease,
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </motion.h6>
  ) : type === 'p' ? (
    <motion.p
      ref={ref as React.RefObject<HTMLHeadingElement>}
      style={{ ...style }}
      className={className}
    >
      {words.map((word, index) => {
        return (
          <span
            key={index}
            style={{ overflow: 'hidden', display: 'inline-block' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              exit="exit"
              variants={variants}
              transition={{
                duration: duration,
                delay: delay + index * offset,
                ease: ease,
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </motion.p>
  ) : type === 'span' ? (
    <motion.span
      ref={ref as React.RefObject<HTMLHeadingElement>}
      style={{ ...style }}
      className={className}
    >
      {words.map((word, index) => {
        return (
          <span
            key={index}
            style={{ overflow: 'hidden', display: 'inline-block' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              exit="exit"
              variants={variants}
              transition={{
                duration: duration,
                delay: delay + index * offset,
                ease: ease,
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </motion.span>
  ) : (
    <motion.div
      ref={ref as React.RefObject<HTMLHeadingElement>}
      style={{ ...style }}
      className={className}
    >
      {words.map((word, index) => {
        return (
          <span
            key={index}
            style={{ overflow: 'hidden', display: 'inline-block' }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              exit="exit"
              variants={variants}
              transition={{
                duration: duration,
                delay: delay + index * offset,
                ease: ease,
              }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </motion.div>
  );
};

export default AnimateText;
