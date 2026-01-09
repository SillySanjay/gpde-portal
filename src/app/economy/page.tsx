"use client";
import Image from "next/image";
import { TrendingUp, Users, DollarSign, PieChart } from "lucide-react";

const policies = [
  { sector: "Drinking Water", policy: "₹4 / 20 Litre", impact: "100% Piped Access" },
  { sector: "Waste Mgmt", policy: "₹30 / Year", impact: "2x Daily Collection" },
  { sector: "Atal Express", policy: "₹3 / Trip", impact: "Free for Students" },
  { sector: "Land Assets", policy: "Grazing Land Auction", impact: "₹80L Corpus Growth" },
  { sector: "Wi-Fi Access", policy: "₹50 / Month", impact: "Unlimited Broadband" },
];

export default function EconomyPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <header className="bg-slate-900 py-32 px-6 text-center text-white relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <TrendingUp size={48} className="mx-auto text-orange-500 mb-6" />
          <h1 className="text-6xl font-black uppercase tracking-tighter italic leading-none">Economic <span className="text-orange-500 underline decoration-white decoration-4 underline-offset-8">Autonomy</span></h1>
          <p className="mt-8 text-slate-400 font-bold tracking-[8px] text-[10px] uppercase">Financial Resilience | Surplus: ₹75L+</p>
        </div>
      </header>

      {/* SHG Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
          <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774291/WhatsApp_Image_2026-01-07_at_12.47.53_PM_csorlt.jpg" fill alt="Dairy Eco" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent p-12 flex flex-col justify-end">
            <h3 className="text-white text-3xl font-black uppercase italic">The White Revolution</h3>
            <p className="text-slate-200 text-sm italic mt-2">1,700 Cows | 1,200 Women Empowered</p>
          </div>
        </div>
        <div>
           <div className="flex items-center gap-4 mb-8">
              <Users size={32} className="text-orange-600" />
              <h2 className="text-4xl font-black uppercase text-blue-950 underline decoration-slate-200 decoration-4 underline-offset-4">Women Empowerment</h2>
           </div>
           <p className="text-slate-600 text-lg leading-relaxed mb-8 italic text-justify">
              "Sakhi Mandals" have grown from just 2 to 111 groups. These 111 active Self-Help Groups (SHGs) are the backbone of our economy. 90+ groups are directly bank-linked, enjoying the benefit of revolving funds and Suvidha cooperative stores.
           </p>
           <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-8 bg-white rounded-3xl shadow-lg border-l-4 border-orange-500">
                <div className="text-4xl font-black text-blue-950 italic">111</div>
                <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest mt-2">Active SHGs</div>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-lg border-l-4 border-orange-500">
                <div className="text-4xl font-black text-blue-950 italic">1,200</div>
                <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest mt-2">Women Members</div>
              </div>
           </div>
        </div>
      </section>

      {/* Revenue Table */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center">
             <DollarSign size={32} className="text-orange-600" />
             <h2 className="text-4xl font-black uppercase text-blue-950 tracking-widest">Revenue Policy Model</h2>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-2xl">
            <table className="w-full text-left">
              <thead className="bg-slate-900 text-orange-500">
                <tr>
                  <th className="p-8 font-black uppercase text-xs tracking-widest">Sector</th>
                  <th className="p-8 font-black uppercase text-xs tracking-widest">Policy</th>
                  <th className="p-8 font-black uppercase text-xs tracking-widest">Economic Impact</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 font-medium">
                {policies.map((p, i) => (
                  <tr key={i} className={`border-b border-slate-100 transition-colors hover:bg-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="p-8 font-black text-blue-900 text-sm uppercase italic tracking-tighter">{p.sector}</td>
                    <td className="p-8 text-orange-600 font-black text-xl italic">{p.policy}</td>
                    <td className="p-8 text-xs font-bold text-slate-500 uppercase tracking-widest">{p.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 p-10 bg-blue-950 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="max-w-sm">
                <h4 className="text-xl font-black uppercase text-orange-500 mb-2">Sustainable Corpus</h4>
                <p className="text-xs opacity-70 leading-relaxed italic">The interest accrued from our bank deposit (created through land asset sales) covers 100% of our maintenance expenses for Wi-Fi and CCTV networks.</p>
             </div>
             <div className="text-right">
                <div className="text-[10px] uppercase font-black tracking-[4px] opacity-50 mb-1">Recovery Rate</div>
                <div className="text-6xl font-black italic text-orange-500">95%</div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}