"use client"
import Link from "next/link"
import { useState } from "react"

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How quickly can we start?",
      answer: "We can typically start your campaign within 7-10 days after our strategy call and onboarding process.",
    },
    {
      question: "What industries do you work with?",
      answer: "We specialize in B2B services, SaaS, agencies, and professional services with deal sizes of $5k+.",
    },
    {
      question: "Do you guarantee results?",
      answer: "Yes, we guarantee 25+ qualified leads per month or we work for free until you get them.",
    },
    {
      question: "What's the investment?",
      answer:
        "Investment varies based on your market and volume requirements. We'll discuss pricing on our strategy call.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#000308] text-white noise-bg">
      {/* Subtle background elements */}
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="fixed top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#1E3A8A]/5 blur-[120px] -z-10 animate-pulse-glow"></div>
      <div className="fixed bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#312E81]/5 blur-[100px] -z-10 animate-pulse-glow"></div>
      <div className="fixed top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#1E3A8A]/3 blur-[80px] -z-10 animate-subtle-rotate"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#000308]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider">
            <span className="text-white">Outbound Fix</span>
          </Link>
          <div className="flex space-x-10">
            <Link
              href="/"
              className="text-sm font-light tracking-wide text-white/70 hover:text-white/90 transition-colors relative hover:after:w-full after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white/30 after:transition-all after:duration-300"
            >
              Home
            </Link>
            <Link
              href="/system"
              className="text-sm font-light tracking-wide text-white/70 hover:text-white/90 transition-colors relative hover:after:w-full after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white/30 after:transition-all after:duration-300"
            >
              The System
            </Link>
            <Link
              href="/contact"
              className="text-sm font-light tracking-wide text-white/90 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white/30"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="pt-32 pb-20">
        <header className="max-w-4xl mx-auto px-6">
          <h1 className="text-center text-5xl md:text-6xl font-light mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-center text-lg max-w-2xl mx-auto font-light text-white/70 leading-relaxed mt-4">
            Schedule a strategy call to discuss how our system can be tailored to your specific business needs.
          </p>
        </header>

        <main className="max-w-6xl mx-auto px-6 mt-24">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="flex-1">
              <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-10 glass-card">
                <h2 className="text-2xl font-light mb-8">Book Your Strategy Call</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light mb-2 text-white/70">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 bg-[#000308] border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors input-glow"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light mb-2 text-white/70">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 bg-[#000308] border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors input-glow"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-light mb-2 text-white/70">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 bg-[#000308] border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors input-glow"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light mb-2 text-white/70">Company</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-[#000308] border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors input-glow"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light mb-2 text-white/70">Monthly Revenue</label>
                    <select
                      required
                      className="w-full p-3 bg-[#000308] border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors input-glow"
                    >
                      <option value="">Select your monthly revenue</option>
                      <option value="0-10k">$0 - $10k</option>
                      <option value="10k-50k">$10k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k-500k">$100k - $500k</option>
                      <option value="500k+">$500k+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-light mb-2 text-white/70">Message</label>
                    <textarea
                      rows\
