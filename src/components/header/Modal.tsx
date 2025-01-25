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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setShowModal(!showModal)}>
          <motion.div
            key="Modal"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="relative bg-black rounded-lg shadow-lg p-6 w-full max-w-lg"
            onClick={e => e.stopPropagation()}
          >
            <span className="text-gray-200">On building</span>
          </motion.div>
        </div>
      }
    </AnimatePresence>
  )
}