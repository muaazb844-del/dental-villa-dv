export default function Trust() {
  const items = [
    {
      title: "500+ Happy Patients",
      desc: "Trusted by hundreds of families for quality dental care.",
    },
    {
      title: "7+ Years Experience",
      desc: "Professional treatment with years of experience.",
    },
    {
      title: "5-Star Reviews",
      desc: "Highly rated by our satisfied patients.",
    },
    {
      title: "Modern Equipment",
      desc: "Advanced technology for safe and painless treatment.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-blue-700">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}