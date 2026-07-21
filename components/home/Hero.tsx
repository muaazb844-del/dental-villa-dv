import { Calendar, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
  className="relative min-h-screen"
  style={{
    backgroundImage: "url('/images/clinic-bg.jpeg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Left Gradient */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 md:px-8 lg:px-16">
  <div className="w-full max-w-2xl">

     

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            Creating
            <br />
            Beautiful &
            <br />
            Healthy{" "}
            <span className="text-blue-500">
              Smiles
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-8 max-w-lg text-lg leading-8 text-gray-200">
            Welcome to <strong>Dental Villa</strong>, where modern dentistry
            meets compassionate care. We provide premium dental treatments to
            help you smile with confidence.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              <Calendar size={20} />
              Book Appointment
            </a>

            <a
              href="tel:+923465714761"
              className="flex items-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
            >
              <Phone size={20} />
              Call Now
            </a>

          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-12 flex-wrap">

            <div>
              <h2 className="text-4xl font-bold text-white">
                500+
              </h2>

              <p className="mt-2 text-gray-300">
                Happy Patients
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                7+
              </h2>

              <p className="mt-2 text-gray-300">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                15+
              </h2>

              <p className="mt-2 text-gray-300">
                Dental Services
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}