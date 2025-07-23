"use client";
import React from "react";
import { useRouter } from "next/navigation";
import DoctorCard from "../components/DoctorCard";
import BottomNavBar from "../components/BottomNavBar";
import doctors from "../data/doctors.json";

export default function BookingPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white pb-20 font-sans flex justify-center">
      <div className="w-full max-w-md md:max-w-full bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <div>
            <div className="font-bold text-base text-gray-900 leading-tight">Hello, User</div>
            <div className="text-xs text-gray-400 flex items-center gap-1">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block text-primary"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Dombivali ,Mumbai
            </div>
          </div>
        </div>
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold">5</span>
          </button>
        </div>
      </div>
      {/* Search Bar */}
      <div className="px-4 mb-4">
        <div className="bg-[#F7FAFC] rounded-xl flex items-center px-4 py-3 text-gray-400 text-base">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
          <span>Search Doctors</span>
        </div>
      </div>
      {/* Doctor List */}
      <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doc) => (
          <div key={doc.id} onClick={() => router.push(`/doctor/${doc.id}`)} className="cursor-pointer">
            <DoctorCard
              name={doc.name}
              specialty={doc.specialty}
              image={doc.image}
              status={doc.status}
              bio={doc.bio}
              time={doc.time}
            />
          </div>
        ))}
      </div>
      {/* Bottom NavBar */}
      <BottomNavBar />
      </div>
    </div>
  );
} 