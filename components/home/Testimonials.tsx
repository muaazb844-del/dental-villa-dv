import { Star } from "lucide-react";

const reviews = [
  {
    name: "Muhammad Ahmad",
    review:
      "Excellent experience! Dr. Qasim Ikram explained every step clearly. The treatment was completely painless.",
  },
  {
    name: "Ayesha Khan",
    review:
      "The clinic is clean, modern and the staff is very cooperative. Highly recommended.",
  },
  {
    name: "Ali Raza",
    review:
      "Professional service with modern equipment. I'm very happy with my smile makeover.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2540]">
            PATIENT REVIEWS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#0A2540]">
            What Our Patients Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Real experiences from patients who trusted Dental Villa with their smiles.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-5 flex">

                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="leading-8 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-[#0A2540]">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Verified Patient
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}