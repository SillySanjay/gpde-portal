"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Geography', href: '/geography' },
  { name: 'History', href: '/history' },
  { name: 'Economy', href: '/economy' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b-2 border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden p-2 -ml-2 text-blue-900 hover:bg-slate-100 rounded-md"
          >
            <Menu size={24} />
          </button>
          
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-900 rounded-lg flex items-center justify-center font-black text-white shadow-lg shrink-0">GP</div>
            <div>
              <h1 className="text-lg md:text-xl font-black tracking-tighter uppercase leading-none text-blue-900">Punsari</h1>
              <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-[2px] text-orange-600">Gram Panchayat</p>
            </div>
          </Link>
        </div>
        
        <ul className="hidden lg:flex gap-8 text-[13px] font-black uppercase tracking-widest text-slate-800">
          {navLinks.map((item) => (
            <li key={item.name} className="relative">
              <Link 
                href={item.href}
                className={`transition-colors pb-1 border-b-2 ${
                  pathname === item.href 
                    ? "text-blue-900 border-orange-500" 
                    : "border-transparent hover:text-blue-900 hover:border-orange-500"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <div className="text-right">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Taluka: Himmatnagar</p>
            <p className="text-xs font-bold text-slate-600 italic">"The No.1 Village in India"</p>
          </div>
        </div>
      </div>

      {/* MOBILE SLIDE-IN DRAWER */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[120] shadow-2xl flex flex-col lg:hidden"
            >
              <div className="p-6 border-b flex items-center justify-between bg-blue-900 text-white">
                <div className="font-black uppercase tracking-widest text-sm">Navigation Menu</div>
                <button onClick={() => setIsDrawerOpen(false)} className="p-1 hover:bg-white/10 rounded-full">
                  <X size={24}/>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                {navLinks.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 font-black uppercase text-xs tracking-widest rounded-lg transition-all ${
                        pathname === item.href ? "bg-blue-50 text-blue-900" : "text-slate-700 hover:bg-slate-50 hover:text-blue-900"
                    }`}
                  >
                    {item.name}
                    <ArrowRight size={14} className="text-slate-300" />
                  </Link>
                ))}
              </div>
              <div className="p-6 border-t bg-slate-50">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Official Contact</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[11px] font-bold text-slate-600">
                    <Phone size={14} className="text-orange-500" /> +91 2772 284xxx
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}