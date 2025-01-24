'use client'
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { JOBS_CONSTANTS } from '../../utils/JobsConstants';

export const Job = () => {
  // eslint-disable-next-line
  const refs = JOBS_CONSTANTS.map(() => useRef(null));
  return (
    <div className="w-full">
      {JOBS_CONSTANTS.map((job, index) => {
        const ref = refs[index];
        // eslint-disable-next-line
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end start"],
        })
        // eslint-disable-next-line
        const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 0]);
        // eslint-disable-next-line
        const translateY = useTransform(scrollYProgress, [0, 1], ["30", "-50"]);

        return (
          <div ref={ref} className="w-full min-h-[30rem] p-10 flex justify-center items-center" key={index}>
            <motion.div
              className="flex flex-col justify-center items-start w-1/2"
              style={{
                opacity,
                y: translateY,
              }}
            >
              <h2 className="text-5xl font-bold text-center">{job.position}</h2>
              <h2 className="text-4xl text-center">{job.company}</h2>
              <span className="text-lg font-bold">{job.time}</span>
            </motion.div>
            <motion.div
              className="text-lg text-gray-700 flex-1 flex flex-col items-start justify-center"
              style={{
                opacity,
                y: translateY,
              }}
            >
              <p className="text-2xl text-gray-800">
                {job.details}
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Working with <span className="font-bold">{job.methodology}</span> Methodology
              </p>
              <hr className="w-full h-0.5 bg-slate-400 mt-2" />
              <div className="images flex justify-around items-center w-11/12 mt-2 gap-3">
                {
                  job.tools.map(tool => (
                    <Image src={`/tools/${tool.url}`} alt={tool.url} width={40} height={40} key={tool.idTool} />
                  ))
                }
              </div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}