"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* =========================================================
   HOME PAGE – GOVERNMENT STYLE | REFINED & RESPONSIVE
   ========================================================= */

const heroSlides = [
  "/images/ss1.png",
  "/images/ss2.png",
  "/images/ss3.png",
  "/images/ss4.png",
  "/images/ss5.png",
];

const stats = [
  { label: "कुल जनसंख्या", value: "5,000+" },
  { label: "कुल वार्ड", value: "11" },
  { label: "साक्षरता दर", value: "78%" },
  { label: "क्षेत्रफल (हे.)", value: "1240" },
];

export default function HomePage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="bg-slate-50 overflow-x-hidden font-sans">
      
      {/* ================= NEWS TICKER ================= */}
      <div className="bg-orange-600 text-white py-2 overflow-hidden whitespace-nowrap relative z-30">
        <div className="flex animate-marquee">
          <span className="mx-4 text-sm md:text-base font-medium">
            सूचना: ग्राम सभा की अगली बैठक 15 जनवरी को पंचायत भवन में आयोजित की जाएगी।
          </span>
          <span className="mx-4 text-sm md:text-base font-medium">
            • प्रधानमंत्री आवास योजना की नई सूची जारी हो चुकी है।
          </span>
          <span className="mx-4 text-sm md:text-base font-medium">
            • स्वच्छ भारत अभियान के तहत कचरा प्रबंधन में सहयोग करें।
          </span>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              fill
              priority={index === 0}
              alt={`Slide ${index}`}
              className="object-cover"
            />
            {/* Darker gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent md:from-blue-900/60" />
          </div>
        ))}

        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-1 bg-orange-500 text-xs font-bold tracking-widest uppercase rounded mb-4">
              आधिकारिक पोर्टल
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl">
              ग्राम पंचायत <br />
              <span className="text-orange-400">लॉंगवाला</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-100 mb-8 leading-relaxed drop-shadow-md">
              विकास, पारदर्शिता एवं सुशासन के प्रति समर्पित। हम मिलकर बना रहे हैं एक आदर्श और डिजिटल ग्राम पंचायत।
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all shadow-lg">
                विकास कार्य देखें
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
                संपर्क करें
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 right-10 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 transition-all rounded-full ${
                active === i ? "w-10 bg-orange-500" : "w-4 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= QUICK STATS ================= */}
      <section className="relative z-30 -mt-12 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl text-center border-b-4 border-blue-900 transform hover:-translate-y-1 transition-transform">
              <div className="text-2xl md:text-4xl font-black text-blue-900 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">स्वागतम</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              ग्राम पंचायत का परिचय एवं <span className="text-blue-700">उद्देश्य</span>
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-justify">
              <p>
                ग्राम पंचायत लॉंगवाला राजस्थान के श्रीगंगानगर जिले की एक प्रमुख पंचायत है। यह डिजिटल पोर्टल नागरिकों को सरकारी योजनाओं, विकास कार्यों और प्रशासनिक निर्णयों से सीधे जोड़ने का एक सशक्त माध्यम है।
              </p>
              <p>
                हमारा लक्ष्य 100% साक्षरता, आधुनिक कृषि तकनीक, और उन्नत स्वास्थ्य सुविधाएँ उपलब्ध कराना है। पंचायत भारतीय संविधान के 73वें संशोधन के अनुरूप पारदर्शिता और जवाबदेही के साथ कार्य कर रही है।
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-100 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/ss1.png" fill alt="About Panchayat" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= COLLAGE GRID ================= */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900">विकास कार्यों की झलक</h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative aspect-square md:aspect-auto md:h-full rounded-3xl overflow-hidden shadow-lg">
               <Image src="/images/ss1.png" fill alt="Work 1" className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
               <Image src="/images/ss2.png" fill alt="Work 2" className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
               <Image src="/images/ss3.png" fill alt="Work 3" className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
               <Image src="/images/ss4.png" fill alt="Work 4" className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
               <Image src="/images/ss5.png" fill alt="Work 5" className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE SECTIONS ================= */}
      <div className="space-y-0">
        {[
          {
            title: "सड़क एवं आधारभूत संरचना",
            img: "/images/ss2.png",
            color: "bg-white",
            text: "पंचायत क्षेत्र में पक्की सड़कों और संपर्क मार्गों का जाल बिछाया गया है। सार्वजनिक भवनों एवं यातायात सुविधाओं के आधुनिकरण से व्यापार और आवागमन सुलभ हुआ है।"
          },
          {
            title: "कृषि एवं सिंचाई विकास",
            img: "/images/ss3.png",
            color: "bg-slate-50",
            text: "नहर आधारित सिंचाई व्यवस्था और मृदा परीक्षण केंद्रों के माध्यम से हम किसानों की आय दोगुनी करने के लक्ष्य पर कार्य कर रहे हैं।"
          },
          {
            title: "स्वच्छता एवं पेयजल व्यवस्था",
            img: "/images/ss4.png",
            color: "bg-white",
            text: "स्वच्छ भारत मिशन के तहत कचरा प्रबंधन और हर घर नल से जल पहुँचाने की योजना को सफलतापूर्वक लागू किया गया है।"
          }
        ].map((item, idx) => (
          <section key={idx} className={`py-20 ${item.color}`}>
            <div className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
               <div className={`relative aspect-square max-w-md mx-auto w-full ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <Image src={item.img} fill alt={item.title} className="object-cover rounded-3xl shadow-2xl border-8 border-white" />
               </div>
               <div className={idx % 2 !== 0 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-black text-blue-900/10">0{idx + 1}</span>
                    <h3 className="text-3xl font-bold text-blue-900">{item.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{item.text}</p>
                  <button className="text-blue-700 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    विस्तार से पढ़ें <span>→</span>
                  </button>
               </div>
            </div>
          </section>
        ))}
      </div>

      {/* ================= UPCOMING PLANS ================= */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="white" fill="transparent" strokeWidth="2"/></svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-orange-400 font-bold uppercase tracking-widest mb-2">भविष्य का विजन</h2>
              <h3 className="text-4xl font-bold">आगामी विकास योजनाएँ</h3>
            </div>
            <p className="max-w-md text-blue-100">हम आने वाले समय में तकनीक और पर्यावरण के संतुलन के साथ पंचायत का कायाकल्प करने जा रहे हैं।</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "सौर ऊर्जा", desc: "पूरे गांव में सौर ऊर्जा स्ट्रीट लाइट लगाना।" },
              { title: "डिजिटल केंद्र", desc: "पूरी तरह से ऑनलाइन सेवा केंद्र का विस्तार।" },
              { title: "कौशल विकास", desc: "युवाओं के लिए फ्री कंप्यूटर एवं सिलाई केंद्र।" },
            ].map((plan, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-6 font-bold text-xl">{i+1}</div>
                <h4 className="text-xl font-bold mb-3">{plan.title}</h4>
                <p className="text-blue-100">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="text-white text-2xl font-bold mb-6">लॉंगवाला पंचायत</h4>
            <p className="mb-6 leading-relaxed">श्रीगंगानगर, राजस्थान। <br /> नागरिकों के बेहतर भविष्य के लिए प्रतिबद्ध प्रशासनिक इकाई।</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all cursor-pointer">f</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all cursor-pointer">t</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all cursor-pointer">i</div>
            </div>
          </div>
          <div>
            <h4 className="text-white text-xl font-bold mb-6">त्वरित लिंक</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-orange-500 transition-colors">महत्वपूर्ण दस्तावेज</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">निविदाएं (Tenders)</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">सरकारी योजनाएं</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">शिकायत पंजीकरण</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xl font-bold mb-6">संपर्क करें</h4>
            <p className="mb-2">📍 पंचायत भवन, लॉंगवाला</p>
            <p className="mb-2">📞 +91 00000 00000</p>
            <p className="mb-2">✉️ info@longwala.gov.in</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 text-center text-sm">
          <p>© 2024 ग्राम पंचायत लॉंगवाला. सर्वाधिकार सुरक्षित। यह एक डेमो पोर्टल है।</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </main>
  );
}