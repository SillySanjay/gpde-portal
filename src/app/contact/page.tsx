"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">संपर्क करें</h1>
          <p className="text-base sm:text-xl opacity-90">
            Contact Gram Panchayat Longwala
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-6">
            संपर्क जानकारी
          </h2>
          <p className="text-gray-700 max-w-4xl leading-relaxed text-sm sm:text-base">
            ग्राम पंचायत लॉंगवाला से संबंधित किसी भी जानकारी, शिकायत,
            सुझाव अथवा सेवा हेतु नीचे दिए गए माध्यमों से संपर्क किया जा सकता है।
            पंचायत कार्यालय नागरिकों की सहायता हेतु सदैव तत्पर है।
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-8 sm:mb-10">
          पंचायत कार्यालय विवरण
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "पता",
              content: (
                <>
                  ग्राम पंचायत लॉंगवाला <br />
                  तहसील – श्रीगंगानगर <br />
                  जिला – श्रीगंगानगर <br />
                  राजस्थान – 335001
                </>
              ),
            },
            {
              title: "संपर्क नंबर",
              content: (
                <>
                  कार्यालय फोन: 0154X-XXXXXX <br />
                  मोबाइल: +91-9XXXXXXXXX
                </>
              ),
            },
            {
              title: "ई-मेल",
              content: (
                <>
                  gp.longwala@rajasthan.gov.in <br />
                  support.longwala@gmail.com
                </>
              ),
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFICE HOURS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-6">
            कार्यालय समय
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm max-w-3xl">
              <thead className="bg-emerald-900 text-white">
                <tr>
                  <th className="p-3 sm:p-4 text-left">दिन</th>
                  <th className="p-3 sm:p-4 text-left">समय</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-3 sm:p-4">सोमवार – शुक्रवार</td>
                  <td className="p-3 sm:p-4">10:00 AM – 5:00 PM</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4">शनिवार</td>
                  <td className="p-3 sm:p-4">10:00 AM – 2:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ELECTED REPRESENTATIVES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-8 sm:mb-10">
          निर्वाचित प्रतिनिधि
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "श्री __________", role: "सरपंच", phone: "+91-9XXXXXXXXX" },
            { name: "श्रीमती __________", role: "उप-सरपंच", phone: "+91-9XXXXXXXXX" },
            { name: "श्री __________", role: "पंचायत सचिव", phone: "+91-9XXXXXXXXX" },
          ].map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-gray-800 mb-1">{p.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{p.role}</p>
              <p className="text-sm text-gray-700">फोन: {p.phone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-6">
            सुझाव / शिकायत प्रपत्र
          </h3>

          <form className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            <input className="border p-3 rounded" placeholder="पूरा नाम" />
            <input className="border p-3 rounded" placeholder="मोबाइल नंबर" />
            <input className="border p-3 rounded sm:col-span-2" placeholder="ई-मेल" />
            <textarea className="border p-3 rounded sm:col-span-2" rows={5} placeholder="संदेश लिखें" />
            <button className="bg-emerald-900 text-white py-3 rounded sm:col-span-2">
              सबमिट करें
            </button>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-6">
          पंचायत स्थान
        </h3>

        <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image src="/images/map2.jpg" alt="" fill className="object-cover" />
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <p className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            ग्राम पंचायत लॉंगवाला नागरिकों की सेवा के लिए प्रतिबद्ध है।
            आपकी सहभागिता से ग्राम का विकास संभव है।
          </p>
        </div>
      </section>

    </main>
  );
}
