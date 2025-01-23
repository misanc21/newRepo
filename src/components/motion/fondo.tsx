"use client"

import { useAnimationFrame } from "motion/react"
import { useRef } from "react"

export default function Fondo() {
  const ref = useRef<HTMLDivElement>(null)

  useAnimationFrame((t) => {
    if (!ref.current) return

    const rotate = Math.sin(t / 12000) * 200
    const y = (1 + Math.sin(t / 1000)) * -25
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })

  return (
    <div className="container absolute w-full h-full bg-cover bg-center blur">
      <div className="cube w-full" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
      <StyleSheet />
    </div>
  )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>{`
            
        .container {
            perspective: 600px;
            width: 700px;
            height: 700px;
        }

        .cube {
            width: 900px;
            height: 900px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: red;
            opacity: 0.6;
        }

        .front {
            transform: rotateY(0deg) translateZ(100px);
            background-color: #d4d4d42c;
        }
        .right {
            transform: rotateY(90deg) translateZ(100px);
            background-color: #d1d1d12c;
        }
        .back {
            transform: rotateY(180deg) translateZ(100px);
            background-color: #c7c7c72c;
        }
        .left {
            transform: rotateY(-90deg) translateZ(100px);
            background-color: #c4c4c42c;
        }
        .top {
            transform: rotateX(90deg) translateZ(100px);
            background-color: #c9c9c91c;
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(100px);
            background-color: #cfcfcf1c;
        }

    `}</style>
  )
}
