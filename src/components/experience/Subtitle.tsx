'use client'
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
interface SubtitleProps {
  text: string;
}

export const Subtitle = ({ text }: SubtitleProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0]);
  const headerTranslateY = useTransform(scrollYProgress, [0, 1], ["30", "-50"]);
  return (
    <motion.h2
      ref={ref}
      className="text-6xl md:text-9xl font-bold mb-52 sm:my-20 mx-20 sm:mx-0 text-center"
      style={{
        opacity,
        y: headerTranslateY,
      }}
    >
      {text}
    </motion.h2>
  )
}