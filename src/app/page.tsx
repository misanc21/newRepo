'use client'
import { useScroll, motion } from 'motion/react';
import { Experience } from '../components/experience/Experience';
import { Landing } from "@/components/Landing";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scrollIndicator"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: '#6dd14f',
          zIndex: 100,
          borderRadius: '0 10px 10px 0',
        }}
      />
      <div className="relative z-50 overflow-y-auto">
        <Landing />
        {/* Experiencia*/}
        <div className="w-full">
          <Experience />
        </div>
      </div>
    </>
  );
}
