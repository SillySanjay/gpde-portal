export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-10">
          ग्राम पंचायत के प्रमुख आँकड़े
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          
          <div className="bg-slate-50 p-6 rounded-lg shadow">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-900">
              2500+
            </h3>
            <p className="mt-2 text-gray-700 text-sm sm:text-base">
              जनसंख्या (Population)
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg shadow">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-900">
              650+
            </h3>
            <p className="mt-2 text-gray-700 text-sm sm:text-base">
              परिवार (Households)
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg shadow">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-900">
              85%
            </h3>
            <p className="mt-2 text-gray-700 text-sm sm:text-base">
              साक्षरता दर (Literacy Rate)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
