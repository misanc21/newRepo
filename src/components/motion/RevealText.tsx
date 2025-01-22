'use client'
import * as motion from "motion/react-client"
import Rotate from "./Rotate";

interface RevealTextProps {
  text: string
}

export default function RevealText({ text }: RevealTextProps) {
  const textArray = text.split(" ");
  return (
    <>
      {textArray.map((word, index) => {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: index * 0.1
            }}
          >
            {`${word} `}
          </motion.span>
        )
      })}
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 1
        }}
      >
        <Rotate
          delaySecs={2}
          element={<span className="bg-slate-900">|</span>}
          scaleArray={[0, 1, 0, 1, 0]}
          rotateArray={[0, 0, 0, 0, 0]}
          borderRadiusArray={["0%", "0%", "0%", "0%", "0%"]}
          timesArray={[0, 0.2, 0.5, 0.7, 1]}
          repeat={Infinity}
          repeatDelay={0}
          background={false}
          flex={false}
          duration={2}
        />
      </motion.span>
    </>
  )
}

/**
* ==============   Styles   ================
*/