"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");
  useEffect(() => {
    fetchAppointments();
  }, []);

  async function fetchAppointments() {
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setAppointments(data);
    }

    setLoading(false);
  }

  async function updateStatus(id: number, status: string) {
  const { error } = await supabase
    .from("appointments")
    .update({ status })
    .eq("id", id);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Status Updated Successfully");
  fetchAppointments();
}
async function deleteAppointment(id: number) {
  const ok = confirm(
    "Are you sure you want to delete this appointment?"
  );

  if (!ok) return;

  const { error } = await supabase
    .from("appointments")
    .delete()
    .eq("id", id);

  if (error) {
    alert(error.message);
    return;
  }

  fetchAppointments();
}
function sendWhatsApp(appointment: any) {
  const phone = appointment.phone.replace(/^0/, "92");

  const message = `Hello ${appointment.full_name},

Your appointment at Dental Villa has been confirmed.

🦷 Service: ${appointment.service}
📅 Date: ${appointment.appointment_date}
🕒 Time: ${appointment.appointment_time}

Thank you for choosing Dental Villa.
We look forward to seeing you!`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
  const total = appointments.length;
  const pending = appointments.filter(
    (a) => a.status === "Pending"
  ).length;
  const confirmed = appointments.filter(
  (a) => a.status === "Confirmed"
).length;
async function confirmAndWhatsApp(appointment: any) {
  if (appointment.status !== "Confirmed") {
    const { error } = await supabase
      .from("appointments")
      .update({ status: "Confirmed" })
      .eq("id", appointment.id);

    if (error) {
      alert(error.message);
      return;
    }

    await fetchAppointments();
  }

  sendWhatsApp({
    ...appointment,
    status: "Confirmed",
  });
}
const filteredAppointments = appointments.filter(
  (appointment) =>
    appointment.full_name
      ?.toLowerCase()
      .includes(search.toLowerCase()) ||
    appointment.phone?.includes(search)
);
  const completed = appointments.filter(
    (a) => a.status === "Completed"
  ).length;

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mb-8 flex items-center justify-between">
  <h1 className="text-4xl font-bold text-[#0A2540]">
    Admin Dashboard
  </h1>

  <button
    onClick={() => {
      localStorage.removeItem("admin");
      window.location.href = "/admin/login";
    }}
    className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
  >
    Logout
  </button>
</div>

      <div className="mb-10 grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-500">
            Total Appointments
          </h2>
          <p className="mt-3 text-4xl font-bold text-[#0A2540]">
            {total}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
  <h2 className="text-lg font-semibold text-gray-500">
    Pending
  </h2>
  <p className="mt-3 text-4xl font-bold text-yellow-500">
    {pending}
  </p>
</div>

{/* 👇 YAHAN YE CONFIRMED CARD PASTE KARO */}

<div className="rounded-2xl bg-white p-6 shadow-lg">
  <h2 className="text-lg font-semibold text-gray-500">
    Confirmed
  </h2>

  <p className="mt-3 text-4xl font-bold text-blue-600">
    {confirmed}
  </p>
</div>

<div className="rounded-2xl bg-white p-6 shadow-lg">
  <h2 className="text-lg font-semibold text-gray-500">
    Completed
  </h2>
  ...
</div>

     <div className="mb-5">
  <input
    type="text"
    placeholder="Search by Name or Phone..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full rounded-lg border border-gray-300 p-3 text-gray-900"
  />
</div>
        <table className="min-w-full">
          <thead className="bg-[#0A2540] text-white">
  <tr>
    <th className="p-4 text-left">Name</th>
    <th className="p-4 text-left">Phone</th>
    <th className="p-4 text-left">Service</th>
    <th className="p-4 text-left">Date</th>
    <th className="p-4 text-left">Time</th>
    <th className="p-4 text-left">Status</th>
    <th className="p-4 text-left">Change Status</th>
    <th className="p-4 text-left">Delete</th>
    <th className="p-4 text-left">WhatsApp</th>
  </tr>
</thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={9} className="p-6 text-center text-gray-700">
                  Loading...
                </td>
              </tr>
            ) : appointments.length === 0 ? (
              <tr>
                <td colSpan={9} className="p-6 text-center text-gray-700">
                  No Appointments Found
                </td>
              </tr>
            ) : (
             filteredAppointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4 font-medium text-gray-900">
                    {appointment.full_name}
                  </td>

                  <td className="p-4 text-gray-700">
                    {appointment.phone}
                  </td>

                  <td className="p-4 text-gray-700">
                    {appointment.service}
                  </td>

                  <td className="p-4 text-gray-700">
                    {appointment.appointment_date}
                  </td>

                  <td className="p-4 text-gray-700">
                    {appointment.appointment_time}
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        appointment.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : appointment.status === "Confirmed"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
<td className="p-4">
  <select
    value={appointment.status}
    onChange={(e) =>
      updateStatus(
        appointment.id,
        e.target.value
      )
    }
    className="rounded-lg border border-gray-300 p-2 text-gray-900"
  >
    <option value="Pending">Pending</option>
    <option value="Confirmed">Confirmed</option>
    <option value="Completed">Completed</option>
  </select>
</td>

<td className="p-4">
  <button
    onClick={() => deleteAppointment(appointment.id)}
    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
  >
    Delete
  </button>
</td>
<td className="p-4">
  <button
    onClick={() => confirmAndWhatsApp(appointment)}
    className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
  >
    {appointment.status === "Confirmed"
      ? "📲 Send WhatsApp"
      : "✅ Confirm & WhatsApp"}
  </button>
</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}