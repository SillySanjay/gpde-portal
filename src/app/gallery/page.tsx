"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, ArrowUpRight, ShieldCheck, DownloadCloud } from "lucide-react";

// AAPKI ORIGINAL IMAGES (Unchanged)
const images = [
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774293/WhatsApp_Image_2026-01-07_at_12.47.58_PM_zgcqwp.jpg",
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
    <main className="bg-[#f8fafc] min-h-screen pb-12 font-sans overflow-x-hidden">
      
      {/* 1. IMPACTFUL HERO HEADER */}
      <section className="bg-slate-900 pt-32 pb-24 text-center text-white relative px-4 border-b-8 border-orange-600">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white/20 h-full"></div>
              ))}
           </div>
        </div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Camera size={40} className="mx-auto text-orange-500 mb-6" />
            <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none italic">
              Visual <br/>
              <span className="text-orange-500 underline decoration-white decoration-4 underline-offset-8">Landmarks.</span>
            </h1>
            <p className="mt-8 text-slate-400 font-bold tracking-[6px] text-[9px] md:text-[11px] uppercase max-w-2xl mx-auto leading-relaxed">
              Official Media Repository: Rurban Infrastructure & <br/> 
              Documenting the Evolution of Punsari Smart Village
            </p>
        </motion.div>
      </section>

      {/* 2. STATS BAR (To make it more "Bhari hua") */}
      <div className="bg-white border-b border-slate-200 py-6 px-6">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">
            <div className="flex items-center gap-3">
               <ShieldCheck className="text-blue-600" size={24} />
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">Verified Administrative Records</p>
            </div>
            <div className="flex gap-8">
               <div className="text-center"><p className="text-xl font-black text-slate-900 leading-none">{images.length}</p><p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Total Assets</p></div>
               <div className="text-center"><p className="text-xl font-black text-slate-900 leading-none">2026</p><p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Last Sync</p></div>
            </div>
         </div>
      </div>

      {/* 3. DENSE MASONRY GRID */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }} 
              className="relative break-inside-avoid rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group cursor-zoom-in"
            >
              <Image 
                src={src} 
                width={600} 
                height={800} 
                alt={`Punsari Landmark ${i + 1}`} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              
              {/* Professional Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-end">
                 <div className="flex justify-between items-end">
                    <div className="space-y-1">
                       <span className="text-orange-500 font-black text-[8px] uppercase tracking-widest block">Official Gallery Asset</span>
                       <h4 className="text-white font-black text-xs uppercase tracking-tighter italic">LGP_ARCHIVE_REF_{100 + i}</h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                       <ArrowUpRight className="text-white" size={16} />
                    </div>
                 </div>
              </div>

              {/* Tag Look */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-[7px] font-black text-white uppercase tracking-[2px]">Sabarkantha_Record</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. OFFICIAL STATUS FOOTER */}
        <div className="mt-20 text-center space-y-6">
            <div className="w-px h-20 bg-slate-200 mx-auto" />
            <p className="text-xs font-black uppercase tracking-[5px] text-slate-400 leading-relaxed">
               End of Visual Archive <br/>
               <span className="text-[10px] text-blue-600 italic">Institutional Excellence Documented</span>
            </p>
        </div>
      </div>
    </main>
  );
}