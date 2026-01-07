"use client";

import Image from "next/image";

export default function GeographyPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* HERO */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            भौगोलिक विवरण
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            Geography of Gram Panchayat Longwala
          </p>
        </div>
      </section>

      {/* LOCATION OVERVIEW */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
            भौगोलिक स्थिति
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
            ग्राम पंचायत लॉंगवाला राजस्थान राज्य के श्रीगंगानगर जिले के अंतर्गत
            स्थित है। यह क्षेत्र भारत के उत्तर-पश्चिमी भाग में आता है।
          </p>

          <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
            Gram Panchayat Longwala is located in Sri Ganganagar district of
            Rajasthan, situated in the north-western part of India.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-[400px] w-full border border-gray-300 text-sm">
              <tbody>
                {[
                  ["राज्य / State", "राजस्थान / Rajasthan"],
                  ["जिला / District", "श्रीगंगानगर"],
                  ["तहसील / Tehsil", "श्रीगंगानगर"],
                  ["क्षेत्र", "ग्रामीण (Rural)"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b">
                    <td className="p-3 font-semibold bg-slate-100">{k}</td>
                    <td className="p-3">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CLIMATE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
          जलवायु (Climate)
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
          लॉंगवाला क्षेत्र की जलवायु शुष्क (Arid) प्रकृति की है।
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm sm:text-base">
          <li>ग्रीष्मकालीन तापमान: 40°C तक</li>
          <li>शीतकालीन तापमान: 4°C तक</li>
          <li>औसत वर्षा: 250–300 मिमी</li>
          <li>मुख्य वर्षा अवधि: जुलाई–सितंबर</li>
        </ul>
      </section>

      {/* SOIL & LAND */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
            मृदा एवं भूमि (Soil & Land)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
            यहाँ की भूमि मुख्यतः बलुई दोमट (Sandy Loam) प्रकार की है।
          </p>

          <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
            Canal irrigation has significantly improved soil fertility.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["eco1", "eco2", "eco3", "eco1"].map((img, i) => (
              <Image
                key={i}
                src={`/images/${img}.jpg`}
                width={400}
                height={500}
                alt=""
                className="rounded-lg shadow w-full h-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* IRRIGATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
          सिंचाई व्यवस्था (Irrigation)
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
          इंदिरा गांधी नहर परियोजना यहाँ का प्रमुख सिंचाई स्रोत है।
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6 text-sm sm:text-base">
          <li>इंदिरा गांधी नहर</li>
          <li>ट्यूबवेल</li>
          <li>बोरवेल</li>
        </ul>

        <div className="relative h-56 sm:h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/images/farm2.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* AGRICULTURE */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
            कृषि परिदृश्य
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "गेहूँ (Wheat)",
              "कपास (Cotton)",
              "सरसों (Mustard)",
              "चना (Gram)",
              "बाजरा (Bajra)",
              "सब्ज़ियाँ (Vegetables)",
            ].map((crop) => (
              <div key={crop} className="bg-slate-100 p-6 rounded-lg">
                <h3 className="font-bold text-blue-900">{crop}</h3>
                <p className="text-gray-700 text-sm mt-2">
                  इस फसल की खेती बड़े पैमाने पर की जाती है।
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
          निष्कर्ष
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl text-sm sm:text-base">
          ग्राम पंचायत लॉंगवाला की भौगोलिक स्थिति एवं सिंचाई प्रणाली इसे
          एक समृद्ध ग्रामीण क्षेत्र बनाती है।
        </p>
      </section>

    </main>
  );
}
