"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ================= BREAKING NEWS ================= */
const breakingNews =
  "📢 ग्राम सभा बैठक 18 अगस्त को आयोजित होगी | 💧 जल जीवन मिशन कार्य प्रगति पर | 🏗️ नई सड़क परियोजना स्वीकृत | 🌾 कृषि प्रशिक्षण शिविर आयोजित";

/* ================= TOP NEWS ================= */
const topNews = [
  {
    type: "video",
    src: "/images/int1.mp4",
    title: "ग्राम पंचायत में विकास कार्यों की समीक्षा बैठक",
    date: "10 अगस्त 2025",
  },
  {
    type: "image",
    src: "/images/eco1.jpg",
    title: "स्वच्छ भारत अभियान के अंतर्गत विशेष सफाई कार्यक्रम",
    date: "08 अगस्त 2025",
  },
  {
    type: "video",
    src: "/images/int2.mp4",
    title: "कृषि विभाग द्वारा किसानों के लिए प्रशिक्षण",
    date: "05 अगस्त 2025",
  },
];

export default function NewsPage() {
  const [active, setActive] = useState(0);

  /* AUTO SLIDE TOP NEWS */
  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % topNews.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="bg-slate-50">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">समाचार एवं सूचनाएँ</h1>
          <p className="opacity-90">
            Gram Panchayat Longwala – News & Announcements
          </p>
        </div>
      </section>

      {/* ================= BREAKING NEWS TICKER ================= */}
      <section className="bg-yellow-100 border-y border-yellow-300 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee py-3 px-4 text-sm font-semibold text-yellow-900">
          {breakingNews}
        </div>
      </section>

      {/* ================= TOP NEWS SLIDER ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            प्रमुख समाचार
          </h2>

          <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
            {topNews.map((n, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  i === active ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {n.type === "video" ? (
                  <video
                    src={n.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={n.src}
                    alt={n.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm opacity-80">{n.date}</p>
                  <h3 className="text-2xl font-bold max-w-2xl">
                    {n.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex gap-3 justify-center mt-6">
            {topNews.map((_, i) => (
              <span
                key={i}
                onClick={() => setActive(i)}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  i === active ? "bg-blue-900" : "bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= LATEST NEWS GRID ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            नवीनतम अपडेट
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "मनरेगा के अंतर्गत नए कार्य प्रारंभ",
                date: "04 अगस्त 2025",
                image: "/images/eco2.jpg",
              },
              {
                title: "विद्यालय में नामांकन अभियान",
                date: "02 अगस्त 2025",
                image: "/images/eco3.jpg",
              },
              {
                title: "स्वास्थ्य विभाग द्वारा शिविर",
                date: "01 अगस्त 2025",
                image: "/images/eco1.jpg",
              },
              {
                title: "पेयजल आपूर्ति व्यवस्था सुदृढ़",
                date: "30 जुलाई 2025",
                image: "/images/eco2.jpg",
              },
              {
                title: "महिला स्वयं सहायता समूह बैठक",
                date: "28 जुलाई 2025",
                image: "/images/eco3.jpg",
              },
              {
                title: "डिजिटल सेवा केंद्र प्रारंभ",
                date: "25 जुलाई 2025",
                image: "/images/eco1.jpg",
              },
            ].map((n, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition animate-fadeUp"
              >
                <div className="relative h-48">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 mb-1">{n.date}</p>
                  <h3 className="font-semibold text-gray-800 leading-snug">
                    {n.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OFFICIAL NOTE ================= */}
      <section className="bg-blue-900 text-white py-14">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm leading-relaxed">
          <p>
            यह समाचार अनुभाग ग्राम पंचायत लॉंगवाला द्वारा
            जारी आधिकारिक सूचनाओं एवं घोषणाओं को
            डिजिटल माध्यम से प्रस्तुत करता है।
          </p>
        </div>
      </section>

    </main>
  );
}
