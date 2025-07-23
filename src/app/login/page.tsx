"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Logo from "../components/Logo";
import React, { useState } from "react";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/booking'); // Redirect to booking page after login
    }, 1200); // Simulate API call
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F3F7FF] to-[#E9F1FF] font-sans">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto bg-white rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] p-8 sm:p-10 md:p-16 lg:p-20">
        {/* Greeting */}
        <div className="mb-2 text-sm md:text-base text-gray-500">
          Hi there welcome too <span className="text-primary font-semibold">Shedula</span>
        </div>
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Input */}
          <div>
            <input
              type="text"
              {...register("login", { required: "Required" })}
              placeholder="login with email or mobile number"
              className="w-full px-4 py-3 md:py-4 md:text-lg rounded-xl border border-gray-200 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 text-base placeholder-gray-400 outline-none transition"
              style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif' }}
              onChange={e => {
                const value = e.target.value;
                setShowPassword(value.includes("@"));
                // Let react-hook-form handle the value
                register("login").onChange(e);
              }}
            />
            {errors.login && (
              <span className="text-xs text-red-500 mt-1 block">{errors.login.message as string}</span>
            )}
          </div>
          {showPassword && (
            <div>
              <input
                type="password"
                {...register("password", { required: "Password required" })}
                placeholder="Password"
                className="w-full px-4 py-3 md:py-4 md:text-lg rounded-xl border border-gray-200 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 text-base placeholder-gray-400 outline-none transition mt-3"
                style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif' }}
              />
              {errors.password && (
                <span className="text-xs text-red-500 mt-1 block">{errors.password.message as string}</span>
              )}
            </div>
          )}
          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm mb-2 gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-primary rounded" />
              <span className="text-gray-500">Remember Me</span>
            </label>
            <a href="#" className="text-pink-400 font-medium hover:underline">Forgot Password</a>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 md:py-4 rounded-xl shadow-md hover:bg-[#3bb2cb] transition text-base md:text-lg flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif' }}
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
            ) : null}
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {/* Login with Phone Number Button */}
        <button
          type="button"
          onClick={() => router.push('/otp')}
          className="w-full mt-3 bg-white border border-primary text-primary font-semibold py-3 md:py-4 rounded-xl shadow-sm hover:bg-blue-50 transition text-base md:text-lg"
          style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif' }}
        >
          Login with Phone Number
        </button>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-3 text-gray-400 text-sm">Or login With</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        {/* Google Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-3 md:py-4 font-medium text-gray-700 hover:bg-gray-50 transition text-base md:text-lg mb-2"
          style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif' }}
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>
        {/* Sign Up Link */}
        <div className="mt-8 text-center text-sm md:text-base text-gray-500">
          Don’t have an account?{' '}
          <a href="#" className="text-primary font-semibold hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
} 