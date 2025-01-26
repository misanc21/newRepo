'use client'
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react"
import { useGlobalState } from "@/app/context/Context";

export const Modal = () => {
  const { showModal, setShowModal } = useGlobalState();
  return (
    <AnimatePresence>
      {
        showModal &&
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowModal(!showModal)}
          key="backdrop"
          initial={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
          transition={{ duration: 0.4 }}
          style={{ perspective: 1000 }}
        >
          <motion.div
            key="Modal"
            initial={{ opacity: 0, scale: 1, rotateX: -180 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 1, rotateX: 180 }}
            className="relative bg-black rounded-lg shadow-lg p-6 w-full max-w-lg origin-top"
            onClick={e => e.stopPropagation()}
            transition={{ duration: 0.3, ease: [0.17, 0.67, 0.83, 1] }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            <span className="text-gray-200">On building</span>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}