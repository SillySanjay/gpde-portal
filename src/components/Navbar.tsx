"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/geography", label: "Geography" },
  { href: "/history", label: "History" },
  { href: "/economy", label: "Economy" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="hidden md:block bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex gap-8 py-4 text-blue-900 font-medium">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`pb-1 border-b-2 ${
                      active
                        ? "border-blue-900 font-bold"
                        : "border-transparent hover:border-blue-400"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* MOBILE HEADER */}
      <div className="md:hidden bg-white border-b px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setOpen(true)}
          className="text-blue-900 font-semibold"
        >
          ☰ Menu
        </button>
        <span className="text-sm font-bold text-blue-900">Official Portal</span>
      </div>

      {/* MOBILE SLIDE MENU (LEFT) */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b font-bold text-blue-900">
            Navigation
          </div>

          <ul className="flex flex-col p-4 gap-4">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block ${
                      active
                        ? "text-blue-900 font-bold"
                        : "text-gray-700"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
  