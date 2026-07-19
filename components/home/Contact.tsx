"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
  full_name: "",
  phone: "",
  email: "",
  service: "",
  appointment_date: "",
  appointment_time: "",
  message: "",
});

 const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      !formData.full_name ||
      !formData.phone ||
      !formData.appointment_date
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("appointments").insert([
      {
        full_name: formData.full_name,
phone: formData.phone,
email: formData.email,
service: formData.service,
appointment_date: formData.appointment_date,
appointment_time: formData.appointment_time,
message: formData.message,
status: "Pending",
      },
    ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Appointment Request Sent Successfully!");

    setFormData({
  full_name: "",
  phone: "",
  email: "",
  service: "",
  appointment_date: "",
  appointment_time: "",
  message: "",
});
  }

  return (
    <section id="contact" className="bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2540]">
            CONTACT US
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#0A2540]">
            Book Your Appointment
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We'd love to help you achieve a healthy and beautiful smile.
          </p>

        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
                  {/* Contact Information */}

          <div className="space-y-8">

            <div className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-lg">
              <MapPin className="mt-1 text-[#0A2540]" />
              <div>
                <h3 className="text-xl font-bold text-[#0A2540]">
                  Clinic Address
                </h3>

                <p className="mt-2 text-gray-600">
                  House No. 209, Street 4 <br />
                  Block B, NFC Society <br />
                  Lahore 54770, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-lg">
              <Phone className="mt-1 text-[#0A2540]" />
              <div>
                <h3 className="text-xl font-bold text-[#0A2540]">
                  Phone
                </h3>

                <a
                  href="tel:+923465714761"
                  className="mt-2 block text-gray-600 hover:text-blue-700"
                >
                  +92 346 5714761
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-lg">
              <Mail className="mt-1 text-[#0A2540]" />
              <div>
                <h3 className="text-xl font-bold text-[#0A2540]">
                  Email
                </h3>

                <p className="mt-2 text-gray-600">
                  info@dentalvilla.pk
                </p>

                <p className="text-sm text-gray-400">
                  (Temporary - Update Later)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-lg">
              <Clock className="mt-1 text-[#0A2540]" />
              <div>
                <h3 className="text-xl font-bold text-[#0A2540]">
                  Opening Hours
                </h3>

                <p className="mt-2 text-gray-600">
                  Monday – Saturday
                  <br />
                  4:00 PM – 9:00 PM
                  <br />
                   Sunday 
                  <br />
                  Emergency Only


 
                </p>
              </div>
            </div>

          </div>

          {/* Appointment Form */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h3 className="mb-6 text-3xl font-bold text-[#0A2540]">
              Request an Appointment
            </h3>

            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-400 outline-none focus:border-blue-700"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="WhatsApp Number"
              className="w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-400 outline-none focus:border-blue-700"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-400 outline-none focus:border-blue-700"
            />
<select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="w-full rounded-xl border border-gray-300 p-4 text-black outline-none focus:border-blue-700"
>
  <option value="">Select Service</option>
 <option value="Consultation">Consultation</option>
<option value="Scaling & Polishing">Scaling & Polishing</option>
<option value="Root Canal Treatment">Root Canal Treatment</option>
<option value="Crowns & Bridges">Crowns & Bridges</option>
<option value="Smile Makeover">Smile Makeover</option>
<option value="Teeth Whitening">Teeth Whitening</option>
<option value="Dental Implants">Dental Implants</option>
<option value="Extractions">Extractions</option>
<option value="Aesthetic concerns">Aesthetic concerns</option>
  <option value="Other">Other</option>
</select>
            <input
              type="date"
              name="appointment_date"
              value={formData.appointment_date}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-400 outline-none focus:border-blue-700"
            />
<select
  name="appointment_time"
  value={formData.appointment_time}
  onChange={handleChange}
  className="w-full rounded-xl border border-gray-300 p-4 text-black outline-none focus:border-blue-700"
>
  <option value="">Preferred Time</option>
  <option value="04:00 PM">04:00 PM</option>
  <option value="04:30 PM">04:30 PM</option>
  <option value="05:00 PM">05:00 PM</option>
  <option value="05:30 PM">05:30 PM</option>
  <option value="06:00 PM">06:00 PM</option>
  <option value="06:30 PM">06:30 PM</option>
  <option value="07:00 PM">07:00 PM</option>
  <option value="07:30 PM">07:30 PM</option>
  <option value="08:00 PM">08:00 PM</option>
  <option value="08:30 PM">08:30 PM</option>
  <option value="09:00 PM">09:00 PM</option>
</select>
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your dental concern..."
              className="w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-400 outline-none focus:border-blue-700"
            ></textarea>
                        <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-[#0A2540] py-4 text-lg font-semibold text-white transition hover:bg-blue-900 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Book Appointment"}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}