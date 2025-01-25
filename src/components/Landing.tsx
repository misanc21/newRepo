'use client'
import Image from "next/image";
import Rotate from '../components/motion/Rotate';
import { Audiowide, Inter } from "next/font/google";
import RevealText from "./motion/RevealText";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const audioWide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
});

const interFont = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export const Landing = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.65], [0, 1, 0]);
  const TranslateY = useTransform(scrollYProgress, [0, 1], ["30", "-50"]);
  const welcomeText = `Hi, I'm Misael Nivio, developer with 5+ years working in amazing projects. Take a look to my experience. 👨🏽‍💻`;
  return (
    <motion.div
      className="flex flex-col justify-center items-center w-full h-screen"
      ref={ref}
      style={{
        opacity,
        y: TranslateY
      }}
    >
      <Rotate
        delaySecs={0}
        element={<Image src="/logomisanc21.png" alt="logo" width={70} height={70} />}
        scaleArray={[1, 1.5, 1, 1.3, .7, 1]}
        rotateArray={[0, 0, 0, 360, 0]}
        borderRadiusArray={["50%", "50%", "50%", "50%", "50%"]}
        timesArray={[0, 0.2, 0.5, 0.8, 1]}
        flex={true}
      />
      <h1 className={`text-6xl font-bold mt-2 ${audioWide.className}`} >Misanc21</h1>
      <p className={`text-[31px] font-light text-gray-500 ${interFont.className}`}>
        Fullstack Developer
      </p>
      <div className={`mt-24 w-full flex justify-center flex-col px-10 items-center ${interFont.className}`}>
        <p className={`text-base sm:text-2xl w-4/5 font-bold text-center`}>
          <RevealText text={welcomeText} />
        </p>

      </div>
    </motion.div>
  )
}