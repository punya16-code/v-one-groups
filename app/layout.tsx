
import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";
import SiteIntro from "@/components/site-intro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// MAIN WEBSITE SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL("https://vonegroups.com"),

  title: {
    default: "V-ONE Groups | Creative & Technology Company",
    template: "%s | V-ONE Groups",
  },

  description:
    "V-ONE Groups brings creativity and technology together through visual storytelling, media production, branding, web development and digital solutions. One group. Two divisions. One vision.",

  applicationName: "V-ONE Groups",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://vonegroups.com",
    locale: "en_IN",
    siteName: "V-ONE Groups",
    title: "V-ONE Groups | Creative & Technology Company",
    description:
      "Where creativity meets technology. Discover V-ONE Creations and V-ONE Bytes.",
    images: [
      {
        url: "/vone-og-image.png",
        width: 1200,
        height: 630,
        alt: "V-ONE Groups - Where Creativity Meets Technology",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "V-ONE Groups | Creative & Technology Company",
    description:
      "Where creativity meets technology. Discover V-ONE Creations and V-ONE Bytes.",
    images: ["/vone-og-image.png"],
  },
};

// ORGANIZATION STRUCTURED DATA
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "V-ONE Groups",
  url: "https://vonegroups.com",
  description:
    "V-ONE Groups brings creativity and technology together through media production, visual storytelling, branding, web development and digital solutions.",

  subOrganization: [
    {
      "@type": "Organization",
      name: "V-ONE Creations",
      url: "https://vonegroups.com/creations",
    },
    {
      "@type": "Organization",
      name: "V-ONE Bytes",
      url: "https://vonegroups.com/bytes",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <SiteIntro>{children}</SiteIntro>
      </body>
    </html>
  );
}
