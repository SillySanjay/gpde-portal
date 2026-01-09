"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Globe, CloudSun, Droplets, ChevronRight, Info } from "lucide-react";

export default function GeographyPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-blue-100">
      
      {/* 1. OFFICIAL PAGE HEADER */}
      <section className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-70 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={10} />
            <span>Geography & Terrain</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">
            Geographical <span className="text-orange-500">Profile</span>
          </h1>
          <p className="text-blue-100 mt-2 text-sm font-medium uppercase tracking-[3px]">
            Sabarkantha District | Government of Gujarat
          </p>
        </div>
      </section>

      {/* 2. ADMINISTRATIVE LOCATION DATA */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2 border-b pb-4">
              <MapPin size={20} className="text-orange-600" /> Physical Location & Borders
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 text-justify">
              Punsari Gram Panchayat is situated in the north-western part of India, within the Sabarkantha district of Gujarat. It is located approximately 82 kilometers north-east of Ahmedabad, the state&apos;s largest commercial hub. The village covers a total geographical area of <strong>1.5 square km</strong> and is characterized by its historical settlement on a plateau region, originally organized around a central &quot;Basti.&quot;
            </p>

            <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">Administrative Metrics</h3>
            <div className="overflow-hidden border border-slate-100 rounded">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="p-4 bg-slate-50 font-bold w-1/3">State</td><td className="p-4 text-slate-600">Gujarat</td></tr>
                  <tr><td className="p-4 bg-slate-50 font-bold">District</td><td className="p-4 text-slate-600">Sabarkantha</td></tr>
                  <tr><td className="p-4 bg-slate-50 font-bold">Taluka / Block</td><td className="p-4 text-slate-600">Himmatnagar</td></tr>
                  <tr><td className="p-4 bg-slate-50 font-bold">Nearest City</td><td className="p-4 text-slate-600">Himmatnagar (10 KM)</td></tr>
                  <tr><td className="p-4 bg-slate-50 font-bold">Total Area</td><td className="p-4 text-slate-600">1240 Hectares (approx 1.5 sq km)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Side Summary */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8">
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-orange-500 mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
              <Info size={14}/> Connectivity Status
            </h4>
            <ul className="space-y-6">
              <li>
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-tighter">Railway Access</p>
                <p className="text-sm font-medium">Nearest Station: Himmatnagar (10 KM)</p>
              </li>
              <li>
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-tighter">Air Connectivity</p>
                <p className="text-sm font-medium">Ahmedabad International Airport (82 KM)</p>
              </li>
              <li>
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-tighter">Road Network</p>
                <p className="text-sm font-medium italic">100% Concrete internal roads connecting main district highway.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. CLIMATE & SOIL PROFILE */}
      <section className="bg-white border-y border-slate-200 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Soil Section */}
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-8 flex items-center gap-2 uppercase italic tracking-tight">
              <Droplets size={20} className="text-blue-600" /> Soil & Land Assets
            </h2>
            <div className="bg-slate-50 p-8 border border-slate-200 mb-8">
              <p className="text-sm text-slate-600 leading-relaxed italic">
                The land in Punsari is predominantly <strong>Sandy Loam</strong>. This soil type has historically provided a high potential for fertility but required significant water management due to the arid nature of the Sabarkantha region.
              </p>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
              Over the last decade, the soil health has been revolutionized by:
            </p>
            <ul className="space-y-4 text-sm font-bold text-blue-900 uppercase tracking-tighter">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full" /> Implementation of 73 Recharge Wells</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full" /> Scientific canal irrigation management</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full" /> ARTICLE 243 G aligned grazing land management</li>
            </ul>
          </div>

          {/* Climate Table */}
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-8 flex items-center gap-2 uppercase italic tracking-tight">
              <CloudSun size={20} className="text-orange-500" /> Climate Profile
            </h2>
            <div className="border border-slate-100 rounded overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-blue-900 text-white text-[10px] uppercase font-black tracking-widest">
                  <tr><th className="p-4">Condition</th><th className="p-4 text-right">Data Metric</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="p-4 font-bold text-slate-500 uppercase text-[11px]">Climate Type</td><td className="p-4 text-right font-black italic">Arid / Semi-Arid</td></tr>
                  <tr><td className="p-4 font-bold text-slate-500 uppercase text-[11px]">Summer High (Peak)</td><td className="p-4 text-right font-black italic">40°C - 45°C</td></tr>
                  <tr><td className="p-4 font-bold text-slate-500 uppercase text-[11px]">Winter Low</td><td className="p-4 text-right font-black italic">4°C</td></tr>
                  <tr><td className="p-4 font-bold text-slate-500 uppercase text-[11px]">Average Rainfall</td><td className="p-4 text-right font-black italic">250 - 300 mm</td></tr>
                  <tr><td className="p-4 font-bold text-slate-500 uppercase text-[11px]">Primary Rain Season</td><td className="p-4 text-right font-black italic text-orange-600">July — September</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TERRAIN PHOTOGRAPHY (Simple Government Style) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold text-blue-900 mb-12 uppercase tracking-tighter italic border-b border-slate-200 pb-4">
          Institutional Terrain Survey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="relative h-64 border-4 border-white shadow-md rounded-sm overflow-hidden">
               <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.42_PM_uijm9a.jpg" fill className="object-cover" alt="Land Area"/>
            </div>
            <p className="text-[10px] font-black uppercase text-slate-400 text-center tracking-widest italic">Plateau Region Overview</p>
          </div>
          
          <div className="space-y-4">
            <div className="relative h-64 border-4 border-white shadow-md rounded-sm overflow-hidden">
               <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.45_PM_1_pua2kn.jpg" fill className="object-cover" alt="Soil Samples"/>
            </div>
            <p className="text-[10px] font-black uppercase text-slate-400 text-center tracking-widest italic">Soil Fertility & Arid Landscape</p>
          </div>

          <div className="space-y-4">
            <div className="relative h-64 border-4 border-white shadow-md rounded-sm overflow-hidden">
               <Image src="https://res.cloudinary.com/dpccapers/image/upload/v1767774287/WhatsApp_Image_2026-01-07_at_12.47.49_PM_upnjn6.jpg" fill className="object-cover" alt="Irrigation Area"/>
            </div>
            <p className="text-[10px] font-black uppercase text-slate-400 text-center tracking-widest italic">Irrigation Channels & Catchment Area</p>
          </div>
        </div>
      </section>

      {/* 5. AGRARIAN OUTPUT SECTION */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
         <div className="bg-white border-t-4 border-blue-900 p-10 shadow-sm text-center">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest mb-6">Agrarian Landscape Profile</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {["Wheat", "Cotton", "Mustard", "Bajra"].map((crop, i) => (
                 <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded font-black text-xs text-blue-900 uppercase tracking-tighter">
                   {crop} (गेहूँ)
                 </div>
               ))}
            </div>
            <p className="mt-8 text-xs text-slate-400 italic leading-relaxed">
              The introduction of canal-based irrigation and modern agricultural extension (NMAET) has enabled the village to become a leader in local crop yields within the Himmatnagar Taluka.
            </p>
         </div>
      </section>

    </main>
  );
}