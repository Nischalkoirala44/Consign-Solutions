"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

// Image Imports
import ceo from "../public/ceo.jpeg";
import prabin from "../public/prabin.jpeg";
import frontend from "../public/frontend.jpeg";
import ui from "../public/ui.jpeg";
import graphics from "../public/graphics.jpeg";
import logo from "./favicon.ico";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className={`min-h-screen bg-[#F8FAFC] text-slate-700 ${poppins.className} overflow-x-hidden`}>
      {/* Hero Section */}
      <section id="home" className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 text-center max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.15]">
          Next-Generation <span className="text-cyan-600">IT Solutions</span> for Modern Business.
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mb-10 leading-relaxed">
          We engineer robust, scalable, and beautifully designed digital experiences to elevate your brand and streamline your operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#contact" className="bg-cyan-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-600/25 text-center">
            Get in Touch
          </a>
          <a href="#services" className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-sm text-center">
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section */}
<section id="services" className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-cyan-600 font-bold uppercase tracking-[0.2em] text-xs">Our Expertise</span>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-4">Core Solutions</h2>
      <p className="text-slate-500 max-w-lg mx-auto">
        Delivering excellence across the digital spectrum through technical precision and creative vision.
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      
      {/* Web Development */}
      <div className="group p-8 rounded-3xl bg-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
        <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Web Development</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          High-performance, SEO-optimized websites built with Next.js and React to provide a seamless user experience.
        </p>
      </div>

      {/* Software Development */}
      <div className="group p-8 rounded-3xl bg-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
        <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
          {"</>"}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Software Development</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Custom enterprise-grade software and SaaS platforms engineered for security, scalability, and long-term reliability.
        </p>
      </div>

      {/* Mobile Solutions */}
      <div className="group p-8 rounded-3xl bg-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
        <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Apps</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Native and cross-platform mobile experiences utilizing .NET MAUI and Flutter for consistent performance on iOS and Android.
        </p>
      </div>

      {/* UI/UX Design */}
      <div className="group p-8 rounded-3xl bg-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
        <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
          UX
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">UI/UX Design</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          User-centric design systems that balance aesthetic beauty with functional efficiency to maximize user retention.
        </p>
      </div>

      {/* Digital Branding */}
      <div className="group p-8 rounded-3xl bg-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
        <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
          GD
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Graphic Design</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Crafting compelling visual identities and branding materials that elevate your market presence.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Team</h2>
          <p className="text-slate-500 mb-16">The experts driving digital transformation.</p>

          {/* CEO */}
          <div className="mb-20">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full mb-4 shadow-md border-4 border-white overflow-hidden relative">
                <Image 
                  src={ceo} 
                  alt="Prajwal Acharya" 
                  fill 
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Prajwal Acharya</h3>
              <p className="text-cyan-600 font-semibold text-sm">Founder CEO</p>
            </div>
          </div>

          {/* Developers & Designers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { name: "Prabin Subedi", role: "Fullstack Developer", img: prabin },
              { name: "Tanchhohang Chemjong", role: "Frontend Developer", img: frontend },
              { name: "Sunischya Khatiwada", role: "UI/UX Designer", img: ui },
              { name: "Ronit Subba", role: "Graphics Designer", img: graphics }
            ].map((member, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-4 shadow-sm border-2 border-white overflow-hidden relative">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900">{member.name}</h3>
                <p className="text-slate-500 text-xs sm:text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}