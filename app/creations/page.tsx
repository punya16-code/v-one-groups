"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Video Production",
    subtitle: "From script to final shot",
    description:
      "Cinematic shoots planned and directed by our crew. We bring cameras, lights and storytelling so your brand looks as big as it is.",
    offerings: ["Ad films", "Corporate videos", "Product shoots", "Reels and shorts", "Documentaries"],
    symbol: "▶",
  },
  {
    number: "02",
    title: "Video Editing",
    subtitle: "Where raw footage becomes a story",
    description:
      "Sharp cuts, colour grading, sound design and subtitles. Give us your footage and get back a polished video made for YouTube, Instagram or TV.",
    offerings: ["Cutting and pacing", "Colour grading", "Sound mixing", "Subtitles", "Reels edits"],
    symbol: "✳",
  },
  {
    number: "03",
    title: "Graphic Design",
    subtitle: "Looks that people remember",
    description:
      "Logos, posters, social posts, brochures and packaging, all designed to keep your brand consistent and instantly recognisable.",
    offerings: ["Logos and identity", "Posters", "Social creatives", "Brochures", "Packaging"],
    symbol: "◈",
  },
  {
    number: "04",
    title: "Motion Graphics",
    subtitle: "Design that moves",
    description:
      "Animated logos, explainer videos, titles and kinetic text that explain your product in seconds and hold attention on screen.",
    offerings: ["Logo animation", "Explainers", "Titles and lower thirds", "Animated ads", "Kinetic text"],
    symbol: "◎",
  },
  {
    number: "05",
    title: "Event Management",
    subtitle: "Stage it. Light it. Make it unforgettable.",
    description:
      "We plan and run launches, concerts, award nights and corporate events: venue, stage, sound, lights, artists and live coverage, all handled.",
    offerings: ["Brand launches", "Concerts", "Award nights", "Corporate events", "Live coverage"],
    symbol: "✧",
  },
  {
    number: "06",
    title: "Social Media & Channel Boost",
    subtitle: "We run your pages. We grow your reach.",
    description:
      "We handle your social media end to end: content calendar, posting, reels, ads and community replies, so your channel gets more views, followers and customers.",
    offerings: ["Page management", "Content calendar", "Paid boosting", "YouTube growth", "Monthly reports"],
    symbol: "↗",
  },
  {
    number: "07",
    title: "Stars & Influencers",
    subtitle: "Let the faces people love promote you",
    description:
      "Reach Karnataka directly through film stars and top influencers. We connect your brand with the right face for ads, launches and social campaigns.",
    offerings: ["Star endorsements", "Influencer campaigns", "Brand ambassadors", "Reels and shoutouts", "Launch appearances"],
    symbol: "✦",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description: "We begin by understanding your brand, goals and creative requirements.",
  },
  {
    number: "02",
    title: "Conceptualise",
    description: "We shape the idea into a clear creative direction.",
  },
  {
    number: "03",
    title: "Create",
    description: "Our team brings the concept to life through production and execution.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "The final creative experience is prepared for your audience.",
  },
];


const previousClients = [
  {
    name: "Win The World",
    logo: "/images/win-the-world.jpeg",
  },
  {
    name: "Guduchi – The Ayurvedism",
    logo: "/images/guduchi.jpeg",
  },
  {
    name: "Ankit Vista – Green Village",
    logo: "/images/ankit-vista.jpeg",
  },
  {
    name: "Legacy IAS",
    logo: "/images/legacy-ias.jpeg",
  },
  {
    name: "Tatkshana Ayurveda",
    logo: "/images/tatkshana-ayurveda.jpeg",
  },
  {
    name: "Vedam Ayurvedic Hospital",
    logo: "/images/vedam.jpeg",
  },
  {
    name: "Chittara",
    logo: "/images/chithara.jpeg",
  },
];


const portfolioVideos = [
  {
    id: 1,
    title: "Rukmini Vasanth",
    category: "Event & Celebrity Edit",
    src: "/videos/rukmini-vasanth.mp4",
    format: "portrait",
  },
  {
    id: 2,
    title: "Fashion Editorial",
    category: "Fashion & Jewellery",
    src: "/videos/client-reel.mp4",
    format: "portrait",
  },
  {
    id: 3,
    title: "Bricks Academy",
    category: "Promotional Video",
    src: "/videos/bricks-academy.mp4",
    format: "portrait",
  },
  {
    id: 4,
    title: "RCB Chapter",
    category: "Cinematic Documentary",
    src: "/videos/rcb-chapter.mp4",
    format: "landscape",
  },
] as const;


export default function CreationsPage() {

const [activeVideo, setActiveVideo] = useState<
  (typeof portfolioVideos)[number] | null
>(null);

const videoReelRef = useRef<HTMLDivElement>(null);

  return (
    <main className="creations-page min-h-screen overflow-hidden text-[#F7F0E8]">
      <div className="ambient-background" aria-hidden="true">
        <span className="ambient-light ambient-light-one" />
        <span className="ambient-light ambient-light-two" />
        <span className="ambient-light ambient-light-three" />
        <span className="ambient-grain" />
      </div>

      <header className="creations-header sticky top-0 z-50 border-b border-white/10">
        <div className="mx-auto flex min-h-[82px] max-w-[1500px] items-center justify-between gap-4 px-5 md:px-12">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border border-[#D9A36B] font-serif text-xl text-[#D9A36B]">
              V
            </span>
            <span className="text-[12px] font-semibold leading-5 tracking-[0.2em]">
              V-ONE
              <span className="block text-[#D9A36B]">CREATIONS</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-[13px] text-white/75 lg:flex">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#process" className="nav-link">Our Process</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="home-link">
              <span>⌂</span>
              <span className="hidden sm:inline">V-ONE GROUPS</span>
              <span className="sm:hidden">HOME</span>
            </Link>
            <a href="#contact" className="header-cta hidden sm:inline-flex">
              START A PROJECT ↗
            </a>
          </div>
        </div>
      </header>

      <section className="creations-hero relative flex min-h-[760px] items-center">
        <div className="creations-hero-glow" />
        <div className="creations-hero-grid" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-center gap-12 px-6 py-24 md:px-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <div className="creations-enter">
            <div className="mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D9A36B]" />
              <span className="eyebrow">A V-ONE GROUPS COMPANY</span>
            </div>

            <h1 className="max-w-[850px] font-serif text-[clamp(64px,8.5vw,116px)] leading-[0.94] tracking-[-0.045em]">
              One team.
              <span className="block text-[#D9A36B]">Every story.</span>
            </h1>

            <p className="mt-10 max-w-[600px] text-[17px] leading-[2] text-[#D5C7BC] md:text-[19px]">
              We are a creative studio that turns your brand idea into films,
              designs, events and a loud social presence.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <a href="#services" className="primary-button">
                EXPLORE OUR SERVICES ↗
              </a>
              <a href="#contact" className="secondary-button">
                LET&apos;S CREATE
              </a>
            </div>

            <div className="mt-16 flex items-center gap-5">
              <span className="h-px w-12 bg-white/20" />
              <span className="text-[10px] tracking-[0.25em] text-white/45">
                FILM · DESIGN · EXPERIENCE
              </span>
            </div>
          </div>

          <div className="creative-elements relative mx-auto w-full max-w-[650px]" aria-label="Floating cinematic camera and editing equipment">
            <div className="visual-ambient visual-ambient-one" />
            <div className="visual-ambient visual-ambient-two" />
            <div className="visual-light-sweep" />

            <div className="floating-monitor" aria-hidden="true">
              <div className="monitor-screen">
                <div className="monitor-footage">
                  <span className="footage-sun" />
                  <span className="footage-mountain" />
                  <span className="footage-subject" />
                  <span className="footage-reflection" />
                </div>
                <div className="monitor-controls"><i /><i /><i /><span /></div>
              </div>
              <div className="monitor-stand" />
            </div>

            <div className="floating-camera" aria-hidden="true">
              <div className="camera-top-handle" />
              <div className="camera-body">
                <div className="camera-screen">
                  <div className="camera-screen-scene">
                    <span className="scene-sun" />
                    <span className="scene-subject" />
                    <span className="scene-ground" />
                  </div>
                </div>
                <div className="camera-lens">
                  <span className="lens-glass" />
                  <span className="lens-ring lens-ring-one" />
                  <span className="lens-ring lens-ring-two" />
                  <span className="lens-flare" />
                </div>
                <div className="camera-side-grip" />
                <div className="camera-control control-one" />
                <div className="camera-control control-two" />
              </div>
              <div className="camera-mount" />
              <div className="camera-tripod"><i /><i /><i /></div>
            </div>

            <div className="floating-clapper" aria-hidden="true">
              <div className="clapper-top" />
              <div className="clapper-board"><span /></div>
            </div>

            <div className="floating-filmstrip" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>

            <div className="floating-timeline" aria-hidden="true">
              <div className="timeline-clips"><i /><i /><i /><i /></div>
              <div className="timeline-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="timeline-playhead" />
            </div>

            <span className="visual-orbit orbit-a" />
            <span className="visual-orbit orbit-b" />
            <span className="visual-spark spark-a" />
            <span className="visual-spark spark-b" />
          </div>
        </div>

        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-white/40">
          SCROLL TO DISCOVER ↓
        </div>
      </section>

      <section id="about" className="about-section border-t border-white/10 px-6 py-32 md:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
          <div>
            <p className="eyebrow">WHO WE ARE</p>
            <p className="mt-6 text-[13px] tracking-[0.18em] text-white/45">
              THE CREATIVE STUDIO
            </p>
            <div className="mt-9 h-px w-20 bg-[#D9A36B]/60" />
          </div>

          <div>
            <h2 className="max-w-[1000px] font-serif text-[clamp(40px,5vw,68px)] leading-[1.12]">
              Every brand has a story.
              <span className="block text-[#D9A36B]">
                We help yours stand out.
              </span>
            </h2>

            <p className="mt-9 max-w-[780px] text-[16px] leading-[2] text-[#B9AAA0] md:text-[18px]">
              V-ONE Creations brings video, design, events, social media and
              Sandalwood stars together under one creative studio. From the
              first idea to the final campaign, we help brands create work
              that connects with people.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="services-section px-6 py-32 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-20">
            <p className="eyebrow">WHAT WE OFFER</p>

            <div className="mt-6 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <h2 className="font-serif text-[clamp(42px,5vw,70px)] leading-[1.08]">
                Ideas into experiences.
              </h2>

              <p className="max-w-[420px] text-[15px] leading-[1.9] text-white/55 md:text-[17px]">
                Seven creative disciplines. One team working to bring your
                brand story to life.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="service-card group">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] tracking-[0.2em] text-[#D9A36B]">
                    SERVICE / {service.number}
                  </span>
                  <span className="service-symbol">{service.symbol}</span>
                </div>

                <div className="mt-14">
                  <h3 className="font-serif text-[32px] leading-[1.15] md:text-[36px]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[13px] font-semibold leading-6 tracking-wide text-[#D9A36B] md:text-[14px]">
                    {service.subtitle}
                  </p>

                  <p className="mt-6 text-[15px] leading-[1.9] text-[#B9AAA0] md:text-[16px]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-10 border-t border-white/10 pt-7">
                  <p className="mb-5 text-[10px] font-bold tracking-[0.2em] text-white/45">
                    WHAT WE OFFER
                  </p>
                
                  <div className="flex flex-wrap gap-2.5">

                    {service.offerings.map((offering) => (

                      <span key={offering} className="service-tag">

                        {offering}

                      </span>

                    ))}

                  </div>

                </div>



                <div className="card-accent-line" />

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* PREVIOUS CLIENTS LOGO SHOWCASE */}
      <section className="client-reel-section">

        <div className="client-reel-heading">
          <div className="client-reel-eyebrow">
            <span />
            OUR CREATIVE PARTNERSHIPS
            <span />
          </div>

          <h2>
            The brands
            <span> behind our journey.</span>
          </h2>

          <p>
            Every collaboration tells a story. Here are some of the
            brands we have had the pleasure of working with.
          </p>
        </div>

        <div className="client-reel-wrapper">
          <div className="client-reel-track">
  {[...previousClients, ...previousClients].map((client, index) => (
    <div
      className="client-logo-card"
      key={`${client.name}-${index}`}
      aria-hidden={index >= previousClients.length}
    >
      <img
        className="client-logo-image"
        src={client.logo}
        alt={index < previousClients.length ? client.name : ""}
        loading={index < previousClients.length ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
      />
    </div>
  ))}
</div>
        </div>

        <div className="client-reel-bottom">
          <span className="client-reel-line" />
          <p>BUILT ON COLLABORATION · DRIVEN BY CREATIVITY</p>
          <span className="client-reel-line" />
        </div>

      </section>

{/* VIDEO PORTFOLIO SECTION */}
<section className="video-portfolio-section">

  {/* SECTION HEADING */}
  <div className="video-portfolio-heading">
    <div className="video-portfolio-eyebrow">
      <span />
      A SELECTION OF OUR WORK
      <span />
    </div>

    <h2>
      Stories in
      <span> every frame.</span>
    </h2>

    <p>
      From cinematic films to brand stories, explore the
      visual experiences we've created for our clients.
    </p>
  </div>

  {/* MOVING VIDEO REEL */}
  <div
    ref={videoReelRef}
    className={`video-reel-wrapper ${activeVideo ? "video-reel-paused" : ""}`}
  >
    <div className="video-reel-track">

      {[...portfolioVideos, ...portfolioVideos].map((video, index) => (
        <button
          type="button"
          className={`video-work-card ${video.format}`}
          key={`${video.id}-${index}`}
          onClick={() => setActiveVideo(video)}
          aria-label={`Play ${video.title}`}
        >
          <div
            className="video-work-frame"
            style={{
              aspectRatio: video.format === "portrait" ? "9 / 16" : "16 / 9",
            }}
          >
            <video
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />

            <div className="video-work-overlay">
              <span className="video-play-icon">▶</span>
              <span className="video-watch-label">WATCH FILM</span>
            </div>
          </div>

          <div className="video-work-info">
            <span>{video.category}</span>
            <h3>{video.title}</h3>
          </div>
        </button>
      ))}

    </div>
  </div>

  {/* BOTTOM LABEL */}
  <div className="video-portfolio-bottom">
    <span />
    <p>CREATED WITH PURPOSE · TOLD THROUGH VISUALS</p>
    <span />
  </div>

  {/* EXPANDED VIDEO PLAYER */}
  {activeVideo && (
    <div
      className="video-modal"
      onClick={() => setActiveVideo(null)}
    >
      <div
        className="video-modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="video-modal-close"
          onClick={() => setActiveVideo(null)}
          aria-label="Close video"
        >
          ×
        </button>

        <div className="video-modal-heading">
          <span>{activeVideo.category}</span>
          <h3>{activeVideo.title}</h3>
        </div>

        <video
          key={activeVideo.id}
          src={activeVideo.src}
          autoPlay
          controls
          playsInline
          preload="auto"
        />
      </div>
    </div>
  )}

</section>

      <section id="process" className="process-section border-y border-white/10 px-6 py-32 md:px-12">

        <div className="mx-auto max-w-[1500px]">

          <p className="eyebrow">HOW WE WORK</p>



          <h2 className="mt-7 max-w-[850px] font-serif text-[clamp(42px,5vw,70px)] leading-[1.12]">

            From the first thought

            <span className="block text-[#D9A36B]">to the final frame.</span>

          </h2>



          <div className="mt-20 grid gap-12 md:grid-cols-2 xl:grid-cols-4">

            {process.map((item) => (

              <div key={item.number} className="process-item">

                <span className="font-serif text-[48px] text-[#D9A36B]/65">

                  {item.number}

                </span>



                <h3 className="mt-8 text-[21px] font-semibold">{item.title}</h3>



                <p className="mt-5 text-[15px] leading-[1.9] text-[#AFA098]">

                  {item.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      <section id="contact" className="creations-contact relative overflow-hidden px-6 py-36 md:px-12">

        <div className="contact-glow" />



        <div className="relative z-10 mx-auto max-w-[1150px] text-center">

          <p className="eyebrow">LET&apos;S CREATE TOGETHER</p>



          <h2 className="mt-9 font-serif text-[clamp(48px,7vw,88px)] leading-[1.05]">

            Have a story

            <span className="block text-[#D9A36B]">worth telling?</span>

          </h2>



          <p className="mx-auto mt-9 max-w-[650px] text-[16px] leading-[2] text-[#C5B4A9] md:text-[18px]">

            Video, design, events, social media and Sandalwood stars,

            all under one roof. Call or message us to plan your next campaign.

          </p>



          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/919980102146?text=Hello%20V-ONE%20Creations%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              TEXT US ON WHATSAPP ↗
            </a>

          </div>



          <div className="mt-12 flex flex-col items-center gap-4 text-[13px] text-white/55 sm:flex-row sm:justify-center sm:gap-9">

            <span>+91 99801 02146</span>

            <span className="hidden sm:block">•</span>

            <span>vonecreations27@gmail.com</span>

          </div>

        </div>

      </section>
      {/* INSTAGRAM */}
      <section className="border-t border-white/10 px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-[1150px] flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#D9A36B]">
              FOLLOW OUR JOURNEY
            </p>
            <h3 className="mt-3 font-serif text-3xl text-[#F7F0E8] md:text-4xl">
              Find us on Instagram.
            </h3>
            <p className="mt-2 text-sm text-[#AFA098]">
              Discover our latest work, stories and creative projects.
            </p>
          </div>

          <a
            href="https://www.instagram.com/vonecreations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#D9A36B] bg-[#D9A36B]/10 px-7 py-4 text-sm font-semibold tracking-wider text-[#D9A36B] transition-all duration-300 hover:bg-[#D9A36B] hover:text-[#15100e]"
          >
            <span>◎</span>
            FOLLOW @VONECREATIONS
            <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 md:px-12">

        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 md:flex-row md:items-center">

          <Link href="/" className="text-[13px] font-bold leading-6 tracking-[0.2em]">

            V-ONE GROUPS

            <span className="block text-[12px] font-normal tracking-normal text-[#D9A36B]">

              A creative and technology group

            </span>

          </Link>



          <p className="text-[12px] text-white/45">

            V-ONE Creations · A V-ONE Groups company

          </p>

<Link
  href="/bytes"
  className="relative z-20 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-cyan-300"
>
  EXPLORE V-ONE BYTES <span>↗</span>
</Link>

      

        </div>
         
      </footer>
            <style jsx global>{`
        .creations-page {
          --copper: #D9A36B;
          position: relative;
          isolation: isolate;
          background: linear-gradient(135deg, #15100e, #211713 48%, #130e0c);
        }

        .ambient-background {
          position: fixed;
          z-index: -1;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          background: radial-gradient(ellipse at 50% 50%, rgba(73,48,38,0.12), transparent 70%);
        }

        .ambient-light {
          position: absolute;
          display: block;
          width: 45vw;
          height: 45vw;
          min-width: 280px;
          min-height: 280px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          will-change: transform;
        }

        .ambient-light-one {
          top: -15%;
          left: -15%;
          background: #B87345;
          animation: ambientDriftOne 24s ease-in-out infinite alternate;
        }

        .ambient-light-two {
          top: 35%;
          right: -18%;
          background: #D9A36B;
          animation: ambientDriftTwo 30s ease-in-out infinite alternate;
        }

        .ambient-light-three {
          bottom: -25%;
          left: 25%;
          background: #75442F;
          animation: ambientDriftThree 27s ease-in-out infinite alternate;
        }

        .ambient-grain {
          position: absolute;
          inset: 0;
          opacity: 0.12;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http\\://www\\.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.15'/%3E%3C/svg%3E");
        }

        .creations-header {
          background: rgba(24,17,14,0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .home-link {
          display: inline-flex;
          min-height: 40px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid rgba(217,163,107,0.65);
          padding: 0 13px;
          color: #D9A36B;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          transition: background 300ms ease, color 300ms ease, transform 300ms ease;
        }

        .home-link:hover {
          transform: translateY(-2px);
          background: #D9A36B;
          color: #211713;
        }

        .home-link span:first-child {
          font-size: 17px;
        }

        .header-cta {
          align-items: center;
          border: 1px solid #D9A36B;
          background: #D9A36B;
          padding: 14px 18px;
          color: #211713;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          transition: all 300ms ease;
        }

        .header-cta:hover {
          background: transparent;
          color: #D9A36B;
        }

        .nav-link {
          position: relative;
          padding: 8px 0;
          transition: color 300ms ease;
        }

        .nav-link:hover {
          color: #D9A36B;
        }

        .nav-link::after {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 1px;
          background: #D9A36B;
          content: "";
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 350ms ease;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .creations-hero {
          isolation: isolate;
          min-height: min(820px, calc(100svh - 82px));
        }

        .creations-hero-glow {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(ellipse at 76% 48%, rgba(217,163,107,0.2), transparent 38%);
          animation: creationsGlow 16s ease-in-out infinite alternate;
        }

        .creations-hero-grid {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0.1;
          background-image:
            linear-gradient(rgba(217,163,107,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,163,107,0.15) 1px, transparent 1px);
          background-size: 90px 90px;
          mask-image: radial-gradient(ellipse at center, black, transparent 80%);
        }

        .eyebrow {
          color: #D9A36B;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.25em;
        }

        .creations-enter {
          animation: creationsEnter 1.1s cubic-bezier(0.2,0.7,0.2,1) both;
        }

        .primary-button, .secondary-button {
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

        .primary-button {
          background: #D9A36B;
          color: #211713;
        }

        .primary-button:hover {
          transform: translateY(-4px);
          background: #F0C99F;
        }

        .secondary-button {
          border: 1px solid rgba(255,255,255,0.28);
          color: #F7F0E8;
        }

        .secondary-button:hover {
          transform: translateY(-4px);
          border-color: #D9A36B;
          color: #D9A36B;
        }

        .creative-elements {
          height: 610px;
          isolation: isolate;
          overflow: visible;
          perspective: 1100px;
        }

        .visual-ambient {
          position: absolute;
          z-index: -2;
          width: 390px;
          height: 390px;
          border-radius: 50%;
          filter: blur(85px);
          pointer-events: none;
        }

        .visual-ambient-one {
          top: 12%;
          right: 3%;
          background: rgba(190,112,61,.23);
          animation: ambientBreath 8s ease-in-out infinite alternate;
        }

        .visual-ambient-two {
          bottom: 0;
          left: 5%;
          width: 280px;
          height: 280px;
          background: rgba(111,55,37,.28);
          animation: ambientBreath 10s ease-in-out infinite alternate-reverse;
        }

        .visual-light-sweep {
          position: absolute;
          z-index: 8;
          top: 2%;
          bottom: 8%;
          left: -20%;
          width: 24%;
          background: linear-gradient(90deg,transparent,rgba(255,205,145,.12),transparent);
          filter: blur(18px);
          transform: skewX(-18deg);
          animation: lightSweep 9s ease-in-out infinite;
          pointer-events: none;
        }

        .floating-monitor {
          position: absolute;
          z-index: 1;
          top: 4%;
          right: 1%;
          width: 48%;
          height: 235px;
          transform: rotateY(-12deg) rotateZ(2deg);
          animation: monitorDrift 9s ease-in-out infinite;
        }

        .monitor-screen {
          position: absolute;
          inset: 0 0 24px;
          padding: 9px;
          border: 1px solid rgba(205,157,112,.65);
          border-radius: 9px;
          background: linear-gradient(145deg,#30251f,#09090a 70%);
          box-shadow: 0 24px 55px #0009,0 0 35px rgba(207,132,76,.15),inset 0 1px #ffffff24;
        }

        .monitor-footage {
          position: relative;
          height: 78%;
          overflow: hidden;
          background: linear-gradient(160deg,#c18b5c 0%,#704b3a 35%,#222124 73%,#090b0e 100%);
        }

        .footage-sun {
          position: absolute;
          top: 12%;
          right: 17%;
          width: 39px;
          height: 39px;
          border-radius: 50%;
          background: #f2c18a;
          box-shadow: 0 0 35px 12px #e9a96c77;
        }

        .footage-mountain {
          position: absolute;
          right: -5%;
          bottom: 0;
          left: -5%;
          height: 58%;
          background: linear-gradient(145deg,#44342f,#151719 70%);
          clip-path: polygon(0 80%,22% 20%,39% 65%,62% 5%,100% 72%,100% 100%,0 100%);
        }

        .footage-subject {
          position: absolute;
          z-index: 2;
          bottom: 12%;
          left: 48%;
          width: 22px;
          height: 75px;
          border-radius: 50% 50% 3px 3px;
          background: linear-gradient(#161414,#08090a);
        }

        .footage-reflection {
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg,transparent 25%,#fff2 48%,transparent 64%);
          transform: translateX(-100%);
          animation: footageGlint 6s ease-in-out infinite;
        }

        .monitor-controls {
          display: flex;
          height: 22%;
          align-items: center;
          gap: 9px;
          padding: 5px 2px 0;
        }

        .monitor-controls i {
          width: 25px;
          height: 25px;
          border: 3px solid transparent;
          border-radius: 50%;
          background: linear-gradient(#171414,#171414) padding-box,conic-gradient(#dca36b,#a65a48,#79668b,#dca36b) border-box;
          animation: wheelTurn 12s linear infinite;
        }

        .monitor-controls i:nth-child(2) {
          animation-direction: reverse;
        }

        .monitor-controls span {
          flex: 1;
          height: 20px;
          background: repeating-linear-gradient(90deg,#d9a36b 0 2px,transparent 2px 5px);
          opacity: .6;
          mask-image: linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);
        }

        .monitor-stand {
          position: absolute;
          bottom: 0;
          left: 45%;
          width: 14%;
          height: 27px;
          background: linear-gradient(90deg,#161515,#78604a,#171515);
          clip-path: polygon(38% 0,62% 0,100% 100%,0 100%);
        }

        .floating-camera {
          position: absolute;
          z-index: 4;
          top: 26%;
          left: 3%;
          width: 70%;
          height: 260px;
          transform-origin: center;
          animation: cameraDrift 7.5s ease-in-out infinite;
          filter: drop-shadow(0 28px 22px #0009);
        }

        .camera-body {
          position: absolute;
          top: 34px;
          left: 10%;
          width: 69%;
          height: 142px;
          border: 1px solid #8d7059;
          border-radius: 13px 9px 12px 12px;
          background: linear-gradient(145deg,#4a4038,#171719 68%);
          box-shadow: inset 0 1px #ffffff30, inset 0 -8px 18px #0008;
        }

        .camera-top-handle {
          position: absolute;
          z-index: 2;
          top: 13px;
          left: 29%;
          width: 34%;
          height: 29px;
          border: 8px solid #272321;
          border-bottom: 0;
          border-radius: 9px 9px 0 0;
          transform: skewX(-8deg);
        }

        .camera-screen {
          position: absolute;
          top: 18px;
          left: 17px;
          width: 29%;
          height: 83px;
          padding: 4px;
          border: 1px solid #a17b5b;
          background: #100e0d;
        }

        .camera-screen-scene {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: linear-gradient(160deg,#b98255,#4c3028 55%,#111);
        }

        .scene-sun {
          position: absolute;
          top: 10%;
          right: 12%;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: #efbd83;
          box-shadow: 0 0 16px #efbd83;
        }

        .scene-subject {
          position: absolute;
          bottom: 0;
          left: 44%;
          width: 15px;
          height: 44px;
          border-radius: 50% 50% 0 0;
          background: #171313;
        }

        .scene-ground {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 23%;
          background: #171313;
        }

        .camera-lens {
          position: absolute;
          top: 17px;
          right: 9%;
          display: flex;
          width: 120px;
          height: 120px;
          align-items: center;
          justify-content: center;
          border: 8px solid #292522;
          border-radius: 50%;
          background: radial-gradient(circle,#08090d 0 34%,#4a3a30 35% 39%,#171719 40% 63%,#74604b 64% 68%,#151516 69%);
          box-shadow: 0 0 0 2px #9d7b5b, inset 0 0 18px #000;
        }

        .lens-glass {
          position: absolute;
          width: 52%;
          height: 52%;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%,#c8a98b,#4b3d43 24%,#11131a 58%,#050609 75%);
          box-shadow: 0 0 20px #dca36b55;
          animation: lensShimmer 4s ease-in-out infinite alternate;
        }

        .lens-ring {
          position: absolute;
          border: 1px solid rgba(220,163,107,.55);
          border-radius: 50%;
        }

        .lens-ring-one {
          inset: 9px;
        }

        .lens-ring-two {
          inset: 18px;
          border-color: rgba(255,255,255,.18);
        }

        .lens-flare {
          position: absolute;
          width: 65%;
          height: 2px;
          background: linear-gradient(90deg,transparent,#fff8d8,transparent);
          transform: rotate(-35deg);
          animation: flarePulse 3s ease-in-out infinite alternate;
        }

        .camera-side-grip {
          position: absolute;
          top: 19px;
          left: -9px;
          width: 13px;
          height: 98px;
          border-radius: 5px;
          background: linear-gradient(90deg,#171515,#665344,#171515);
        }

        .camera-control {
          position: absolute;
          bottom: 12px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #c58b59;
          box-shadow: 0 0 8px #c58b59;
        }

        .control-one {
          left: 23px;
        }

        .control-two {
          left: 42px;
          background: #70665e;
        }

        .camera-mount {
          position: absolute;
          bottom: 43px;
          left: 39%;
          width: 24%;
          height: 13px;
          border-radius: 3px;
          background: linear-gradient(90deg,#171515,#6d5947,#171515);
        }

        .camera-tripod {
          position: absolute;
          bottom: 0;
          left: 49%;
          display: flex;
          width: 2px;
          height: 50px;
          justify-content: center;
          background: #6f5a48;
        }

        .camera-tripod i {
          position: absolute;
          top: 22px;
          width: 2px;
          height: 65px;
          background: linear-gradient(#6f5a48,#211b18);
          transform-origin: top;
        }

        .camera-tripod i:nth-child(1) {
          transform: rotate(28deg);
        }

        .camera-tripod i:nth-child(2) {
          transform: rotate(-28deg);
        }

        .camera-tripod i:nth-child(3) {
          transform: rotate(0deg);
        }

        .floating-clapper {
          position: absolute;
          z-index: 5;
          top: 58%;
          right: 0;
          width: 145px;
          height: 105px;
          transform: rotate(-11deg);
          animation: clapperFloat 6s ease-in-out infinite;
          filter: drop-shadow(0 15px 14px #0009);
        }

        .clapper-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 24px;
          border: 1px solid #9e7655;
          background: repeating-linear-gradient(135deg,#e6d1b6 0 18px,#30241e 18px 36px);
          transform-origin: left bottom;
          animation: clapperSnap 8s ease-in-out infinite;
        }

        .clapper-board {
          position: absolute;
          top: 23px;
          width: 100%;
          height: 75px;
          border: 1px solid #8c6a4d;
          background: linear-gradient(145deg,#30251f,#121111);
          box-shadow: inset 0 1px #fff2;
        }

        .clapper-board span {
          position: absolute;
          top: 50%;
          right: 13px;
          left: 13px;
          height: 1px;
          background: rgba(217,163,107,.4);
        }

        .floating-filmstrip {
          position: absolute;
          z-index: 2;
          bottom: 13%;
          left: 2%;
          display: flex;
          width: 190px;
          height: 55px;
          gap: 5px;
          padding: 8px;
          border: 1px solid #8c684c;
          background: #171312;
          transform: rotate(5deg);
          animation: stripFloat 7s ease-in-out infinite;
          box-shadow: 0 14px 25px #0008;
        }

        .floating-filmstrip span {
          flex: 1;
          border: 1px solid #b48b67;
          background: linear-gradient(145deg,#b77b50,#40302a 55%,#121315);
          animation: filmFrame 4s ease-in-out infinite alternate;
        }

        .floating-filmstrip span:nth-child(2) { animation-delay: -.5s; }
        .floating-filmstrip span:nth-child(3) { animation-delay: -1s; }
        .floating-filmstrip span:nth-child(4) { animation-delay: -1.5s; }
        .floating-filmstrip span:nth-child(5) { animation-delay: -2s; }

        .floating-timeline {
          position: absolute;
          z-index: 6;
          right: 5%;
          bottom: 4%;
          display: flex;
          width: 65%;
          height: 83px;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          padding: 10px;
          border: 1px solid rgba(217,163,107,.48);
          border-radius: 5px;
          background: linear-gradient(145deg,rgba(42,31,26,.96),rgba(12,11,12,.96));
          box-shadow: 0 18px 40px #0009,0 0 30px #d99a5a18;
          transform: rotate(-2deg);
          animation: timelineFloat 8s ease-in-out infinite;
        }

        .timeline-clips {
          display: flex;
          height: 23px;
          gap: 4px;
        }

        .timeline-clips i {
          flex: 1;
          border: 1px solid #a87953;
          background: linear-gradient(90deg,#704632,#b78359,#45332b);
        }

        .timeline-clips i:nth-child(2) { flex: 1.4; }
        .timeline-clips i:nth-child(3) { flex: .8; }
        .timeline-clips i:nth-child(4) { flex: 1.2; }

        .timeline-wave {
          display: flex;
          height: 24px;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
        }

        .timeline-wave i {
          width: 3px;
          height: 35%;
          border-radius: 2px;
          background: #d9a36b;
          box-shadow: 0 0 6px #d9a36b55;
          animation: waveformPulse .7s ease-in-out infinite alternate;
        }

        .timeline-wave i:nth-child(3n) { height: 90%; animation-delay: -.2s; }
        .timeline-wave i:nth-child(3n + 1) { height: 60%; animation-delay: -.4s; }
        .timeline-wave i:nth-child(4n) { height: 75%; animation-delay: -.6s; }

        .timeline-playhead {
          position: absolute;
          top: 5px;
          bottom: 5px;
          left: 18%;
          width: 1px;
          background: #f4d2a7;
          box-shadow: 0 0 9px #f4d2a7;
          animation: playheadMove 7s linear infinite alternate;
        }

        .visual-orbit {
          position: absolute;
          z-index: -1;
          display: block;
          border: 1px solid rgba(217,163,107,.16);
          border-radius: 50%;
          pointer-events: none;
        }

        .orbit-a {
          top: 8%;
          left: 8%;
          width: 440px;
          height: 440px;
          transform: rotate(-28deg) scaleY(.55);
          animation: orbitTurn 35s linear infinite;
        }

        .orbit-b {
          top: 17%;
          right: 11%;
          width: 310px;
          height: 310px;
          border-style: dashed;
          transform: rotate(24deg) scaleY(.55);
          animation: orbitTurn 45s linear infinite reverse;
        }

        .visual-spark {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #f3c18b;
          box-shadow: 0 0 18px 5px #d99a5a88;
          animation: sparkPulse 3s ease-in-out infinite alternate;
        }

        .spark-a { top: 17%; left: 21%; }
        .spark-b { right: 8%; bottom: 25%; animation-delay: -1.5s; }

        @keyframes ambientBreath {
          from { transform: scale(.88); opacity: .65; }
          to { transform: scale(1.15); opacity: 1; }
        }

        @keyframes lightSweep {
          0%,20% { transform: translateX(0) skewX(-18deg); opacity: 0; }
          42% { opacity: 1; }
          75%,100% { transform: translateX(570%) skewX(-18deg); opacity: 0; }
        }

        @keyframes monitorDrift {
          0%,100% { transform: translate3d(0,0,0) rotateY(-12deg) rotateZ(2deg); }
          50% { transform: translate3d(0,-13px,0) rotateY(-8deg) rotateZ(0deg); }
        }

        @keyframes footageGlint {
          0%,35% { transform: translateX(-120%); }
          70%,100% { transform: translateX(120%); }
        }

        @keyframes cameraDrift {
          0%,100% { transform: translate3d(0,0,0) rotate(-1deg); }
          50% { transform: translate3d(5px,-13px,0) rotate(1.2deg); }
        }

        @keyframes lensShimmer {
          from { opacity: .35; transform: translateX(-3px); }
          to { opacity: .95; transform: translateX(3px); }
        }

        @keyframes flarePulse {
          from { opacity: .25; transform: rotate(-35deg) scale(.8); }
          to { opacity: .85; transform: rotate(-35deg) scale(1.2); }
        }

        @keyframes clapperFloat {
          0%,100% { transform: translateY(0) rotate(-11deg); }
          50% { transform: translateY(-11px) rotate(-7deg); }
        }

        @keyframes clapperSnap {
          0%,82%,100% { transform: rotate(0); }
          86% { transform: rotate(-13deg); }
          90% { transform: rotate(0); }
        }

        @keyframes stripFloat {
          0%,100% { transform: translateY(0) rotate(5deg); }
          50% { transform: translateY(9px) rotate(2deg); }
        }

        @keyframes timelineFloat {
          0%,100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-7px) rotate(-.5deg); }
        }

        @keyframes filmFrame { to { filter: brightness(1.4); } }
        @keyframes wheelTurn { to { transform: rotate(360deg); } }
        @keyframes waveformPulse { to { transform: scaleY(.3); opacity: .5; } }
        @keyframes playheadMove { from { left: 18%; } to { left: 88%; } }
        @keyframes orbitTurn { to { rotate: 360deg; } }
        @keyframes sparkPulse { from { opacity: .35; transform: scale(.7); } to { opacity: 1; transform: scale(1.3); } }

        @media (max-width: 1024px) {
          .creative-elements { height: 560px; }
        }

        @media (max-width: 640px) {
          .creative-elements {
            height: 470px;
            width: min(100%, 500px);
            margin-top: 15px;
          }

          .floating-monitor { top: 2%; right: 0; width: 49%; height: 175px; }
          .monitor-screen { padding: 6px; }
          .monitor-controls i { width: 17px; height: 17px; border-width: 2px; }
          .floating-camera { top: 27%; left: -2%; width: 77%; transform: scale(.82); transform-origin: left top; }
          .floating-clapper { top: 60%; right: 0; width: 112px; }
          .floating-filmstrip { bottom: 14%; transform: scale(.78) rotate(5deg); transform-origin: left bottom; }
          .floating-timeline { right: 1%; bottom: 1%; width: 86%; height: 66px; padding: 8px; }
          .timeline-wave { gap: 3px; }
          .orbit-a { width: 300px; height: 300px; }
          .orbit-b { width: 220px; height: 220px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .visual-ambient, .visual-light-sweep, .floating-monitor, .footage-reflection,
          .floating-camera, .lens-glass, .lens-flare, .floating-clapper, .clapper-top,
          .floating-filmstrip, .floating-filmstrip span, .floating-timeline,
          .timeline-wave i, .timeline-playhead, .visual-orbit, .visual-spark,
          .monitor-controls i { animation: none !important; }
        }

        .about-section, .process-section { background: rgba(0,0,0,0.08); }

        .services-section { background: rgba(0,0,0,0.15); }

        .service-card {
          position: relative;
          display: flex;
          min-height: 535px;
          flex-direction: column;
          overflow: hidden;
          padding: 36px;
          border: 1px solid rgba(217,163,107,0.17);
          background: linear-gradient(145deg, rgba(73,48,38,0.4), rgba(25,18,15,0.76));
          transition: transform 550ms ease, border-color 450ms ease, box-shadow 550ms ease;
        }

        .service-card::before {
          position: absolute;
          top: -120px;
          right: -120px;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: rgba(217,163,107,0.1);
          content: "";
          filter: blur(45px);
          transition: transform 700ms ease;
          pointer-events: none;
        }

        .service-card:hover {
          transform: translateY(-9px);
          border-color: rgba(217,163,107,0.62);
          box-shadow: 0 25px 75px rgba(0,0,0,0.28);
        }

        .service-card:hover::before { transform: scale(1.8); }

        .service-symbol {
          display: flex;
          width: 52px;
          height: 52px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(217,163,107,0.4);
          color: #D9A36B;
          font-size: 25px;
          transition: transform 500ms ease;
        }

        .service-card:hover .service-symbol { transform: rotate(45deg); }

        .service-tag {
          border: 1px solid rgba(255,255,255,0.14);
          padding: 9px 12px;
          color: rgba(255,255,255,0.72);
          font-size: 11px;
          transition: border-color 300ms ease, color 300ms ease;
        }

        .service-card:hover .service-tag {
          border-color: rgba(217,163,107,0.4);
          color: #E4B98F;
        }

        .card-accent-line {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #D9A36B, transparent);
          transform: scaleX(0);
          transition: transform 550ms ease;
        }

        .service-card:hover .card-accent-line { transform: scaleX(1); }

        .process-item {
          padding-top: 28px;
          border-top: 1px solid rgba(217,163,107,0.32);
          transition: transform 450ms ease;
        }

        .process-item:hover { transform: translateY(-7px); }

        .creations-contact {
          background: radial-gradient(ellipse at center, rgba(169,108,67,0.17), transparent 65%);
        }

        .contact-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(217,163,107,0.08);
          filter: blur(100px);
          transform: translate(-50%, -50%);
          animation: contactPulse 8s ease-in-out infinite alternate;
        }

        @keyframes ambientDriftOne {
          from { transform: translate(0,0) scale(1); }
          to { transform: translate(18vw,15vh) scale(1.25); }
        }

        @keyframes ambientDriftTwo {
          from { transform: translate(0,0) scale(1); }
          to { transform: translate(-16vw,12vh) scale(1.2); }
        }

        @keyframes ambientDriftThree {
          from { transform: translate(0,0) scale(1); }
          to { transform: translate(12vw,-15vh) scale(1.3); }
        }

        @keyframes creationsGlow {
          from { transform: scale(0.96); opacity: 0.7; }
          to { transform: scale(1.08); opacity: 1; }
        }

        @keyframes creationsEnter {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ringRotate { to { transform: rotate(360deg); } }

        @keyframes ringPulse {
          from { transform: scale(0.95); opacity: 0.55; }
          to { transform: scale(1.05); opacity: 1; }
        }

        @keyframes artFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-13px); }
        }

        @keyframes floatOne {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-13px); }
        }

        @keyframes floatTwo {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }

        @keyframes centerGlow {
          from { box-shadow: 0 0 50px rgba(169,108,67,0.13); }
          to { box-shadow: 0 0 90px rgba(169,108,67,0.25); }
        }

        @keyframes contactPulse {
          from { opacity: 0.45; transform: translate(-50%, -50%) scale(0.9); }
          to { opacity: 0.9; transform: translate(-50%, -50%) scale(1.12); }
        }

        @media (max-width: 1024px) {
          .creations-hero { min-height: auto; }
          .service-card { min-height: 500px; }
        }

        @media (max-width: 640px) {
          .creations-hero { padding-top: 30px; padding-bottom: 75px; }
          .service-card { min-height: auto; padding: 27px; }
          .service-card > div:nth-child(2) { margin-top: 38px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ambient-light,
          .creations-hero-glow,
          .creations-enter,
          .contact-glow {
            animation: none !important;
          }

          .service-card,
          .process-item,
          .service-symbol,
          .nav-link,
          .primary-button,
          .secondary-button,
          .home-link {
            transition: none !important;
          }
        }
          

/* ==========================================
   V-ONE CREATIONS — CLIENT LOGO REEL
========================================== */

.client-reel-section {
  position: relative;
  overflow: hidden;
  padding: 120px 0 95px;
  border-top: 1px solid rgba(217,163,107,.15);
  border-bottom: 1px solid rgba(217,163,107,.15);
  background:
    radial-gradient(
      ellipse at 50% 45%,
      rgba(174,112,69,.12),
      transparent 65%
    ),
    linear-gradient(135deg, #17110e, #211713 50%, #130e0c);
}

/* HEADING */

.client-reel-heading {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto 70px;
  padding: 0 25px;
  text-align: center;
}

.client-reel-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: #D9A36B;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .25em;
}

.client-reel-eyebrow span {
  display: block;
  width: 35px;
  height: 1px;
  background: #D9A36B;
  opacity: .65;
}

.client-reel-heading h2 {
  margin-top: 28px;
  color: #F7F0E8;
  font-family: Georgia, serif;
  font-size: clamp(38px, 5.5vw, 68px);
  line-height: 1.12;
  letter-spacing: -.035em;
}

.client-reel-heading h2 span {
  display: block;
  color: #D9A36B;
}

.client-reel-heading > p {
  max-width: 600px;
  margin: 25px auto 0;
  color: #B9AAA0;
  font-size: 15px;
  line-height: 1.9;
}

/* LOGO REEL WRAPPER */

.client-reel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 0 30px;
  background: transparent;
  border: none;
  box-shadow: none;

  mask-image: linear-gradient(
    90deg,
    transparent,
    black 8%,
    black 92%,
    transparent
  );

  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    black 8%,
    black 92%,
    transparent
  );
}

/* ANIMATED TRACK */

.client-reel-track {
  display: flex;
  width: max-content;
  align-items: center;
  gap: 28px;
  animation: clientLogoMarquee 38s linear infinite;
  will-change: transform;
}

.client-reel-wrapper:hover .client-reel-track {
  animation-play-state: paused;
}

@keyframes clientLogoMarquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

/* LOGO CARDS */

.client-logo-card {
  position: relative;
  display: flex;
  flex: 0 0 255px;
  width: 255px;
  min-width: 0;
  height: 180px;
  align-items: center;
  justify-content: center;
  padding: 16px 12px;
  overflow: hidden;
  background: transparent;
  border: none;
  box-shadow: none;
  transition: transform 450ms ease;
}

.client-logo-card:hover {
  transform: translateY(-6px);
}

/* LOGO IMAGES */

.client-logo-image {
  display: block;
  width: 100%;
  height: 140px;
  object-fit: contain;
  object-position: center;
  background: transparent;
  border: none;
  box-shadow: none;
  filter: none;
  transition: transform 450ms ease;
}

.client-logo-card:hover .client-logo-image {
  transform: scale(1.045);
}

/* HIDE UNUSED BRAND LABELS */

.client-logo-divider,
.client-logo-name {
  display: none !important;
}

/* BOTTOM CAPTION */

.client-reel-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 42px;
  padding: 0 20px;
}

.client-reel-bottom p {
  color: rgba(217,163,107,.7);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .22em;
  text-align: center;
}

.client-reel-line {
  display: block;
  width: 45px;
  height: 1px;
  background: rgba(217,163,107,.4);
}

/* TABLET */

@media (max-width: 900px) {
  .client-reel-section {
    padding: 100px 0 80px;
  }

  .client-logo-card {
    flex-basis: 225px;
    width: 225px;
    height: 170px;
  }

  .client-logo-image {
    height: 125px;
  }

  .client-reel-track {
    gap: 22px;
  }
}

/* MOBILE */

@media (max-width: 640px) {
  .client-reel-section {
    padding: 85px 0 70px;
  }

  .client-reel-heading {
    margin-bottom: 42px;
    padding: 0 20px;
  }

  .client-reel-heading h2 {
    font-size: 39px;
  }

  .client-reel-heading > p {
    font-size: 13px;
  }

  .client-reel-track {
    gap: 17px;
    animation-duration: 32s;
  }

  .client-logo-card {
    flex-basis: 190px;
    width: 190px;
    height: 150px;
    padding: 12px;
  }

  .client-logo-image {
    height: 115px;
  }

  .client-reel-bottom {
    gap: 10px;
    margin-top: 30px;
  }

  .client-reel-bottom p {
    font-size: 7px;
    letter-spacing: .12em;
  }

  .client-reel-line {
    width: 20px;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .client-reel-track {
    animation: none;
  }

  .client-logo-card,
  .client-logo-image {
    transition: none;
  }
}

/* CLEAN CLIENT LOGO REEL */

.client-reel-section {
  background: transparent;
}

.client-reel-wrapper {
  background: transparent;
  border: none;
  box-shadow: none;
}

.client-logo-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 16px 12px;
  min-width: 240px;
}

.client-logo-image {
  width: 240px;
  height: 140px;
  object-fit: contain;
  background: transparent;
  border: none;
  box-shadow: none;
  filter: none;
}

.client-logo-divider,
.client-logo-name {
  display: none !important;
}

/* ==========================================
   V-ONE CREATIONS — CINEMATIC VIDEO PORTFOLIO
========================================== */

.video-portfolio-section {
  position: relative;
  overflow: hidden;
  padding: 110px 0 85px;
  background: #17100e;
  color: #f7f0e8;
}

/* SECTION HEADING */

.video-portfolio-heading {
  max-width: 850px;
  margin: 0 auto 65px;
  padding: 0 24px;
  text-align: center;
}

.video-portfolio-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #D9A36B;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.24em;
}

.video-portfolio-eyebrow span {
  width: 30px;
  height: 1px;
  background: #D9A36B;
}

.video-portfolio-heading h2 {
  margin-top: 24px;
  color: #f7f0e8;
  font-family: Georgia, serif;
  font-size: clamp(42px, 6vw, 72px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.video-portfolio-heading h2 span {
  color: #D9A36B;
}

.video-portfolio-heading p {
  max-width: 520px;
  margin: 20px auto 0;
  color: #a99b91;
  font-size: 14px;
  line-height: 1.9;
}

/* MOVING REEL */

.video-reel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 30px 0;
}

.video-reel-track {
  display: flex;
  width: max-content;
  align-items: center;
  gap: 25px;
  padding-left: 25px;
  animation: videoReelMove 55s linear infinite;
}

.video-reel-wrapper:hover .video-reel-track {
  animation-play-state: paused;
}

.video-reel-paused .video-reel-track {
  animation-play-state: paused;
}

@keyframes videoReelMove {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* VIDEO CARDS */

.video-work-card {
  display: block;
  flex: 0 0 auto;
  width: 260px;
  overflow: hidden;
  padding: 0;
  border: 1px solid rgba(217,163,107,0.18);
  border-radius: 4px;
  background: #211713;
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    border-color 0.4s ease,
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

.video-work-card.landscape {
  width: 390px;
}

.video-work-card:hover {
  z-index: 2;
  transform: translateY(-8px);
  border-color: rgba(217,163,107,0.8);
  box-shadow: 0 20px 55px rgba(0,0,0,0.4);
}

.video-work-frame {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #0d0908;
}

.video-work-frame video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #0d0908;
  transition: transform 0.6s ease;
}

.video-work-card:hover .video-work-frame video {
  transform: scale(1.035);
}

.video-work-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(15,9,7,0.2);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.video-work-card:hover .video-work-overlay {
  opacity: 1;
}

.video-play-icon {
  display: flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border: 1px solid #D9A36B;
  border-radius: 50%;
  background: rgba(23,16,14,0.75);
  color: #D9A36B;
  font-size: 16px;
}

.video-watch-label {
  color: white;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.2em;
}

/* VIDEO INFORMATION */

.video-work-info {
  padding: 19px 18px 20px;
}

.video-work-info > span {
  color: #D9A36B;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.video-work-info h3 {
  margin-top: 8px;
  color: #f7f0e8;
  font-family: Georgia, serif;
  font-size: 19px;
  font-weight: 400;
}

/* BOTTOM LABEL */

.video-portfolio-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 45px;
  padding: 0 20px;
}

.video-portfolio-bottom span {
  width: 55px;
  height: 1px;
  background: rgba(217,163,107,0.5);
}

.video-portfolio-bottom p {
  color: #a99b91;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-align: center;
}

/* EXPANDED VIDEO MODAL */

.video-modal {
  position: fixed;
  z-index: 9999;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 30px;
  background: rgba(5,3,3,0.94);
  backdrop-filter: blur(14px);
  animation: videoModalFade 0.3s ease;
}

.video-modal-content {
  position: relative;
  display: flex;
  width: min(100%, 1050px);
  max-height: 90vh;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 25px;
  border: 1px solid rgba(217,163,107,0.35);
  background: #17100e;
  box-shadow: 0 30px 100px rgba(0,0,0,0.65);
}

.video-modal-close {
  position: absolute;
  z-index: 5;
  top: 10px;
  right: 15px;
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(217,163,107,0.5);
  border-radius: 50%;
  background: #211713;
  color: #D9A36B;
  font-size: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.video-modal-close:hover {
  background: #D9A36B;
  color: #17100e;
}

.video-modal-heading {
  width: 100%;
  padding-right: 40px;
  text-align: center;
}

.video-modal-heading span {
  color: #D9A36B;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.video-modal-heading h3 {
  margin-top: 7px;
  color: #f7f0e8;
  font-family: Georgia, serif;
  font-size: 27px;
  font-weight: 400;
}

.video-modal-content video {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: calc(90vh - 140px);
  object-fit: contain;
  background: #000;
}

/* MODAL ANIMATION */

@keyframes videoModalFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* RESPONSIVE DESIGN */

@media (max-width: 768px) {
  .video-portfolio-section {
    padding: 80px 0 65px;
  }

  .video-portfolio-heading {
    margin-bottom: 40px;
  }

  .video-reel-track {
    gap: 15px;
    animation-duration: 45s;
  }

  .video-work-card {
    width: 210px;
  }

  .video-work-card.landscape {
    width: 300px;
  }

  .video-modal {
    padding: 12px;
  }

  .video-modal-content {
    padding: 18px 12px;
  }

  .video-modal-heading h3 {
    font-size: 22px;
  }

  .video-modal-content video {
    max-height: calc(90vh - 120px);
  }
}

@media (max-width: 480px) {
  .video-work-card {
    width: 175px;
  }

  .video-work-card.landscape {
    width: 260px;
  }

  .video-work-info {
    padding: 14px;
  }

  .video-work-info h3 {
    font-size: 16px;
  }

  .video-portfolio-bottom {
    gap: 10px;
  }

  .video-portfolio-bottom span {
    width: 25px;
  }

  .video-portfolio-bottom p {
    font-size: 7px;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .video-reel-track {
    animation: none;
  }

  .video-work-card,
  .video-work-frame video {
    transition: none;
  }
}

      `}</style>
    </main>
  );
}