
"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Website Development",
    subtitle: "Digital experiences built to perform.",
    description:
      "We build modern, responsive websites that communicate your brand, engage visitors and turn ideas into meaningful digital experiences.",
    tags: ["Business websites", "Portfolio websites", "Landing pages", "Corporate websites"],
    symbol: "⌘",
  },
  {
    number: "02",
    title: "Mobile App Development",
    subtitle: "Your ideas. In everyone's hands.",
    description:
      "From concept to launch, we create intuitive mobile applications designed for seamless experiences across Android and iOS.",
    tags: ["Android apps", "iOS apps", "Cross-platform apps", "App deployment"],
    symbol: "▣",
  },
  {
    number: "03",
    title: "Web Applications",
    subtitle: "Powerful systems for modern businesses.",
    description:
      "We develop functional web applications that simplify workflows, connect users and help businesses operate more efficiently.",
    tags: ["Custom platforms", "Dashboards", "Admin panels", "Business portals"],
    symbol: "⌘",
  },
  {
    number: "04",
    title: "UI/UX Design",
    subtitle: "Designed around people.",
    description:
      "We transform complex ideas into clear, intuitive interfaces through thoughtful research, visual design and user-focused experiences.",
    tags: ["User research", "Wireframes", "Prototyping", "Interface design"],
    symbol: "◉",
  },
  {
    number: "05",
    title: "Custom Software",
    subtitle: "Technology shaped around your needs.",
    description:
      "We create tailored software solutions that address specific business requirements, improve processes and support long-term growth.",
    tags: ["Custom systems", "Automation", "Business tools", "Integrations"],
    symbol: "⌬",
  },
  {
    number: "06",
    title: "E-commerce Solutions",
    subtitle: "Turn digital visits into business.",
    description:
      "We build online stores that make product discovery, shopping and order management simple for both customers and businesses.",
    tags: ["Online stores", "Product catalogues", "Payment integration", "Order management"],
    symbol: "◇",
  },
  {
    number: "07",
    title: "Technology Consulting",
    subtitle: "Make your next move a smarter one.",
    description:
      "We help businesses identify opportunities, choose suitable technologies and plan practical digital solutions for their goals.",
    tags: ["Digital strategy", "Technology planning", "System improvement", "Technical guidance"],
    symbol: "↗",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, challenges and the outcome you want to achieve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We plan the architecture and create an experience that balances usability and functionality.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We turn the approved concept into a working digital product through structured development.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "We test, launch and prepare your solution for real-world use.",
  },
];

export default function BytesPage() {
  return (
    <main className="bytes-page min-h-screen overflow-hidden text-[#F3F6FC]">
      <div className="bytes-ambient-background" aria-hidden="true">
        <span className="bytes-ambient-light bytes-light-one" />
        <span className="bytes-ambient-light bytes-light-two" />
        <span className="bytes-ambient-light bytes-light-three" />
        <span className="bytes-ambient-grain" />
      </div>

      <header className="bytes-header sticky top-0 z-50 border-b border-white/10">
        <div className="mx-auto flex min-h-[82px] max-w-[1500px] items-center justify-between gap-4 px-5 md:px-12">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="bytes-logo-mark">V</span>
            <span className="text-[12px] font-semibold leading-5 tracking-[0.2em]">
              V-ONE
              <span className="block text-[#48B9FF]">BYTES</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-[13px] text-white/75 lg:flex">
            <a href="#about" className="bytes-nav-link">About</a>
            <a href="#services" className="bytes-nav-link">Services</a>
            <a href="#process" className="bytes-nav-link">Our Process</a>
            <a href="#contact" className="bytes-nav-link">Contact</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="bytes-home-link">
              <span>⌂</span>
              <span className="hidden sm:inline">V-ONE GROUPS</span>
              <span className="sm:hidden">HOME</span>
            </Link>
            <a
              href="https://wa.me/919980102146?text=Hello%20V-ONE%20Bytes%2C%20I%20would%20like%20to%20discuss%20a%20website%20or%20app%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="bytes-primary-button"
            >
              TEXT US ON WHATSAPP ↗
            </a>
          </div>
        </div>
      </header>

      
{/* HERO SECTION */}
<section className="bytes-hero relative overflow-hidden">
  <div className="bytes-hero-glow" />

  <div className="relative z-10 mx-auto grid min-h-[90vh] max-w-[1400px] items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-12 lg:gap-16">

    {/* LEFT CONTENT */}
    <div className="bytes-hero-content">
      <div className="bytes-eyebrow">
        <span className="bytes-eyebrow-line" />
        V-ONE GROUPS · TECHNOLOGY DIVISION
      </div>

      <h1 className="bytes-hero-title">
        We build
        <span> digital experiences</span>
        that move businesses forward.
      </h1>

      <p className="bytes-hero-description">
        From powerful websites to intuitive mobile applications,
        we transform ambitious ideas into scalable digital
        solutions through thoughtful design and technology.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="bytes-primary-button"
        >
          START A PROJECT
          <span>↗</span>
        </a>

        <a
          href="#services"
          className="bytes-secondary-button"
        >
          EXPLORE OUR SERVICES
          <span>↓</span>
        </a>
      </div>

      <div className="bytes-hero-stats">
        <div>
          <strong>01</strong>
          <span>WEB DEVELOPMENT</span>
        </div>

        <div>
          <strong>02</strong>
          <span>APP DEVELOPMENT</span>
        </div>

        <div>
          <strong>03</strong>
          <span>UI / UX DESIGN</span>
        </div>
      </div>
    </div>

    {/* RIGHT VISUAL — WEBSITE + MOBILE APP */}
    <div className="bytes-art relative mx-auto aspect-square w-full max-w-[560px]">

      <div className="bytes-art-halo" />

      {/* LAPTOP / WEBSITE */}
      <div className="bytes-device laptop-device">
        <div className="laptop-screen">

          <div className="browser-bar">
            <span />
            <span />
            <span />
            <div>vonebytes.com</div>
          </div>

          <div className="website-preview">
            <div className="preview-nav">
              V-ONE <span>BYTES</span>
            </div>

            <div className="preview-content">
              <span>BUILD YOUR DIGITAL FUTURE</span>

              <h3>
                Ideas into
                <br />
                technology.
              </h3>

              <div className="preview-button">
                EXPLORE ↗
              </div>
            </div>

            <div className="preview-side-panel">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="laptop-base" />
      </div>

      {/* MOBILE APP */}
      <div className="bytes-device phone-device">
        <div className="phone-screen">

          <div className="phone-camera" />

          <div className="phone-app-header">
            V-ONE
          </div>

          <div className="phone-app-card">
            <span>YOUR DIGITAL SPACE</span>

            <strong>
              Everything
              <br />
              connected.
            </strong>
          </div>

          <div className="phone-app-lines">
            <span />
            <span />
            <span />
          </div>

          <div className="phone-app-icons">
            <i>⌘</i>
            <i>◇</i>
            <i>◉</i>
          </div>
        </div>
      </div>

      {/* FLOATING TECH LABELS */}
      <span className="tech-float tech-code">
        {"</>"}
      </span>

      <span className="tech-float tech-design">
        UI / UX
      </span>

      <span className="tech-float tech-app">
        APP DEVELOPMENT
      </span>

    </div>
  </div>

  {/* BOTTOM SCROLL INDICATOR */}
  <div className="bytes-scroll-indicator">
    <span />
    SCROLL TO EXPLORE
  </div>
</section>

      <section id="about" className="bytes-about border-t border-white/10 px-6 py-32 md:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
          <div>
            <p className="bytes-eyebrow">WHO WE ARE</p>
            <p className="mt-6 text-[13px] tracking-[0.18em] text-white/45">
              THE TECHNOLOGY DIVISION
            </p>
            <div className="mt-9 h-px w-20 bg-[#48B9FF]/60" />
          </div>

          <div>
            <h2 className="max-w-[1000px] font-serif text-[clamp(40px,5vw,68px)] leading-[1.12]">
              Technology should
              <span className="block text-[#48B9FF]">
                move business forward.
              </span>
            </h2>

            <p className="mt-9 max-w-[780px] text-[16px] leading-[2] text-[#AAB9CA] md:text-[18px]">
              V-ONE Bytes is the technology division of V-ONE Groups.
              We bring together development, design and digital thinking
              to create solutions that help businesses build, connect
              and grow. From websites to custom applications, we turn
              technology into practical business value.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bytes-services px-6 py-32 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-20">
            <p className="bytes-eyebrow">WHAT WE BUILD</p>
            <div className="mt-6 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <h2 className="font-serif text-[clamp(42px,5vw,70px)] leading-[1.08]">
                Ideas into technology.
              </h2>
              <p className="max-w-[420px] text-[15px] leading-[1.9] text-white/55 md:text-[17px]">
                From a first digital presence to a complete software
                ecosystem, we build with purpose.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="bytes-service-card group">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] tracking-[0.2em] text-[#48B9FF]">
                    CAPABILITY / {service.number}
                  </span>
                  <span className="bytes-service-symbol">{service.symbol}</span>
                </div>

                <div className="mt-14">
                  <h3 className="font-serif text-[32px] leading-[1.15] md:text-[36px]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[13px] font-semibold leading-6 tracking-wide text-[#48B9FF] md:text-[14px]">
                    {service.subtitle}
                  </p>
                  <p className="mt-6 text-[15px] leading-[1.9] text-[#AAB9CA] md:text-[16px]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-10 border-t border-white/10 pt-7">
                  <p className="mb-5 text-[10px] font-bold tracking-[0.2em] text-white/45">
                    OUR CAPABILITIES
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="bytes-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bytes-card-accent" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bytes-process border-y border-white/10 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <p className="bytes-eyebrow">HOW WE WORK</p>
          <h2 className="mt-7 max-w-[850px] font-serif text-[clamp(42px,5vw,70px)] leading-[1.12]">
            From concept
            <span className="block text-[#48B9FF]">to real-world impact.</span>
          </h2>

          <div className="mt-20 grid gap-12 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div key={item.number} className="bytes-process-item">
                <span className="font-serif text-[48px] text-[#48B9FF]/65">
                  {item.number}
                </span>
                <h3 className="mt-8 text-[21px] font-semibold">{item.title}</h3>
                <p className="mt-5 text-[15px] leading-[1.9] text-[#AAB9CA]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bytes-contact relative overflow-hidden px-6 py-36 md:px-12">
        <div className="bytes-contact-glow" />

        <div className="relative z-10 mx-auto max-w-[1150px] text-center">
          <p className="bytes-eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2 className="mt-9 font-serif text-[clamp(48px,7vw,88px)] leading-[1.05]">
            Let&apos;s build
            <span className="block text-[#48B9FF]">what&apos;s next.</span>
          </h2>

          <p className="mx-auto mt-9 max-w-[650px] text-[16px] leading-[2] text-[#B8C7D9] md:text-[18px]">
            Have an idea, a business challenge or a digital product
            you want to bring to life? Let&apos;s start a conversation.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link href="/#contact" className="bytes-primary-button">
              DISCUSS YOUR PROJECT ↗
            </Link>
            <Link href="/creations" className="bytes-secondary-button">
              EXPLORE V-ONE CREATIONS
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="text-[13px] font-bold leading-6 tracking-[0.2em]">
            V-ONE GROUPS
            <span className="block text-[12px] font-normal tracking-normal text-[#48B9FF]">
              A creative and technology group
            </span>
          </Link>

          <p className="text-[12px] text-white/45">
            V-ONE Bytes · A V-ONE Groups company
          </p>

          <Link href="/creations" className="text-[12px] font-semibold tracking-wider text-[#48B9FF] transition hover:text-white">
            EXPLORE V-ONE CREATIONS ↗
          </Link>
        </div>
      </footer>

      <style jsx global>{`
        .bytes-page {
          --blue: #267BFF;
          --cyan: #48B9FF;
          position: relative;
          isolation: isolate;
          background: linear-gradient(135deg, #081321, #061322 48%, #030B16);
        }

        .bytes-ambient-background {
          position: fixed;
          z-index: -1;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          background: radial-gradient(ellipse at 50% 50%, rgba(18,60,117,0.12), transparent 70%);
        }

        .bytes-ambient-light {
          position: absolute;
          display: block;
          width: 45vw;
          height: 45vw;
          min-width: 280px;
          min-height: 280px;
          border-radius: 50%;
          filter: blur(105px);
          opacity: 0.17;
          will-change: transform;
        }

        .bytes-light-one {
          top: -15%;
          left: -15%;
          background: #267BFF;
          animation: bytesAmbientOne 25s ease-in-out infinite alternate;
        }

        .bytes-light-two {
          top: 35%;
          right: -18%;
          background: #24D5E8;
          animation: bytesAmbientTwo 30s ease-in-out infinite alternate;
        }

        .bytes-light-three {
          bottom: -25%;
          left: 25%;
          background: #123C75;
          animation: bytesAmbientThree 27s ease-in-out infinite alternate;
        }

        .bytes-ambient-grain {
          position: absolute;
          inset: 0;
          opacity: 0.1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.15'/%3E%3C/svg%3E");
        }

        .bytes-header {
          background: rgba(5,15,29,0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .bytes-logo-mark {
          display: flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border: 1px solid #48B9FF;
          color: #48B9FF;
          font-family: Georgia, serif;
          font-size: 21px;
        }

        .bytes-home-link {
          display: inline-flex;
          min-height: 40px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid rgba(72,185,255,0.65);
          padding: 0 13px;
          color: #48B9FF;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          transition: background 300ms ease, color 300ms ease, transform 300ms ease;
        }

        .bytes-home-link:hover {
          transform: translateY(-2px);
          background: #48B9FF;
          color: #061322;
        }

        .bytes-home-link span:first-child { font-size: 17px; }

        .bytes-nav-link {
          position: relative;
          padding: 8px 0;
          transition: color 300ms ease;
        }

        .bytes-nav-link:hover { color: #48B9FF; }

        .bytes-nav-link::after {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 1px;
          background: #48B9FF;
          content: "";
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 350ms ease;
        }

        .bytes-nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .bytes-header-cta {
          align-items: center;
          border: 1px solid #48B9FF;
          background: #48B9FF;
          padding: 14px 18px;
          color: #061322;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          transition: all 300ms ease;
        }

        .bytes-header-cta:hover {
          background: transparent;
          color: #48B9FF;
        }

        .bytes-hero {
          isolation: isolate;
          min-height: min(820px, calc(100svh - 82px));
        }

        .bytes-hero-glow {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(ellipse at 76% 48%, rgba(38,123,255,0.2), transparent 38%),
            radial-gradient(ellipse at 10% 80%, rgba(36,213,232,0.08), transparent 42%);
          animation: bytesGlow 16s ease-in-out infinite alternate;
        }

        .bytes-hero-grid {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0.12;
          background-image:
            linear-gradient(rgba(72,185,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(72,185,255,0.15) 1px, transparent 1px);
          background-size: 90px 90px;
          mask-image: radial-gradient(ellipse at center, black, transparent 80%);
        }

        .bytes-eyebrow {
          color: #48B9FF;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.25em;
        }

        .bytes-enter {
          animation: bytesEnter 1.1s cubic-bezier(0.2,0.7,0.2,1) both;
        }

        .bytes-primary-button, .bytes-secondary-button {
          display: inline-flex;
          min-height: 60px;
          align-items: center;
          justify-content: center;
          padding: 18px 28px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.13em;
          transition: all 350ms ease;
        }

        .bytes-primary-button {
          background: #48B9FF;
          color: #061322;
        }

        .bytes-primary-button:hover {
          transform: translateY(-4px);
          background: #8CEAFF;
        }

        .bytes-secondary-button {
          border: 1px solid rgba(255,255,255,0.28);
          color: #F3F6FC;
        }

        .bytes-secondary-button:hover {
          transform: translateY(-4px);
          border-color: #48B9FF;
          color: #48B9FF;
        }

        .bytes-art {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: bytesArtFloat 9s ease-in-out infinite;
        }

        .bytes-art-halo {
          position: absolute;
          inset: 18%;
          border-radius: 50%;
          background: rgba(38,123,255,0.13);
          filter: blur(55px);
          animation: bytesPulse 7s ease-in-out infinite alternate;
        }

        .bytes-ring {
          position: absolute;
          border: 1px solid rgba(72,185,255,0.25);
          border-radius: 50%;
        }

        .bytes-ring-one { inset: 4%; animation: bytesRotate 38s linear infinite; }
        .bytes-ring-two { inset: 15%; border-style: dashed; animation: bytesRotate 48s linear infinite reverse; }
        .bytes-ring-three { inset: 27%; border-color: rgba(72,185,255,0.5); animation: bytesPulse 6s ease-in-out infinite alternate; }
        .bytes-ring-four { inset: 38%; border-style: dotted; animation: bytesRotate 24s linear infinite; }

        .bytes-art-center {
          display: flex;
          width: 43%;
          height: 43%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(72,185,255,0.4);
          border-radius: 50%;
          background: radial-gradient(circle, #123C75, #061322 75%);
          box-shadow: 0 0 70px rgba(38,123,255,0.2);
          animation: bytesCenterGlow 5s ease-in-out infinite alternate;
        }

        .bytes-core-symbol {
          color: #B5EFFF;
          font-family: Georgia, serif;
          font-size: clamp(65px, 8vw, 100px);
          line-height: 1;
          text-shadow: 0 0 35px rgba(72,185,255,0.5);
        }

        .bytes-floating {
          position: absolute;
          z-index: 2;
          border: 1px solid rgba(72,185,255,0.4);
          background: rgba(6,19,34,0.88);
          padding: 13px 17px;
          color: #8CEAFF;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.2em;
          backdrop-filter: blur(12px);
        }

        .bytes-floating-one { top: 12%; left: 9%; animation: bytesFloatOne 6s ease-in-out infinite; }
        .bytes-floating-two { top: 24%; right: 1%; animation: bytesFloatTwo 7s ease-in-out infinite; }
        .bytes-floating-three { bottom: 17%; left: 0; animation: bytesFloatTwo 8s ease-in-out infinite reverse; }
        .bytes-floating-four { right: 12%; bottom: 9%; animation: bytesFloatOne 7s ease-in-out infinite reverse; }

        .bytes-node {
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #48B9FF;
          box-shadow: 0 0 20px #48B9FF;
        }

        .node-one { top: 15%; right: 28%; }
        .node-two { bottom: 28%; right: 13%; }
        .node-three { bottom: 12%; left: 30%; }

        .bytes-about { background: rgba(0,0,0,0.08); }
        .bytes-services { background: rgba(0,0,0,0.15); }
        .bytes-process { background: rgba(0,0,0,0.06); }

        .bytes-service-card {
          position: relative;
          display: flex;
          min-height: 535px;
          flex-direction: column;
          overflow: hidden;
          padding: 36px;
          border: 1px solid rgba(72,185,255,0.16);
          background: linear-gradient(145deg, rgba(18,60,117,0.35), rgba(5,15,29,0.78));
          transition: transform 550ms ease, border-color 450ms ease, box-shadow 550ms ease;
        }

        .bytes-service-card::before {
          position: absolute;
          top: -120px;
          right: -120px;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: rgba(36,213,232,0.08);
          content: "";
          filter: blur(45px);
          transition: transform 700ms ease;
          pointer-events: none;
        }

        .bytes-service-card:hover {
          transform: translateY(-9px);
          border-color: rgba(72,185,255,0.65);
          box-shadow: 0 25px 75px rgba(0,0,0,0.28);
        }

        .bytes-service-card:hover::before { transform: scale(1.8); }

        .bytes-service-symbol {
          display: flex;
          width: 52px;
          height: 52px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(72,185,255,0.4);
          color: #48B9FF;
          font-size: 25px;
          transition: transform 500ms ease;
        }

        .bytes-service-card:hover .bytes-service-symbol { transform: rotate(45deg); }

        .bytes-tag {
          border: 1px solid rgba(255,255,255,0.13);
          padding: 9px 12px;
          color: rgba(255,255,255,0.72);
          font-size: 11px;
          transition: border-color 300ms ease, color 300ms ease;
        }

        .bytes-service-card:hover .bytes-tag {
          border-color: rgba(72,185,255,0.4);
          color: #8CEAFF;
        }

        .bytes-card-accent {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #48B9FF, transparent);
          transform: scaleX(0);
          transition: transform 550ms ease;
        }

        .bytes-service-card:hover .bytes-card-accent { transform: scaleX(1); }

        .bytes-process-item {
          padding-top: 28px;
          border-top: 1px solid rgba(72,185,255,0.32);
          transition: transform 450ms ease;
        }

        .bytes-process-item:hover { transform: translateY(-7px); }

        .bytes-contact {
          background: radial-gradient(ellipse at center, rgba(38,123,255,0.16), transparent 65%);
        }

        .bytes-contact-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(36,213,232,0.07);
          filter: blur(100px);
          transform: translate(-50%, -50%);
          animation: bytesContactPulse 8s ease-in-out infinite alternate;
        }

        @keyframes bytesAmbientOne {
          from { transform: translate(0,0) scale(1); }
          to { transform: translate(18vw,15vh) scale(1.25); }
        }

        @keyframes bytesAmbientTwo {
          from { transform: translate(0,0) scale(1); }
          to { transform: translate(-16vw,12vh) scale(1.2); }
        }

        @keyframes bytesAmbientThree {
          from { transform: translate(0,0) scale(1); }
          to { transform: translate(12vw,-15vh) scale(1.3); }
        }

        @keyframes bytesGlow {
          from { transform: scale(0.96); opacity: 0.7; }
          to { transform: scale(1.08); opacity: 1; }
        }

        @keyframes bytesEnter {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bytesRotate { to { transform: rotate(360deg); } }

        @keyframes bytesPulse {
          from { transform: scale(0.95); opacity: 0.55; }
          to { transform: scale(1.05); opacity: 1; }
        }

        @keyframes bytesArtFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-13px); }
        }

        @keyframes bytesFloatOne {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-13px); }
        }

        @keyframes bytesFloatTwo {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }

        @keyframes bytesCenterGlow {
          from { box-shadow: 0 0 50px rgba(38,123,255,0.13); }
          to { box-shadow: 0 0 90px rgba(38,123,255,0.25); }
        }

        @keyframes bytesContactPulse {
          from { opacity: 0.45; transform: translate(-50%, -50%) scale(0.9); }
          to { opacity: 0.9; transform: translate(-50%, -50%) scale(1.12); }
        }

        @media (max-width: 1024px) {
          .bytes-hero { min-height: auto; }
          .bytes-service-card { min-height: 500px; }
        }

        @media (max-width: 640px) {
          .bytes-hero { padding-top: 30px; padding-bottom: 75px; }
          .bytes-art { max-width: 390px; }
          .bytes-art-center p { font-size: 8px; text-align: center; }
          .bytes-floating { padding: 9px 11px; font-size: 8px; }
          .bytes-service-card { min-height: auto; padding: 27px; }
          .bytes-service-card > div:nth-child(2) { margin-top: 38px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bytes-ambient-light,
          .bytes-hero-glow,
          .bytes-enter,
          .bytes-art,
          .bytes-ring,
          .bytes-art-halo,
          .bytes-art-center,
          .bytes-floating,
          .bytes-contact-glow {
            animation: none !important;
          }

          .bytes-service-card,
          .bytes-process-item,
          .bytes-service-symbol,
          .bytes-nav-link,
          .bytes-primary-button,
          .bytes-secondary-button,
          .bytes-home-link {
            transition: none !important;
          }
        }

/* ================================
   V-ONE BYTES — HERO SECTION
================================ */

.bytes-hero {
  position: relative;
  isolation: isolate;
  background: #061321;
  color: #f5f9ff;
}

.bytes-hero-glow {
  position: absolute;
  width: 650px;
  height: 650px;
  top: 5%;
  right: -15%;
  border-radius: 50%;
  background: rgba(36, 150, 255, 0.09);
  filter: blur(110px);
  pointer-events: none;
}

.bytes-hero-content {
  position: relative;
  z-index: 2;
}

.bytes-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #48B9FF;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.22em;
}

.bytes-eyebrow-line {
  width: 35px;
  height: 1px;
  background: #48B9FF;
}

.bytes-hero-title {
  max-width: 680px;
  margin-top: 28px;
  color: #f5f9ff;
  font-family: Georgia, serif;
  font-size: clamp(42px, 5.3vw, 76px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.045em;
}

.bytes-hero-title span {
  display: block;
  color: #48B9FF;
}

.bytes-hero-description {
  max-width: 520px;
  margin-top: 25px;
  color: #9bb0c4;
  font-size: 15px;
  line-height: 1.9;
}

.bytes-primary-button,
.bytes-secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 16px 22px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.13em;
  transition: all 0.3s ease;
}

.bytes-primary-button {
  border: 1px solid #48B9FF;
  background: #48B9FF;
  color: #061321;
}

.bytes-primary-button:hover {
  background: transparent;
  color: #48B9FF;
}

.bytes-secondary-button {
  border: 1px solid rgba(255,255,255,0.2);
  color: #e5edf5;
}

.bytes-secondary-button:hover {
  border-color: #48B9FF;
  color: #48B9FF;
}

.bytes-hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 65px;
  padding-top: 25px;
  border-top: 1px solid rgba(255,255,255,0.12);
}

.bytes-hero-stats div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bytes-hero-stats strong {
  color: #48B9FF;
  font-size: 22px;
  font-weight: 500;
}

.bytes-hero-stats span {
  color: #8298ad;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

/* DEVELOPMENT VISUAL */

.bytes-art {
  position: relative;
  isolation: isolate;
  animation: none;
}

.bytes-art-halo {
  position: absolute;
  inset: 15%;
  border-radius: 50%;
  background: rgba(36, 150, 255, 0.2);
  filter: blur(75px);
}

.bytes-device {
  position: absolute;
  border: 1px solid rgba(72,185,255,0.55);
  background: linear-gradient(145deg, #163653, #071525);
  box-shadow:
    0 25px 80px rgba(0,0,0,0.55),
    0 0 35px rgba(72,185,255,0.14);
}

.laptop-device {
  width: 76%;
  top: 22%;
  left: 7%;
  padding: 10px;
  border-radius: 12px;
  transform: perspective(1000px) rotateY(-9deg) rotateX(3deg);
  animation: bytesLaptopFloat 7s ease-in-out infinite;
}

.laptop-screen {
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border-radius: 5px;
  background: #071321;
}

.browser-bar {
  display: flex;
  height: 27px;
  align-items: center;
  gap: 5px;
  padding: 0 9px;
  background: #13283d;
}

.browser-bar span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #48B9FF;
}

.browser-bar div {
  margin-left: 12px;
  color: #9CBBD5;
  font-size: 7px;
}

.website-preview {
  position: relative;
  height: calc(100% - 27px);
  padding: 15px;
  background: radial-gradient(circle at 80% 70%, #123b63, #071321 70%);
}

.preview-nav {
  color: white;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 2px;
}

.preview-nav span {
  color: #48B9FF;
}

.preview-content {
  margin-top: 12%;
}

.preview-content > span {
  color: #48B9FF;
  font-size: 6px;
  letter-spacing: 2px;
}

.preview-content h3 {
  margin-top: 8px;
  color: white;
  font-family: Georgia, serif;
  font-size: clamp(19px, 3vw, 35px);
  line-height: 1.05;
}

.preview-button {
  display: inline-block;
  margin-top: 12px;
  padding: 7px 12px;
  background: #48B9FF;
  color: #061322;
  font-size: 7px;
  font-weight: 800;
}

.preview-side-panel {
  position: absolute;
  right: 8%;
  bottom: 18%;
  display: flex;
  width: 23%;
  flex-direction: column;
  gap: 8px;
}

.preview-side-panel span {
  height: 5px;
  border-radius: 5px;
  background: rgba(72,185,255,0.3);
}

.laptop-base {
  width: 112%;
  height: 9px;
  margin-left: -6%;
  border-radius: 2px 2px 12px 12px;
  background: linear-gradient(#9bb9cf, #263d52 60%, #071321);
}

/* MOBILE PHONE */

.phone-device {
  z-index: 3;
  right: 5%;
  bottom: 12%;
  width: 29%;
  padding: 7px;
  border-radius: 22px;
  transform: rotate(8deg);
  animation: bytesPhoneFloat 6s ease-in-out infinite;
}

.phone-screen {
  position: relative;
  min-height: 230px;
  overflow: hidden;
  padding: 20px 10px 12px;
  border-radius: 16px;
  background: linear-gradient(160deg, #102d49, #061321);
}

.phone-camera {
  position: absolute;
  top: 7px;
  left: 50%;
  width: 25px;
  height: 5px;
  border-radius: 5px;
  background: #020914;
  transform: translateX(-50%);
}

.phone-app-header {
  margin-top: 8px;
  color: #48B9FF;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 2px;
}

.phone-app-card {
  margin-top: 18px;
  padding: 12px 8px;
  background: linear-gradient(140deg, #174e78, #0a2036);
}

.phone-app-card span {
  color: #8CEAFF;
  font-size: 6px;
}

.phone-app-card strong {
  display: block;
  margin-top: 9px;
  color: white;
  font-family: Georgia, serif;
  font-size: 14px;
  line-height: 1.2;
}

.phone-app-lines {
  display: grid;
  gap: 7px;
  margin-top: 17px;
}

.phone-app-lines span {
  height: 5px;
  border-radius: 5px;
  background: rgba(140,234,255,0.25);
}

.phone-app-icons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #48B9FF;
  font-size: 15px;
}

/* FLOATING LABELS */

.tech-float {
  position: absolute;
  z-index: 4;
  border: 1px solid rgba(72,185,255,0.5);
  padding: 12px 15px;
  background: rgba(6,19,34,0.92);
  color: #8CEAFF;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.15em;
  backdrop-filter: blur(12px);
}

.tech-code {
  top: 10%;
  right: 13%;
}

.tech-design {
  bottom: 25%;
  left: 1%;
}

.tech-app {
  right: 1%;
  bottom: 4%;
  font-size: 7px;
}

/* ANIMATIONS */

@keyframes bytesLaptopFloat {
  0%, 100% {
    transform: perspective(1000px) rotateY(-9deg) rotateX(3deg) translateY(0);
  }
  50% {
    transform: perspective(1000px) rotateY(-9deg) rotateX(3deg) translateY(-10px);
  }
}

@keyframes bytesPhoneFloat {
  0%, 100% {
    transform: rotate(8deg) translateY(0);
  }
  50% {
    transform: rotate(8deg) translateY(-12px);
  }
}

/* SCROLL INDICATOR */

.bytes-scroll-indicator {
  position: absolute;
  bottom: 25px;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #8298ad;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.2em;
  transform: translateX(-50%);
}

.bytes-scroll-indicator span {
  width: 28px;
  height: 1px;
  background: #48B9FF;
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .bytes-hero {
    padding-bottom: 65px;
  }

  .bytes-hero-title {
    font-size: clamp(40px, 10vw, 58px);
  }

  .bytes-hero-stats {
    gap: 20px;
    margin-top: 42px;
  }

  .bytes-art {
    max-width: 470px;
  }

  .phone-screen {
    min-height: 190px;
  }

  .phone-app-card strong {
    font-size: 12px;
  }

  .tech-float {
    padding: 8px 10px;
    font-size: 7px;
  }

  .bytes-scroll-indicator {
    display: none;
  }
}

@media (max-width: 480px) {
  .bytes-hero-stats {
    gap: 14px;
  }

  .bytes-hero-stats span {
    font-size: 7px;
  }

  .bytes-art {
    max-width: 360px;
  }

  .phone-screen {
    min-height: 155px;
  }

  .phone-app-card {
    margin-top: 14px;
    padding: 9px 6px;
  }

  .phone-app-card strong {
    font-size: 10px;
  }

  .tech-app {
    right: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .laptop-device,
  .phone-device {
    animation: none !important;
  }
}

      `}</style>
    </main>
  );
}
