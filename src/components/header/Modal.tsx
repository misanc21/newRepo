'use client'
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react"
import { useGlobalState } from "@/app/context/Context";

export const Modal = () => {
  const { showModal } = useGlobalState();
  return (
    <AnimatePresence>
      {
        showModal &&
        <motion.div
          key="Modal"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          hello
        </motion.div>
      }
    </AnimatePresence>
  )
}