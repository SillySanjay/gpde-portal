"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { History, TrendingUp, Award } from "lucide-react";

export default function HistoryPage() {
  const timeline = [
    {
      year: "2006-2010",
      title: "Building Foundation",
      desc: "Shri Himanshu Patel took charge at 23. The Grazing Land Auction created an ₹80 Lakh fund, prioritizing primary health and basic schools.",
      img: "https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.45_PM_1_pua2kn.jpg"
    },
    {
      year: "2011-2015",
      title: "Digital Integration",
      desc: "Introduced 100% Wi-Fi and CCTV networks. Punsari became a national case study after receiving the Best Gram Sabha Award.",
      img: "/images/gallery20.png"
    },
    {
      year: "2016-2026",
      title: "The ISO Smart Era",
      desc: "Achieving 100% digital literacy and surplus revenue. Modern Skill Centers and RO Plants set a global benchmark for Rurban models.",
      img: "/images/news1.png"
    }
  ];

  return (
    <main className="bg-white min-h-screen pb-12 font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.42_PM_uijm9a.jpg"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-50"
          alt="History Background"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <History size={48} className="mx-auto text-orange-500 mb-4 md:mb-6" />
            <h1 className="text-5xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-none">
              Legacy of <br />
              <span className="text-orange-500 underline decoration-white decoration-4 underline-offset-8">
                Progress.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* VISIONARY ROOTS */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[5/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-slate-50">
  <Image
    src="/images/history3.png"
    fill
    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 40vw"
    alt="Leadership Meeting"
    className="object-cover object-center"
    priority
  />
  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-blue-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
    Est. 1955
  </div>
</div>

        {/* TEXT SAME */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 leading-tight tracking-tighter">
            Visionary <span className="text-blue-700">Roots.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed italic border-l-4 border-orange-500 pl-6">
            &quot;In 2006, the Panchayat had a debt of ₹1.2 Lakh. We didn&apos;t ask for charity; we created assets.&quot; — Sarpanch Himanshu Patel.
          </p>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed text-justify uppercase font-bold tracking-tight">
            Punsari adopted a Rurban approach, ensuring self-governance by building a corpus fund from grazing land auctions.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-slate-900 py-16 md:py-24 text-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12 md:mb-20 justify-center">
            <TrendingUp className="text-orange-500" />
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-widest text-center">
              Evolution Timeline
            </h2>
          </div>

          <div className="space-y-12 md:space-y-24">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 md:gap-16 items-center`}
              >
                <div className="flex-1 w-full relative aspect-[4/3] md:aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
                  <Image
                    src={item.img}
                    fill
                    sizes="(max-width:768px) 100vw, 45vw"
                    className="object-cover object-center"
                    alt={item.title}
                  />
                </div>

                <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
                  <h4 className="text-3xl md:text-5xl font-black text-orange-500 uppercase tracking-tighter leading-none">
                    {item.year}
                  </h4>
                  <h5 className="text-xl md:text-2xl font-bold uppercase text-white underline decoration-orange-500 decoration-4 underline-offset-8 inline-block">
                    {item.title}
                  </h5>
                  <p className="text-sm md:text-lg opacity-70 leading-relaxed font-medium uppercase tracking-tight italic">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 md:mb-16 justify-center">
          <Award className="text-orange-600" size={32} />
          <h2 className="text-3xl md:text-5xl font-black uppercase text-blue-950 italic">
            Achievements.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { year: "2011", award: "Best Gram Panchayat Gujarat", source: "CM Narendra Modi" },
            { year: "2012", award: "Rajiv Gandhi National Award", source: "academy studies" },
            { year: "2013", award: "Nirmal Gram Puraskar", source: "Central Government" },
            { year: "2015", award: "Best Gram Sabha Award", source: "Ministry of PR" },
          ].map((a, i) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={i}
              className="p-8 md:p-10 bg-white border-b-8 border-orange-500 rounded-3xl shadow-xl flex flex-col items-center text-center"
            >
              <div className="text-2xl md:text-4xl font-black text-blue-900 mb-3 italic">
                #{a.year}
              </div>
              <h4 className="font-black uppercase text-xs md:text-sm text-slate-900 mb-4 tracking-tighter leading-tight italic">
                {a.award}
              </h4>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-[3px]">
                {a.source}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
