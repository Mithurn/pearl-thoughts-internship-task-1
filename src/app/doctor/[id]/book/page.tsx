"use client";
import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import doctors from "../../../data/doctors.json";

const days = [
  { date: 13, day: "MON" },
  { date: 14, day: "TUE" },
  { date: 16, day: "WED" },
  { date: 17, day: "WED" },
  { date: 18, day: "WED" },
];

const slots = [
  [
    { time: "09:30 AM – 9:45AM", disabled: false },
    { time: "10:00 AM – 10:15AM", disabled: false },
  ],
  [
    { time: "10:30 AM – 10:45AM", disabled: false },
    { time: "11:00 AM – 11:15AM", disabled: true },
  ],
  [
    { time: "11:30 AM – 11:45AM", disabled: false },
    { time: "12:00 PM – 12:15PM", disabled: false },
  ],
  [
    { time: "12:30 PM – 12:45PM", disabled: true },
    { time: "01:00 PM – 01:15PM", disabled: false },
  ],
];

const eveningSlots = [
  [
    { time: "11:30 AM – 11:45AM", disabled: false },
    { time: "12:00 PM – 12:15PM", disabled: false },
  ],
  [
    { time: "01:00 PM – 01:15PM", disabled: false },
    { time: "01:00 PM – 01:15PM", disabled: false },
  ],
];

export default function BookSlotPage() {
  const router = useRouter();
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : Array.isArray(params.id) ? params.id[0] : '41';
  // Find the doctor by id from doctors.json
  const doctor = doctors.find((doc) => String(doc.id) === String(id));
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  console.log('params:', params, 'id:', id);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans">
        <div className="text-xl text-gray-500">Doctor not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans pb-24 flex justify-center">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl bg-white sm:rounded-3xl sm:shadow-lg sm:my-6">
        {/* Header */}
        <div className="relative bg-primary h-24 rounded-b-3xl flex items-center px-4 sm:rounded-t-3xl sm:rounded-b-none">
          <button onClick={() => router.back()} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <h1 className="mx-auto text-white text-lg font-semibold">Book Appointment</h1>
        </div>
        {/* Main Content */}
        <div className="px-4 pt-8 sm:px-8 sm:pt-10 md:px-16 md:pt-12 lg:px-24 lg:pt-16">
          {/* Doctor Card */}
          <div className="bg-white rounded-2xl shadow-lg flex items-center p-4 pr-6 mb-6">
            <div className="flex-1 min-w-0">
              <div className="text-xl font-bold text-gray-900 leading-tight mb-0.5 sm:text-2xl">{doctor.name}</div>
              <div className="text-base text-gray-400 font-semibold leading-tight mb-0.5 sm:text-lg">{doctor.specialty}</div>
              <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold rounded-lg px-2 py-0.5 mb-1">{doctor.status}</span>
              <div className="text-xs text-gray-500 truncate mb-2">{doctor.bio}</div>
              <div className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold rounded-lg px-3 py-1">{doctor.time}</div>
            </div>
            <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-xl object-cover ml-4 border-2 border-gray-100 sm:w-24 sm:h-24" />
          </div>
          {/* Book Appointment Title */}
          <div className="font-bold text-lg text-gray-900 mb-2 sm:text-xl">Book Appointment</div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400 text-base">July, 2023</span>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          {/* Date Picker */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {days.map((d, i) => (
              <button
                key={d.date}
                onClick={() => setSelectedDay(i)}
                className={`flex flex-col items-center px-4 py-3 rounded-xl border text-center min-w-[70px] font-semibold transition-all duration-150 ${selectedDay === i ? 'bg-primary text-white border-primary' : 'bg-gray-50 text-gray-400 border-gray-200'}`}
              >
                <span className="text-lg">{d.date}</span>
                <span className="text-xs mt-1">{d.day}</span>
              </button>
            ))}
          </div>
          {/* Select Slot */}
          <div className="font-bold text-base text-gray-900 mb-2">Select slot</div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {slots.flat().map((slot, idx) => (
              <button
                key={slot.time + idx}
                disabled={slot.disabled}
                onClick={() => setSelectedSlot(slot.time)}
                className={`px-3 py-3 rounded-xl border text-sm font-semibold transition-all duration-150 ${slot.disabled ? 'bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed' : selectedSlot === slot.time ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50'}`}
              >
                {slot.time}
              </button>
            ))}
          </div>
          {/* Evening Slot */}
          <div className="font-bold text-base text-gray-900 mb-2">Evening Slot</div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {eveningSlots.flat().map((slot, idx) => (
              <button
                key={slot.time + idx}
                disabled={slot.disabled}
                onClick={() => setSelectedSlot(slot.time)}
                className={`px-3 py-3 rounded-xl border text-sm font-semibold transition-all duration-150 ${slot.disabled ? 'bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed' : selectedSlot === slot.time ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50'}`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
        {/* Book Appointment Button */}
        <div className="fixed bottom-0 left-0 right-0 px-4 pb-6 bg-white pt-4 sm:static sm:px-8 sm:pb-8 sm:pt-8 md:px-16 md:pb-10 md:pt-10 lg:px-24 lg:pb-12 lg:pt-12">
          <button 
            className="w-full bg-primary text-white font-semibold py-4 rounded-xl text-lg shadow-md hover:bg-[#3bb2cb] transition"
            onClick={() => router.push(`/doctor/${id}/success`)}
          >
            Book appointment
          </button>
        </div>
      </div>
    </div>
  );
} 