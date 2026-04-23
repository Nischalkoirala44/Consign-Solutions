"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import FMS from "../../public/fms.png"
import Garocha from "../../public/garocha.png"
import FCRUM from "../../public/FCRUM.png"
import Dartasoft from "../../public/DARTA.png"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const stats = [
  { label: "Successful Deployments", value: "20+" },
  { label: "Core Industries", value: "5+" },
];

const projects = [
  { 
    title: "E-File Portal", 
    tagline: "Enterprise Document Flow", 
    desc: "A secure, centralized ecosystem designed for seamless digital archiving and encrypted document management.", 
    link: "https://e-fileportal.com/",
    img: FMS
  },
  { 
    title: "Garocha", 
    tagline: "Scalable E-Commerce", 
    desc: "An optimized retail engine focused on lightning-fast load times and a frictionless checkout experience.", 
    link: "https://garocha.com/",
    img: Garocha
  },
  { 
    title: "FCRUM", 
    tagline: "Unified Community Hub", 
    desc: "A robust digital framework built to streamline community interactions and resource management in real-time.", 
    link: "https://fcrum.org/",
    img: FCRUM
  },
  { 
    title: "Dartasoft", 
    tagline: "SaaS Infrastructure", 
    desc: "A comprehensive backend solution for modern teams, featuring secure authentication and workspace automation.", 
    link: "https://dartasoft.com/login",
    img: Dartasoft
  }
];

export default function Projects() {
  return (
    <main className={`min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6 ${poppins.className}`}>
      
      {/* New Original Slogan Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          Engineering <span className="text-cyan-600">Digital Precision</span> for the Modern Era.
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          At Consign Solutions, we bridge the gap between complex logic and elegant design. We build scalable architectures that turn visionary concepts into high-performance digital reality.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:border-cyan-200 transition-colors">
            <div className="text-4xl font-bold text-cyan-600 mb-2">{stat.value}</div>
            <div className="text-slate-400 font-semibold text-xs uppercase tracking-[0.2em]">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Projects Showcase */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-l-4 border-cyan-600 pl-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Proven <span className="text-cyan-600">Solutions</span>
          </h2>
          <p className="text-slate-500 mt-2 font-medium">A selection of live platforms engineered with technical rigor and creative focus.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, idx) => (
            <div key={idx} className="bg-white group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              
              {/* Image Container Placeholder */}
              <div className="relative h-56 w-full bg-slate-200 overflow-hidden">
                <Image 
                  src={p.img} 
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[50%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{p.title}</h3>
                <p className="text-cyan-600 font-bold text-xs mb-4 uppercase tracking-widest">{p.tagline}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {p.desc}
                </p>
                
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors group/link"
                >
                  Explore Project 
                  <svg 
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}