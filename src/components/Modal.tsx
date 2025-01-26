'use client'
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react"
import { useGlobalState } from "@/app/context/Context";

export const Modal = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { showModal, setShowModal } = useGlobalState();
  return (
    <AnimatePresence>
      {
        showModal &&
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setShowModal(!showModal)}
          key="backdrop"
          initial={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
          transition={{ duration: 0.4, }}
          style={{ perspective: 1000 }}
        >
          <motion.div
            key="Modal"
            initial={{ opacity: 0, scale: 1, rotateX: -180 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 1, rotateX: -180 }}
            className="relative bg-gray-950 rounded-lg shadow-lg p-6  w-11/12 sm:w-full max-w-2xl origin-top"
            onClick={e => e.stopPropagation()}
            transition={{ duration: 0.3, ease: [0.17, 0.67, 0.83, 1] }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}