"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HistoryPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-center">
        <Image
          src="/images/history3.jpg"
          alt="Village History"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl px-4 sm:px-6 text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            ग्राम पंचायत का इतिहास
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            History & Heritage of Our Villages
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            ऐतिहासिक पृष्ठभूमि
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
            ग्राम पंचायत लोंगवाला और इसके अंतर्गत आने वाले गांवों का इतिहास
            सदियों पुराना है। यह क्षेत्र कृषि और पारंपरिक ग्रामीण जीवन
            शैली के लिए जाना जाता रहा है।
          </p>

          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            प्राचीन समय में यह क्षेत्र व्यापारिक मार्गों और सिंचाई नहरों
            के कारण महत्वपूर्ण था।
          </p>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-12 sm:mb-16">
            ऐतिहासिक कालक्रम
          </h2>

          <div className="space-y-16">

            {/* ITEM 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <Image
                src="/images/history1.jpg"
                alt=""
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-4">
                  प्राचीन काल
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  प्रारंभिक मानव बस्तियाँ जल स्रोतों के आसपास विकसित हुईं।
                </p>
              </div>
            </motion.div>

            {/* ITEM 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-4">
                  मध्यकालीन युग
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  राजपूताना शासनकाल में स्थानीय प्रशासन मजबूत हुआ।
                </p>
              </div>
              <Image
                src="/images/history2.jpg"
                alt=""
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>

            {/* ITEM 3 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <Image
                src="/images/history3.jpg"
                alt=""
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-4">
                  ब्रिटिश काल
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  नहर परियोजनाओं से कृषि उत्पादन में वृद्धि हुई।
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* POST INDEPENDENCE */}
      <section className="bg-blue-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-8"
          >
            स्वतंत्रता के बाद विकास
          </motion.h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
            स्वतंत्रता के बाद ग्राम पंचायत प्रणाली लागू हुई।
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            डिजिटल गवर्नेंस की दिशा में पंचायत अग्रसर है।
          </p>
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-6"
          >
            सांस्कृतिक विरासत
          </motion.h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            यहाँ की लोक संस्कृति और परंपराएँ आज भी जीवंत हैं।
          </p>
        </div>
      </section>

    </main>
  );
}
