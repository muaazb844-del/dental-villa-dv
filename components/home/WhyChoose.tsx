import {
  Clock3,
  ShieldCheck,
  Smile,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Advanced Technology",
    description:
      "Modern dental equipment for precise, safe and comfortable treatment.",
  },
  {
    icon: <Smile size={40} />,
    title: "Comfortable Care",
    description:
      "We make every patient feel relaxed throughout the treatment process.",
  },
  {
    icon: <Clock3 size={40} />,
    title: "Flexible Appointments",
    description:
      "Book appointments at a time that fits your schedule.",
  },
  {
    icon: <Star size={40} />,
    title: "Trusted By Patients",
    description:
      "Hundreds of happy smiles and positive patient experiences.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2540]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#0A2540]">
            Why Patients Choose Dental Villa
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Our mission is to provide world-class dental care with honesty,
            comfort and advanced technology.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-[#0A2540]">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540]">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}