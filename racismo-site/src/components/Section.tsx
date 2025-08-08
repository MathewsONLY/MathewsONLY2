"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export default function Section({ id, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          {description && <p className="mt-3 text-gray-300 md:text-lg">{description}</p>}
        </motion.div>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}