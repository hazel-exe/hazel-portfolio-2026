"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AtSign } from "lucide-react";

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
    >
      <nav className="frosted-glass rounded-full px-8 py-3.5 flex items-center space-x-8 text-sm font-medium shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <Link href="/" className="hover:text-science-blue transition-colors flex items-center justify-center">
          <AtSign size={18} strokeWidth={2.5} />
        </Link>
        <span className="text-gray-300 pointer-events-none">·</span>
        <Link href="#work" className="hover:text-science-blue transition-colors text-[13px] tracking-wide uppercase">Work</Link>
        <span className="text-gray-300 pointer-events-none">·</span>
        <Link href="#about" className="hover:text-science-blue transition-colors text-[13px] tracking-wide uppercase">About</Link>
        <span className="text-gray-300 pointer-events-none">·</span>
        <Link href="#contact" className="hover:text-science-blue transition-colors text-[13px] tracking-wide uppercase">Contact</Link>
      </nav>
    </motion.header>
  );
}
