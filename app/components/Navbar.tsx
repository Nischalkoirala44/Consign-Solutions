"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../favicon.ico"; // Adjust path if needed

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 relative shrink-0">
            <Image src={logo} alt="Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-lg sm:text-xl text-slate-800 tracking-tight">
            Consign Solutions
          </span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-semibold text-sm">
          <Link href="/" className="hover:text-cyan-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-cyan-600 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-cyan-600 transition-colors">Projects</Link>
          <a href="/#contact" className="hover:text-cyan-600 transition-colors">Contact</a>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 flex flex-col gap-4 font-semibold">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/about" onClick={toggleMenu}>About</Link>
          <Link href="/projects" onClick={toggleMenu}>Projects</Link>
          <a href="/#contact" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}