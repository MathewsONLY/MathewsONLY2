"use client";

import { motion } from "framer-motion";
import HeroScene from "@/components/three/HeroScene";

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Racismo não é opinião. É uma violência. A resposta: educação, empatia e ação.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg md:text-2xl text-gray-200"
          >
            Um espaço para aprender, refletir e agir por uma sociedade antirracista.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a href="#entenda" className="px-6 py-3 rounded-full bg-yellow-400 text-black font-medium hover:scale-[1.02] active:scale-[0.99] transition">Começar</a>
            <a href="#recursos" className="px-6 py-3 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition">Recursos</a>
          </motion.div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            <div className="animate-bounce">Role para explorar</div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
    </section>
  );
}