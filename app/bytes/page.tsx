
"use client";

import { useState } from "react";

const WHATSAPP_LINK =
  "https://wa.me/919980102146?text=Hi%20V-ONE%20Bytes%2C%20I%27m%20interested%20in%20discussing%20a%20digital%20project.%20Could%20we%20connect%3F";

const services = [
  {
    number: "01",
    title: "Web Development",
    subtitle: "Digital experiences that perform.",
    description:
      "We design and develop business websites, online stores, landing pages and web portals. Every website is mobile-friendly, fast-loading and easy to manage.",
    items: ["Business websites", "Online stores", "Landing pages", "Web portals"],
    symbol: "</>",
  },
  {
    number: "02",
    title: "App Development",
    subtitle: "Your business in every pocket.",
    description:
      "We build Android and iOS applications that are intuitive, reliable and ready to grow, from booking and delivery apps to custom tools for your team.",
    items: ["Android applications", "iOS applications", "Booking & delivery apps", "Admin dashboards"],
    symbol: "▣",
  },
  {
    number: "03",
    title: "SEO Services",
    subtitle: "Get found. Get chosen.",
    description:
      "We improve your visibility on search engines through keyword research, website optimisation and technical SEO to help your business attract relevant enquiries.",
    items: ["Keyword research", "On-page SEO", "Technical SEO", "Local SEO"],
    symbol: "⌕",
  },
  {
    number: "04",
    title: "Website Management",
    subtitle: "We look after your digital presence.",
    description:
      "We handle updates, backups, security checks, speed improvements and content changes to keep your website secure, fresh and online.",
    items: ["Content updates", "Regular backups", "Security monitoring", "Speed optimisation"],
    symbol: "⌘",
  },
  {
    number: "05",
    title: "Technical Support",
    subtitle: "Reliable support beyond launch.",
    description:
      "We help maintain your digital systems, troubleshoot issues and provide ongoing technical assistance as your business grows.",
    items: ["Troubleshooting", "Website maintenance", "Technical assistance", "Ongoing support"],
    symbol: "⌁",
  },
];

const projects = [
  {
    number: "01",
    name: "MACIPOLISYS",
    type: "MOBILE APPLICATION",
    description: "Explore the MACIPOLISYS mobile application.",
    href: "https://play.google.com/store/apps/details?id=com.macipolisys.app",
    action: "VIEW ON GOOGLE PLAY",
    icon: "M",
  },
  {
    number: "02",
    name: "Macis infiX",
    type: "WEBSITE",
    description: "Explore the Macis infiX website.",
    href: "https://macisinfix.com/",
    action: "VISIT WEBSITE",
    icon: "Mi",
  },
  {
    number: "03",
    name: "Macis Infotech",
    type: "WEBSITE",
    description: "Explore the Macis Infotech website.",
    href: "https://macisinfotech.com/",
    action: "VISIT WEBSITE",
    icon: "IT",
  },
  {
    number: "04",
    name: "Macis Pharma",
    type: "WEBSITE",
    description: "Explore the Macis Pharma website.",
    href: "https://macisipharma.com/",
    action: "VISIT WEBSITE",
    icon: "MP",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your business, goals, audience and requirements.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "We define the right solution, structure and experience for your project.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Our team brings the design to life through development and testing.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We launch your product and help you maintain and grow it.",
  },
];

function TechnologyVisual() {
  return (
    <div className="tech-visual relative mx-auto h-[520px] w-full max-w-[600px]">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/[0.05] blur-[90px]" />

      {/* Main code editor */}
      <div className="tech-window code-window absolute left-[5%] top-[9%] z-20 w-[65%] overflow-hidden rounded-lg">
        <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-[#111E32] px-4">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-300/80" />
          <span className="h-2 w-2 rounded-full bg-green-400/80" />
          <span className="ml-3 text-[9px] tracking-wider text-white/50">
            app.tsx
          </span>
        </div>

        <div className="bg-[#091426] p-4 font-mono text-[10px] leading-[2] sm:p-5 sm:text-[11px]">
          <div className="text-white/30">01</div>
          <div>
            <span className="text-purple-300">import</span>{" "}
            <span className="text-cyan-200">React</span>{" "}
            <span className="text-white/50">from</span>{" "}
            <span className="text-green-300">&quot;react&quot;</span>
          </div>
          <div className="text-white/30">02</div>
          <div>
            <span className="text-purple-300">const</span>{" "}
            <span className="text-cyan-200">Product</span>{" "}
            <span className="text-white/60">=</span>{" "}
            <span className="text-yellow-200">()</span>{" "}
            <span className="text-white/60">=&gt;</span>{" "}
            <span className="text-white/60">{"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-purple-300">return</span>{" "}
            <span className="text-white/60">(</span>
          </div>
          <div className="pl-8 text-green-300">
            &lt;DigitalExperience /&gt;
          </div>
          <div className="pl-4 text-white/60">)</div>
          <div className="text-white/60">{"}"}</div>
          <div className="mt-3 flex items-center gap-2 text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            BUILD SUCCESSFUL
          </div>
        </div>
      </div>

      {/* Mobile app preview */}
      <div className="tech-window phone-window absolute right-[4%] top-[24%] z-30 w-[28%] rounded-[18px] p-2">
        <div className="overflow-hidden rounded-[12px] bg-[#0B1A30]">
          <div className="flex items-center justify-between px-3 py-3">
            <span className="text-[8px] font-bold tracking-wider text-white">
              APP UI
            </span>
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
          </div>
          <div className="mx-2 rounded-md bg-gradient-to-br from-blue-500/40 to-cyan-300/10 p-3">
            <div className="h-2 w-12 rounded bg-cyan-200/70" />
            <div className="mt-2 h-2 w-16 rounded bg-white/30" />
            <div className="mt-5 flex h-12 items-center justify-center rounded bg-cyan-300/10">
              <span className="text-xl text-cyan-200">▣</span>
            </div>
          </div>
          <div className="space-y-2 p-3">
            <div className="h-2 w-full rounded bg-white/15" />
            <div className="h-2 w-4/5 rounded bg-white/10" />
            <div className="mt-3 h-6 rounded bg-cyan-300/80" />
          </div>
        </div>
      </div>

      {/* API connection panel */}
      <div className="tech-window api-window absolute bottom-[15%] left-[8%] z-30 w-[40%] rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold tracking-[0.18em] text-cyan-200">
            API CONNECTION
          </span>
          <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="rounded bg-cyan-300/10 px-2 py-1 font-mono text-[9px] text-cyan-200">
            GET
          </span>
          <span className="font-mono text-[9px] text-white/55">
            /api/v1/data
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
        </div>
        <div className="mt-2 text-[8px] text-green-300">
          200 · CONNECTION ACTIVE
        </div>
      </div>

      {/* Database panel */}
      <div className="tech-window database-window absolute bottom-[8%] right-[4%] z-20 w-[37%] rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-blue-300/20 bg-blue-400/10 text-lg text-blue-200">
            ◉
          </div>
          <div>
            <div className="text-[9px] font-bold tracking-wider text-white">
              DATABASE
            </div>
            <div className="mt-1 text-[8px] text-green-300">
              ● CONNECTED
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-1.5 w-full rounded bg-white/10" />
          <div className="h-1.5 w-4/5 rounded bg-white/10" />
          <div className="h-1.5 w-3/5 rounded bg-cyan-300/30" />
        </div>
      </div>

      {/* Floating technology labels */}
      <div className="tech-tag tech-tag-one absolute left-0 top-[3%] z-40">
        FRONTEND
      </div>
      <div className="tech-tag tech-tag-two absolute right-0 top-[8%] z-40">
        MOBILE
      </div>
      <div className="tech-tag tech-tag-three absolute bottom-[2%] left-[35%] z-40">
        BACKEND / API
      </div>

      {/* Connecting lines */}
      <svg
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 600 520"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M180 160 L330 160 L440 210"
          stroke="#36D9F5"
          strokeOpacity=".45"
          strokeWidth="1"
          strokeDasharray="5 6"
        />
        <path
          d="M180 360 L300 360 L450 400"
          stroke="#397BFF"
          strokeOpacity=".5"
          strokeWidth="1"
          strokeDasharray="5 6"
        />
        <path
          d="M440 210 L440 340"
          stroke="#36D9F5"
          strokeOpacity=".3"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <circle cx="330" cy="160" r="4" fill="#36D9F5" />
        <circle cx="300" cy="360" r="4" fill="#397BFF" />
        <circle cx="440" cy="340" r="4" fill="#36D9F5" />
      </svg>
    </div>
  );
}

export default function BytesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="bytes-page min-h-screen overflow-hidden bg-[#050914] text-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #050914;
        }

        .bytes-page {
          --cyan: #36d9f5;
          --blue: #397bff;
          --muted: #91a2bb;
          background:
            radial-gradient(
              ellipse at 75% 8%,
              rgba(31, 91, 190, 0.13),
              transparent 38%
            ),
            #050914;
        }

        .bytes-grid {
          background-image:
            linear-gradient(rgba(65, 151, 255, 0.075) 1px, transparent 1px),
            linear-gradient(90deg, rgba(65, 151, 255, 0.075) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 55%,
            transparent 100%
          );
        }

        .bytes-header {
          background: rgba(5, 9, 20, 0.88);
          backdrop-filter: blur(18px);
        }

        .bytes-accent,
        .bytes-kicker {
          color: var(--cyan);
        }

        .bytes-kicker {
          letter-spacing: 0.23em;
        }

        .tech-window {
          border: 1px solid rgba(74, 194, 239, 0.3);
          background: rgba(8, 20, 39, 0.94);
          box-shadow:
            0 12px 45px rgba(0, 0, 0, 0.35),
            0 0 25px rgba(54, 217, 245, 0.06);
          backdrop-filter: blur(12px);
          animation: techFloat 6s ease-in-out infinite;
        }

        .phone-window {
          animation-delay: -2s;
        }

        .api-window {
          animation-delay: -3.5s;
        }

        .database-window {
          animation-delay: -1s;
        }

        .tech-tag {
          border: 1px solid rgba(54, 217, 245, 0.35);
          background: rgba(6, 17, 38, 0.95);
          padding: 8px 11px;
          color: #9beafa;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.14em;
          box-shadow: 0 0 20px rgba(54, 217, 245, 0.08);
        }

        .tech-tag-two {
          animation: techFloat 5s ease-in-out -1s infinite;
        }

        .tech-tag-three {
          animation: techFloat 5s ease-in-out -2s infinite;
        }

        .tech-card {
          border: 1px solid rgba(108, 162, 219, 0.15);
          background: linear-gradient(
            145deg,
            rgba(14, 29, 54, 0.88),
            rgba(7, 14, 29, 0.96)
          );
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .tech-card:hover {
          transform: translateY(-6px);
          border-color: rgba(54, 217, 245, 0.5);
          box-shadow: 0 18px 55px rgba(24, 132, 220, 0.1);
        }

        .tech-button {
          background: linear-gradient(110deg, #36d9f5, #65a9ff);
          color: #04101e;
          transition: all 0.3s ease;
        }

        .tech-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(54, 217, 245, 0.25);
        }

        .tech-link {
          transition: color 0.25s ease;
        }

        .tech-link:hover {
          color: var(--cyan);
        }

        .project-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(108, 162, 219, 0.17);
          background: linear-gradient(
            145deg,
            rgba(13, 29, 53, 0.9),
            rgba(6, 13, 27, 0.98)
          );
          transition: all 0.35s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(54, 217, 245, 0.52);
          box-shadow: 0 20px 50px rgba(26, 147, 221, 0.1);
        }

        @keyframes techFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @media (max-width: 767px) {
          .tech-visual {
            height: 390px !important;
            margin-top: 15px;
          }

          .code-window {
            left: 1%;
            top: 10%;
            width: 68%;
          }

          .phone-window {
            right: 0;
            top: 24%;
            width: 29%;
          }

          .api-window {
            bottom: 13%;
            left: 2%;
            width: 43%;
          }

          .database-window {
            right: 1%;
            bottom: 8%;
            width: 39%;
          }

          .tech-tag {
            font-size: 7px;
            padding: 7px 8px;
          }

          .tech-tag-one {
            top: 1%;
          }

          .tech-tag-two {
            top: 5%;
          }
        }

        @media (max-width: 380px) {
          .tech-visual {
            height: 340px !important;
          }

          .code-window {
            width: 66%;
          }

          .phone-window {
            width: 29%;
          }

          .api-window,
          .database-window {
            padding: 10px;
          }

          .tech-tag {
            font-size: 6px;
            padding: 6px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="bytes-grid absolute inset-0" />
        <div className="absolute -right-40 top-40 h-[450px] w-[450px] rounded-full bg-blue-500/[0.06] blur-[120px]" />
        <div className="absolute -left-40 top-[65%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.05] blur-[120px]" />
      </div>

      {/* NAVIGATION */}
      <header className="bytes-header sticky top-0 z-50 border-b border-white/[0.08]">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <a href="/" className="flex flex-col leading-none">
            <span className="text-[11px] font-bold tracking-[0.3em]">
              V-ONE
            </span>
            <span className="mt-2 text-[13px] font-bold tracking-[0.28em] text-cyan-300">
              BYTES<span className="text-white">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            <a href="#about" className="tech-link text-[12px] text-white/65">
              About
            </a>
            <a href="#services" className="tech-link text-[12px] text-white/65">
              Services
            </a>
            <a href="#projects" className="tech-link text-[12px] text-white/65">
              Projects
            </a>
            <a href="#process" className="tech-link text-[12px] text-white/65">
              Our Process
            </a>
            <a href="#contact" className="tech-link text-[12px] text-white/65">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href="/"
              className="tech-link text-[10px] font-semibold tracking-[0.12em] text-white/55"
            >
              V-ONE GROUPS ↗
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button px-5 py-3 text-[9px] font-bold tracking-[0.15em]"
            >
              CHAT ON WHATSAPP ↗
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] border border-white/15 md:hidden"
          >
            <span
              className={`h-px w-5 bg-white transition ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-white transition ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#080F20] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Projects", "#projects"],
                ["Our Process", "#process"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="text-sm text-white/75"
                >
                  {label}
                </a>
              ))}

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="text-xs tracking-widest text-cyan-300"
              >
                CHAT ON WHATSAPP ↗
              </a>

              <a
                href="/"
                onClick={closeMenu}
                className="text-xs tracking-widest text-white/55"
              >
                V-ONE GROUPS ↗
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative z-10 min-h-[760px] overflow-hidden border-b border-white/[0.07] lg:min-h-[790px]">
        <div className="relative mx-auto grid min-h-[760px] max-w-[1440px] items-center px-5 pb-10 pt-20 sm:px-8 lg:min-h-[790px] lg:grid-cols-2 lg:px-14 lg:py-20">
          <div className="relative z-20 max-w-[690px]">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-cyan-300" />
              <span className="bytes-kicker text-[9px] font-semibold sm:text-[10px]">
                V-ONE GROUPS / DIGITAL TECHNOLOGY
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,8vw,7.3rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
              Build beyond.
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
                Think digital.
              </span>
            </h1>

            <p className="mt-9 max-w-[550px] text-[14px] leading-[2] text-[#A5B5CA] sm:text-[16px]">
              We are the technology and IT arm of V-ONE Groups. We build
              websites and apps, help customers find you on Google, and keep
              everything running smoothly after launch.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-button inline-flex items-center justify-center gap-8 px-7 py-[17px] text-[10px] font-bold tracking-[0.15em]"
              >
                LET&apos;S TALK ON WHATSAPP <span className="text-base">↗</span>
              </a>
              <a
                href="#services"
                className="tech-link inline-flex items-center gap-3 px-2 py-4 text-[10px] font-semibold tracking-[0.15em] text-white/65"
              >
                EXPLORE SERVICES <span className="text-cyan-300">↓</span>
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              {["WEBSITES", "APPS", "SEO", "WEBSITE CARE", "SUPPORT"].map(
                (item) => (
                  <span
                    key={item}
                    className="border border-cyan-300/15 bg-cyan-300/[0.04] px-3 py-2 text-[8px] tracking-[0.14em] text-cyan-100/65"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* TECHNOLOGY-BASED HERO VISUAL */}
          <div className="relative z-10 mt-10 lg:mt-0">
            <TechnologyVisual />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 border-b border-white/[0.07] py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-14">
          <div>
            <p className="bytes-kicker text-[10px] font-semibold">
              01 / ABOUT V-ONE BYTES
            </p>
            <h2 className="mt-7 max-w-[440px] text-4xl font-medium leading-[1.12] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Technology that grows your{" "}
              <span className="text-cyan-300">business.</span>
            </h2>
          </div>

          <div className="max-w-[700px] lg:pt-8">
            <p className="text-lg leading-[1.9] text-[#D6E2F1] sm:text-[21px]">
              V-ONE Bytes is the technology and IT division of V-ONE Groups.
              We create digital solutions that help businesses establish
              their presence, connect with customers and work smarter.
            </p>

            <p className="mt-7 text-sm leading-[2] text-[#91A2BB] sm:text-[15px]">
              From business websites and mobile applications to search
              visibility and ongoing website care, we bring design,
              development and technical support together under one roof.
              We believe technology should be useful, accessible and built
              around the people who use it.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-cyan-300" />
              <span className="text-[9px] font-semibold tracking-[0.17em] text-white/60">
                ONE TEAM. CONNECTED TECHNOLOGY.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end">
            <div>
              <p className="bytes-kicker text-[10px] font-semibold">
                02 / OUR SERVICES
              </p>
              <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Everything digital.
                <br />
                <span className="text-cyan-300">One technology partner.</span>
              </h2>
            </div>

            <p className="max-w-[360px] text-sm leading-[1.9] text-[#91A2BB]">
              From the first line of code to ongoing support, we help your
              business move forward with technology.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="tech-card group flex min-h-[340px] flex-col p-7 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-cyan-300">
                    SERVICE / {service.number}
                  </span>
                  <span className="text-2xl text-cyan-300/70 transition group-hover:scale-110">
                    {service.symbol}
                  </span>
                </div>

                <h3 className="mt-10 text-[23px] font-medium tracking-[-0.03em]">
                  {service.title}
                </h3>

                <p className="mt-2 text-[11px] font-semibold text-cyan-200/75">
                  {service.subtitle}
                </p>

                <p className="mt-4 text-[12px] leading-[1.9] text-[#91A2BB]">
                  {service.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-3 py-2 text-[9px] text-white/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section
        id="projects"
        className="relative z-10 overflow-hidden border-y border-white/[0.07] bg-[#081225] py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/[0.08] blur-[120px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end">
            <div>
              <p className="bytes-kicker text-[10px] font-semibold">
                03 / SELECTED PROJECTS
              </p>
              <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Built for the
                <br />
                <span className="text-cyan-300">real world.</span>
              </h2>
            </div>

            <p className="max-w-[350px] text-sm leading-[1.9] text-[#91A2BB]">
              Explore selected digital projects and platforms.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="project-card flex min-h-[250px] flex-col p-7 sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-cyan-300">
                    PROJECT / {project.number}
                  </span>
                  <span className="text-[9px] tracking-[0.15em] text-white/40">
                    {project.type}
                  </span>
                </div>

                <div className="mt-9 flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-cyan-300/25 bg-cyan-300/[0.07] text-lg font-bold text-cyan-200">
                    {project.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.04em]">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#91A2BB]">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <span className="text-[8px] tracking-[0.16em] text-white/35">
                    V-ONE BYTES
                  </span>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-link inline-flex items-center gap-3 text-[9px] font-bold tracking-[0.13em] text-cyan-300"
                  >
                    {project.action} <span className="text-base">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <p className="bytes-kicker text-[10px] font-semibold">
            04 / OUR PROCESS
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            From concept
            <br />
            <span className="text-cyan-300">to creation.</span>
          </h2>

          <p className="mt-6 max-w-[500px] text-sm leading-[1.9] text-[#91A2BB]">
            Every successful digital product starts with a clear
            understanding of the problem and a thoughtful plan to solve it.
          </p>

          <div className="mt-16 grid border-y border-white/10 md:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.number}
                className={`py-9 md:px-7 md:py-10 ${
                  index > 0
                    ? "border-t border-white/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <span className="text-[11px] font-semibold tracking-[0.2em] text-cyan-300">
                  {step.number}
                </span>

                <h3 className="mt-10 text-2xl font-medium">{step.title}</h3>

                <p className="mt-4 max-w-[240px] text-[12px] leading-[1.9] text-[#91A2BB]">
                  {step.description}
                </p>

                <div className="mt-10 h-px w-12 bg-gradient-to-r from-cyan-300 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 overflow-hidden border-t border-white/[0.07] bg-[#081225] py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <p className="bytes-kicker text-[10px] font-semibold">
            05 / LET&apos;S CONNECT
          </p>

          <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-[clamp(3.2rem,7vw,6.8rem)] font-medium leading-[0.98] tracking-[-0.06em]">
                Have an idea?
                <br />
                <span className="text-cyan-300">Let&apos;s build it.</span>
              </h2>

              <p className="mt-8 max-w-[490px] text-sm leading-[1.9] text-[#91A2BB]">
                Tell us what you have in mind. Let&apos;s discuss how
                technology can help your business move forward.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-button inline-flex items-center gap-10 px-8 py-5 text-[10px] font-bold tracking-[0.15em]"
              >
                START A CONVERSATION <span className="text-lg">↗</span>
              </a>

              <a
                href="tel:+919980102146"
                className="tech-link text-sm text-white/65"
              >
                +91 99801 02146
              </a>

              <a
                href="mailto:vonegroups@gmail.com"
                className="tech-link text-sm text-white/65"
              >
                vonegroups@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.07] bg-[#050914]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-14">
          <div>
            <p className="text-[11px] font-bold tracking-[0.28em]">
              V-ONE <span className="text-cyan-300">BYTES.</span>
            </p>
            <p className="mt-2 text-[10px] text-white/40">
              A technology division of V-ONE Groups
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[9px] tracking-[0.12em] text-white/45">
            <a href="#about" className="tech-link">ABOUT</a>
            <a href="#services" className="tech-link">SERVICES</a>
            <a href="#projects" className="tech-link">PROJECTS</a>
            <a href="#process" className="tech-link">PROCESS</a>
            <a href="#contact" className="tech-link">CONTACT</a>
          </div>

          <a
            href="/"
            className="tech-link text-[10px] font-semibold tracking-[0.12em] text-cyan-300"
          >
            V-ONE GROUPS ↗
          </a>

          <p className="text-[9px] text-white/30">
           © 2026 V-ONE Groups. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}