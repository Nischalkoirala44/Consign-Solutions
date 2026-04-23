"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../favicon.ico"; 

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Brand Side */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 relative shrink-0">
              <Image src={logo} alt="Consign Solutions Logo" fill className="object-contain rounded-full" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight uppercase">Consign Solutions</span>
          </div>
          <p className="max-w-sm text-sm mb-6 leading-relaxed">
            Engineering digital precision for the modern era. We bridge the gap between complex logic and elegant design.
          </p>
          <div className="flex gap-4 items-center">
             <Link href="/privacy" className="text-xs hover:text-cyan-400 transition-colors underline decoration-slate-700 underline-offset-4">
              Privacy Policy
            </Link>
            <span className="text-slate-800">|</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">PAN: 610011290</span>
          </div>
        </div>

        {/* Contact Side */}
        <div className="space-y-6 md:text-right flex flex-col md:items-end">
          <h4 className="text-white font-semibold text-xs tracking-[0.2em] uppercase mb-2">Contact Us</h4>
          
          <div className="space-y-5">
            <div className="flex items-center gap-3 md:justify-end text-sm group">
              <span className="text-slate-400 group-hover:text-slate-300 transition-colors">SANKHAMUL, KATHMANDU</span>
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-3 md:justify-end text-sm group">
              <a href="mailto:work@prasuco.com" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">work@prasuco.com</a>
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-3 md:justify-end text-sm group">
              <a href="tel:+9779811012158" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">+977 9811012158</a>
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
          &copy; {new Date().getFullYear()} Consign Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}