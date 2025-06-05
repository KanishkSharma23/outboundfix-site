import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function System() {
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
              className="text-sm font-light tracking-wide text-white/90 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white/30"
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
          <h1 className="text-center text-5xl md:text-6xl font-light mb-6 tracking-tight">The System</h1>
          <p className="text-center text-lg max-w-2xl mx-auto font-light text-white/70 leading-relaxed mt-4">
            A methodical approach to generating qualified leads and booking appointments with decision-makers.
          </p>
        </header>

        <main className="max-w-6xl mx-auto px-6 mt-24">
          {/* System Overview */}
          <section className="mb-28">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="font-light text-xl md:text-2xl leading-relaxed text-white/80">
                Our system is built for businesses that are done playing small. It's designed to deliver a consistent
                flow of qualified, high-ticket conversations — without you lifting a finger.
              </p>
            </div>

            {/* System Steps */}
            <div className="space-y-28">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <span className="text-sm text-white/40 mb-4 block">01</span>
                  <h2 className="text-3xl font-light mb-6">Target Intelligence™</h2>
                  <p className="text-white/70 leading-relaxed mb-8">
                    You tell us who you want. We build a custom database of people who can pay, decide, and buy. This
                    isn't a directory—it's a handbuilt, qualified ICP dataset.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">Industry targeting</p>
                        <p className="text-sm text-white/50">Only profitable verticals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">Decision-maker focus</p>
                        <p className="text-sm text-white/50">Targeting those with authority</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">Budget markers</p>
                        <p className="text-sm text-white/50">Hidden buyer signals</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm aspect-square flex items-center justify-center glass-card hover:border-white/10 transition-all duration-300">
                    <div className="relative w-24 h-24 progress-circle">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="circle-bg"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="2"
                        />
                        <path
                          className="circle-progress"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                          strokeDasharray="25, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-light text-white">25%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                  <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm aspect-square flex items-center justify-center glass-card hover:border-white/10 transition-all duration-300">
                    <div className="relative w-24 h-24 progress-circle">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="circle-bg"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="2"
                        />
                        <path
                          className="circle-progress"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                          strokeDasharray="50, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-light text-white">50%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-sm text-white/40 mb-4 block">02</span>
                  <h2 className="text-3xl font-light mb-6">Outbound Engine™</h2>
                  <p className="text-white/70 leading-relaxed mb-8">
                    Once the list is locked, we execute a multi-layer outbound campaign that hits the right people, in
                    the right order, with the right message.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">Precision copywriting</p>
                        <p className="text-sm text-white/50">Opens doors, not spam folders</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">Sequenced outreach</p>
                        <p className="text-sm text-white/50">Across inboxes & platforms</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">A/B testing</p>
                        <p className="text-sm text-white/50">Maximizing response rates</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <span className="text-sm text-white/40 mb-4 block">03</span>
                  <h2 className="text-3xl font-light mb-6">Conversion Filter™</h2>
                  <p className="text-white/70 leading-relaxed mb-8">
                    Not all replies are created equal. We filter them before you ever see them, ensuring you only talk
                    to serious prospects.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">Real-time triage</p>
                        <p className="text-sm text-white/50">Immediate response handling</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">Disqualification</p>
                        <p className="text-sm text-white/50">Removing time-wasters</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">Decision-maker focus</p>
                        <p className="text-sm text-white/50">Booking only qualified leads</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm aspect-square flex items-center justify-center glass-card hover:border-white/10 transition-all duration-300">
                    <div className="relative w-24 h-24 progress-circle">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="circle-bg"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="2"
                        />
                        <path
                          className="circle-progress"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                          strokeDasharray="75, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-light text-white">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                  <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm aspect-square flex items-center justify-center glass-card hover:border-white/10 transition-all duration-300">
                    <div className="relative w-24 h-24 progress-circle">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="circle-bg"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="2"
                        />
                        <path
                          className="circle-progress"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                          strokeDasharray="100, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-light text-white">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-sm text-white/40 mb-4 block">04</span>
                  <h2 className="text-3xl font-light mb-6">Booking Core™</h2>
                  <p className="text-white/70 leading-relaxed mb-8">
                    The final output? Qualified, pre-warmed prospects landing directly in your calendar, ready for
                    meaningful conversations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">Calendar integration</p>
                        <p className="text-sm text-white/50">Booked into your preferred slots</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">CRM integration</p>
                        <p className="text-sm text-white/50">Synced with your sales stack</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <div>
                        <p className="font-light text-white/80">Performance reporting</p>
                        <p className="text-sm text-white/50">Weekly metrics and insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="h-[1px] w-full bg-white/10 my-28"></div>

          {/* Results Section */}
          <section className="mb-28">
            <h2 className="text-3xl font-light mb-12 text-center">The Outcome</h2>

            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="font-light text-xl md:text-2xl leading-relaxed text-white/80">
                Let's be honest — you're not here for leads. You're here for results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-8 glass-card hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-light mb-4">Sales Calls That Convert</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Pre-qualified prospects who are ready to talk business and understand the value you provide.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-8 glass-card hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-light mb-4">Speed to Market</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  No more waiting months for results. Our system delivers qualified leads within weeks.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-8 glass-card hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-light mb-4">Volume Without Sacrificing Quality</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Scale your outreach without diluting the quality of your prospects or conversations.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#000205] backdrop-blur-sm p-8 glass-card hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-light mb-4">Predictable Growth</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  A consistent flow of opportunities that allows you to forecast and scale with confidence.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-28 text-center">
            <h2 className="text-3xl font-light mb-6">Ready to implement this system?</h2>
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
