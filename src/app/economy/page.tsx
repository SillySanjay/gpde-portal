"use client";

import Image from "next/image";

export default function EconomyPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* HERO */}
      <section className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            ग्राम पंचायत की अर्थव्यवस्था
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
            कृषि, पशुपालन एवं ग्रामीण उद्योगों पर आधारित ग्राम पंचायत लॉंगवाला की आर्थिक संरचना
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-6">
          आर्थिक परिचय
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
          ग्राम पंचायत लॉंगवाला की अर्थव्यवस्था मुख्यतः कृषि आधारित है।
          यहाँ की अधिकांश जनसंख्या खेती, पशुपालन एवं इससे संबंधित गतिविधियों पर निर्भर है।
        </p>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          सरकारी योजनाओं, सिंचाई परियोजनाओं एवं आधुनिक कृषि तकनीकों ने
          ग्रामीण आय में निरंतर वृद्धि की है।
        </p>
      </section>

      {/* IMAGES */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-8">
            स्थानीय आर्थिक गतिविधियाँ
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Image src="/images/eco1.jpg" width={400} height={500} alt="" className="rounded-lg shadow w-full h-auto" />
            <Image src="/images/eco2.jpg" width={400} height={500} alt="" className="rounded-lg shadow w-full h-auto" />
            <Image src="/images/eco3.jpg" width={400} height={500} alt="" className="rounded-lg shadow w-full h-auto" />
            <Image src="/images/eco1.jpg" width={400} height={500} alt="" className="rounded-lg shadow w-full h-auto" />
          </div>
        </div>
      </section>

      {/* AGRICULTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-6">
          कृषि व्यवस्था
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-3 text-sm sm:text-base">
          <li>मुख्य फसलें: गेहूं, कपास, सरसों, चना</li>
          <li>सिंचाई स्रोत: नहरें एवं ट्यूबवेल</li>
          <li>उन्नत बीज एवं आधुनिक कृषि यंत्रों का प्रयोग</li>
          <li>सरकारी कृषि योजनाओं का सक्रिय क्रियान्वयन</li>
        </ul>
      </section>

      {/* LIVESTOCK */}
      <section className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-6">
            पशुपालन एवं दुग्ध उत्पादन
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
            पशुपालन ग्राम पंचायत की अर्थव्यवस्था का दूसरा महत्वपूर्ण स्तंभ है।
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "दुग्ध सहकारी समितियाँ",
              "पशु चिकित्सा सेवाएँ",
              "टीकाकरण कार्यक्रम",
            ].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-green-900 mb-2">{item}</h3>
                <p className="text-sm text-gray-600">
                  पशुपालकों को बेहतर सुविधाएँ एवं तकनीकी सहायता प्रदान की जाती है।
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPLOYMENT TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-6">
          रोजगार के स्रोत
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full bg-white shadow rounded-lg">
            <thead className="bg-green-900 text-white">
              <tr>
                <th className="p-4 text-left">क्षेत्र</th>
                <th className="p-4 text-left">रोजगार प्रतिशत</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b"><td className="p-4">कृषि</td><td className="p-4">55%</td></tr>
              <tr className="border-b"><td className="p-4">पशुपालन</td><td className="p-4">20%</td></tr>
              <tr className="border-b"><td className="p-4">मनरेगा</td><td className="p-4">15%</td></tr>
              <tr><td className="p-4">अन्य</td><td className="p-4">10%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FUTURE */}
      <section className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            भविष्य की आर्थिक योजना
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            ग्राम पंचायत लॉंगवाला का लक्ष्य आत्मनिर्भर ग्राम एवं सतत विकास है।
          </p>
        </div>
      </section>

    </main>
  );
}
