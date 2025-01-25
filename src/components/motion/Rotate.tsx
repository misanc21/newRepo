'use client'
import * as motion from "motion/react-client"
import { JSX } from "react";

interface RotateProps {
  element: JSX.Element,
  delaySecs?: number,
  scaleArray: number[],
  rotateArray: number[],
  borderRadiusArray: string[],
  timesArray: number[],
  repeat?: number | undefined,
  repeatDelay?: number,
  background?: boolean,
  flex?: boolean,
  duration?: number,
}

export default function Rotate({
  element,
  delaySecs = 2,
  scaleArray,
  rotateArray,
  borderRadiusArray,
  timesArray,
  repeat = 0,
  repeatDelay = 1,
  background = true,
  flex = true,
  duration = 3,

}: RotateProps) {
  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{
        scale: scaleArray,
        rotate: rotateArray,
        borderRadius: borderRadiusArray,
      }}
      transition={{
        duration,
        ease: "easeInOut",
        times: timesArray,
        repeat,
        repeatDelay: repeatDelay,
        delay: delaySecs,
      }}
      style={background ? box : {}}
      className={`${flex ? "flex justify-center items-center" : "inline-block"}`}
    >
      {element}
    </motion.span>
  )
}

/**
 * ==============   Styles   ================
 */

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#d8d8d846",
  borderRadius: 5,
}