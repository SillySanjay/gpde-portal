import "@/styles/globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gram Panchayat Longwala",
  description: "Official Portal of Gram Panchayat Longwala",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </head>

      <body className="bg-slate-50 text-gray-800 antialiased">
        {/* HEADER */}
        <Header />

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
