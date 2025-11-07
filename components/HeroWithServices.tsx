import ServiceCard from "./ServiceCard";

export default function HeroWithServices() {
  const services = [
    {
      title: "AI for Business Analysts",
      bullets: ["Free prompts PDF", "Full workbook", "Real cases"],
      price: "PLN 60",
      originalPrice: "PLN 149",
      ctaLabel: "Buy Workbook",
      ctaUrl: "#materials",
      details: {
        intro: "Comprehensive workbook on leveraging AI tools in business analysis. Learn practical AI workflows, prompts, and real-world applications.",
        outcomes: [
          "Master AI-powered requirements gathering",
          "Automate documentation workflows",
          "Create better stakeholder communications",
          "Analyze data faster with AI",
          "Build your AI toolkit",
        ],
        includes: [
          "100+ AI prompts for BAs",
          "Real-world case studies",
          "Template library",
          "Video tutorials",
          "Lifetime updates",
        ],
        faq: [
          {
            q: "Do I need coding skills?",
            a: "No! This workbook focuses on using AI tools without programming.",
          },
          {
            q: "What AI tools are covered?",
            a: "ChatGPT, Claude, Gemini, and other popular AI assistants relevant to BA work.",
          },
        ],
      },
    },
    {
      title: "Consulting / 1:1",
      bullets: ["Discovery & scoping", "IoT flows", "AI frameworks"],
      price: "PLN 190 / 45 min",
      originalPrice: "PLN 390 / 45 min",
      ctaLabel: "Book 45-min",
      ctaUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "#",
      details: {
        intro: "One-on-one consulting sessions for specific challenges. Get expert advice on discovery, scoping, IoT flows, and AI implementation frameworks.",
        outcomes: [
          "Solve specific BA challenges",
          "Get expert validation on your approach",
          "Learn industry best practices",
          "Receive actionable recommendations",
          "Save time on complex problems",
        ],
        includes: [
          "45-minute focused session",
          "Screen sharing and collaboration",
          "Follow-up summary email",
          "Resource recommendations",
        ],
        faq: [
          {
            q: "What can we cover in 45 minutes?",
            a: "One focused topic: requirements review, process analysis, tool selection, or specific BA challenge.",
          },
          {
            q: "Can I book multiple sessions?",
            a: "Yes! Book as many sessions as you need for ongoing support.",
          },
        ],
      },
    },
    {
      title: "New workbook is coming soon",
      bullets: ["Advanced BA techniques", "Real-world projects", "Exclusive templates"],
      price: "Coming soon",
      ctaLabel: "Get early access",
      ctaUrl: "#materials",
      details: {
        intro: "An advanced workbook for experienced Business Analysts looking to level up their skills with cutting-edge methodologies and frameworks.",
        outcomes: [
          "Master advanced elicitation techniques",
          "Lead complex business transformation projects",
          "Create enterprise-level documentation",
          "Implement modern BA frameworks",
          "Build your professional portfolio",
        ],
        includes: [
          "Advanced case studies",
          "Project templates and frameworks",
          "Expert video walkthroughs",
          "Community access",
          "Lifetime updates",
        ],
        faq: [
          {
            q: "When will this be available?",
            a: "We're targeting Q1 2026. Sign up for early access to be notified when it launches.",
          },
          {
            q: "What's the expected price?",
            a: "Pricing will be announced closer to launch. Early access subscribers will get a special discount.",
          },
        ],
      },
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-hero px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Hero */}
          <div>
            {/* Overline */}
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                WELCOME
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi! I&apos;m<br />
              <span className="gradient-text">Stepan Sazanavets</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl font-semibold text-gray-700 mb-3">
              Business Analyst
            </p>

            {/* Short description */}
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Over 10 years of experience in IT. Started as a system analyst, the last 5 years as a business analyst. Worked with ERP/MRP systems, in IoT and manufacturing domains. Currently working in the AI domain at RedCore.
            </p>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <a
                href="https://www.linkedin.com/in/stepansazanovets/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-lg shadow-lg transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Let&apos;s Connect
              </a>
              <a
                href="https://t.me/your_channel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-white bg-[#0088cc] hover:bg-[#006699] rounded-lg shadow-lg transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z"/>
                </svg>
                TG Channel
              </a>
            </div>

            {/* Secondary Telegram button */}
            <div className="mb-4">
              <a
                href="https://t.me/psyreq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-700 bg-white border-2 border-gray-400 hover:border-[#0088cc] hover:text-[#0088cc] rounded-lg transition-all w-full"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z"/>
                </svg>
                Personal TG (DMs open)
              </a>
            </div>

            {/* Additional buttons */}
            <div className="space-y-2">
              <a
                href={process.env.NEXT_PUBLIC_BOOKING_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold text-white bg-[#5B4FC7] hover:bg-[#4A3FB3] rounded-lg shadow-lg transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Free Consultation
              </a>
              <a
                href="/Stepan_Sazanavets_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold text-gray-700 bg-white border-2 border-gray-400 hover:border-brand-purple hover:text-brand-purple rounded-lg transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="flex flex-col gap-4">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
