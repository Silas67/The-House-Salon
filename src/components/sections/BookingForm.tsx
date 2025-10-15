"use client";
import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setLoading(false);

      // ✅ Safely try to parse JSON only if it's valid JSON
      let data;
      try {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          data = await res.json();
        } else {
          data = { message: "Server returned a non-JSON response" };
        }
      } catch {
        data = { message: "Failed to parse response" };
      }

      if (res.ok) {
        setSuccess(true);
        alert("Booking successful!");
      } else {
        alert(`Error: ${data?.error || data?.message || "Bad Request"}`);
      }
    } catch (error) {
      console.error("Network or server error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card text-primary-foreground rounded-2xl shadow-lg scale-[0.9] flex items-center justify-between flex-col-reverse gap-8">
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="w-full p-2 border border-primary rounded-2xl"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
          className="w-full p-2 border border-primary rounded-2xl"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
          className="w-full p-2 border border-primary rounded-2xl"
        />
        <input
          name="service"
          placeholder="Service Type"
          onChange={handleChange}
          required
          className="w-full p-2 border border-primary rounded-2xl"
        />
        <input
          name="date"
          type="date"
          onChange={handleChange}
          required
          className="w-full p-2 border border-primary rounded-2xl"
        />
        <input
          name="time"
          type="time"
          onChange={handleChange}
          required
          className="w-full p-2 border border-primary rounded-2xl"
        />
        <textarea
          onChange={handleChange}
          name="message"
          placeholder="Additional Notes"
          className="w-full p-2 border border-primary rounded-2xl"
        />
        <button
          disabled={loading}
          className="bg-primary text-white py-2 w-full rounded-2xl hover:bg-secondary"
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
      {success && (
        <AnimatePresence>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 1, ease: "anticipate" }}
            className="text-green-600 mt-3 text-center"
          >
            Appointment booked successfully!
          </motion.p>
        </AnimatePresence>
      )}
    </div>
  );
}
