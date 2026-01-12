"use client";
import { motion } from "framer-motion";
import { Newspaper, BellRing, Info, ExternalLink, Calendar, FileText, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function NewsPage() {
  const newsItems = [
    { 
        title: "ISO 9001:2026 Certification Awarded to Longwala Panchayat", 
        date: "Jan 05, 2026", 
        category: "GOVT STATUS", 
        img: "https://res.cloudinary.com/dpccapers/image/upload/v1767784998/ChatGPT_Image_Jan_7_2026_04_52_10_PM_xqujx1.png",
        ref: "LGP/ISO/2026/01"
    },
    { 
        title: "New RO Plant Units Installed: Chilled Water at ₹7 per 20L", 
        date: "Jan 02, 2026", 
        category: "INFRASTRUCTURE", 
        img: "https://res.cloudinary.com/dpccapers/image/upload/v1767774292/WhatsApp_Image_2026-01-07_at_12.47.57_PM_1_e556te.jpg",
        ref: "LGP/INFRA/2026/09"
    },
    { 
        title: "Atal Express Bus Route Expanded to Rural Dairies", 
        date: "Dec 28, 2025", 
        category: "TRANSPORT", 
        img: "https://res.cloudinary.com/dpccapers/image/upload/v1767774290/WhatsApp_Image_2026-01-07_at_12.47.47_PM_1_ipdzzt.jpg",
        ref: "LGP/TRANS/2025/44"
    },
    { 
        title: "Women's Skill Center Graduation: 45 New Tailors trained", 
        date: "Dec 15, 2025", 
        category: "EMPOWERMENT", 
        img: "https://res.cloudinary.com/dpccapers/image/upload/v1767774291/WhatsApp_Image_2026-01-07_at_12.47.56_PM_1_pncm9s.jpg",
        ref: "LGP/WEM/2025/12"
    },
  ];

  return (
    <main className="bg-[#f8fafc] min-h-screen pb-24 font-sans">
      
      {/* 1. URGENT TICKER (Modern Marquee) */}
      <div className="bg-orange-600 text-white py-3 border-b-4 border-blue-950 overflow-hidden sticky top-0 z-[100] shadow-xl">
        <div className="flex animate-marquee whitespace-nowrap text-[10px] font-black uppercase tracking-[4px]">
          {[1, 2].map((i) => (
            <span key={i} className="flex items-center">
              <span className="mx-10 flex items-center gap-2"><BellRing size={14}/> Gram Sabha meeting scheduled for Feb 15th at 10 AM.</span>
              <span className="mx-10 flex items-center gap-2">• New Borewell Project Approved for Ward 7.</span>
              <span className="mx-10 flex items-center gap-2">• Biometric Attendance active at Panchayat Office.</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. PAGE HEADER */}
      <header className="bg-white py-16 px-6 border-b border-slate-200">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" /> Live Information Desk
               </div>
               <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none">Media & <br/><span className="text-orange-600 italic">Bulletins.</span></h1>
            </div>
            <div className="hidden lg:block text-right">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-[3px] mb-1">Sabarkantha, Gujarat</p>
                <p className="text-sm font-bold text-slate-900 uppercase">Official Press Portal</p>
            </div>
         </div>
      </header>

      {/* 3. MAIN CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12">
        
        {/* LEFT: News Cards (8 Units) */}
        <div className="lg:col-span-8 space-y-10">
           {newsItems.map((news, i) => (
             <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all group flex flex-col md:flex-row h-full md:h-64"
             >
                <div className="md:w-72 relative h-48 md:h-full overflow-hidden">
                   <Image src={news.img} fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="News" />
                   <div className="absolute top-4 left-4 bg-orange-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      {news.category}
                   </div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-between">
                   <div>
                      <div className="flex items-center gap-3 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3">
                         <Calendar size={14} className="text-orange-500" /> {news.date}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter leading-tight group-hover:text-blue-900 transition-colors">
                        {news.title}
                      </h3>
                   </div>
                   <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">REF: {news.ref}</span>
                      
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* RIGHT: Sidebar (4 Units) */}
        <aside className="lg:col-span-4 space-y-8">
           {/* Notice Board Card */}
           <div className="bg-blue-950 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800/20 rounded-full -mr-16 -mt-16" />
              <div className="flex items-center gap-3 mb-8">
                 <BellRing className="text-orange-500" size={24} />
                 <h4 className="text-xl font-black uppercase italic tracking-tighter">Notice Board</h4>
              </div>
              <div className="space-y-6">
                 {[
                   "Quarterly Audit Meeting - Feb 2026",
                   "RO Plant Maintenance Schedule",
                   "Sakhi Mandal Loan Application Open",
                   "New Street Light Tenders Invited"
                 ].map((notice, idx) => (
                   <div key={idx} className="flex gap-4 group cursor-pointer border-b border-white/10 pb-4 last:border-0">
                      <FileText className="text-orange-500 shrink-0" size={16} />
                      <p className="text-[10px] font-bold uppercase tracking-widest group-hover:text-orange-400 transition-colors">{notice}</p>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-8 bg-white/10 hover:bg-white/20 border border-white/20 py-4 rounded-2xl text-[9px] font-black uppercase tracking-[3px] transition-all">
                 Download All Notices (PDF)
              </button>
           </div>

           {/* Quick Stats Card */}
           <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
              <h4 className="text-slate-900 font-black uppercase text-xs tracking-[4px] mb-6">Transparency Index</h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-400 uppercase">RTI Response Rate</span><span className="text-blue-600 font-black italic">100%</span></div>
                 <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-400 uppercase">Digital Literacy</span><span className="text-blue-600 font-black italic">83%+</span></div>
                 <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-400 uppercase">Fund Utilization</span><span className="text-blue-600 font-black italic">98.4%</span></div>
              </div>
           </div>
        </aside>

      </section>

      {/* Global CSS for marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}