"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../favicon.ico"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Detects current route
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper function to check if link is active
  const isActive = (path: string) => pathname === path;

  // Shared classes for desktop and mobile links
  const linkClasses = (path: string) => 
    `transition-colors duration-200 ${
      isActive(path) 
        ? "text-cyan-600 font-bold" 
        : "text-slate-600 hover:text-cyan-600 font-semibold"
    }`;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 relative shrink-0">
            <Image src={logo} alt="Consign Solutions Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight uppercase">
            Consign Solutions
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <Link href="/" className={linkClasses("/")}>Home</Link>
          <Link href="/about" className={linkClasses("/about")}>About</Link>
          <Link href="/projects" className={linkClasses("/projects")}>Projects</Link>
          <a 
            href="/#contact" 
            className="text-slate-600 hover:text-cyan-600 font-semibold transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 flex flex-col gap-5 animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={toggleMenu} className={linkClasses("/")}>Home</Link>
          <Link href="/about" onClick={toggleMenu} className={linkClasses("/about")}>About</Link>
          <Link href="/projects" onClick={toggleMenu} className={linkClasses("/projects")}>Projects</Link>
          <a 
            href="/#contact" 
            onClick={toggleMenu} 
            className="text-slate-600 hover:text-cyan-600 font-semibold"
          >
            Contact
          </a>
          
          <Link 
            href="/#contact" 
            onClick={toggleMenu}
            className="bg-cyan-600 text-white text-center py-3 rounded-xl font-bold shadow-lg shadow-cyan-600/20"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}