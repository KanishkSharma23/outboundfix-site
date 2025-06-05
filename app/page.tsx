import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
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
              className="text-sm font-light tracking-wide text-white/90 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white/30"
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
              className="text-sm font-light tracking-wide text-white/70 hover:text-white/90 transition-colors relative hover:after:w-full after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white/30 after:transition-all after:duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <header className="max-w-4xl mx-auto px-6">
          <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            Fix Your{" "}
            <span
              className="italic inline-block"
              style={{
                background: "linear-gradient(to right, #E2E8F0, #F8FAFC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Times New Roman', 'Georgia', serif",
                letterSpacing: "0.02em",
                fontWeight: "400",
                textShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2)",
                filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))",
              }}
            >
              Outbound
            </span>
          </h1>
          <p className="text-center text-lg md:text-xl max-w-2xl mx-auto font-light text-white/70 leading-relaxed mt-6">
            We deliver qualified leads to your calendar, so you can focus on closing deals that matter.
          </p>
        </header>

        <main className="max-w-6xl mx-auto px-6 mt-24">
          {/* Impact Copy */}
          <section className="max-w-3xl mx-auto text-center mb-28">
            <p className="font-light text-xl md:text-2xl leading-relaxed text-white/80">
              If you run a service business and don't have cold leads coming in daily — you're already losing. We fix
              that.
            </p>
          </section>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-28">
            <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-8 flex flex-col glass-card hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <span className="text-3xl font-light mb-2 text-white">20,000+</span>
              <span className="text-sm text-white/60">Targeted prospects</span>
            </div>
            <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-8 flex flex-col glass-card hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <span className="text-3xl font-light mb-2 text-white">25+</span>
              <span className="text-sm text-white/60">Qualified leads monthly</span>
            </div>
            <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-8 flex flex-col items-center glass-card hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative w-16 h-16 mb-4 progress-circle">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />
                  <path
                    className="circle-progress"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="2"
                    strokeDasharray="96.4, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-light text-white">96.4%</span>
                </div>
              </div>
              <span className="text-sm text-white/60">Success rate</span>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="flex flex-col md:flex-row gap-16 mb-20">
            <div className="flex-1">
              <h2 className="text-2xl font-light mb-6 text-white">No gimmicks, only results</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Get 25+ real qualified leads a month with our proven outbound system. We handle everything from prospect
                identification to appointment booking.
              </p>
              <div className="h-[1px] w-16 bg-white/20 mb-6"></div>
              <p className="text-white/70 italic">"The only problem you'll ever have is too many appointments."</p>
            </div>

            {/* Divider Line */}
            <div className="hidden md:block w-[1px] bg-white/10 mx-8"></div>

            <div className="flex-1">
              <h2 className="text-2xl font-light mb-6 text-white">Direct. Precise. Effective.</h2>
              <p className="text-white/70 leading-relaxed">
                Our approach is methodical and refined. We identify decision-makers who can pay, reach out with
                compelling messages, and convert interest into scheduled meetings.
              </p>
            </div>
          </div>

          {/* Explore System Button */}
          <div className="flex justify-center mb-28">
            <Link href="/system">
              <Button className="bg-[#1e3a5f] hover:bg-[#2a4a6b] text-white font-light py-4 px-8 rounded-2xl text-sm tracking-wide transition-all border border-[#2a4a6b]/50 glow-effect">
                Explore the system
              </Button>
            </Link>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-white/10 my-28"></div>

          {/* System Overview */}
          <section className="mb-28">
            <h2 className="text-3xl font-light mb-16 text-center">The System</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-8 flex flex-col glass-card hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm text-white/40 mb-6">01</span>
                <h3 className="text-xl font-light mb-4">Target Intelligence</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We build a custom database of people who can pay, decide, and buy. This isn't a directory—it's a
                  handbuilt, qualified dataset.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-8 flex flex-col glass-card hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm text-white/40 mb-6">02</span>
                <h3 className="text-xl font-light mb-4">Outbound Engine</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We execute a multi-layer outbound campaign that hits the right people, in the right order, with the
                  right message.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-8 flex flex-col glass-card hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-sm text-white/40 mb-6">03</span>
                <h3 className="text-xl font-light mb-4">Booking Core</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Qualified, pre-warmed prospects land directly in your calendar, ready for meaningful conversations.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="mb-28 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-12 glass-card hover:border-white/10 transition-all duration-300">
              <p className="text-xl font-light italic mb-8 text-white/90 leading-relaxed">
                "We went from struggling to find quality leads to having more appointments than we could handle. The ROI
                has been exceptional."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 mr-4"></div>
                <div>
                  <p className="text-sm font-normal">Alex Richardson</p>
                  <p className="text-xs text-white/60">CEO, Meridian Financial</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-28 text-center">
            <h2 className="text-3xl font-light mb-6">Ready to transform your lead generation?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10">
              Book a strategy call to discuss how our system can be tailored to your specific business needs.
            </p>
            <Link href="/contact">
              <Button
                className="bg-[#000205] hover:bg-[#001122] text-white font-light py-4 px-8 rounded-2xl text-sm tracking-wide transition-all border border-white/20 relative overflow-hidden glow-effect"
                style={{
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)",
                }}
              >
                <span className="relative z-10 flex items-center">
                  Book a strategy call
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Button>
            </Link>
          </section>
        </main>
      </section>

      {/* Footer */}
      <footer className="bg-[#000205] py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="mb-10 md:mb-0">
              <div className="text-xl font-light tracking-wider mb-4">
                <span className="text-white">Outbound Fix</span>
              </div>
              <p className="text-white/40 max-w-xs text-sm">
                Transforming outbound lead generation with precision targeting and qualified appointments.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <h4 className="text-sm font-normal mb-4 text-white/80">Navigation</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-sm text-white/40 hover:text-white/60 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/system" className="text-sm text-white/40 hover:text-white/60 transition-colors">
                      The System
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-white/40 hover:text-white/60 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-normal mb-4 text-white/80">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-normal mb-4 text-white/80">Contact</h4>
                <ul className="space-y-3">
                  <li className="text-sm text-white/40">hello@outboundfix.com</li>
                  <li className="text-sm text-white/40">+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/5 mb-8"></div>

          <div className="text-center text-white/30 text-xs">
            © {new Date().getFullYear()} Outbound Fix. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
