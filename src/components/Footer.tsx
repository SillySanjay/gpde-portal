import Link from "next/link";
import { 
  Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin, 
  Clock, ShieldCheck, Landmark, Globe, ExternalLink, Award 
} from "lucide-react";

// NavLinks ko yahin define kar diya taaki undefined error na aaye
const footerNavLinks = [
  { name: "Home", href: "/" },
  { name: "Geography", href: "/geography" },
  { name: "History", href: "/history" },
  { name: "Economy", href: "/economy" },
  { name: "News", href: "/news" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-400 pt-16 pb-6 px-6 border-t-8 border-orange-600 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Institutional Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white text-blue-950 flex items-center justify-center font-black rounded-2xl shadow-xl text-xl rotate-3">P</div>
              <div>
                <h3 className="text-white text-xl font-black uppercase tracking-tighter leading-none italic">
                  Punsari <span className="text-orange-500">Panchayat</span>
                </h3>
                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-[3px] mt-1">Sabarkantha, Gujarat</p>
              </div>
            </div>
            <p className="text-[10px] leading-relaxed text-slate-400 uppercase font-bold tracking-widest text-justify">
              India&apos;s leading self-reliant Smart Village model. Committed to urban infrastructure with a rural soul.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center hover:bg-orange-600 transition-all text-white border border-white/10 group">
                  <Icon size={16} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Direct Contact Hub */}
          <div>
            <h4 className="text-orange-500 font-black mb-6 uppercase text-[10px] tracking-[4px] flex items-center gap-2">
              <Globe size={14} /> Official Connect
            </h4>
            <div className="space-y-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
               <div className="flex items-start gap-3 group cursor-default">
                  <MapPin size={18} className="text-orange-500 shrink-0" />
                  <p className="leading-tight group-hover:text-white transition-colors">Gram Panchayat Bhavan, Punsari,<br/>Sabarkantha, GJ - 383001</p>
               </div>
               <div className="flex items-center gap-3 group cursor-pointer">
                  <Phone size={16} className="text-orange-500 shrink-0" />
                  <p className="group-hover:text-white transition-colors">Office: 02772-284XXX</p>
               </div>
               <div className="flex items-center gap-3 group cursor-pointer">
                  <Mail size={16} className="text-orange-500 shrink-0" />
                  <p className="group-hover:text-white transition-colors lowercase">office@punsari.gov.in</p>
               </div>
            </div>
          </div>

          {/* Column 3: Governance Navigation */}
          <div>
            <h4 className="text-orange-500 font-black mb-6 uppercase text-[10px] tracking-[4px] flex items-center gap-2">
              <Landmark size={14} /> Site Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
               {footerNavLinks.map((l) => (
                 <li key={l.name}>
                   <Link href={l.href} className="hover:text-white transition-all flex items-center gap-2 group">
                     <div className="w-1 h-1 bg-orange-600 rounded-full group-hover:w-3 transition-all" /> 
                     {l.name}
                   </Link>
                 </li>
               ))}
            </ul>
          </div>

          {/* Column 4: Institutional Details */}
          <div className="space-y-8">
            <div>
              <h4 className="text-orange-500 font-black mb-4 uppercase text-[10px] tracking-[4px]">Key Personnel</h4>
              <div className="space-y-3">
                 {[
                   { name: "Himanshu Patel", role: "Sarpanch" },
                   { name: "Aryan Patel", role: "Strategic Lead" }
                 ].map((p, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-white text-[10px] font-black uppercase italic">{p.name}</span>
                      <span className="text-[8px] font-bold text-slate-600 uppercase">{p.role}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="flex gap-2">
               <div className="flex-1 p-2 bg-white/5 rounded-lg border border-white/10 text-[7px] font-black uppercase text-center flex flex-col items-center gap-1">
                  <Award size={12} className="text-orange-500" /> ISO Certified
               </div>
               <div className="flex-1 p-2 bg-white/5 rounded-lg border border-white/10 text-[7px] font-black uppercase text-center flex flex-col items-center gap-1">
                  <ShieldCheck size={12} className="text-orange-500" /> Secure Portal
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}