export default function BeforeAfter() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0A2540]">
            Before & After Results
          </h2>

          <p className="mt-4 text-gray-600">
            Real smile transformations by Dental Villa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Before */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/before-after/before-1.jpg"
              alt="Before Treatment"
              className="h-96 w-full object-cover"
            />
            <div className="bg-[#0A2540] py-4 text-center text-white text-xl font-semibold">
              Before
            </div>
          </div>

          {/* After */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/before-after/after-1.jpg"
              alt="After Treatment"
              className="h-96 w-full object-cover"
            />
            <div className="bg-green-600 py-4 text-center text-white text-xl font-semibold">
              After
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}