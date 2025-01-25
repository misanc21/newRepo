'use client'
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { TOOLS_SIDE } from '../../utils/ToolsConstants';
import Image from "next/image"

export const SideProjects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0]);
  const headerTranslateY = useTransform(scrollYProgress, [0, 1], ["30", "-50"]);
  return (
    <motion.div
      ref={ref}
      className="text-lg md:text-3xl sm:my-20 mx-10 sm:mx-32 text-center flex flex-col justify-center items-center"
      style={{
        opacity,
        y: headerTranslateY,
      }}
    >
      <p className="text-2xl md:text-3xl text-gray-800">
        Throughout my career I have collaborated on side projects such as restaurants, landing pages, ERPs, working with
      </p>
      <div className="mt-20 flex justify-around items-center gap-12 flex-wrap w-3/4">
        {
          TOOLS_SIDE.map(item =>
          (
            <div key={item.idTool} className='w-14 md:w-20'>
              <Image
                src={`/tools/${item.url}`}
                alt={item.url}
                width={10}
                height={10}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          )
          )
        }
      </div>
    </motion.div>
  )
}