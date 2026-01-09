"use client";
import { Mail, Phone, MapPin, Clock, Table as TableIcon, Users } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pb-24">
      <header className="bg-blue-950 py-32 px-6 text-center text-white relative">
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Citizen <span className="text-orange-500 underline decoration-white decoration-4 underline-offset-8">Grievance</span></h1>
        <p className="mt-8 uppercase font-bold tracking-[8px] text-[10px] text-slate-400 italic">Panchayat Office Support | Hours: 10AM - 5PM</p>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20">
        <div>
           <div className="flex items-center gap-4 mb-12">
              <MapPin className="text-orange-600" size={32} />
              <h2 className="text-3xl font-black uppercase text-blue-950 underline decoration-slate-200 decoration-4">Office Information</h2>
           </div>
           
           <div className="space-y-10">
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex gap-6 items-start">
                 <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-orange-600 shrink-0"><MapPin size={24}/></div>
                 <div>
                    <h4 className="font-black text-slate-900 uppercase italic mb-2 underline decoration-slate-200">Address</h4>
                    <p className="text-slate-600 text-sm font-bold italic leading-relaxed">ग्राम पंचायत लॉंगवाला <br />तहसील – श्रीगंगानगर <br />जिला – श्रीगंगानगर, राजस्थान – 335001</p>
                 </div>
              </div>

              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex gap-6 items-start">
                 <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-orange-600 shrink-0"><Phone size={24}/></div>
                 <div>
                    <h4 className="font-black text-slate-900 uppercase italic mb-2 underline decoration-slate-200">Connect</h4>
                    <p className="text-slate-600 text-sm font-bold italic">Office Line: 0154X-XXXXXX</p>
                    <p className="text-slate-600 text-sm font-bold italic">Public Grievance: +91-9XXXXXXXXX</p>
                 </div>
              </div>

              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex gap-6 items-start">
                 <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-orange-600 shrink-0"><Mail size={24}/></div>
                 <div>
                    <h4 className="font-black text-slate-900 uppercase italic mb-2 underline decoration-slate-200">Official Email</h4>
                    <p className="text-slate-600 text-sm font-bold italic">gp.longwala@rajasthan.gov.in</p>
                    <p className="text-slate-600 text-sm font-bold italic">support.longwala@gmail.com</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 -mr-16 -mt-16 rounded-full" />
           <h3 className="text-3xl font-black mb-10 uppercase text-slate-900 italic underline decoration-orange-500 decoration-8 underline-offset-4">Query / Feedback</h3>
           <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                 <input className="w-full p-6 rounded-3xl border border-slate-100 bg-slate-50 focus:outline-orange-500 font-bold text-xs uppercase" placeholder="Full Name / पूरा नाम" />
                 <input className="w-full p-6 rounded-3xl border border-slate-100 bg-slate-50 focus:outline-orange-500 font-bold text-xs uppercase" placeholder="Mobile / मोबाइल" />
              </div>
              <input className="w-full p-6 rounded-3xl border border-slate-100 bg-slate-50 focus:outline-orange-500 font-bold text-xs uppercase" placeholder="Email Address / ई-मेल" />
              <textarea className="w-full p-6 rounded-3xl border border-slate-100 bg-slate-50 h-40 focus:outline-orange-500 font-bold text-xs uppercase" placeholder="Write message / संदेश लिखें" />
              <button className="w-full bg-slate-950 text-white font-black p-6 rounded-3xl uppercase tracking-[6px] text-xs hover:bg-orange-600 transition-all shadow-xl">Submit Portal Query</button>
           </form>
        </div>
      </section>

      {/* Office Hours Table */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="bg-slate-900 p-12 rounded-[3rem] text-white">
          <div className="flex items-center gap-4 mb-10">
            <Clock className="text-orange-500" />
            <h3 className="text-2xl font-black uppercase italic">Office Hours</h3>
          </div>
          <table className="w-full text-left text-sm uppercase font-black">
             <tbody>
                <tr className="border-b border-white/10"><td className="py-6">Mon - Fri</td><td className="py-6 text-orange-500">10:00 AM - 5:00 PM</td></tr>
                <tr className="border-b border-white/10"><td className="py-6">Saturday</td><td className="py-6 text-orange-500">10:00 AM - 2:00 PM</td></tr>
                <tr><td className="py-6">Sunday</td><td className="py-6 text-slate-500 italic">CLOSED</td></tr>
             </tbody>
          </table>
        </div>
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-200">
          <div className="flex items-center gap-4 mb-10">
            <Users className="text-orange-600" />
            <h3 className="text-2xl font-black uppercase text-blue-950 italic">Key Personnel</h3>
          </div>
          <div className="space-y-6">
             {[
               { name: "Shri Himanshu Patel", role: "Sarpanch", phone: "+91-98XXXXXXXX" },
               { name: "Shri ________", role: "Up-Sarpanch", phone: "+91-94XXXXXXXX" },
               { name: "Shri ________", role: "Panchayat Secretary", phone: "+91-91XXXXXXXX" }
             ].map((p, i) => (
               <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div>
                     <div className="font-black uppercase text-sm italic">{p.name}</div>
                     <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.role}</div>
                  </div>
                  <div className="text-xs font-black text-orange-600">{p.phone}</div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}