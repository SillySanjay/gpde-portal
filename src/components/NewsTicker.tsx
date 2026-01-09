"use client";
import { motion } from "framer-motion";

export default function NewsTicker() {
  return (
    <div className="bg-[#0f172a] text-white py-3 border-b border-amber-500/20 overflow-hidden relative z-50">
      <motion.div 
        animate={{ x: [1000, -1500] }} 
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex whitespace-nowrap text-xs md:text-sm font-bold uppercase tracking-widest text-amber-400"
      >
        <span>🌟 Punsari wins Swarnim Gram Award • 📉 Zero Dropout achieved for the current academic year • 🛡️ No theft reported in last 3 years • ⚡ Waste-to-Energy project approved for ₹85 Lakh • 🏥 PHC 24/7 service active</span>
      </motion.div>
    </div>
  );
}