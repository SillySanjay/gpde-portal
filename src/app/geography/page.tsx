"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, CloudSun, Droplets, ChevronRight, Navigation, Wind, Sprout, Tractor, Waves } from "lucide-react";

export default function GeographyPage() {
  return (
    <main className="bg-white min-h-screen pb-12 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* 1. RESPONSIVE HERO SECTION */}
      <section className="relative h-[45vh] md:h-[65vh] w-full flex items-center justify-center overflow-hidden">
        <Image 
          src="https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.42_PM_uijm9a.jpg" 
          fill 
          className="object-cover object-center" 
          alt="Punsari Landscape"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 bg-orange-600 text-white text-[9px] font-black uppercase tracking-[4px] mb-4 shadow-lg">Official Mapping</span>
            <h1 className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter italic leading-none">
              Geography & <br/> <span className="text-orange-500 underline decoration-white decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">Terrain.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. ADMINISTRATIVE BENTO GRID - Tightened for Mobile */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 md:-mt-20 relative z-20">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-8">
          
          <div className="lg:col-span-8 bg-white p-6 md:p-16 shadow-2xl border border-slate-100 rounded-[2rem] md:rounded-[3rem]">
            <h2 className="text-2xl md:text-3xl font-black text-blue-900 mb-6 flex items-center gap-3 uppercase italic">
              <MapPin size={24} className="text-orange-600" /> Administrative
            </h2>
            <p className="text-slate-600 text-sm md:text-lg leading-relaxed mb-8 text-justify font-medium uppercase tracking-tight">
              Punsari occupies a strategic plateau region in Sabarkantha, Gujarat. Covering 1.5 SQ KM, it connects Himmatnagar to the industrial belts of Ahmedabad.
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-3">
                 {[
                   { l: "State", v: "Gujarat" },
                   { l: "District", v: "Sabarkantha" },
                   { l: "Taluka", v: "Himmatnagar" },
                   { l: "Area", v: "1240 Hectares" }
                 ].map((item, i) => (
                   <div key={i} className="flex justify-between border-b border-slate-50 pb-2">
                     <span className="text-[9px] font-black uppercase text-slate-400">{item.l}</span>
                     <span className="text-xs md:text-sm font-black text-slate-900 uppercase italic">{item.v}</span>
                   </div>
                 ))}
              </div>
              <div className="relative h-44 md:h-56 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg border-2 md:border-4 border-slate-50">
                 <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.45_PM_1_pua2kn.jpg" fill className="object-cover" alt="Admin View" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-blue-900 min-h-[300px]">
             <div className="p-8 md:p-10 flex flex-col justify-between h-full">
                <div>
                   <h4 className="text-white font-black uppercase tracking-[3px] text-[10px] flex items-center gap-2 mb-6">
                     <Navigation size={14} className="text-orange-500" /> Connectivity
                   </h4>
                   <div className="space-y-6">
                      <div className="border-l-2 border-orange-500 pl-4">
                         <p className="text-[8px] font-black text-blue-300 uppercase mb-1">Railway</p>
                         <p className="text-white text-xs md:text-sm font-black uppercase tracking-tighter">Himmatnagar (10 KM)</p>
                      </div>
                      <div className="border-l-2 border-orange-500 pl-4">
                         <p className="text-[8px] font-black text-blue-300 uppercase mb-1">Airport</p>
                         <p className="text-white text-xs md:text-sm font-black uppercase tracking-tighter">Ahmedabad (82 KM)</p>
                      </div>
                      <div className="bg-white/5 p-4 md:p-6 rounded-xl border border-white/10">
                         <p className="text-orange-500 text-[9px] font-black uppercase mb-1">Internal Roads</p>
                         <p className="text-slate-300 text-[9px] md:text-[10px] font-bold uppercase leading-relaxed">100% Concrete connection to district highways.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. CLIMATE & SOIL SECTION - Reduced Spacing */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
           <div className="relative order-2 lg:order-1">
              <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-4 md:border-8 border-slate-50">
                 <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774293/WhatsApp_Image_2026-01-07_at_12.47.58_PM_zgcqwp.jpg" fill className="object-cover" alt="Soil" />
              </div>
              
           </div>
           <div className="space-y-6 md:space-y-10 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none italic">Climate <br/> <span className="text-blue-600">Dynamics.</span></h2>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-slate-50 rounded-2xl border-b-4 border-orange-500 shadow-sm">
                    <CloudSun className="text-orange-500 mb-2" size={24} />
                    <p className="text-2xl md:text-3xl font-black text-slate-900">45°C</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase">Summer Peak</p>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-2xl border-b-4 border-blue-600 shadow-sm">
                    <Wind className="text-blue-500 mb-2" size={24} />
                    <p className="text-2xl md:text-3xl font-black text-slate-900">300MM</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase">Avg Rainfall</p>
                 </div>
              </div>
              <p className="text-slate-500 font-bold uppercase text-[10px] md:text-xs leading-relaxed tracking-wider text-justify border-l-4 border-orange-500 pl-4">
                73 recharge wells and a scientific canal network have turned arid land into an evergreen hub.
              </p>
           </div>
        </div>
      </section>

      {/* 4. EXPANDED AGRARIAN SECTION - Tightened Margins */}
      <section className="bg-slate-50 py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-24">
             <span className="text-blue-600 font-black text-[9px] md:text-xs uppercase tracking-[6px] mb-2 block">Agricultural Wealth</span>
             <h2 className="text-4xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter italic">Agrarian <span className="text-orange-600">Showcase.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
  {[
    { name: "Golden Wheat", season: "Rabi Season", img: "/images/geography2.png", desc: "High-yield varieties powered by automated canal networks." },
    { name: "White Cotton", season: "Kharif Season", img: "/images/geography3.png", desc: "Cash crop contributing to 60% of village agricultural export." },
    { name: "Mustard Seeds", season: "Winter Harvest", img: "/images/geography4.png", desc: "Rotation crop ensuring 100% land utilization year-round." },
    { name: "Organic Bajra", season: "Summer Crop", img: "/images/geography5.png", desc: "Resilient millet adapted for the arid Sabarkantha climate." }
  ].map((crop, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col lg:flex-row h-full"
    >

      {/* ✅ FIXED IMAGE BLOCK */}
      <div className="lg:w-1/2 relative w-full aspect-[4/3] lg:aspect-auto lg:h-full">
        <Image
          src={crop.img}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 40vw"
          className="object-cover object-center"
          alt={crop.name}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[7px] font-black uppercase text-blue-900 shadow-lg">
          {crop.season}
        </div>
      </div>

      {/* TEXT PART (UNCHANGED) */}
      <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-slate-900 mb-2">
          {crop.name}
        </h4>
        <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase leading-relaxed tracking-widest">
          {crop.desc}
        </p>
        <div className="flex gap-3 mt-4">
          <Sprout size={18} className="text-orange-500" />
          <Tractor size={18} className="text-orange-500" />
        </div>
      </div>

    </motion.div>
  ))}
</div>


          <div className="mt-12 md:mt-20 bg-blue-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden shadow-3xl">
             <div className="absolute top-0 right-0 opacity-10"><Waves size={200} className="md:w-[400px]" /></div>
             <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                   <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic mb-4 md:mb-6">Irrigation <br/> <span className="text-orange-500">Independence.</span></h3>
                   <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-200 leading-relaxed">
                     Punsari has achieved year-round harvesting using NMAET agricultural models.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                   <div className="bg-white/5 border border-white/10 p-4 md:p-6 rounded-2xl">
                      <p className="text-2xl md:text-3xl font-black text-orange-500">73</p>
                      <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest">Recharge Wells</p>
                   </div>
                   <div className="bg-white/5 border border-white/10 p-4 md:p-6 rounded-2xl">
                      <p className="text-2xl md:text-3xl font-black text-orange-500">100%</p>
                      <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest">Canal Coverage</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}