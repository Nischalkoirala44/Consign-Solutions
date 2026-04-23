"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// Image Imports
import ceo from "../../public/ceo.jpeg";
import prabin from "../../public/prabin.jpeg";
import frontend from "../../public/frontend.jpeg";
import ui from "../../public/ui.jpeg";
import graphics from "../../public/graphics.jpeg";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"] 
});

export default function About() {
  return (
    <main className={`min-h-screen bg-white ${poppins.className}`}>
      
      {/* Hero-Style Header Section */}
      <section className="pt-32 md:pt-48 pb-16 px-6 text-center max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.15]">
          Pioneering <span className="text-cyan-600">Digital Growth</span> <br className="hidden md:block" /> Through Strategic Innovation.
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mb-10 leading-relaxed">
          Consign Solutions is more than a development agency; we are your strategic partner in navigating the complexities of the modern digital landscape.
        </p>
        <div className="flex gap-4">
           <Link href="/#contact" className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-600/20">
            Work With Us
          </Link>
        </div>
      </section>

      {/* Mission & Vision: Using the Card Style from your Hero */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower enterprises by delivering high-performance software that drives growth, streamlines operations, and creates lasting value in an ever-evolving market.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To become a global benchmark for digital transformation, recognized for our technical precision, ethical design standards, and relentless pursuit of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section with Consistent Cyan Highlights */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-cyan-600 font-bold uppercase tracking-widest text-xs">The Minds Behind the Code</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-16">Meet Our Core Team</h2>

          {/* CEO - High Impact */}
          <div className="mb-24 flex flex-col items-center">
            <div className="relative w-48 h-48 mb-6">
              <div className="absolute inset-0 bg-cyan-600 rounded-full blur-2xl opacity-10 scale-110"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image 
                  src={ceo} 
                  alt="Prajwal Acharya" 
                  fill 
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900">Prajwal Acharya</h3>
            <p className="text-cyan-600 font-bold tracking-tight mt-1">FOUNDER & CEO</p>
          </div>

          {/* Core Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: "Prabin Subedi", role: "Fullstack Developer", img: prabin },
              { name: "Tanchhohang Chemjong", role: "Frontend Developer", img: frontend },
              { name: "Sunischya Khatiwada", role: "UI/UX Designer", img: ui },
              { name: "Ronit Subba", role: "Graphics Designer", img: graphics }
            ].map((member, idx) => (
              <div key={idx} className="group flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <div className="absolute inset-0 bg-slate-200 rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:bg-cyan-50"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <Image 
                      src={member.img} 
                      alt={member.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      placeholder="blur"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-lg transition-colors group-hover:text-cyan-600">{member.name}</h3>
                <p className="text-slate-400 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}