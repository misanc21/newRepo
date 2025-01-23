'use client'
import { motion } from "motion/react";
import Link from "next/link";

export default function ContactButton() {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <Link href="mailto:tuemail@ejemplo.com" className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition duration-300">
          Contact me
        </Link>
      </motion.div>
    </>
  );
}