"use client";

import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">

      {/* HERO */}
      <section className="bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            फोटो गैलरी
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90">
            Gallery of Gram Panchayat Longwala
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-6">
            ग्राम पंचायत की झलकियाँ
          </h2>
          <p className="text-gray-700 max-w-4xl leading-relaxed text-sm sm:text-base">
            इस गैलरी में ग्राम पंचायत लॉंगवाला के विकास कार्य, कृषि गतिविधियाँ,
            सामाजिक कार्यक्रम एवं सरकारी योजनाओं के क्रियान्वयन को दर्शाया गया है।
          </p>
        </div>
      </section>

      {/* DEVELOPMENT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-8">
          विकास कार्य (Development Works)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>

      {/* AGRICULTURE */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-8">
            कृषि एवं सिंचाई (Agriculture & Irrigation)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["eco2", "eco3", "eco1"].map((img, i) => (
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

      {/* GOVERNMENT SCHEMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-8">
          सरकारी योजनाएँ एवं लाभार्थी
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              img: "eco1",
              title: "सरकारी योजनाओं का क्रियान्वयन",
              text: "ग्राम पंचायत द्वारा पात्र नागरिकों को योजनाओं का लाभ।",
            },
            {
              img: "eco2",
              title: "ग्रामीण विकास कार्यक्रम",
              text: "आधारभूत संरचना एवं विकास कार्य।",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg shadow"
            >
              <Image
                src={`/images/${item.img}.jpg`}
                width={250}
                height={300}
                alt=""
                className="rounded w-full sm:w-[250px] h-auto"
              />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-6">
            वीडियो गैलरी
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="relative h-48 sm:h-56 rounded-lg overflow-hidden shadow"
              >
                <video
                  src="/images/video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            यह गैलरी ग्राम पंचायत लॉंगवाला के विकासात्मक प्रयासों,
            पारदर्शिता एवं सामुदायिक सहभागिता को प्रदर्शित करती है।
          </p>
        </div>
      </section>

    </main>
  );
}
