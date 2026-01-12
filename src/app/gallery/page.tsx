"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774293/WhatsApp_Image_2026-01-07_at_12.47.58_PM_zgcqwp.jpg",
  // "https://res.cloudinary.com/dpccapers/image/upload/v1767774292/WhatsApp_Image_2026-01-07_at_12.47.58_PM_1_mo3fef.jpg",
  // "https://res.cloudinary.com/dpccapers/image/upload/v1767774292/WhatsApp_Image_2026-01-07_at_12.47.57_PM_1_e556te.jpg",
  "/images/gallery1.png",
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774291/WhatsApp_Image_2026-01-07_at_12.47.55_PM_qpkwpk.jpg",
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774290/WhatsApp_Image_2026-01-07_at_12.47.54_PM_1_zjqc4f.jpg",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774290/WhatsApp_Image_2026-01-07_at_12.47.54_PM_bhci0c.jpg",
  "/images/gallery5.png",
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774290/WhatsApp_Image_2026-01-07_at_12.47.52_PM_lwgw18.jpg",
  "/images/gallery6.png",
  "/images/gallery7.png",
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774290/WhatsApp_Image_2026-01-07_at_12.47.47_PM_g5uc8t.jpg",
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774290/WhatsApp_Image_2026-01-07_at_12.47.47_PM_1_ipdzzt.jpg",
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774289/WhatsApp_Image_2026-01-07_at_12.47.52_PM_1_hp6mxa.jpg",
  "/images/gallery8.png",
  "/images/gallery9.png",
  "/images/gallery10.png",
  "/images/gallery11.png",
  "/images/gallery13.png",
  "/images/gallery14.png",
  "/images/gallery15.png",
  "/images/gallery17.png",
  "/images/gallery18.png",
  "/images/gallery19.png",
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.44_PM_1_toy9rh.jpg",
  "/images/gallery20.png",
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774286/WhatsApp_Image_2026-01-07_at_12.47.49_PM_1_vmcbqx.jpg",
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774286/WhatsApp_Image_2026-01-07_at_12.47.42_PM_1_zqsx9s.jpg"
];

export default function GalleryPage() {
  return (
    <main className="bg-white min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-slate-900 py-32 text-center text-white relative">
        <Camera size={48} className="mx-auto text-orange-500 mb-6" />
        <h1 className="text-6xl font-black uppercase italic tracking-tighter leading-none">
          Visual<br/>
          <span className="text-orange-500 underline decoration-white decoration-4 underline-offset-8">
            Landmarks
          </span>
        </h1>
        <p className="mt-8 text-slate-400 font-bold tracking-[6px] text-[10px] uppercase">
          Rurban Infrastructure & Community Life
        </p>
      </section>

      {/* Image Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.02 }} 
              className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 group"
            >
              <Image 
                src={src} 
                width={500} 
                height={700} 
                alt={`Gallery Image ${i + 1}`} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}