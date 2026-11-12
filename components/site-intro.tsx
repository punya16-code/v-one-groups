
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SiteIntro({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("v-one-intro-seen") === "true") {
        setShowIntro(false);
        return;
      }
    } catch {}

    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, 3400);

    const finishTimer = window.setTimeout(() => {
      try {
        sessionStorage.setItem("v-one-intro-seen", "true");
      } catch {}

      setShowIntro(false);
    }, 4200);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  return (
    <>
      {children}

      {showIntro && (
        <div
          className={`v-one-intro ${exiting ? "v-one-intro-exit" : ""}`}
          aria-label="V-ONE Groups introduction"
        >
          <div className="intro-glow intro-glow-one" />
          <div className="intro-glow intro-glow-two" />
          <div className="intro-ring intro-ring-one" />
          <div className="intro-ring intro-ring-two" />
          <div className="intro-light-sweep" />

          <div className="v-one-intro-content">
            <div className="v-one-logo-wrap">
              <Image
                src="/v-one-groups-logo.png"
                alt="V-ONE Groups"
                width={1000}
                height={550}
                priority
                className="v-one-intro-logo"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .v-one-intro {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(ellipse at 50% 50%, #17130c 0%, #0b0b0c 48%, #050608 100%);
          opacity: 1;
          visibility: visible;
          transition:
            opacity 900ms cubic-bezier(0.65, 0, 0.35, 1),
            visibility 900ms ease;
        }

        .v-one-intro-content {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 30px;
        }

        .v-one-logo-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          opacity: 0;
          transform: scale(0.88);
          animation: vOneLogoEntrance 1.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .v-one-intro-logo {
          display: block;
          width: min(850px, 82vw);
          height: auto;
          max-height: 58vh;
          object-fit: contain;
          opacity: 0.68;
          filter: saturate(0.78) drop-shadow(0 0 28px rgba(201, 164, 76, 0.19));
          animation: vOneLogoGlow 3.4s ease-in-out infinite alternate;
        }

        .intro-glow {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 1;
        }

        .intro-glow-one {
          background: rgba(174, 125, 43, 0.13);
          animation: introGlowOne 5s ease-in-out infinite alternate;
        }

        .intro-glow-two {
          width: 260px;
          height: 260px;
          background: rgba(201, 164, 76, 0.09);
          animation: introGlowTwo 6s ease-in-out infinite alternate;
        }

        .intro-ring {
          position: absolute;
          width: min(660px, 75vw);
          aspect-ratio: 1;
          border: 1px solid rgba(201, 164, 76, 0.10);
          border-radius: 50%;
          pointer-events: none;
          z-index: 2;
        }

        .intro-ring-one {
          animation: introRing 14s linear infinite;
        }

        .intro-ring-two {
          width: min(820px, 90vw);
          border-color: rgba(201, 164, 76, 0.055);
          animation: introRing 22s linear infinite reverse;
        }

        .intro-light-sweep {
          position: absolute;
          top: 0;
          left: -40%;
          width: 24%;
          height: 100%;
          transform: skewX(-18deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(201, 164, 76, 0.045),
            rgba(255, 231, 173, 0.11),
            transparent
          );
          z-index: 3;
          pointer-events: none;
          animation: introSweep 3.2s ease-in-out 0.5s forwards;
        }

        .v-one-intro-exit {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        @keyframes vOneLogoEntrance {
          0% {
            opacity: 0;
            transform: scale(0.88) translateY(12px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes vOneLogoGlow {
          from {
            filter: saturate(0.72) drop-shadow(0 0 18px rgba(201, 164, 76, 0.13));
          }
          to {
            filter: saturate(0.88) drop-shadow(0 0 38px rgba(201, 164, 76, 0.28));
          }
        }

        @keyframes introGlowOne {
          from { transform: translate(-80px, 20px) scale(0.9); }
          to { transform: translate(80px, -20px) scale(1.15); }
        }

        @keyframes introGlowTwo {
          from { transform: translate(40px, -30px); }
          to { transform: translate(-50px, 40px); }
        }

        @keyframes introRing {
          from { transform: rotate(0deg) scale(0.96); }
          to { transform: rotate(360deg) scale(1.04); }
        }

        @keyframes introSweep {
          0% { left: -40%; opacity: 0; }
          25% { opacity: 1; }
          100% { left: 130%; opacity: 0; }
        }

        @media (max-width: 600px) {
          .v-one-intro-logo {
            width: 90vw;
            max-height: 42vh;
          }

          .intro-ring-one {
            width: 90vw;
          }

          .intro-ring-two {
            width: 110vw;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .v-one-logo-wrap {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .v-one-intro-logo,
          .intro-glow,
          .intro-ring,
          .intro-light-sweep {
            animation: none;
          }

          .v-one-intro {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
