'use client'
import { useGlobalState } from "@/app/context/Context";
import { motion } from "motion/react";
import Link from "next/link";

export default function ContactButton() {
  const { showModal, setShowModal } = useGlobalState();
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.90 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <Link href={"/"} onClick={() => setShowModal(!showModal)} className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition duration-300">
          Contact me
        </Link>
      </motion.div>
    </>
  );
}