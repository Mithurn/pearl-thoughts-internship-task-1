"use client";
import React, { useState } from "react";

export default function OTPPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(55);

  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (idx: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
    // Move to next input if value entered
    if (value && idx < 3) {
      const next = document.getElementById(`otp-${idx + 1}`);
      if (next) (next as HTMLInputElement).focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F3F7FF] to-[#E9F1FF] font-sans">
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] p-8 sm:p-10">
        {/* Title */}
        <h1 className="text-xl font-bold text-center mb-2 text-gray-900">OTP Code Verification</h1>
        <div className="text-center text-gray-500 mb-6 text-sm">
          Code has been sent to <span className="font-medium">+91 111 ******99</span>
        </div>
        {/* OTP Inputs */}
        <div className="flex justify-center gap-4 mb-4">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              id={`otp-${idx}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(idx, e.target.value)}
              className="w-12 h-12 text-center text-2xl border-2 border-primary/40 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition font-semibold bg-[#F7FAFC]"
              style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif' }}
            />
          ))}
        </div>
        {/* Resend Timer */}
        <div className="text-center text-gray-400 text-sm mb-6">
          Resend code in <span className="text-primary font-medium">{timer}s</span>
        </div>
        {/* Verify Button */}
        <button
          type="button"
          className="w-full bg-primary text-white font-semibold py-3 rounded-xl shadow-md hover:bg-[#3bb2cb] transition text-base mb-2"
          style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif' }}
        >
          Verify
        </button>
      </div>
    </div>
  );
} 