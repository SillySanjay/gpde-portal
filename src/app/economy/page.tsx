"use client";
import Image from "next/image";
import { TrendingUp, Users, DollarSign } from "lucide-react";

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

      {/* HEADER */}
      <header className="bg-slate-900 py-20 sm:py-28 px-4 sm:px-6 text-center text-white">
        <TrendingUp size={40} className="mx-auto text-orange-500 mb-5" />

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight italic leading-tight">
          Economic{" "}
          <span className="text-orange-500 underline decoration-white decoration-4 underline-offset-6">
            Autonomy
          </span>
        </h1>

        <p className="mt-6 text-slate-400 font-bold tracking-[4px] text-[9px] sm:text-[10px] uppercase">
          Financial Resilience | Surplus: ₹75L+
        </p>
      </header>

      {/* SHG SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="relative h-64 sm:h-80 md:h-[420px] rounded-[2rem] overflow-hidden shadow-2xl">
          <Image
            src="/images/economy1.png"
            fill
            sizes="100vw"
            className="object-cover object-center"
            alt="Dairy Economy"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent p-6 sm:p-10 flex flex-col justify-end">
            <h3 className="text-white text-xl sm:text-2xl font-black uppercase italic">
              The White Revolution
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm italic mt-1">
              1,700 Cows | 1,200 Women Empowered
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users size={28} className="text-orange-600" />
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-blue-950">
              Women Empowerment
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-lg leading-relaxed mb-8 italic">
            "Sakhi Mandals" have grown from just 2 to 111 groups. These SHGs are the
            backbone of our economy, with 90+ groups bank-linked and operating
            cooperative stores.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "111", label: "Active SHGs" },
              { val: "1,200", label: "Women Members" },
            ].map((i, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg border-l-4 border-orange-500"
              >
                <div className="text-3xl sm:text-4xl font-black text-blue-950 italic">
                  {i.val}
                </div>
                <div className="text-[9px] uppercase font-black text-slate-400 tracking-widest mt-2">
                  {i.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVENUE TABLE */}
      <section className="py-16 sm:py-24 bg-white px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          <div className="flex items-center gap-3 mb-10 justify-center">
            <DollarSign size={28} className="text-orange-600" />
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-blue-950 tracking-widest text-center">
              Revenue Policy Model
            </h2>
          </div>

          {/* MOBILE FRIENDLY TABLE */}
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-xl">
            <table className="w-full min-w-[600px] text-left">
              <thead className="bg-slate-900 text-orange-500">
                <tr>
                  <th className="p-5 text-xs font-black uppercase tracking-widest">Sector</th>
                  <th className="p-5 text-xs font-black uppercase tracking-widest">Policy</th>
                  <th className="p-5 text-xs font-black uppercase tracking-widest">Impact</th>
                </tr>
              </thead>
              <tbody>
                {policies.map((p, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <td className="p-5 font-black text-blue-900 text-xs uppercase italic">
                      {p.sector}
                    </td>
                    <td className="p-5 text-orange-600 font-black text-lg italic">
                      {p.policy}
                    </td>
                    <td className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">
                      {p.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FOOTER CARD */}
          <div className="mt-10 p-8 sm:p-10 bg-blue-950 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-lg font-black uppercase text-orange-500 mb-2">
                Sustainable Corpus
              </h4>
              <p className="text-xs opacity-70 leading-relaxed italic max-w-md">
                Interest earned from land assets fully covers Wi-Fi & CCTV
                maintenance costs.
              </p>
            </div>

            <div className="text-center md:text-right">
              <div className="text-[9px] uppercase font-black tracking-[4px] opacity-50 mb-1">
                Recovery Rate
              </div>
              <div className="text-4xl sm:text-6xl font-black italic text-orange-500">
                95%
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
