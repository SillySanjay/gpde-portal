"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    type: "video",
    src: "/images/video.mp4",
    title: "ग्राम पंचायत लॉंगवाला",
    subtitle: "पारदर्शी प्रशासन • डिजिटल सेवाएँ • ग्रामीण विकास",
  },
  {
    type: "image",
    src: "/images/eco1.jpg",
    title: "ग्रामीण जीवन एवं संस्कृति",
    subtitle: "परंपरा • सहभागिता • विकास",
  },
];

export default function HomePage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="bg-slate-50">

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] overflow-hidden bg-black">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === active ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {s.type === "video" ? (
              <video
                src={s.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image src={s.src} alt="" fill className="object-cover" />
            )}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
              {heroSlides[active].title}
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl opacity-90">
              {heroSlides[active].subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              कार्यालय परिचय
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              यह डिजिटल पोर्टल ग्राम पंचायत / कार्यालय से संबंधित
              आधिकारिक सूचनाएँ, योजनाएँ, सेवाएँ एवं विकास कार्यों
              को नागरिकों तक पारदर्शी रूप से पहुँचाने के उद्देश्य
              से विकसित किया गया है।
            </p>
            <p className="text-gray-700 leading-relaxed">
              इस वेबसाइट के माध्यम से नागरिकों को प्रशासन,
              योजनाओं एवं संपर्क विवरण की जानकारी
              एक ही मंच पर उपलब्ध कराई जाती है।
            </p>
          </div>

          <Image
            src="/images/eco2.jpg"
            alt=""
            width={600}
            height={420}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            नागरिक सेवाएँ
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "प्रमाण पत्र सेवाएँ",
              "सरकारी योजनाएँ",
              "शिकायत निवारण",
              "विकास कार्य",
            ].map((s) => (
              <div
                key={s}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-bold text-gray-800 mb-2">{s}</h3>
                <p className="text-sm text-gray-600">
                  पंचायत / कार्यालय स्तर पर उपलब्ध सेवाएँ
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY STATS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            मुख्य आँकड़े
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-50 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-900">2500+</h3>
              <p className="text-sm text-gray-600">जनसंख्या</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-900">650+</h3>
              <p className="text-sm text-gray-600">परिवार</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-900">85%</h3>
              <p className="text-sm text-gray-600">साक्षरता दर</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-900">2200+</h3>
              <p className="text-sm text-gray-600">हेक्टेयर कृषि भूमि</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK LINKS ================= */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            त्वरित लिंक
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/geography" className="px-6 py-3 bg-blue-900 text-white rounded">
              Geography
            </Link>
            <Link href="/economy" className="px-6 py-3 bg-blue-900 text-white rounded">
              Economy
            </Link>
            <Link href="/news" className="px-6 py-3 bg-blue-900 text-white rounded">
              News
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-blue-900 text-white rounded">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <section className="bg-blue-900 text-white py-14">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm">
          <p>
            यह वेबसाइट एक स्थिर (Static) डिजिटल पोर्टल टेम्पलेट है,
            जो कार्यालयीन प्रस्तुति एवं डेमो हेतु विकसित किया गया है।
          </p>
        </div>
      </section>

    </main>
  );
}
