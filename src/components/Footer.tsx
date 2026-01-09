import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 px-6 border-t-8 border-blue-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="md:col-span-2">
          <h3 className="text-white text-3xl font-black mb-8 uppercase tracking-tighter">Punsari <span className="text-orange-500">Panchayat</span></h3>
          <p className="text-sm leading-relaxed max-w-md">
            The Punsari Gram Panchayat is a globally recognized model for institutional excellence. 
            Committed to providing urban facilities to rural areas while preserving the village soul.
          </p>
          {/* Social Media Buttons */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all text-white"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all text-white"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all text-white"><Youtube size={18} /></a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all text-white"><Instagram size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase text-xs tracking-widest border-b border-orange-500 pb-2 inline-block">Govt Links</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
            <li><a href="#" className="hover:text-white transition-colors">E-Gram Swaraj</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Digital Gujarat</a></li>
            <li><a href="#" className="hover:text-white transition-colors">MGNREGA Portal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase text-xs tracking-widest border-b border-orange-500 pb-2 inline-block">Contact</h4>
          <div className="space-y-6 text-sm">
            <div className="flex gap-3"><MapPin size={16} className="text-orange-600 shrink-0" /> <span>Panchayat Bhavan, Punsari, Himmatnagar, Sabarkanta, Gujarat - 383001</span></div>
            <div className="flex gap-3"><Phone size={16} className="text-orange-600 shrink-0" /> <span>+91-154-2244XXX</span></div>
            <div className="flex gap-3"><Mail size={16} className="text-orange-600 shrink-0" /> <span>support@punsari.gov.in</span></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-10 text-center">
        <p className="text-[10px] font-black uppercase tracking-[4px] opacity-40">
          © 2026 Punsari Gram Panchayat | Case Study Portal by NIRDPR
        </p>
      </div>
    </footer>
  );
}