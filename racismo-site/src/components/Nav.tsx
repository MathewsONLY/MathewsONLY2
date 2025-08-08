"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 ${scrolled ? "backdrop-blur bg-black/40" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-white">Antirracismo</a>
        <div className="flex items-center gap-4 text-sm">
          <a href="#entenda" className="text-white/80 hover:text-white">Entenda</a>
          <a href="#agir" className="text-white/80 hover:text-white">Como agir</a>
          <a href="#recursos" className="text-white/80 hover:text-white">Recursos</a>
        </div>
      </div>
    </motion.nav>
  );
}