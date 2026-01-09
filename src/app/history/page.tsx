"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { History, Shield, TrendingUp, Award } from "lucide-react";

export default function HistoryPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774289/WhatsApp_Image_2026-01-07_at_12.47.45_PM_srmqri.jpg" fill className="object-cover opacity-20 grayscale" alt="History Bg"/>
        <div className="relative z-10 text-center px-6">
           <History size={64} className="mx-auto text-orange-600 mb-6" />
           <h1 className="text-6xl md:text-8xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">The<br/><span className="text-orange-600 underline decoration-slate-900 decoration-8 underline-offset-4">Legacy</span></h1>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
           <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774293/WhatsApp_Image_2026-01-07_at_12.47.58_PM_zgcqwp.jpg" fill alt="Leadership" className="object-cover" />
        </div>
        <div>
           <h2 className="text-4xl font-black uppercase text-blue-950 mb-8 leading-tight tracking-tighter">Visionary Roots</h2>
           <p className="text-lg text-slate-600 leading-relaxed mb-8 italic">"When I was elected in 2006, the Panchayat had a debt of ₹1.2 Lakh. People were struggling for basic amenities like electricity and roads." — Sarpanch Himanshu Patel.</p>
           <p className="text-slate-500 text-sm leading-relaxed mb-10 text-justify">Drawing inspiration from the "Punsari Model," the leadership adopted a Rurban (Rural + Urban) approach. The strategy was clear: build a corpus fund using village assets rather than relying on external charity. This self-governance model ensured that Longwala became a republic independent for its wants yet interdependent for development.</p>
           <div className="grid grid-cols-3 gap-4">
              <div className="text-center"><div className="text-2xl font-black text-orange-600 italic leading-none">2006</div><div className="text-[8px] uppercase font-bold tracking-widest mt-1 text-slate-400">Foundation</div></div>
              <div className="text-center"><div className="text-2xl font-black text-orange-600 italic leading-none">2012</div><div className="text-[8px] uppercase font-bold tracking-widest mt-1 text-slate-400">Recognition</div></div>
              <div className="text-center"><div className="text-2xl font-black text-orange-600 italic leading-none">2026</div><div className="text-[8px] uppercase font-bold tracking-widest mt-1 text-slate-400">ISO Era</div></div>
           </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="bg-slate-900 py-32 text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-20 justify-center">
            <TrendingUp className="text-orange-500" />
            <h2 className="text-4xl font-black uppercase italic tracking-widest">Evolution Timeline</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
             {/* Timeline Line */}
             <div className="absolute top-[26px] left-0 w-full h-1 bg-white/5 hidden md:block" />
             
             {[
               { year: "2006-2010", title: "Building Foundation", desc: "Foundations of basic infrastructure. Schools and health centers were prioritized. The Grazing Land Auction created an ₹80 Lakh fund." },
               { year: "2011-2015", title: "Digital Integration", desc: "Introduced Wi-Fi, CCTV networks, and RO Mineral plants. Awarded best Gram Sabha National Award by the Prime Minister." },
               { year: "2016-2026", title: "The ISO Smart Era", desc: "100% employment goals through Skill Centers. Full digital governance and ISO certification for institutional excellence." }
             ].map((item, i) => (
               <div key={i} className="relative z-10 pt-16">
                  <div className="absolute top-0 left-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center font-black text-slate-900 border-4 border-slate-900 italic shadow-xl">{i+1}</div>
                  <h4 className="text-2xl font-black text-orange-500 uppercase mb-4 tracking-tighter">{item.year}</h4>
                  <h5 className="text-lg font-bold mb-4 uppercase text-white underline decoration-orange-500 decoration-2">{item.title}</h5>
                  <p className="text-sm opacity-60 leading-relaxed italic">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <Award className="text-orange-600" />
          <h2 className="text-4xl font-black uppercase text-blue-950">Achievements</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { year: "2011", award: "Best Gram Panchayat Gujarat", source: "CM Narendra Modi" },
             { year: "2012", award: "Rajiv Gandhi National Award", source: "Academy of Grassroots Studies" },
             { year: "2013", award: "Nirmal Gram Award", source: "Central Government" },
             { year: "2015", award: "Best Gram Sabha Award", source: "Ministry of PR" }
           ].map((a, i) => (
             <div key={i} className="p-10 bg-slate-50 border-t-8 border-orange-500 rounded-2xl shadow-lg flex flex-col items-center text-center group hover:bg-white transition-colors">
                <div className="text-3xl font-black text-blue-900 mb-2 italic">#{a.year}</div>
                <h4 className="font-black uppercase text-xs text-slate-900 mb-4 tracking-tighter leading-tight">{a.award}</h4>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{a.source}</div>
             </div>
           ))}
        </div>
      </section>
    </main>
  );
}