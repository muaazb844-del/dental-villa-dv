import { Award, ShieldCheck, Stethoscope } from "lucide-react";

export default function Doctor() {
  return (
   <section id="doctor" className="bg-[#EEF6FF] py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div className="relative">
          <div className="overflow-hidden rounded-[40px] bg-slate-100 shadow-2xl">
            <img
  src="/doctor.png"
  alt="Dr. Qasim Ikram"
  className="h-[650px] w-full object-cover object-top"
/>
          </div>

          <div className="absolute -bottom-8 left-6 rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-3xl font-bold text-[#0A2540]">
              7+
            </h3>

            <p className="text-gray-500">
              Years Experience
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2540]">
            MEET YOUR DENTIST
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#0A2540]">
            Dr. Qasim Ikram
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Dr. Qasim Ikram is dedicated to providing advanced,
            comfortable and patient-focused dental care. Every treatment
            is planned carefully to deliver healthy, confident and
            beautiful smiles.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <Award className="text-blue-700" />
              <span className="font-medium text-gray-900">
                7+ Years of Clinical Experience
              </span>
            </div>

            <div className="flex items-center gap-4">
              <ShieldCheck className="text-blue-700" />
              <span className="font-medium text-gray-900">
                Advanced & Pain-Free Dental Care
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Stethoscope className="text-blue-700" />
              <span className="font-medium text-gray-900">
                Personalized Treatment for Every Patient
              </span>
            </div>

          </div>

          <a
            href="#contact"
            className="mt-12 inline-block rounded-xl bg-[#0A2540] px-8 py-4 font-semibold text-white transition hover:bg-blue-900"
          >
            Book Consultation
          </a>

        </div>

      </div>
    </section>
  );
}