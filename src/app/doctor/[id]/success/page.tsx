"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function AppointmentSuccessPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center font-sans px-4">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl bg-white rounded-3xl shadow-lg p-8 md:p-16 lg:p-20 flex flex-col items-center">
        {/* Illustration */}
        <div className="mb-6">
          {/* Placeholder SVG illustration */}
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="60" fill="#E9F7FB" />
            <rect x="35" y="40" width="50" height="40" rx="8" fill="#46C2DE" />
            <circle cx="60" cy="60" r="18" fill="#fff" />
            <path d="M54 62l6 6 10-12" stroke="#46C2DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Success Message */}
        <div className="text-2xl font-bold text-center text-gray-900 mb-2">Appointment Booked<br />Successfully !</div>
        {/* Token Number */}
        <div className="text-lg text-gray-700 mb-2">Token No <span className="text-primary font-bold">1234</span></div>
        {/* Subtext */}
        <div className="text-gray-400 text-center text-base mb-6">You will receive a Notification of Before half hour for as reminder thank you…</div>
        <button
          className="mt-2 px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-[#3bb2cb] transition-colors duration-150"
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
} 