"use client";
import { motion } from "framer-motion";
import { Newspaper, BellRing, Info, ExternalLink } from "lucide-react";

export default function NewsPage() {
  const newsItems = [
    { title: "ISO 9001:2026 Certification Awarded to Longwala Panchayat", date: "Jan 05, 2026", category: "Govt Status" },
    { title: "New RO Plant Units Installed: Chilled Water now at ₹7 per 20L", date: "Jan 02, 2026", category: "Infrastructure" },
    { title: "Atal Express Bus Route Expanded to Rural Dairies", date: "Dec 28, 2025", category: "Transport" },
    { title: "National Delegates from Nairobi visit Longwala to study Rurban Model", date: "Dec 20, 2025", category: "Global Recognition" },
    { title: "Women's Skill Center Graduation: 45 New Tailors trained", date: "Dec 15, 2025", category: "Empowerment" },
    { title: "100% Tax Recovery Status achieved for FY 2025-26", date: "Dec 05, 2025", category: "Finance" }
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-24">
      {/* Live Marquee */}
      <div className="bg-orange-600 text-white py-3 border-b-4 border-blue-900 overflow-hidden relative z-50">
        <motion.div animate={{ x: [1000, -1500] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="flex whitespace-nowrap text-xs font-black uppercase tracking-[3px]">
          <span className="mx-12">📢 OFFICIAL NOTIFICATION: Gram Sabha meeting scheduled for Feb 15th at 10 AM.</span>
          <span className="mx-12">• New Borewell Project Approved for Ward 7.</span>
          <span className="mx-12">• Biometric Attendance active at Panchayat Office.</span>
        </motion.div>
      </div>

      <header className="bg-white py-24 px-6 border-b">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
               <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                  <Newspaper className="text-orange-600" size={40} />
                  <h1 className="text-5xl font-black uppercase italic tracking-tighter">News & <br/><span className="text-orange-500 underline decoration-slate-900 decoration-4">Bulletins</span></h1>
               </div>
               <p className="text-slate-500 text-lg italic leading-relaxed">Official updates from the Longwala Gram Panchayat Information Desk.</p>
            </div>
            <div className="bg-blue-900 p-8 rounded-[3rem] text-white flex gap-10 items-center shadow-2xl">
               <div className="text-center">
                  <div className="text-4xl font-black italic text-orange-500">2026</div>
                  <div className="text-[8px] uppercase font-bold tracking-[3px] opacity-60">Year of Progress</div>
               </div>
               <div className="w-1 h-12 bg-white/20" />
               <BellRing size={40} className="text-orange-500 animate-bounce" />
            </div>
         </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="space-y-6">
           {newsItems.map((news, i) => (
             <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-orange-500 transition-all group">
                <div className="flex gap-8 items-center">
                  <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-blue-900 group-hover:bg-orange-50 transition-colors"><Info size={24}/></div>
                  <div>
                    <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-1 block">{news.category}</span>
                    <h3 className="text-xl font-black text-slate-900 uppercase italic group-hover:text-orange-600 transition-colors">{news.title}</h3>
                  </div>
                </div>
                <div className="text-right shrink-0">
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{news.date}</div>
                   <div className="text-orange-600 font-black text-[10px] uppercase flex items-center gap-1 cursor-pointer hover:underline">Read More <ExternalLink size={10}/></div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>
    </main>
  );
}