"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Wifi, Landmark, ArrowRight, Zap, 
  Users, CheckCircle2, Megaphone, FileText, Globe, Menu, X, Target, Info, Phone, Activity
} from "lucide-react";

const carouselPhotos = [
  "/images/WhatsApp Image 2026-01-08 at 10.57.12 AM.jpeg",
  "/images/one.jpeg",
  "/images/two.jpeg",
  "https://res.cloudinary.com/dpccapers/image/upload/v1767774292/WhatsApp_Image_2026-01-07_at_12.47.56_PM_bf7ubr.jpg",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % carouselPhotos.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = ['Home', 'Geography', 'History', 'Economy', 'Gallery', 'News'];

  return (
    <main className="bg-white font-sans text-slate-900 leading-relaxed antialiased overflow-x-hidden">
      
      

      {/* 2. GOVERNMENT CAROUSEL */}
      <section className="relative w-full overflow-hidden bg-slate-900 h-[45vh] md:h-[50vh] lg:h-[700px]">
        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0 h-full w-full">
            <Image src={carouselPhotos[index]} fill alt="Slider" className="object-cover object-fill" priority />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-2xl">Punsari Gram Panchayat</h1>
            <p className="text-white text-[10px] md:text-xs lg:text-lg font-bold uppercase tracking-[4px] md:tracking-[6px] bg-orange-600 px-4 lg:px-6 py-2 inline-block">India&apos;s No.1 Model Village</p>
          </motion.div>
        </div>
      </section>

      {/* 3. FIXED DUAL NEWS STRIP */}
      <div className="bg-blue-800 text-white flex flex-col md:flex-row border-b-4 border-orange-500 divide-y md:divide-y-0 md:divide-x divide-white/20">
        <div className="relative flex-1 flex items-center h-12 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 bg-orange-600 z-10 flex items-center px-4 font-black uppercase text-[10px] tracking-widest shadow-xl shrink-0">News</div>
          <div className="animate-marquee whitespace-nowrap text-[11px] font-medium italic uppercase tracking-wider pl-[100px] md:pl-[120px]">
            📢 ISO 9001:2026 Certification Awarded • RO Plant Upgrade Completed • New Piped Water Line in Ward 4 • Financial Surplus: ₹75 Lakh
          </div>
        </div>
        <div className="relative flex-1 flex items-center h-12 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 bg-blue-950 z-10 flex items-center px-4 font-black uppercase text-[10px] tracking-widest shadow-xl shrink-0">Events</div>
          <div className="animate-marquee whitespace-nowrap text-[11px] font-medium italic uppercase tracking-wider pl-[100px] md:pl-[120px]">
            📢 Gram Sabha Meeting: Feb 15th, 2026 at 10 AM • Skill Center Convocation • Women Dairy Cooperative Meet
          </div>
        </div>
      </div>

      {/* 4. VISION & MISSION */}
      <section className="py-12 md:py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-orange-600">
               <Target size={24}/>
               <span className="font-black uppercase tracking-[4px] text-xs">The Punsari Blueprint</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 leading-tight uppercase italic">"Urban Facilities, Rural Soul"</h2>
            <p className="text-slate-600 leading-relaxed text-justify italic font-medium text-sm md:text-base">
              Punsari represents the transformation of rural India. Under the vision of making villages self-reliant, we have integrated high-tech surveillance, 100% digital literacy, and urban-standard education while maintaining our cultural roots.
            </p>
            <button className="flex items-center gap-2 text-blue-900 font-black text-xs uppercase tracking-widest group">
              View Development Plan <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
             <div className="bg-slate-50 p-4 md:p-6 rounded-2xl border-l-4 border-orange-500">
                <ShieldCheck className="text-blue-900 mb-2"/>
                <h4 className="font-black uppercase text-[10px] md:text-xs">Security</h4>
                <p className="text-[8px] md:text-[10px] text-slate-500 uppercase mt-1">120+ CCTV Cameras</p>
             </div>
             <div className="bg-slate-900 p-4 md:p-6 rounded-2xl text-white">
                <Wifi className="text-orange-500 mb-2"/>
                <h4 className="font-black uppercase text-[10px] md:text-xs">Digital</h4>
                <p className="text-[8px] md:text-[10px] opacity-60 uppercase mt-1">Village-wide Wi-Fi</p>
             </div>
             <div className="bg-blue-900 p-4 md:p-6 rounded-2xl text-white">
                <CheckCircle2 className="text-orange-500 mb-2"/>
                <h4 className="font-black uppercase text-[10px] md:text-xs">Sanitation</h4>
                <p className="text-[8px] md:text-[10px] opacity-60 uppercase mt-1">100% Waste Mgmt</p>
             </div>
             <div className="bg-slate-50 p-4 md:p-6 rounded-2xl border-l-4 border-blue-900">
                <Info className="text-blue-900 mb-2"/>
                <h4 className="font-black uppercase text-[10px] md:text-xs">Services</h4>
                <p className="text-[8px] md:text-[10px] text-slate-500 uppercase mt-1">24/7 RO Water</p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. IMAGE GRAPHIC SECTION */}
      <section className="bg-slate-50 py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[14/11] md:aspect-[15/10] bg-white p-4 shadow-xl rounded-xl">
             <Image 
               src="https://res.cloudinary.com/dpccapers/image/upload/v1767785378/ChatGPT_Image_Jan_7_2026_04_59_09_PM_zlfefj.png" 
               fill 
               alt="Digital Ecosystem Overview" 
               className="object-contain p-4 md:p-8"
             />
          </div>
        </div>
      </section>

      {/* 6. GOVERNANCE PILLARS */}
      <section className="py-16 md:py-24 bg-white px-6 border-y">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-blue-900 text-2xl md:text-3xl font-black uppercase tracking-tighter italic">Pillars of Governance</h3>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[4px] mt-2">Professional Rural Management Strategy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Financial Independence", desc: "Generating revenue via land auctions and tax collection to fund local maintenance without state grants." },
              { title: "Digital Transparency", desc: "CCTV surveillance and digital attendance for school teachers ensure 100% accountability." },
              { title: "Social Inclusion", desc: "Empowering women through 111+ Sakhi Mandals and a fully functional village-wide audio system." }
            ].map((pillar, i) => (
              <div key={i} className="space-y-4 border-t-2 border-slate-100 pt-8">
                <span className="text-orange-600 font-black text-xl md:text-2xl">0{i+1}</span>
                <h4 className="font-black uppercase text-xs md:text-sm tracking-widest text-blue-900">{pillar.title}</h4>
                <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed italic">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE STATISTICS */}
      <section className="py-12 md:py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: "Village Population", val: "6,000", icon: <Users size={20}/> },
            { label: "Digital Literacy", val: "100%", icon: <Wifi size={20}/> },
            { label: "Sakhi Mandals", val: "111+", icon: <ShieldCheck size={20}/> },
            { label: "Revenue Surplus", val: "₹75L+", icon: <Landmark size={20}/> },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 md:p-8 text-center flex flex-col items-center group hover:bg-blue-900 transition-all hover:text-white shadow-sm">
              <div className="text-orange-600 group-hover:text-white mb-4"><CheckCircle2 size={24}/></div>
              <div className="text-2xl md:text-4xl font-black">{item.val}</div>
              <div className="text-[9px] md:text-[10px] uppercase font-black tracking-widest opacity-50 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FILLING THE GAP: QUICK CITIZEN SERVICES */}
      <section className="bg-blue-900 py-10 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex items-center gap-4">
            <Activity className="text-orange-500 hidden sm:block" size={40} />
            <div>
              <h4 className="text-xl font-black uppercase italic tracking-tighter">Citizen Quick Access</h4>
              <p className="text-[10px] uppercase font-bold text-blue-300 tracking-[3px]">Digital Services & Support Helplines</p>
            </div>
          </div>
          {/* <div className="flex flex-wrap justify-center gap-4">
            {['E-Gram Portal', 'Dairy Login', 'Tax Payment', 'School Login'].map((btn) => (
              <button key={btn} className="px-4 py-2 border border-white/20 rounded-md text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-blue-900 transition-all">
                {btn}
              </button>
            ))}
          </div> */}
        </div>
        <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <Landmark size={240} />
        </div>
      </section>

      {/* 8. GROWTH MODELS TILES */}
      <section className="py-16 md:py-24 bg-white px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-black text-blue-900 uppercase mb-12 md:mb-16 tracking-tight">Applied Growth Models</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-1 ">
             {[
               { title: "PURA Model", desc: "Provision of Urban Amenities in Rural Areas focusing on Physical, Electronic, and Economic connectivity." },
               { title: "Hub & Spoke", desc: "Information empowerment ensuring data reaches citizens via Wi-Fi and Public Address networks." },
               { title: "Gandhian Vision", desc: "Self-governance as a complete republic, independent for vital wants yet interdependent for growth." }
             ].map((m, i) => (
               <div key={i} className="bg-white p-8 md:p-12 border border-slate-200 hover:border-blue-900 transition-all group">
                 <h4 className="text-lg md:text-xl font-black text-slate-900 mb-4 uppercase italic">{m.title}</h4>
                 <p className="text-xs md:text-sm text-slate-500 leading-relaxed text-justify italic">{m.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 9. DIGITAL SMART SCHOOLS */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
             src="https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.44_PM_1_toy9rh.jpg" 
             fill alt="School Background" 
             className="object-cover"
           />
           <div className="absolute inset-0 bg-blue-950/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 text-white">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">Digital <span className="text-orange-500 underline">Smart</span> Schools</h2>
            <p className="mt-4 text-slate-300 font-bold uppercase tracking-[4px] text-[10px] md:text-xs">Transforming the Primary Learning Landscape</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "E-Sense Modules", desc: "Collaboration with Navneet Publications to provide audio-visual teaching modules in every classroom." },
              { title: "Student Logistics", desc: "Individual lockers provided to reduce bag weight. Free transport via the Atal Express bus system." },
              { title: "Skill Training", desc: "Dedicated center for school dropouts covering computer operations, tailoring, and embroidery." }
            ].map((box, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-xl text-white hover:bg-white/20 transition-all shadow-2xl">
                 <h4 className="text-lg md:text-xl font-black uppercase mb-4 italic text-orange-400">{box.title}</h4>
                 <p className="text-xs md:text-sm opacity-80 leading-relaxed font-medium">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INSTITUTIONAL EXCELLENCE */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-black text-blue-900 border-b-4 border-orange-500 pb-2 inline-block uppercase italic">Institutional Excellence</h2>
            <p className="mt-8 text-slate-600 leading-relaxed text-justify italic font-medium text-sm md:text-base">
              "Development is not a destination but a continuous process of change." Documented by NIRDPR, Punsari Gram Panchayat has operationalized decentralization through professional management.
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12 text-sm">
              <div className="p-6 md:p-8 border border-slate-200 bg-slate-50">
                 <h4 className="font-black text-blue-900 uppercase mb-4 text-[10px] md:text-xs tracking-widest underline decoration-orange-500">Asset Management</h4>
                 <p className="text-slate-500 leading-relaxed text-xs">By auctioning grazing land as residential plots, a ₹80 Lakh corpus fund was built, ensuring all amenities are maintained via bank interest without external grants.</p>
              </div>
              <div className="p-6 md:p-8 border border-slate-200 bg-slate-50">
                 <h4 className="font-black text-blue-900 uppercase mb-4 text-[10px] md:text-xs tracking-widest underline decoration-orange-500">Governance Ethics</h4>
                 <p className="text-slate-500 leading-relaxed text-xs">Secured its place as a functional unit by providing 100% piped water, healthcare, and digital RTI compliance under Article 243 G.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-8 md:p-10 shadow-2xl h-fit rounded-br-[40px]">
            <h4 className="font-black uppercase tracking-widest text-[10px] md:text-xs border-b border-white/20 pb-4 mb-8 flex items-center gap-2"><Megaphone size={16} className="text-orange-500"/> Bulletins</h4>
            <ul className="space-y-6">
              {["Progress Report 2026", "Audit Summary - RO Plant", "Gram Sabha Minutes", "Tax Recovery Policy"].map((doc, i) => (
                <li key={i} className="flex gap-4 items-start group cursor-pointer border-b border-white/5 pb-4 last:border-0">
                  <FileText size={18} className="text-orange-500 shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-tighter group-hover:text-orange-500 transition-colors">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11. ASYMMETRIC GALLERY */}
      <section className="py-16 md:py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8 md:mb-12 border-b-2 border-slate-900 pb-6">
            <h3 className="text-2xl md:text-3xl font-black text-blue-900 uppercase tracking-tighter italic">Landmarks</h3>
            <Link href="/gallery" className="text-[10px] font-black uppercase text-orange-600 border border-orange-500 px-3 md:px-4 py-1.5 hover:bg-orange-600 hover:text-white transition-all">Full Archive</Link>
          </div>
          <div className="grid grid-cols-12 gap-3 h-[500px] md:h-[600px] lg:h-[800px]">
             <div className="col-span-12 md:col-span-8 relative group overflow-hidden bg-white border border-slate-200 p-2 shadow-lg">
                <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767784998/ChatGPT_Image_Jan_7_2026_04_52_10_PM_xqujx1.png" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 p-2" alt="G1"/>
             </div>
             <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-3">
                <div className="relative overflow-hidden border border-slate-200 bg-white group shadow-lg"><Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774290/WhatsApp_Image_2026-01-07_at_12.47.47_PM_1_ipdzzt.jpg" fill className="object-cover group-hover:scale-105" alt="G2"/></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative border border-slate-200 overflow-hidden shadow-lg"><Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774291/WhatsApp_Image_2026-01-07_at_12.47.53_PM_csorlt.jpg" fill className="object-cover" alt="G3"/></div>
                  <div className="relative border border-slate-200 overflow-hidden shadow-lg"><Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774290/WhatsApp_Image_2026-01-07_at_12.47.54_PM_1_zjqc4f.jpg" fill className="object-cover" alt="G4"/></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-marquee { display: inline-flex; animation: marquee 25s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </main>
  );
}