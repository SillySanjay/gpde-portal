"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Droplets, Bus, Zap, Landmark, ShieldCheck, Waves } from "lucide-react";

export default function EconomyPage() {
  const assets = [
    { title: "RO Water Plant", policy: "₹4 / 20L", img: "/images/gallery13.png", icon: <Droplets size={20}/> },
    { title: "Atal Express", policy: "₹3 / Trip", img: "/images/gallery18.png", icon: <Bus size={20}/> },
    { title: "Dairy Cluster", policy: "Bank Linked", img: "https://res.cloudinary.com/dpccapers/image/upload/v1767774293/WhatsApp_Image_2026-01-07_at_12.47.58_PM_zgcqwp.jpg", icon: <TrendingUp size={20}/> },
    { title: "Solar Grid", policy: "Subsidized", img: "/images/gallery15.png", icon: <Zap size={20}/> },
  ];

  return (
    <main className="bg-white min-h-screen pb-12 font-sans selection:bg-orange-100 overflow-x-hidden">

      {/* 1. IMAGE HERO SECTION */}
      <section className="relative h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.42_PM_uijm9a.jpg"
          fill
          className="object-cover brightness-[0.4]"
          alt="Economic Background"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <TrendingUp size={48} className="mx-auto text-orange-500 mb-6" />
            <h1 className="text-5xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-none">
              Economic <br />
              <span className="text-orange-500 underline decoration-white decoration-4 underline-offset-8">Autonomy.</span>
            </h1>
            <p className="mt-8 text-white/70 font-black tracking-[5px] text-[10px] md:text-xs uppercase">
              Financial Resilience | Annual Surplus: ₹75,00,000+
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. REVENUE ASSETS BENTO GRID (Image-First) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 -mt-12 md:-mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {assets.map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="group relative h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image src={item.img} fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-white mb-3 shadow-lg">
                  {item.icon}
                </div>
                <h4 className="text-white font-black uppercase text-sm tracking-tighter">{item.title}</h4>
                <p className="text-orange-400 font-bold text-[10px] uppercase tracking-widest">{item.policy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WOMEN EMPOWERMENT (Visual Storytelling) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div className="relative group">
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-3xl border-8 border-slate-50">
              <Image
                src="https://res.cloudinary.com/dpccapers/image/upload/v1767774291/WhatsApp_Image_2026-01-07_at_12.47.56_PM_1_pncm9s.jpg"
                fill
                className="object-cover"
                alt="Sakhi Mandal"
              />
            </div>
            {/* Overlapping Stat Card */}
            <div className="absolute -bottom-6 -right-2 md:-right-10 bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl text-white border-4 border-white">
               <div className="text-4xl md:text-5xl font-black italic text-orange-500">111+</div>
               <div className="text-[9px] font-black uppercase tracking-[3px] text-slate-400">Active SHGs</div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full">
              <Users size={20} className="text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-900">Social Capital</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-slate-900 leading-none tracking-tighter">
              The White <br /> <span className="text-orange-600">Revolution.</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-lg leading-relaxed uppercase font-bold tracking-tight text-justify italic border-l-4 border-orange-500 pl-6">
              Sakhi Mandals have scaled from 2 to 111 groups, empowering 1,200+ women. With 90+ bank-linked units, they operate our village shopping centers and dairy logistics.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-2xl font-black text-slate-900 tracking-tighter">1,700+</p>
                  <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Cattle Population</p>
               </div>
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-2xl font-black text-slate-900 tracking-tighter">₹80L</p>
                  <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Corpus Growth</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC SURPLUS DASHBOARD (Dark Section) */}
      <section className="bg-slate-900 py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <Waves size={400} className="text-white" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none italic underline decoration-orange-500 decoration-8 underline-offset-8">
                Financial <br /> Discipline.
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Tax Recovery Rate", val: "95%", p: "w-[95%]" },
                  { label: "Asset Monetization", val: "100%", p: "w-[100%]" },
                  { label: "External Grant Reliance", val: "0%", p: "w-[5%]" },
                ].map((s, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-slate-400">{s.label}</span>
                      <span className="text-orange-500">{s.val}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: s.val }} 
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className="h-full bg-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.5)]" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/10 flex flex-col justify-center text-center lg:text-left">
               <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                  <Landmark className="text-orange-500" size={32} />
                  <h4 className="text-xl font-black uppercase text-white tracking-widest">Sustainable Corpus</h4>
               </div>
               <p className="text-slate-400 text-xs md:text-sm font-bold uppercase leading-relaxed tracking-widest mb-8 italic">
                 Interest earned from village land assets and high tax recovery (95%) fully covers our Wi-Fi, CCTV, and RO maintenance costs without state grants.
               </p>
               <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                  <ShieldCheck size={40} className="text-orange-500" />
                  <div className="text-right">
                    <p className="text-[9px] font-black text-slate-500 uppercase">Documented Status</p>
                    <p className="text-lg font-black text-white uppercase italic">ISO 9001 Certified</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POLICY QUICK VIEW (Compact Grid instead of table) */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 italic tracking-tighter">Strategic Policies.</h2>
            <div className="w-20 h-1.5 bg-orange-600 mx-auto mt-4" />
         </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { s: "Water", p: "₹4 / 20L" },
              { s: "Waste", p: "₹30 / Yr" },
              { s: "Bus", p: "₹3 / Trip" },
              { s: "Broadband", p: "₹50 / Mo" },
              { s: "BPL Assist", p: "100% Free" },
            ].map((p, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl text-center border-b-4 border-blue-900 group hover:bg-blue-900 transition-all cursor-default">
                 <p className="text-[9px] font-black text-slate-400 uppercase mb-1 group-hover:text-blue-300">{p.s}</p>
                 <p className="text-sm md:text-base font-black text-slate-900 group-hover:text-white uppercase tracking-tighter italic">{p.p}</p>
              </div>
            ))}
         </div>
      </section>

    </main>
  );
}