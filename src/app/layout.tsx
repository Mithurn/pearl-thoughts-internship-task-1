import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shedula App",
  description: "Doctor Appointment Booking UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use a hook to get the current path (works in client components)
  // For server components, you can use headers or pass props
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}> 
        <div className="w-full min-h-screen flex flex-col items-center justify-center px-2 sm:px-0">
          {children}
        </div>
      </body>
    </html>
  );
}
