"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      email === "admin@dentalvilla.pk" &&
      password === "Admin@123"
    ) {
      router.push("/admin/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#0A2540]">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-400 outline-none focus:border-blue-700"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-400 outline-none focus:border-blue-700"
        />

        <button
          onClick={handleLogin}
          className="w-full rounded-xl bg-[#0A2540] py-4 font-semibold text-white transition hover:bg-blue-900"
        >
          Login
        </button>
      </div>
    </div>
  );
}