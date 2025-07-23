"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import doctors from "../../data/doctors.json";

export default function DoctorDetailPage() {
  const params = useParams();
  const router = useRouter();
  // Find the doctor by id from doctors.json
  const doctor = doctors.find((doc) => String(doc.id) === String(params.id));

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
              {doctor.degrees && (
                <div className="text-sm text-primary font-medium mb-0.5 sm:text-base">{doctor.degrees}</div>
              )}
              {doctor.fellow && (
                <div className="text-xs text-gray-400 mb-1 sm:text-sm">{doctor.fellow}</div>
              )}
            </div>
            <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-xl object-cover ml-4 border-2 border-gray-100 sm:w-24 sm:h-24" />
          </div>
          {/* Speciality Tags */}
          {doctor.tags && doctor.tags.length > 0 && (
            <div className="mt-2 mb-2">
              <div className="font-bold text-lg text-gray-900 mb-2 sm:text-xl">Speciality</div>
              <div className="flex flex-wrap gap-2">
                {doctor.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 border border-primary text-primary rounded-full text-sm font-medium bg-white sm:text-base">{tag}</span>
                ))}
              </div>
            </div>
          )}
          {/* About Doctor */}
          {doctor.about && (
            <div className="mt-6">
              <div className="font-bold text-lg text-gray-900 mb-1 sm:text-xl">About Doctor</div>
              <div className="text-gray-400 text-base mb-4 sm:text-lg">{doctor.about}</div>
            </div>
          )}
          {/* Availability */}
          {doctor.availability && doctor.availability.length > 0 && (
            <div className="mt-2">
              <div className="font-bold text-lg text-gray-900 mb-1 sm:text-xl">Availability For Consulting</div>
              <div className="text-gray-400 text-base sm:text-lg">
                {doctor.availability.map((a: string) => (
                  <div key={a}>{a}</div>
                ))}
              </div>
            </div>
          )}
          {/* Earliest Appointment */}
          {doctor.earliest && (
            <div className="mt-8">
              <div className="flex items-center bg-[#F7FAFC] rounded-xl p-4">
                <div className="bg-white rounded-xl p-3 mr-3 flex items-center justify-center">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-primary text-sm font-semibold mb-0.5 sm:text-base">Earliest Available Appointment</div>
                  <div className="text-gray-700 font-medium text-base sm:text-lg">{doctor.earliest.date}  |  {doctor.earliest.time}</div>
                </div>
                <button className="ml-2 p-2 rounded-full bg-primary/10">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Book Appointment Button */}
        <div className="fixed bottom-0 left-0 right-0 px-4 pb-6 bg-white pt-4 sm:static sm:px-8 sm:pb-8 sm:pt-8 md:px-16 md:pb-10 md:pt-10 lg:px-24 lg:pb-12 lg:pt-12">
          <button 
            className="w-full bg-primary text-white font-semibold py-4 rounded-xl text-lg shadow-md hover:bg-[#3bb2cb] transition"
            onClick={() => router.push(`/doctor/${params.id}/book`)}
          >
            Book appointment
          </button>
        </div>
      </div>
    </div>
  );
} 