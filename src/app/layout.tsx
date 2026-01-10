import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Official Portal | Punsari Gram Panchayat",
  description: "India's No. 1 Model Village - A Case Study of Rurban Excellence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {/* Government Branding Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-white to-green-600 fixed top-0 z-[110]" />
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
