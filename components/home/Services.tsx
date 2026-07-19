const services = [
  {
    icon: (
      <img
        src="/images/icons/scaling-polishing.png"
        alt="Scaling & Polishing"
        className="h-11 w-11 object-contain"
      />
    ),
    title: "Scaling & Polishing",
    description:
      "Professional scaling and polishing to remove plaque, tartar and surface stains for a healthier smile.",
  },

  {
    icon: (
      <img
        src="/images/icons/root-canal-treatment.png"
        alt="Root Canal Treatment"
        className="h-11 w-11 object-contain"
      />
    ),
    title: "Root Canal Treatment",
    description:
      "Pain-free root canal treatment using advanced dental technology.",
  },

  {
    icon: (
      <img
        src="/images/icons/bridge.png"
        alt="Crowns & Bridges"
        className="h-11 w-11 object-contain"
      />
    ),
    title: "Crowns & Bridges",
    description:
      "Restore damaged teeth with durable and aesthetic restorations.",
  },

  {
    icon: (
      <img
        src="/images/icons/smile-makeover.png"
        alt="Orthodontic Treatment"
        className="h-11 w-11 object-contain"
      />
    ),
    title: "Orthodontic Treatment",
    description:
      "Straighten your teeth and improve your bite with customized orthodontic solutions.",
  },

  {
    icon: (
      <img
        src="/images/icons/teeth-whitening.png"
        alt="Teeth Whitening"
        className="h-11 w-11 object-contain"
      />
    ),
    title: "Teeth Whitening",
    description:
      "Professional whitening treatment for a brighter and confident smile.",
  },

  {
    icon: (
      <img
        src="/images/icons/dental-implant.png"
        alt="Dental Implants"
        className="h-11 w-11 object-contain"
      />
    ),
    title: "Dental Implants",
    description:
      "Replace missing teeth with strong, natural-looking dental implants.",
  },

  {
    icon: (
      <img
        src="/images/icons/dental-fillings.png"
        alt="Dental Fillings"
        className="h-11 w-11 object-contain"
      />
    ),
    title: "Dental Fillings",
    description:
      "Restore cavities with tooth-colored fillings that blend naturally with your teeth while protecting them from further decay.",
  },

  {
    icon: (
      <img
        src="/images/icons/tooth-extraction.png"
        alt="Tooth Extraction"
        className="h-11 w-11 object-contain"
      />
    ),
    title: "Tooth Extraction",
    description:
      "Safe and gentle tooth extraction performed using modern techniques for maximum comfort and a smooth recovery.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2540]">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#0A2540]">
            Comprehensive Dental Care
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            We provide modern dental treatments with advanced technology,
            ensuring comfort, precision and long-lasting results.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-[#0A2540] transition group-hover:bg-[#0A2540] group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}