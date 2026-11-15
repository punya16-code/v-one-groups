"use client";
import Image from "next/image";

import GoldEarth from "@/components/goldearth";

import { useState } from "react";



const navigation = [

  { label: "About Us", href: "#about" },

  { label: "Our Approach", href: "#approach" },

  { label: "Divisions", href: "#divisions" },

  { label: "Capabilities", href: "#capabilities" },

  { label: "Contact", href: "#contact" },

];



const capabilities = [

  {

    division: "V-ONE CREATIONS",

    title: "Creative direction & production",

    color: "#D9A36B",

  },

  {

    division: "V-ONE CREATIONS",

    title: "Brand identity & visual communication",

    color: "#D9A36B",

  },

  {

    division: "V-ONE BYTES",

    title: "Websites & mobile applications",

    color: "#24D5E8",

  },

  {

    division: "V-ONE BYTES",

    title: "SEO & website management",

    color: "#24D5E8",

  },

];



export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  return (

    <main className="site-main min-h-screen overflow-hidden bg-[#08090b] text-[#F7F2E8]">

      <div className="gold-effects" aria-hidden="true">

        <div className="gold-orb orb-one" />

        <div className="gold-orb orb-two" />

        <div className="gold-orb orb-three" />

        <div className="gold-particles" />

        <div className="gold-streak streak-one" />

        <div className="gold-streak streak-two" />

        <div className="gold-streak streak-three" />

        <div className="gold-scanline" />

      </div>


      <header className="site-header sticky top-0 z-50 border-b border-white/10">

        <div className="relative mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 md:h-24 md:px-12 lg:px-16">


          <a

            href="#"

            className="relative block h-[68px] w-[130px] shrink-0 overflow-hidden sm:h-20 sm:w-40"

          >

            <Image

              src="/v-one-groups-logo.png"

              alt="V-One Groups"

              fill

              priority

              sizes="(max-width: 640px) 130px, 160px"

              className="origin-left scale-[1.5] object-contain object-left"

            />

          </a>

          <nav className="hidden items-center gap-7 md:flex lg:gap-10">

            {navigation.map((item) => (

              <a

                key={item.label}

                href={item.href}

                className="text-base font-medium tracking-wide text-[#F7F2E8]/90 transition-colors hover:text-[#C9A44C] lg:text-lg"

              >

                {item.label}

              </a>

            ))}

          </nav>

          <a

            href="#contact"

            className="hidden items-center gap-3 border border-[#C9A44C] bg-[#C9A44C] px-7 py-4 text-sm font-semibold tracking-wide text-[#08090F] transition-all hover:bg-transparent hover:text-[#C9A44C] lg:flex"

          >

            START A CONVERSATION

            <span>↗</span>

          </a>




          <div className="ml-auto flex shrink-0 items-center gap-3 md:hidden">



           

            <a

              href="#contact"

              onClick={() => setMobileMenuOpen(false)}

              className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap bg-[#C9A44C] px-3.5 text-[11px] font-bold tracking-wide text-[#08090F] transition-colors hover:bg-[#b58f39] sm:px-4 sm:text-xs"

            >

              CONTACT

              <span>↗</span>

            </a>



           

            <button

              type="button"

              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}

              aria-expanded={mobileMenuOpen}

              className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] border border-[#C9A44C] bg-transparent transition-colors hover:bg-[#C9A44C]/10 sm:h-11 sm:w-11"

            >

              <span

                className={`block h-[2px] w-5 bg-[#C9A44C] transition-all duration-300 ${

                  mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""

                }`}

              />

              <span

                className={`block h-[2px] w-5 bg-[#C9A44C] transition-all duration-300 ${

                  mobileMenuOpen ? "opacity-0" : ""

                }`}

              />

              <span

                className={`block h-[2px] w-5 bg-[#C9A44C] transition-all duration-300 ${

                  mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""

                }`}

              />

            </button>

          </div>

        </div>



        

        <div

          className={`absolute left-0 top-full z-50 w-full border-b border-[#C9A44C]/30 bg-[#08090F] shadow-2xl transition-all duration-300 md:hidden ${

            mobileMenuOpen

              ? "visible translate-y-0 opacity-100"

              : "invisible -translate-y-3 opacity-0 pointer-events-none"

          }`}

        >

          <nav className="flex flex-col px-6 py-5">

            {navigation.map((item, index) => (

              <a

                key={item.label}

                href={item.href}

                onClick={() => setMobileMenuOpen(false)}

                className="flex items-center border-b border-white/10 py-4 text-sm font-medium tracking-wider text-[#F7F2E8] transition-colors hover:text-[#C9A44C]"

              >

                <span className="mr-5 text-xs text-[#C9A44C]">

                  {String(index + 1).padStart(2, "0")}

                </span>

                {item.label}

                <span className="ml-auto text-[#C9A44C]">↗</span>

              </a>

            ))}

          </nav>

        </div>

      </header>



      
      <section className="hero-section relative mx-auto flex min-h-[850px] max-w-[1600px] items-start overflow-hidden px-6 pt-14 pb-16 md:min-h-[790px] md:items-center md:py-20 md:px-12 lg:min-h-[820px] lg:px-16">



        <div className="hero-atmosphere" />

        <div className="hero-grid" />

        <div className="hero-glow" />

        <div className="hero-gold-ring" />



        
        <div className="relative z-20 w-full lg:w-[52%]">



          

          <div className="mb-8 flex items-center gap-4 md:mb-10">

            <span className="h-px w-8 shrink-0 bg-[#C9A44C]" />

            <span className="text-[10px] font-semibold tracking-[0.18em] text-[#C9A44C] sm:text-[11px] md:text-xs md:tracking-[0.22em]">

              A CREATIVE AND TECHNOLOGY GROUP

            </span>

          </div>

          <h1 className="hero-title max-w-[760px] font-serif text-[clamp(52px,7vw,100px)] leading-[0.99] tracking-[-0.045em]">

            Make the next

            <span className="block text-[#C9A44C]">version</span>

            <span className="block text-[#C9A44C]">happen.</span>

          </h1>

          <p className="mt-7 max-w-[440px] text-base leading-[1.8] text-[#C8C2B8] sm:text-lg md:mt-9 md:leading-8">

            We bring ambitious ideas to life through considered creative and purposeful technology.

          </p>

          <div className="mt-8 flex flex-col items-start gap-6 md:mt-10 md:flex-row md:flex-wrap md:items-center md:gap-7">

            <a

              href="#approach"

              className="gold-button inline-flex min-h-[64px] w-full max-w-[390px] items-center justify-center gap-5 bg-[#C9A44C] px-6 py-5 text-sm font-semibold tracking-wide text-[#08090F] transition-all sm:w-auto sm:px-8"

            >

              EXPLORE THE GROUP

              <span className="text-lg">→</span>

            </a>



            <span className="hero-tagline text-[10px] font-semibold tracking-[0.16em] text-white/55">

              TWO DISCIPLINES. ONE DIRECTION.

            </span>

          </div>

        </div>


        <div className="hero-globe-container pointer-events-none absolute bottom-[-20px] right-[-35px] z-10 h-[280px] w-[280px] opacity-30 sm:bottom-[-15px] sm:right-[-20px] sm:h-[340px] sm:w-[340px] lg:bottom-auto lg:right-[-2%] lg:top-1/2 lg:h-[700px] lg:w-[62%] lg:-translate-y-1/2 lg:opacity-100">

          <div className="globe-aura" />

          <GoldEarth />

        </div>

        <a

          href="#approach"

          className="absolute bottom-9 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-white/65 transition-colors hover:text-[#C9A44C] md:flex"

        >

          SCROLL TO EXPLORE

          <span className="animate-bounce text-lg">↓</span>

        </a>

      </section>


      <section

        id="about"

        className="section-border relative mx-auto max-w-[1600px] overflow-hidden px-6 py-36 md:px-12 md:py-44 lg:px-16"

      >

        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full border border-[#C9A44C]/10" />

        <div className="pointer-events-none absolute -right-20 top-32 h-[350px] w-[350px] rounded-full border border-[#C9A44C]/10" />



        <div className="relative z-10 mx-auto max-w-[1280px]">

          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <div className="section-label">ABOUT V-ONE GROUPS</div>

              <h2 className="mt-8 font-serif text-6xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">

                Creativity meets

                <span className="block text-[#C9A44C]">excellence.</span>

              </h2>

            </div>



            <div className="border-l border-[#C9A44C]/50 py-2 pl-6 md:mb-3">

              <div className="font-serif text-7xl text-[#C9A44C] md:text-8xl">

                3+

              </div>

              <p className="mt-2 text-[10px] font-semibold tracking-[0.2em] text-white/55">

                YEARS OF MEDIA & PRODUCTION EXPERIENCE

              </p>

            </div>

          </div>




          <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-[0.65fr_1.35fr] md:gap-24">

            <div>

              <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A44C]">

                OUR STORY

              </p>



              <p className="mt-6 max-w-[300px] text-sm leading-8 text-white/45">

                A collective vision bringing creative thinking and technological

                innovation together.

              </p>

            </div>



            <div className="space-y-8">

              <p className="text-xl leading-[1.9] text-[#C8C2B8] md:text-2xl">

                At <strong className="font-medium text-[#F7F2E8]">V-ONE Groups</strong>,

                creativity meets excellence. We deliver high-quality visual

                storytelling and creative solutions while bringing technology

                and innovation into the way businesses grow.

              </p>



              <p className="text-base leading-9 text-[#A9A9AD] md:text-lg">

                With over three years of experience in the media and production

                industry, we have collaborated with corporate companies and

                brands, providing solutions tailored to their vision. From

                concept to final delivery, we focus on quality, creativity

                and client satisfaction.

              </p>



              <div className="border-l-2 border-[#C9A44C] bg-white/[0.025] py-8 pl-8 pr-6 md:py-10 md:pl-12">

                <p className="max-w-[700px] font-serif text-2xl italic leading-relaxed text-[#C9A44C] md:text-4xl">

                  "We don't just create content. We create experiences,

                  stories and visuals that leave a lasting impact."

                </p>

              </div>

            </div>

          </div>



          <div className="mt-20 flex items-center gap-5">

            <span className="h-px w-16 bg-[#C9A44C]" />

            <span className="text-[10px] font-semibold tracking-[0.2em] text-white/40">

              ONE GROUP. TWO DIVISIONS. ONE VISION.

            </span>

          </div>

        </div>

      </section>

      <section

        id="team"

        className="core-team-section relative overflow-hidden border-y border-white/10 py-28 md:py-36"

      >

        <div className="core-team-glow" />



        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">


          <div className="mb-20">

            <div className="section-label">THE PEOPLE BEHIND V-ONE</div>

            <h2 className="mt-6 max-w-[850px] font-serif text-5xl leading-tight md:text-7xl">

              Driven by people.

              <span className="block text-[#C9A44C]">United by vision.</span>

            </h2>

            <p className="mt-6 max-w-[550px] text-sm leading-8 text-[#A9A9AD] md:text-base">

              A team of creative thinkers, designers, developers and strategists

              working together to turn ideas into meaningful experiences.

            </p>

          </div>

          <div className="leadership-feature">

            <div className="leadership-photos">

              <div className="leadership-main-photo">

                <img

                  src="/images/vikas-portrait.jpeg"

                  alt="Vikas Bhaskar, Managing Director of V-ONE Groups"

                />

                <div className="leadership-photo-caption">

                  VIKAS BHASKAR · MANAGING DIRECTOR

                </div>

              </div>



              <div className="leadership-award-photo">

                <img
  src="/images/vikas-award.jpeg"
  alt="Recognition & Achievement"
  className="h-auto w-full object-contain"
/>

                <span>RECOGNITION & ACHIEVEMENT</span>

              </div>

            </div>



            <div className="leadership-details">

              <p className="leadership-kicker">01 — LEADERSHIP</p>



              <p className="leadership-role">MANAGING DIRECTOR</p>



              <h3>Vikas <span>Bhaskar.</span></h3>



              <div className="leadership-experience">

                <strong>3+</strong>

                <div>

                  <span>YEARS OF EXPERIENCE</span>

                  <p>Video Editing & Media Production</p>

                </div>

              </div>



              <p className="leadership-bio">

                Bringing creative vision, execution and leadership together,

                Vikas drives the vision of V-ONE Groups. With a background in

                video editing and media production, he believes in transforming

                ideas into compelling visual experiences and building an

                environment where creativity and opportunities grow together.

              </p>



              <div className="leadership-quote">

                <span className="leadership-quote-mark">“</span>

                <p>

                  Success is not just about building a business — it's about

                  creating opportunities, inspiring creativity, and growing

                  together.

                </p>

                <span className="leadership-quote-author">

                  — VIKAS BHASKAR

                </span>

              </div>

            </div>

          </div>


          <div className="team-directory">

            <div className="team-directory-heading">

              <div>

                <p className="section-label">02 — OUR CORE TEAM</p>

                <h3 className="mt-5 font-serif text-4xl md:text-5xl">

                  The minds behind <span className="text-[#C9A44C]">the work.</span>

                </h3>

              </div>



              <p>

                Different strengths. Shared ambition. One team moving in

                the same direction.

              </p>

            </div>



            <div className="team-member-grid">



              <article className="team-member-card">

                <span className="team-member-number">02 / CREATIVE</span>

                <h4>Arun Kumar</h4>

                <p className="team-member-role">GRAPHIC DESIGNER</p>

                <p className="team-member-description">

                  Creates visual concepts and design assets that communicate

                  brand identities with clarity, creativity and consistency.

                </p>

              </article>



              <article className="team-member-card">

                <span className="team-member-number">03 / TECHNOLOGY</span>

                <h4>Pramod Adalli</h4>

                <p className="team-member-role">DEVELOPER</p>

                <p className="team-member-description">

                  Contributes to digital product development through

                  implementation, technical problem-solving and execution.

                </p>

              </article>



              <article className="team-member-card">

                <span className="team-member-number">04 / TECHNOLOGY</span>

                <h4>Punya Channegowda</h4>

                <p className="team-member-role">SOFTWARE DEVELOPER & DESIGNER</p>

                <p className="team-member-description">

                  Connects design and technology by shaping intuitive user

                  experiences and developing functional digital products.

                </p>

              </article>



              <article className="team-member-card">

                <span className="team-member-number">05 / TECHNOLOGY</span>

                <h4>Sri Vishnu R</h4>

                <p className="team-member-role">DEVELOPER</p>

                <p className="team-member-description">

                  Supports software development through implementation,

                  technical problem-solving and digital product execution.

                </p>

              </article>



              <article className="team-member-card">

                <span className="team-member-number">06 / MARKETING</span>

                <h4>P V Karthikeyan</h4>

                <p className="team-member-role">MARKETING</p>

                <p className="team-member-description">

                  Contributes to brand outreach, promotional initiatives

                  and connecting the organisation with potential clients.

                </p>

              </article>



              <article className="team-member-card">

                <span className="team-member-number">07 / MARKETING</span>

                <h4>Sanjay</h4>

                <p className="team-member-role">MARKETING</p>

                <p className="team-member-description">

                  Supports audience engagement, marketing initiatives

                  and the organisation's brand visibility.

                </p>

              </article>



              <article className="team-member-card">

                <span className="team-member-number">08 / MARKETING</span>

                <h4>Vikas R</h4>

                <p className="team-member-role">MARKETING</p>

                <p className="team-member-description">

                  Contributes to promotional activities, brand communication

                  and outreach initiatives.

                </p>

              </article>



            </div>

          </div>



        </div>

      </section>

      <section

        id="approach"

        className="section-border mx-auto grid max-w-[1440px] gap-12 px-6 py-28 md:grid-cols-[0.7fr_1.3fr] md:px-12 lg:px-16"

      >

        <div>

          <div className="section-label">ONE GROUP, TWO STRENGTHS</div>

          <p className="mt-8 text-xs tracking-[0.16em] text-[#8B9BAA]">

            THE V-ONE APPROACH

          </p>

        </div>



        <div>

          <h2 className="font-serif text-5xl leading-[1.08] md:text-6xl lg:text-7xl">

            Different disciplines.

            <span className="block text-[#C9A44C]">Shared ambition.</span>

          </h2>



          <p className="mt-7 max-w-[600px] text-base leading-8 text-[#A9A9AD]">

            V-ONE Groups connects the art of making with the power of technology.

            V-ONE Creations shapes the experience; V-ONE Bytes builds what makes it work.

          </p>

        </div>

      </section>


      <section

        id="divisions"

        className="mx-auto max-w-[1440px] px-6 pb-32 pt-20 md:px-12 lg:px-16"

      >

        <div className="mb-12">

          <div className="section-label">OUR DIVISIONS</div>



          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <h2 className="font-serif text-4xl md:text-5xl">

              Two strengths. One vision.

            </h2>



            <span className="text-xs tracking-widest text-white/40">

              01 / 02

            </span>

          </div>



          <p className="mt-5 max-w-[620px] text-sm leading-7 text-[#A9A9AD]">

            From creative storytelling to purposeful technology, our two

            divisions bring ideas to life through different disciplines.

          </p>

        </div>



        <div className="grid gap-6 md:grid-cols-2">


          <a href="/creations" className="division-card creations-card group">

            <div className="card-light-sweep" />

            <div className="division-card-content">

              <div className="flex items-center justify-between">

                <span className="division-kicker creations-accent">

                  <span className="status-dot" />

                  CREATIVE STUDIO

                </span>

                <span className="division-number">01</span>

              </div>



              <div className="division-main">

                <p className="division-overline creations-accent">V-ONE</p>



                <h3 className="division-title">

                  Creations<span className="creations-accent">.</span>

                </h3>



                <p className="division-description">

                  One team. Every story. We turn brand ideas into films,

                  designs, events and a powerful social presence.

                </p>



                <div className="division-tags">

                  <span>Video Production</span>

                  <span>Video Editing</span>

                  <span>Graphic Design</span>

                  <span>Motion Graphics</span>

                  <span>Event Management</span>

                  <span>Social Media</span>

                  <span>Stars & Influencers</span>

                </div>

              </div>



              <div className="division-footer creations-footer">

                <span>EXPLORE V-ONE CREATIONS</span>

                <span className="division-arrow">↗</span>

              </div>

            </div>

          </a>


          <a href="/bytes" className="division-card bytes-card group">

            <div className="card-light-sweep" />

            <div className="division-card-content">

              <div className="flex items-center justify-between">

                <span className="division-kicker bytes-accent">

                  <span className="status-dot" />

                  DIGITAL TECHNOLOGY

                </span>

                <span className="division-number">02</span>

              </div>



              <div className="division-main">

                <p className="division-overline bytes-accent">V-ONE</p>



                <h3 className="division-title">

                  Bytes<span className="bytes-accent">.</span>

                </h3>



                <p className="division-description">

                  Tech that grows your business. We build websites and apps,

                  help customers find you on Google, and keep everything

                  running smoothly.

                </p>



                <div className="division-tags">

                  <span>Web Development</span>

                  <span>Mobile Apps</span>

                  <span>SEO Services</span>

                  <span>Website Management</span>

                  <span>Technical Support</span>

                </div>

              </div>



              <div className="division-footer bytes-footer">

                <span>EXPLORE V-ONE BYTES</span>

                <span className="division-arrow">↗</span>

              </div>

            </div>

          </a>



        </div>

      </section>

      <section

        id="capabilities"

        className="section-border border-y border-white/10 bg-[#0c0c0d] py-24"

      >

        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">

          <div className="grid gap-10 border-b border-white/10 pb-16 md:grid-cols-3">

            <div>

              <div className="section-label">CREATIVE THINKING</div>

              <p className="mt-5 text-sm leading-7 text-[#A9A9AD]">

                A clear point of view, carried through every detail.

              </p>

            </div>



            <div>

              <div className="section-label">TECHNOLOGY WITH INTENT</div>

              <p className="mt-5 text-sm leading-7 text-[#A9A9AD]">

                Digital craft in service of real-world outcomes.

              </p>

            </div>



            <div>

              <div className="section-label">JOINED-UP PERSPECTIVE</div>

              <p className="mt-5 text-sm leading-7 text-[#A9A9AD]">

                Creative and technical minds, working in the same direction.

              </p>

            </div>

          </div>



          <div className="grid gap-14 pt-24 md:grid-cols-2">

            <div>

              <div className="section-label">CAPABILITIES</div>



              <h2 className="mt-8 max-w-[450px] font-serif text-5xl leading-tight md:text-6xl">

                A connected point of view.

              </h2>



              <p className="mt-7 max-w-[380px] text-sm leading-7 text-[#A9A9AD]">

                From first thought to final build, our two divisions bring

                complementary skills to the table.

              </p>

            </div>



            <div>

              {capabilities.map((item) => (

                <div key={item.title} className="capability-row">

                  <span

                    className="text-xs font-semibold tracking-[0.16em]"

                    style={{ color: item.color }}

                  >

                    {item.division}

                  </span>



                  <div className="mt-3 flex items-center justify-between gap-4">

                    <span className="text-base font-medium md:text-lg">

                      {item.title}

                    </span>

                    <span className="text-lg text-white/40">↗</span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <section

        id="contact"

        className="contact-section mx-auto max-w-[1440px] px-6 py-32 md:px-12 lg:px-16"

      >

        <div className="section-label">THE NEXT STEP STARTS HERE</div>



        <div className="mt-8 flex flex-col justify-between gap-12 md:flex-row md:items-end">

          <h2 className="font-serif text-5xl leading-[1.1] md:text-6xl lg:text-7xl">

            Have a good idea?

            <span className="block text-[#C9A44C]">Let's make it real.</span>

          </h2>



          <a

            href="https://wa.me/919980102146"

            target="_blank"

            rel="noopener noreferrer"

            className="contact-button inline-flex shrink-0 items-center gap-5 border border-[#C9A44C] px-8 py-5 text-sm font-semibold tracking-wider"

          >

            TEXT US ON WHATSAPP <span>↗</span>

          </a>

        </div>

      </section>


      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-7 px-6 py-8 md:flex-row md:px-12 lg:px-16">

          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center border border-[#C9A44C] text-sm text-[#C9A44C]">

              V1

            </div>



            <div className="text-xs font-semibold leading-4 tracking-[0.18em]">

              V-ONE

              <br />

              GROUPS

            </div>

          </div>



          <p className="text-xs text-[#8B8B8B]">

            Creative thought. Digital possibility.

          </p>



          <a

            href="#"

            className="text-xs font-semibold tracking-widest text-white/60 transition-colors hover:text-[#C9A44C]"

          >

            BACK TO TOP ↑

          </a>

        </div>

      </footer>

      <style jsx global>{`

        html {

          scroll-behavior: smooth;

        }



        body {

          background: #08090b;

          margin: 0;

        }



        .site-main {

          position: relative;

          isolation: isolate;

          background:

            radial-gradient(ellipse at 75% 30%, rgba(116,76,25,0.13), transparent 38%),

            linear-gradient(135deg, #08090b 0%, #0c0b09 48%, #08090b 100%);

        }



        .site-main > *:not(.gold-effects) {

          position: relative;

          z-index: 2;

        }



        .gold-effects {

          position: fixed;

          inset: 0;

          z-index: 1;

          overflow: hidden;

          pointer-events: none;

          contain: strict;

        }



        .gold-orb {

          position: absolute;

          border-radius: 50%;

          mix-blend-mode: screen;

          will-change: transform;

        }



        .orb-one {

          width: 360px;

          height: 360px;

          top: 8%;

          left: -180px;

          background: radial-gradient(circle, rgba(201,164,76,0.20), rgba(201,164,76,0.04) 48%, transparent 72%);

          animation: orbDriftOne 18s ease-in-out infinite alternate;

        }



        .orb-two {

          width: 480px;

          height: 480px;

          top: 42%;

          right: -230px;

          background: radial-gradient(circle, rgba(198,148,62,0.18), rgba(128,81,24,0.05) 50%, transparent 72%);

          animation: orbDriftTwo 22s ease-in-out infinite alternate;

        }



        .orb-three {

          width: 300px;

          height: 300px;

          bottom: -130px;

          left: 30%;

          background: radial-gradient(circle, rgba(225,196,123,0.13), transparent 70%);

          animation: orbDriftThree 16s ease-in-out infinite alternate;

        }



        .gold-particles {

          position: absolute;

          inset: 0;

          opacity: 0.48;

          background-image:

            radial-gradient(circle, rgba(225,196,123,0.85) 1px, transparent 1.8px),

            radial-gradient(circle, rgba(201,164,76,0.65) 1px, transparent 2px),

            radial-gradient(circle, rgba(255,224,157,0.55) 1px, transparent 2px);

          background-size: 113px 127px, 179px 191px, 257px 223px;

          background-position: 10px 20px, 70px 90px, 120px 30px;

          animation: particleDrift 35s linear infinite;

          mask-image: linear-gradient(to bottom, black, transparent 95%);

        }



        .gold-streak {

          position: absolute;

          height: 1px;

          width: 42vw;

          background: linear-gradient(90deg, transparent, rgba(201,164,76,0.9), rgba(255,224,157,0.8), transparent);

          box-shadow: 0 0 8px rgba(201,164,76,0.65), 0 0 22px rgba(201,164,76,0.28);

          opacity: 0;

          transform: rotate(-24deg);

          animation: streakTravel 11s linear infinite;

        }



        .streak-one {

          top: 22%;

          left: -50%;

          animation-delay: 0s;

        }



        .streak-two {

          top: 56%;

          left: -50%;

          width: 30vw;

          animation-delay: 4s;

          animation-duration: 13s;

        }



        .streak-three {

          top: 78%;

          left: -50%;

          width: 50vw;

          animation-delay: 7s;

          animation-duration: 15s;

        }



        .gold-scanline {

          position: absolute;

          left: 0;

          right: 0;

          height: 2px;

          top: -5%;

          opacity: 0.25;

          background: linear-gradient(90deg, transparent, rgba(201,164,76,0.8), transparent);

          box-shadow: 0 0 15px rgba(201,164,76,0.4);

          animation: scanDown 18s linear infinite;

        }



        .site-main > .site-header {

          position: sticky;

          top: 0;

          z-index: 50;

          background: rgba(8,9,11,0.96);

          backdrop-filter: blur(18px);

        }



        .hero-section {

          isolation: isolate;

        }



        .hero-atmosphere {

          position: absolute;

          inset: 0;

          z-index: -3;

          background:

            radial-gradient(ellipse at 75% 42%, rgba(190,137,48,0.19), transparent 35%),

            radial-gradient(ellipse at 12% 85%, rgba(104,70,29,0.13), transparent 38%),

            linear-gradient(180deg, #08090b, #0b0a08 55%, #08090b);

        }



        .hero-grid {

          position: absolute;

          inset: 0;

          z-index: -2;

          opacity: 0.20;

          background-image:

            linear-gradient(rgba(206,171,105,0.16) 1px, transparent 1px),

            linear-gradient(90deg, rgba(206,171,105,0.16) 1px, transparent 1px);

          background-size: 90px 90px;

          mask-image: radial-gradient(ellipse at 70% 45%, black, transparent 72%);

        }



        .hero-glow {

          position: absolute;

          top: 12%;

          right: 2%;

          width: 650px;

          height: 650px;

          border-radius: 50%;

          z-index: -1;

          background: radial-gradient(circle, rgba(198,148,62,0.22), rgba(128,81,24,0.08) 45%, transparent 72%);

          filter: blur(35px);

          animation: glowPulse 7s ease-in-out infinite alternate;

        }



        .hero-gold-ring {

          position: absolute;

          z-index: 0;

          top: 50%;

          right: 9%;

          width: min(48vw, 650px);

          aspect-ratio: 1;

          border: 1px solid rgba(201,164,76,0.20);

          border-radius: 50%;

          transform: translateY(-50%);

          box-shadow: 0 0 35px rgba(201,164,76,0.07), inset 0 0 35px rgba(201,164,76,0.05);

          animation: ringRotate 32s linear infinite;

          pointer-events: none;

        }



        .hero-gold-ring::before,

        .hero-gold-ring::after {

          content: "";

          position: absolute;

          inset: 9%;

          border: 1px solid rgba(201,164,76,0.14);

          border-radius: 50%;

        }



        .hero-gold-ring::after {

          inset: 19%;

          border-color: rgba(225,196,123,0.12);

        }



        .hero-title {

          animation: titleReveal 1.1s ease-out both;

          text-shadow: 0 0 35px rgba(201,164,76,0.08);

        }



        .hero-globe-container {

          filter: drop-shadow(0 0 50px rgba(198,148,62,0.24));

        }



        .globe-aura {

          position: absolute;

          inset: 10%;

          border-radius: 50%;

          background: radial-gradient(circle, rgba(206,161,80,0.25), rgba(105,66,22,0.08) 50%, transparent 72%);

          filter: blur(70px);

        }



        .section-label {

          color: #C9A44C;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 0.19em;

        }



        .section-border {

          border-top: 1px solid rgba(255,255,255,0.10);

        }



        .division-card {

          position: relative;

          display: block;

          min-height: 560px;

          overflow: hidden;

          border: 1px solid rgba(255,255,255,0.12);

          border-radius: 4px;

          transition: transform 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;

        }



        .division-card:hover {

          transform: translateY(-8px);

        }



        .division-card-content {

          position: relative;

          z-index: 2;

          display: flex;

          min-height: 560px;

          flex-direction: column;

          justify-content: space-between;

          padding: 34px;

        }



        .creations-card {

          color: #F7F2E8;

          border-color: rgba(217,163,107,0.35);

          background:

            radial-gradient(ellipse at 80% 18%, rgba(217,163,107,0.25), transparent 42%),

            linear-gradient(135deg, #211713 0%, #493026 48%, #211713 100%);

        }



        .creations-card:hover {

          border-color: #D9A36B;

          box-shadow: 0 20px 70px rgba(169,108,67,0.24);

        }



        .bytes-card {

          color: #F7F2E8;

          border-color: rgba(38,123,255,0.3);

          background:

            radial-gradient(ellipse at 80% 20%, rgba(36,213,232,0.2), transparent 38%),

            radial-gradient(ellipse at 20% 85%, rgba(38,123,255,0.2), transparent 45%),

            linear-gradient(135deg, #061322 0%, #123C75 55%, #061322 100%);

        }



        .bytes-card:hover {

          border-color: #24D5E8;

          box-shadow: 0 20px 70px rgba(38,123,255,0.20);

        }



        .card-light-sweep {

          position: absolute;

          top: -80%;

          left: -70%;

          width: 45%;

          height: 260%;

          transform: rotate(28deg);

          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.13), transparent);

          transition: left 0.9s ease;

          pointer-events: none;

        }



        .division-card:hover .card-light-sweep {

          left: 130%;

        }



        .division-kicker {

          display: inline-flex;

          align-items: center;

          gap: 10px;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.19em;

        }



        .creations-accent {

          color: #D9A36B;

        }



        .bytes-accent {

          color: #24D5E8;

        }



        .status-dot {

          width: 7px;

          height: 7px;

          border-radius: 50%;

          background: currentColor;

          box-shadow: 0 0 12px currentColor;

          animation: dotPulse 2s ease-in-out infinite;

        }



        .division-number {

          font-size: 11px;

          color: rgba(255,255,255,0.5);

          letter-spacing: 0.15em;

        }



        .division-main {

          margin-top: 60px;

          margin-bottom: 50px;

        }



        .division-overline {

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 0.22em;

        }



        .division-title {

          margin-top: 8px;

          font-family: Georgia, serif;

          font-size: clamp(48px, 5vw, 70px);

          line-height: 1.05;

        }



        .division-description {

          max-width: 410px;

          margin-top: 22px;

          color: rgba(255,255,255,0.78);

          font-size: 14px;

          line-height: 1.9;

        }



        .division-tags {

          display: flex;

          flex-wrap: wrap;

          gap: 9px;

          margin-top: 28px;

        }



        .division-tags span {

          border: 1px solid rgba(255,255,255,0.18);

          padding: 8px 11px;

          color: rgba(255,255,255,0.75);

          font-size: 10px;

          letter-spacing: 0.04em;

          transition: background 0.3s ease, border-color 0.3s ease;

        }



        .division-card:hover .division-tags span {

          border-color: rgba(255,255,255,0.32);

          background: rgba(255,255,255,0.06);

        }



        .division-footer {

          display: flex;

          align-items: center;

          justify-content: space-between;

          border-top: 1px solid rgba(255,255,255,0.2);

          padding-top: 22px;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.16em;

        }



        .creations-footer {

          color: #D9A36B;

        }



        .bytes-footer {

          color: #24D5E8;

        }



        .division-arrow {

          font-size: 22px;

          transition: transform 0.3s ease;

        }



        .division-card:hover .division-arrow {

          transform: translate(5px, -5px);

        }



        .capability-row {

          position: relative;

          border-bottom: 1px solid rgba(255,255,255,0.13);

          padding: 23px 0;

          transition: padding 0.3s ease, border-color 0.3s ease;

        }



        .capability-row:hover {

          padding-left: 12px;

          border-color: rgba(201,164,76,0.6);

        }



        .gold-button {

          box-shadow: 0 0 22px rgba(201,164,76,0.18);

        }



        .gold-button:hover {

          background: #E1C47B;

          box-shadow: 0 0 35px rgba(201,164,76,0.42);

          transform: translateY(-3px);

        }



        .contact-button {

          transition: color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

        }



        .contact-button:hover {

          background: #C9A44C;

          color: #08090F;

          box-shadow: 0 0 30px rgba(201,164,76,0.3);

        }



        @keyframes glowPulse {

          from { opacity: 0.65; transform: scale(0.92); }

          to { opacity: 1; transform: scale(1.08); }

        }



        @keyframes orbDriftOne {

          from { transform: translate3d(0, 0, 0); }

          to { transform: translate3d(260px, 170px, 0); }

        }



        @keyframes orbDriftTwo {

          from { transform: translate3d(0, 0, 0); }

          to { transform: translate3d(-250px, -170px, 0); }

        }



        @keyframes orbDriftThree {

          from { transform: translate3d(-80px, 0, 0); }

          to { transform: translate3d(180px, -100px, 0); }

        }



        @keyframes particleDrift {

          from { background-position: 10px 20px, 70px 90px, 120px 30px; }

          to { background-position: 10px -500px, 70px -650px, 120px -750px; }

        }



        @keyframes streakTravel {

          0% { transform: translateX(-10vw) rotate(-24deg); opacity: 0; }

          12% { opacity: 0.85; }

          55% { opacity: 0.5; }

          100% { transform: translateX(180vw) rotate(-24deg); opacity: 0; }

        }



        @keyframes scanDown {

          from { top: -5%; }

          to { top: 105%; }

        }



        @keyframes ringRotate {

          from { transform: translateY(-50%) rotate(0deg); }

          to { transform: translateY(-50%) rotate(360deg); }

        }



        @keyframes titleReveal {

          from { opacity: 0; transform: translateY(24px); }

          to { opacity: 1; transform: translateY(0); }

        }



        @keyframes dotPulse {

          0%, 100% { opacity: 0.65; transform: scale(0.85); }

          50% { opacity: 1; transform: scale(1.3); }

        }

          /* =========================================

MOBILE HERO RESPONSIVENESS

\========================================= */



@media (max-width: 768px) {

/* Main hero */

.hero-section {

position: relative;

min-height: 820px;

align-items: flex-start;

padding: 48px 24px 60px;

overflow: hidden;

}



/* Hero content */

.hero-section > div.relative.z-20 {

position: relative;

z-index: 20;

width: 100%;

max-width: 560px;

}



/* Headline */

.hero-section .hero-title {

position: relative;

z-index: 2;

font-size: clamp(3.2rem, 10vw, 3.7rem);

line-height: 0.98;

margin-bottom: 22px;

}



/* Description */

.hero-section > div.relative.z-20 p {

position: relative;

z-index: 2;

margin-top: 20px;

margin-bottom: 24px;

font-size: 1.1rem;

line-height: 1.8;

}



/* Main CTA */

.hero-section > div.relative.z-20 a {

position: relative;

z-index: 3;

display: flex;

align-items: center;

justify-content: center;

width: 100%;

max-width: 100%;

min-height: 68px;

}



/* Supporting tagline */

.hero-section > div.relative.z-20 .hero-tagline {

position: relative;

z-index: 3;

margin-top: 24px;

}

/* Cleaner mobile globe positioning */

.hero-section .hero-globe-container {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  right: -45px;
  bottom: -25px;
  width: 230px;
  height: 230px;
  opacity: 0.20;
}



/* Globe aura */

.hero-section .globe-aura {

inset: 5%;

}



/* Hide desktop scroll indicator */

.hero-section > a[href="#approach"] {

display: none;

}

}



/* =========================================

SMALL MOBILE SCREENS

\============================================ */



@media (max-width: 390px) {

.hero-section {

min-height: 790px;

padding-left: 22px;

padding-right: 22px;

}



.hero-section .hero-title {

font-size: clamp(3rem, 10vw, 3.35rem);

line-height: 0.98;

}



.hero-section > div.relative.z-20 p {

font-size: 1rem;

line-height: 1.8;

}



.hero-section .hero-globe-container {
  right: -40px;
  bottom: -20px;
  width: 210px;
  height: 210px;
  opacity: 0.18;
}
}



@media (prefers-reduced-motion: reduce) {

html {

scroll-behavior: auto;

}



*,

*::before,

*::after {

animation-duration: 0.01ms !important;

animation-iteration-count: 1 !important;

transition-duration: 0.01ms !important;

}



.gold-effects {

display: none;

}

}



           V-ONE CORE TEAM

        ===================================== */



        .core-team-section {

          background:

            radial-gradient(ellipse at 80% 20%, rgba(201,164,76,.08), transparent 35%),

            linear-gradient(145deg, #090a0c, #100e0b 55%, #08090b);

        }



        .core-team-glow {

          position: absolute;

          width: 550px;

          height: 550px;

          right: -250px;

          top: 250px;

          border: 1px solid rgba(201,164,76,.10);

          border-radius: 50%;

          box-shadow: 0 0 0 70px rgba(201,164,76,.025);

          pointer-events: none;

        }



        .leadership-feature {

          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 65px;

          align-items: center;

          padding: 45px;

          border: 1px solid rgba(201,164,76,.22);

          background: linear-gradient(135deg, rgba(255,255,255,.035), rgba(201,164,76,.035));

        }



        .leadership-photos {

          display: grid;

          grid-template-columns: .85fr 1.15fr;

          gap: 16px;

          align-items: center;

        }



        .leadership-main-photo {

          position: relative;

          margin-top: 35px;

          overflow: hidden;

          background: #171513;

        }



        .leadership-main-photo img {

          display: block;

          width: 100%;

          height: 460px;

          object-fit: cover;

          object-position: center top;

        }



        .leadership-award-photo {

          position: relative;

          margin-top: 35px;

          overflow: hidden;

          background: #171513;

        }



        .leadership-award-photo img {

          display: block;

          width: 100%;

          height: 560px;

          object-fit: cover;

          object-position: center;

        }



        .leadership-photo-caption {

          position: absolute;

          bottom: 0;

          left: 0;

          right: 0;

          padding: 18px 12px;

          background: linear-gradient(transparent, rgba(0,0,0,.9));

          color: #fff;

          font-size: 9px;

          letter-spacing: 1.5px;

          font-weight: 600;

        }

.leadership-award-photo img {
  display: block;
  width: 100%;
  height: 560px;
  object-fit: contain;
  object-position: center;
  background: #171513;
}

@media (max-width: 600px) {
  .leadership-award-photo img {
    height: auto;
    max-height: 430px;
    object-fit: contain;
  }
}
      

        .leadership-kicker {

          color: #C9A44C;

          font-size: 10px;

          letter-spacing: 3px;

          margin-bottom: 45px;

        }



        .leadership-role {

          color: #C9A44C;

          font-size: 10px;

          letter-spacing: 3px;

          font-weight: 700;

        }



        .leadership-details h3 {

          margin-top: 12px;

          font-family: Georgia, serif;

          font-size: clamp(42px, 5vw, 68px);

          line-height: 1.1;

          letter-spacing: -2px;

        }



        .leadership-details h3 span {

          color: #C9A44C;

          font-style: italic;

          font-weight: 400;

        }



        .leadership-experience {

          display: flex;

          align-items: center;

          gap: 20px;

          margin: 35px 0;

          padding: 22px 0;

          border-top: 1px solid rgba(255,255,255,.12);

          border-bottom: 1px solid rgba(255,255,255,.12);

        }



        .leadership-experience strong {

          color: #C9A44C;

          font-family: Georgia, serif;

          font-size: 65px;

          line-height: 1;

          font-weight: 400;

        }



        .leadership-experience span {

          color: #C9A44C;

          font-size: 9px;

          letter-spacing: 2px;

          font-weight: 700;

        }



        .leadership-experience p {

          margin-top: 7px;

          color: #A9A9AD;

          font-size: 12px;

        }



        .leadership-bio {

          color: #B8B5AF;

          font-size: 14px;

          line-height: 2;

        }



        .leadership-quote {

          position: relative;

          margin-top: 35px;

          padding: 25px 25px 25px 30px;

          border-left: 2px solid #C9A44C;

          background: rgba(201,164,76,.055);

        }



        .leadership-quote-mark {

          color: #C9A44C;

          font-family: Georgia, serif;

          font-size: 45px;

          line-height: .8;

        }



        .leadership-quote p {

          color: #F7F2E8;

          font-family: Georgia, serif;

          font-size: 19px;

          font-style: italic;

          line-height: 1.7;

        }



        .leadership-quote-author {

          display: block;

          margin-top: 20px;

          color: #C9A44C;

          font-size: 9px;

          letter-spacing: 2px;

        }



        .team-directory {

          margin-top: 140px;

        }



        .team-directory-heading {

          display: flex;

          align-items: end;

          justify-content: space-between;

          gap: 40px;

          margin-bottom: 50px;

        }



        .team-directory-heading > p {

          max-width: 340px;

          color: #A9A9AD;

          font-size: 13px;

          line-height: 1.9;

        }



        .team-member-grid {

          display: grid;

          grid-template-columns: repeat(3, minmax(0, 1fr));

          border-top: 1px solid rgba(255,255,255,.13);

          border-left: 1px solid rgba(255,255,255,.13);

        }



        .team-member-card {

          min-height: 235px;

          padding: 30px;

          border-right: 1px solid rgba(255,255,255,.13);

          border-bottom: 1px solid rgba(255,255,255,.13);

          background: rgba(255,255,255,.012);

          transition: background .35s ease, transform .35s ease;

        }



        .team-member-card {

          min-height: 280px;

          padding: 36px;

          border-right: 1px solid rgba(255,255,255,.13);

          border-bottom: 1px solid rgba(255,255,255,.13);

          background: rgba(255,255,255,.012);

          transition: background .35s ease, transform .35s ease;

        }



        .team-member-card h4 {

          margin-top: 38px;

          color: #F7F2E8;

          font-family: Georgia, serif;

          font-size: 30px;

          line-height: 1.25;

          font-weight: 400;

        }



        .team-member-role {

          margin-top: 13px;

          color: #C9A44C;

          font-size: 11px;

          line-height: 1.6;

          font-weight: 700;

          letter-spacing: 1.5px;

        }



        .team-member-description {

          margin-top: 19px;

          color: #BDB8AF;

          font-size: 15px;

          line-height: 2;

        }

                  @media (max-width: 900px) {

          .leadership-feature {

            grid-template-columns: 1fr;

            gap: 45px;

            padding: 28px;

          }



          .leadership-main-photo img {

            height: 480px;

          }



          .leadership-award-photo img {

            height: 280px;

          }



          .team-member-grid {

            grid-template-columns: repeat(2, minmax(0, 1fr));

          }

        }



        @media (max-width: 600px) {

          .leadership-feature {

            padding: 18px;

          }



          .leadership-photos {

            grid-template-columns: 1fr;

          }



          .leadership-main-photo img {

            height: 430px;

          }



          .leadership-award-photo {

            margin-top: 0;

          }



          .leadership-award-photo img {

            height: 270px;

          }



          .leadership-kicker {

            margin-bottom: 30px;

          }



          .team-directory {

            margin-top: 90px;

          }



          .team-directory-heading {

            flex-direction: column;

            align-items: start;

          }



          .team-member-grid {

            grid-template-columns: 1fr;

          }



          .team-member-card {

            min-height: 200px;

            padding: 25px;

          }

        }



        @media (prefers-reduced-motion: reduce) {

          .team-member-card {

            transition: none;

          }

        }

/* FINAL MOBILE HERO FIX */
@media (max-width: 767px) {
  .hero-section {
    min-height: 850px;
    overflow: hidden;
  }

  .hero-section .hero-globe-container {
    display: block !important;
    position: absolute;
    z-index: 1;
    pointer-events: none;

    right: -65px;
    bottom: -55px;

    width: 220px;
    height: 220px;

    opacity: 0.16;
  }

  .hero-section .globe-aura {
    inset: 5%;
    opacity: 0.5;
  }

  .hero-section > div.relative.z-20 {
    position: relative;
    z-index: 20;
  }
}

@media (max-width: 390px) {
  .hero-section {
    min-height: 830px;
    padding-left: 22px;
    padding-right: 22px;
  }

  .hero-section .hero-globe-container {
    right: -75px;
    bottom: -60px;
    width: 195px;
    height: 195px;
    opacity: 0.14;
  }
} 
      `}



  </style>
    </main>
  );
}
