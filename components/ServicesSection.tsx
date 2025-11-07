import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
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
            a: "Yes! Book as many sessions as you need for different challenges.",
          },
        ],
      },
    },
  ];

  return (
    <section className="bg-gradient-hero px-6 lg:px-12 pb-20" id="services">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
