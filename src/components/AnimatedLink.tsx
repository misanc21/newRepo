'use client';
import Link from "next/link";
import { motion } from "motion/react";

interface AnimatedLinkProps {
  url: string,
  text?: string,
  children?: React.ReactNode | undefined;
}

export default function AnimatedLink({ url, text = '', children = undefined }: AnimatedLinkProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Link href={url} className="font-bold">
        {
          text != '' ? text : children
        }
      </Link>
    </motion.div>
  );
}