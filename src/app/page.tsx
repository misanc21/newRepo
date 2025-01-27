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
          zIndex: 100,
        }}
        animate={{
          scaleY: [1, 1.5, 1],
          background: [
            "linear-gradient(to left, rgba(43, 185, 0, 0.3)0%,rgba(43, 185, 0, 0.5) 30%,rgba(43, 185, 0, 1)50%",
            "linear-gradient(to left, rgba(0, 100, 207, 0.3)0%,rgba(0, 100, 207, 0.5)30%, rgba(0, 100, 207,1)50%",
            "linear-gradient(to left, rgba(240, 112, 0, 0.3)0%,rgba(240, 112, 0, 0.5)30%, rgba(240, 112, 0,1)50%",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse"
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
