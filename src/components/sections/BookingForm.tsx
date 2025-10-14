"use client"
import React from 'react'
import { useState } from 'react'

export default function BookingForm (){
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

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/bookings", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(form)
        });

        setLoading(false)
        if (res.ok) setSuccess(true)

        const data = await res.json();

        if(res.ok) {
          alert("Booking Successfull")
        } else {
          alert(`Error: ${data.message || "Bad Request"}`)
        }
    } 

  return (
     <div className="w-full max-w-md mx-auto p-6 bg-card text-primary-foreground rounded-4xl shadow-lg scale-[0.9] flex items-start justify-between">
      
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input name="name" placeholder="Full Name" onChange={handleChange} required className="w-full p-2 border border-primary rounded-2xl" />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required className="w-full p-2 border border-primary rounded-2xl" />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full p-2 border border-primary rounded-2xl" />
        <input name="service" placeholder="Service Type" onChange={handleChange} required className="w-full p-2 border border-primary rounded-2xl" />
        <input name="date" type="date" onChange={handleChange} required className="w-full p-2 border border-primary rounded-2xl" />
        <input name="time" type="time" onChange={handleChange} required className="w-full p-2 border border-primary rounded-2xl" />
        <textarea onChange={handleChange} name="message" placeholder="Additional Notes" className="w-full p-2 border border-primary rounded-2xl" />
        <button disabled={loading} className="bg-primary text-white py-2 w-full rounded-2xl hover:bg-secondary">
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
      {success && <p className="text-green-600 mt-3 text-center">Appointment booked successfully!</p>}
    </div>
  );
}
