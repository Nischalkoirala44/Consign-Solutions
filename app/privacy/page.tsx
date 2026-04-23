"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"] 
});

export default function Privacy() {
  return (
    <main className={`min-h-screen bg-slate-50 pt-32 md:pt-48 pb-24 px-6 ${poppins.className}`}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.2em] text-xs">Legal Documentation</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-medium">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Policy Content Container */}
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-200">
          <div className="prose prose-slate max-w-none">
            
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-sm">01</span>
                <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
              </div>
              <p className="text-slate-600 leading-relaxed pl-12">
                We only collect information that you voluntarily provide to us when expressing interest in our services via our contact forms. This typically includes your name, email address, and details regarding your specific project requirements.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-sm">02</span>
                <h2 className="text-2xl font-bold text-slate-900">How We Use Information</h2>
              </div>
              <p className="text-slate-600 leading-relaxed pl-12">
                Your data is used strictly for professional communication. We process your information to respond to your project inquiries, provide technical support, and maintain our business relationship with you. We do not sell or share your data with third-party marketing agencies.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-sm">03</span>
                <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
              </div>
              <p className="text-slate-600 leading-relaxed pl-12">
                Consign Solutions implements industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration. We utilize secure hosting environments and encrypted communication protocols to ensure your data remains safe.
              </p>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4 text-center">Questions regarding our policy?</h2>
              <div className="flex justify-center">
                <Link href="/#contact" className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors flex items-center gap-2">
                  Contact our legal team
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}