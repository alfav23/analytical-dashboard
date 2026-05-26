"use client";
import { motion } from "motion/react";

export default function ScrollReveal({children}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }} // Set to false if you want it to re-animate every time
    >
      {children}
    </motion.div>
  );
}
