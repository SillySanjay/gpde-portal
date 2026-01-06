"use client";

import { useEffect, useState } from "react";

const topNews = [
  {
    title: "ग्राम सभा बैठक का आयोजन",
    desc: "ग्राम पंचायत लॉंगवाला में आगामी ग्राम सभा बैठक का आयोजन किया जाएगा।",
    date: "12 अगस्त 2024",
  },
  {
    title: "मनरेगा के नए कार्य स्वीकृत",
    desc: "मनरेगा अंतर्गत नए विकास कार्यों को स्वीकृति प्रदान की गई है।",
    date: "05 अगस्त 2024",
  },
  {
    title: "स्वच्छता अभियान प्रारंभ",
    desc: "पूरे ग्राम में स्वच्छता अभियान चलाया जाएगा।",
    date: "01 अगस्त 2024",
  },
];

export default function NewsPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % topNews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* HERO */}
      <section className="bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            समाचार एवं सूचनाएँ
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            News, Notices & Announcements – Gram Panchayat Longwala
          </p>
        </div>
      </section>

      {/* TOP NEWS SLIDER */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-6">
            प्रमुख समाचार
          </h2>

          <div className="relative bg-indigo-50 p-5 sm:p-8 rounded-lg shadow">
            <div className="mb-2 text-xs sm:text-sm text-gray-500">
              {topNews[index].date}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-indigo-900 mb-2">
              {topNews[index].title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              {topNews[index].desc}
            </p>

            {/* SLIDER DOTS */}
            <div className="flex gap-3 mt-6">
              {topNews.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-3 w-3 rounded-full cursor-pointer transition ${
                    i === index ? "bg-indigo-900" : "bg-indigo-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOTICE BOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-8">
          सूचना पट्ट (Notice Board)
        </h3>

        <div className="space-y-4">
          {[
            {
              title: "ग्राम सभा बैठक सूचना",
              date: "12 अगस्त 2024",
              desc: "ग्राम सभा की बैठक पंचायत भवन में आयोजित की जाएगी।",
            },
            {
              title: "मनरेगा कार्य प्रारंभ",
              date: "05 अगस्त 2024",
              desc: "मनरेगा अंतर्गत नए कार्यों की शुरुआत की गई है।",
            },
            {
              title: "स्वच्छता अभियान",
              date: "01 अगस्त 2024",
              desc: "सभी ग्रामवासियों से अभियान में भाग लेने का अनुरोध।",
            },
          ].map((n, i) => (
            <div
              key={i}
              className="bg-white border-l-4 border-indigo-900 p-5 sm:p-6 shadow rounded"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <h4 className="font-bold text-gray-800">
                  {n.title}
                </h4>
                <span className="text-xs sm:text-sm text-gray-500">
                  {n.date}
                </span>
              </div>
              <p className="text-sm text-gray-700">{n.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFICIAL CIRCULARS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-8">
            परिपत्र एवं आदेश
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-[650px] w-full border text-sm">
              <thead className="bg-indigo-900 text-white">
                <tr>
                  <th className="p-4 text-left">क्रमांक</th>
                  <th className="p-4 text-left">विषय</th>
                  <th className="p-4 text-left">जारी तिथि</th>
                  <th className="p-4 text-left">स्थिति</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">01</td>
                  <td className="p-4">प्रधानमंत्री आवास योजना</td>
                  <td className="p-4">28 जुलाई 2024</td>
                  <td className="p-4 text-green-600 font-semibold">सक्रिय</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">02</td>
                  <td className="p-4">कृषि बीज वितरण</td>
                  <td className="p-4">22 जुलाई 2024</td>
                  <td className="p-4 text-green-600 font-semibold">सक्रिय</td>
                </tr>
                <tr>
                  <td className="p-4">03</td>
                  <td className="p-4">पेंशन सत्यापन</td>
                  <td className="p-4">15 जुलाई 2024</td>
                  <td className="p-4 text-red-600 font-semibold">समाप्त</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 text-center">
          <p className="max-w-3xl mx-auto text-sm sm:text-base">
            सभी समाचार एवं सूचनाएँ ग्राम पंचायत लॉंगवाला द्वारा आधिकारिक रूप से जारी की जाती हैं।
          </p>
        </div>
      </section>

    </main>
  );
}
