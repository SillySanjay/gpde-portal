"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* =========================================================
   HOME PAGE – GOVERNMENT STYLE | CONTENT HEAVY | RESPONSIVE
   ========================================================= */

const heroSlides = [
  "/images/ss1.png",
  "/images/ss2.png",
  "/images/ss3.png",
  "/images/ss4.png",
  "/images/ss5.png",
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
    <main className="bg-slate-50 overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] bg-black">
        {/* Carousel of images instead of videos for better control and beauty */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <Image
              key={index}
              src={slide}
              fill
              alt={`Hero slide ${index + 1}`}
              className={`object-cover transition-opacity duration-1000 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/50" /> {/* Adjusted overlay for better text visibility */}

        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === active ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              ग्राम पंचायत लॉंगवाला
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed drop-shadow-md">
              आपके विश्वास, सहभागिता एवं मत की शक्ति से ग्राम पंचायत लॉंगवाला
              निरंतर विकास, पारदर्शी प्रशासन एवं डिजिटल गवर्नेंस के पथ पर
              अग्रसर है।
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            ग्राम पंचायत का परिचय
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            ग्राम पंचायत लॉंगवाला राजस्थान राज्य के श्रीगंगानगर जिले में स्थित
            एक सुदृढ़, संगठित एवं विकासोन्मुख ग्रामीण प्रशासनिक इकाई है।
            पंचायत भारतीय संविधान के 73वें संशोधन के अंतर्गत स्थापित
            त्रिस्तरीय पंचायती राज व्यवस्था का अभिन्न अंग है।
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            पंचायत का मुख्य उद्देश्य ग्रामीण नागरिकों को बेहतर
            आधारभूत संरचना, शिक्षा, स्वास्थ्य, स्वच्छता, पेयजल,
            सड़क एवं रोजगार के अवसर प्रदान करना है।
            प्रशासनिक पारदर्शिता एवं नागरिक सहभागिता
            पंचायत की कार्यशैली का मूल आधार है।
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            यह डिजिटल पोर्टल पंचायत के विकास कार्यों,
            योजनाओं, उपलब्धियों एवं भावी दृष्टिकोण को
            नागरिकों के समक्ष प्रस्तुत करने हेतु
            एक आधिकारिक स्थिर (Static) मंच है।
          </p>
        </div>
      </section>

      {/* ================= COLLAGE ================= */}
      <section className="bg-slate-100 py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-14 text-center md:text-left">
            विकास कार्यों की झलक
          </h2>

          {/* Enhanced grid for elegance: Adjusted for better visual balance, added hover effects, and ensured responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[700px]">
            {/* Large image on left/top */}
            <div className="col-span-1 md:col-span-6 row-span-1 md:row-span-6 relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <Image
                src="/images/ss1.png"
                fill
                alt="Development work 1"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Smaller images in a 2x2 grid on right/bottom */}
            <div className="col-span-1 md:col-span-6 grid grid-cols-2 gap-4">
              {["ss2", "ss3", "ss4", "ss5"].map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 aspect-square"
                >
                  <Image
                    src={`/images/${img}.png`}
                    fill
                    alt={`Development work ${i + 2}`}
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= DEVELOPMENT SECTIONS ================= */}
      {[
        {
          title: "सड़क एवं आधारभूत संरचना",
          img: "/images/ss2.png",
          text: `पंचायत क्षेत्र में पक्की सड़कों, संपर्क मार्गों,
          नालियों, सार्वजनिक भवनों एवं यातायात सुविधाओं
          का व्यापक स्तर पर विकास किया गया है।
          इन परियोजनाओं के माध्यम से ग्राम को
          जिला मुख्यालय एवं समीपवर्ती क्षेत्रों से
          बेहतर रूप से जोड़ा गया है।
          इससे न केवल आवागमन सुलभ हुआ है,
          बल्कि सामाजिक-आर्थिक गतिविधियों को
          भी नई गति प्राप्त हुई है।`,
        },
        {
          title: "कृषि एवं सिंचाई विकास",
          img: "/images/ss3.png",
          text: `कृषि ग्राम पंचायत लॉंगवाला की अर्थव्यवस्था का
          प्रमुख आधार है।
          नहर आधारित सिंचाई व्यवस्था, जल संरक्षण,
          मृदा परीक्षण एवं आधुनिक कृषि तकनीकों के
          माध्यम से उत्पादन क्षमता में
          उल्लेखनीय वृद्धि हुई है।
          किसानों को सरकारी योजनाओं का
          समयबद्ध लाभ प्रदान किया जा रहा है।`,
        },
        {
          title: "स्वच्छता एवं पेयजल व्यवस्था",
          img: "/images/ss4.png",
          text: `स्वच्छ भारत मिशन के अंतर्गत
          शौचालय निर्माण, कचरा प्रबंधन,
          जल शुद्धिकरण एवं
          स्वच्छता जागरूकता अभियानों
          का सफल संचालन किया गया है।
          प्रत्येक परिवार तक
          सुरक्षित पेयजल पहुँचाना
          पंचायत की सर्वोच्च प्राथमिकताओं में शामिल है।`,
        },
        {
          title: "डिजिटल एवं सामाजिक सशक्तिकरण",
          img: "/images/ss5.png",
          text: `डिजिटल सेवाओं के माध्यम से
          प्रमाण पत्र, शिकायत निवारण,
          सूचना प्रसारण एवं योजनाओं की जानकारी
          नागरिकों तक पहुँचाई जा रही है।
          महिला स्वयं सहायता समूह,
          युवा कौशल विकास एवं
          सामाजिक समावेशन कार्यक्रमों
          को विशेष प्राथमिकता दी जा रही है।`,
        },
      ].map((sec, i) => (
        <section key={i} className="bg-white py-28">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start"> {/* Changed items-center to items-start for better alignment */}
            {i % 2 === 0 ? (
              <>
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                    {sec.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {sec.text}
                  </p>
                </div>
                <div className="order-1 md:order-2 aspect-square relative rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"> {/* Added aspect-square and relative for perfect square image */}
                  <Image
                    src={sec.img}
                    fill
                    alt={sec.title}
                    className="object-cover rounded-xl"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="order-1 aspect-square relative rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"> {/* Added aspect-square and relative for perfect square image */}
                  <Image
                    src={sec.img}
                    fill
                    alt={sec.title}
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="order-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                    {sec.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {sec.text}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      {/* ================= UPCOMING ================= */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            आगामी विकास योजनाएँ
          </h2>

          <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
            <li>सौर ऊर्जा आधारित स्ट्रीट लाइट परियोजना</li>
            <li>डिजिटल सेवा केंद्र का विस्तार</li>
            <li>जल संरक्षण एवं वर्षा जल संचयन</li>
            <li>कौशल विकास एवं स्वरोजगार प्रशिक्षण</li>
            <li>शिक्षा एवं स्वास्थ्य सुविधाओं का सुदृढ़ीकरण</li>
          </ul>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm">
          यह वेबसाइट एक सरकारी-शैली का स्थिर डिजिटल पोर्टल टेम्पलेट है,
          जिसे कार्यालयीन प्रस्तुति एवं डेमो उद्देश्य हेतु विकसित किया गया है।
        </div>
      </section>
    </main>
  );
}