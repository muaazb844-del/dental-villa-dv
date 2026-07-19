export default function CTA() {
  return (
    <section className="bg-[#0A2540] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready To Transform Your Smile?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          Schedule your appointment today and experience premium dental care
          at Dental Villa with Dr. Qasim Ikram.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <a
  href="#contact"
  className="rounded-xl bg-white px-8 py-4 font-semibold text-[#0A2540] transition hover:scale-105"
>
  Book Appointment
</a>

         <a
  href="tel:+923465714761"
  className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0A2540]"
>
  Call Now
</a>
        </div>

      </div>
    </section>
  );
}