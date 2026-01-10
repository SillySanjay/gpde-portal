import { 
  Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin, 
  Clock, Users, Send, ShieldCheck, Landmark 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-400 pt-12 pb-4 px-6 border-t-8 border-orange-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Grid tightened from gap-16 to gap-10 */}
        <div className="grid lg:grid-cols-12 gap-10 mb-10">
          
          {/* Column 1: Identity (4 Units) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-white text-3xl font-black mb-3 uppercase tracking-tighter italic leading-none">
                Punsari <span className="text-orange-500">Panchayat</span>
              </h3>
              <p className="text-[11px] leading-relaxed text-slate-400 uppercase font-bold tracking-wider">
                "Gramin Atma, Shehri Suvidha" — Providing world-class urban facilities to our rural heart.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <MapPin size={16} className="text-orange-500 shrink-0" />
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-200">Sabarkanta, Gujarat - 383001</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-orange-500 shrink-0" />
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-200">Office: 01542-244XXX</span>
              </div>
            </div>

            <div className="flex gap-2">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-all text-white border border-white/10">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Compact Form (5 Units) - Reduced padding */}
          <div className="lg:col-span-5 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h4 className="text-white font-black mb-6 uppercase text-sm tracking-widest italic flex items-center gap-2">
              <Landmark size={18} className="text-orange-500" /> Grievance Cell
            </h4>
            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input className="w-full bg-blue-900/30 border border-white/10 p-3 rounded-xl text-[9px] font-black uppercase text-white placeholder:text-slate-500 focus:outline-orange-500" placeholder="Full Name" />
                <input className="w-full bg-blue-900/30 border border-white/10 p-3 rounded-xl text-[9px] font-black uppercase text-white placeholder:text-slate-500 focus:outline-orange-500" placeholder="Mobile" />
              </div>
              <textarea rows={2} className="w-full bg-blue-900/30 border border-white/10 p-3 rounded-xl text-[9px] font-black uppercase text-white placeholder:text-slate-500 focus:outline-orange-500" placeholder="Your Message..." />
              <button className="w-full bg-orange-600 text-white font-black p-3 rounded-xl uppercase tracking-[3px] text-[9px] hover:bg-white hover:text-blue-950 transition-all flex items-center justify-center gap-2">
                Submit <Send size={12} />
              </button>
            </form>
          </div>

          {/* Column 3: Hours & Staff (3 Units) - Very compact */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-orange-500 font-black mb-3 uppercase text-[10px] tracking-[3px]">Office Hours</h4>
              <div className="space-y-1 text-[9px] font-black uppercase tracking-widest">
                <div className="flex justify-between border-b border-white/5 pb-1"><span>Mon-Fri</span><span className="text-white">10-5</span></div>
                <div className="flex justify-between"><span>Sat</span><span className="text-white">10-2</span></div>
              </div>
            </div>

            <div>
              <h4 className="text-orange-500 font-black mb-3 uppercase text-[10px] tracking-[3px]">Key Personnel</h4>
              <div className="space-y-2">
                 {[
                   { name: "Himanshu Patel", role: "Sarpanch" },
                   { name: "Aryan Patel", role: "Abhiyan Lead" }
                 ].map((p, i) => (
                   <div key={i}>
                      <div className="text-white text-[10px] font-black uppercase italic">{p.name}</div>
                      <div className="text-[8px] font-bold text-slate-500 uppercase">{p.role}</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Gov Links - Reduced py-10 to py-6 */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-6 border-t border-white/5 border-b">
           {['E-Gram Swaraj', 'Digital Gujarat', 'MGNREGA', 'Sabarkantha', 'RTI Online'].map((link, i) => (
             <a key={i} href="#" className="text-[9px] font-black uppercase tracking-[2px] text-slate-500 hover:text-orange-500 transition-all">
               {link}
             </a>
           ))}
        </div>

        {/* BOTTOM SECTION: Copyright - Reduced pt-10 to pt-6 */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[8px] font-black uppercase tracking-[3px] opacity-40">
            © 2026 Punsari Gram Panchayat | Sabarkantha
          </p>
          <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[1px] bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <ShieldCheck size={12} className="text-orange-500" />
            <span className="text-slate-300">Secure Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
}