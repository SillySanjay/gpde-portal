"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, BellRing, Info, ExternalLink, Calendar, FileText, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function NewsPage() {
  const [index, setIndex] = useState(0);

  // Carousel Data (Breaking News)
  const breakingNews = [
    {
      id: 1,
      title: "Punsari Leads National Digital Literacy Rankings 2026",
      desc: "Under Aryan Patel's leadership, Punsari achieves 100% digital proficiency among youth and elders alike.",
      image: "/images/news1.png"
    },
    {
      id: 2,
      title: "ISO 9001:2026 Re-Certification Awarded To Gram Panchayat",
      desc: "Official auditors praise the transparency and data management systems of the Punsari Strategic Cell.",
      image: "/images/news2.png"
    },
    {
      id: 3,
      title: "New Waste-To-Energy Plant Operationalized",
      desc: "The ₹85 Lakh plant starts generating electricity for the village street-light grid.",
      image: "/images/news3.png"
    }
  ];

  // Grid News Data (6 Unique Items)
  const newsGridData = [
    {
      id: 1,
      date: "Jan 12, 2026",
      title: "Women Entrepreneurs Scaling Dairy Operations",
      category: "EMPOWERMENT",
      desc: "111 Sakhi Mandals report a 40% increase in monthly revenue following the latest automation workshop.",
      image: "https://res.cloudinary.com/dpccapers/image/upload/v1767774291/WhatsApp_Image_2026-01-07_at_12.47.56_PM_1_pncm9s.jpg",
      ref: "LGP/WEM/2026/01"
    },
    {
      id: 2,
      date: "Jan 10, 2026",
      title: "Atal Express Buses Go Electric This Quarter",
      category: "TRANSPORT",
      desc: "To further sustainability, the fleet is transitioning to zero-emission electric vehicles for student safety.",
      image: "https://res.cloudinary.com/dpccapers/image/upload/v1767774290/WhatsApp_Image_2026-01-07_at_12.47.47_PM_1_ipdzzt.jpg",
      ref: "LGP/TRANS/2026/04"
    },
    {
      id: 3,
      date: "Jan 08, 2026",
      title: "Smart Schools Achieve 100% Digital Proficiency",
      category: "EDUCATION",
      desc: "Every student from Std VI to VIII has cleared the 'Basic Coding & Web Design' village certification.",
      image: "https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.44_PM_1_toy9rh.jpg",
      ref: "LGP/EDU/2026/12"
    },
    {
      id: 4,
      date: "Jan 05, 2026",
      title: "New RO Plant Extension For Industrial Ward",
      category: "INFRASTRUCTURE",
      desc: "Construction begins for the third RO water unit to meet the rising demand in the upcoming dairy cluster.",
      image: "https://res.cloudinary.com/dpccapers/image/upload/v1767774292/WhatsApp_Image_2026-01-07_at_12.47.57_PM_1_e556te.jpg",
      ref: "LGP/WAT/2026/09"
    },
    {
      id: 5,
      date: "Jan 02, 2026",
      title: "District Praises Punsari's Solar Lighting Model",
      category: "ENERGY",
      desc: "District officials visit Punsari to study how the solar street lighting system has cut costs by 85%.",
      image: "https://res.cloudinary.com/dpccapers/image/upload/v1767774293/WhatsApp_Image_2026-01-07_at_12.47.58_PM_zgcqwp.jpg",
      ref: "LGP/SOL/2026/22"
    },
    {
      id: 6,
      date: "Dec 28, 2025",
      title: "Public Address System Upgrade Completed",
      category: "GOVERNANCE",
      desc: "120 new high-fidelity waterproof speakers installed across all village internal roads for live broadcasts.",
      image: "https://res.cloudinary.com/dpccapers/image/upload/v1767784998/ChatGPT_Image_Jan_7_2026_04_52_10_PM_xqujx1.png",
      ref: "LGP/GOV/2025/88"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % breakingNews.length), 5000);
    return () => clearInterval(timer);
  }, [breakingNews.length]);

  return (
    <main className="bg-[#f8fafc] min-h-screen pb-24 font-sans">
      
      {/* 1. URGENT TICKER (Navbar ke thik niche chipka hua) */}
      <div className="bg-orange-600 text-white py-3 border-b-4 border-blue-950 overflow-hidden sticky top-[64px] md:top-[80px] z-[90] shadow-xl">
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

      <section className="max-w-7xl mx-auto px-6 pt-12">
        
        {/* 2. NEWS HEADER */}
        <div className="mb-12 border-b-4 border-slate-900 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-blue-600 font-black text-xs uppercase tracking-[5px] mb-2 block">Official Bulletin</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none text-black">Media & <span className="text-blue-600">Press.</span></h1>
          </div>
          <div className="text-right">
             <p className="text-[10px] font-black uppercase text-slate-400">Current Year</p>
             <p className="text-xl font-black italic text-slate-900 underline decoration-orange-500">2026</p>
          </div>
        </div>

        {/* 3. BREAKING NEWS CAROUSEL */}
        <div className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl mb-20 group border-8 border-slate-50">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 1.05 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 1.2 }} 
              className="absolute inset-0"
            >
              <Image src={breakingNews[index].image} fill className="object-cover" alt="News" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-3xl text-left">
                <span className="bg-orange-600 px-4 py-1 text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Top Story</span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1] mb-4 italic">{breakingNews[index].title}</h2>
                <p className="text-sm md:text-lg text-white/70 font-bold uppercase tracking-tight leading-relaxed">{breakingNews[index].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-8 right-8 flex gap-2">
            {breakingNews.map((_, i) => (
              <div key={i} className={`h-1.5 transition-all rounded-full ${index === i ? "w-12 bg-blue-600" : "w-4 bg-white/30"}`} />
            ))}
          </div>
        </div>

        {/* 4. MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* LEFT: News Grid (8 Units) */}
          <div className="lg:col-span-8 space-y-12">
             {newsGridData.map((news) => (
               <motion.div 
                  key={news.id} 
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all group flex flex-col md:flex-row h-auto md:h-64"
               >
                  <div className="md:w-72 relative h-52 md:h-full overflow-hidden">
                     <Image src={news.image} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="News" />
                     <div className="absolute top-4 left-4 bg-orange-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                        {news.category}
                     </div>
                  </div>
                  <div className="flex-1 p-8 flex flex-col justify-between text-left">
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
             <div className="bg-blue-950 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800/20 rounded-full -mr-16 -mt-16" />
                <div className="flex items-center gap-3 mb-8">
                   <BellRing className="text-orange-500" size={24} />
                   <h4 className="text-xl font-black uppercase italic tracking-tighter">Notice Board</h4>
                </div>
                <div className="space-y-6 text-left">
                   {[
                     "Quarterly Audit Meeting - Feb 2026",
                     "RO Plant Maintenance Schedule",
                     "Sakhi Mandal Loan Application Open",
                     "New Street Light Tenders Invited"
                   ].map((notice, idx) => (
                     <div key={notice} className="flex gap-4 group cursor-pointer border-b border-white/10 pb-4 last:border-0">
                        <FileText className="text-orange-500 shrink-0" size={16} />
                        <p className="text-[10px] font-bold uppercase tracking-widest group-hover:text-orange-400 transition-colors">{notice}</p>
                     </div>
                   ))}
                </div>
          
             </div>

             <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm text-left">
                <h4 className="text-slate-900 font-black uppercase text-xs tracking-[4px] mb-6">Transparency Index</h4>
                <div className="space-y-4">
                   <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-400 uppercase">RTI Response</span><span className="text-blue-600 font-black italic">100%</span></div>
                   <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-400 uppercase">Digital Literacy</span><span className="text-blue-600 font-black italic">83%+</span></div>
                   <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-400 uppercase">Fund Utilization</span><span className="text-blue-600 font-black italic">98.4%</span></div>
                </div>
             </div>
          </aside>
        </div>
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