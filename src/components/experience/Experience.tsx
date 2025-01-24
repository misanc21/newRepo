'use client'
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Job } from "./Job";

export const Experience = () => {
  const headerRef = useRef(null);
  const { scrollYProgress: headerScrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  })
  const headerOpacity = useTransform(headerScrollYProgress, [0, 0.4, 0.8], [0, 1, 0]);
  const headerTranslateY = useTransform(headerScrollYProgress, [0, 1], ["30", "-50"]);

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.h2
        ref={headerRef}
        className="text-9xl font-bold my-20"
        style={{
          opacity: headerOpacity,
          y: headerTranslateY,
        }}
      >
        Jobs Experience
      </motion.h2>
      <Job />
    </div>
  )
}