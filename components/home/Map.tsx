export default function Map() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2540]">
            OUR LOCATION
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#0A2540]">
            Visit Dental Villa
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            House No 209, Street 4, Block B, NFC Society,
            Lahore 54770, Pakistan.
          </p>

        </div>

        <div className="mt-14 overflow-hidden rounded-3xl shadow-2xl">

          <iframe
            src="https://www.google.com/maps?q=31.4147876,74.2633038&z=17&output=embed"
            width="100%"
            height="550"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>
    </section>
  );
}