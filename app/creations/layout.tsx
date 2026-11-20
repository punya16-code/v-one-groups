
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "V-ONE Creations | Video Production, Design & Events",

  description:
    "Discover V-ONE Creations, a creative studio offering video production, video editing, graphic design, motion graphics, event management, social media management and influencer campaigns.",

  keywords: [
    "V-ONE Creations",
    "video production",
    "video editing",
    "graphic design",
    "motion graphics",
    "event management",
    "social media management",
    "influencer marketing",
    "creative studio",
    "brand production",
  ],

  alternates: {
    canonical: "/creations",
  },

  openGraph: {
    type: "website",
    url: "https://vonegroups.com/creations",
    siteName: "V-ONE Groups",
    title: "V-ONE Creations | Every Brand Has a Story",
    description:
      "From cinematic films and visual design to events and social media campaigns, V-ONE Creations brings brand stories to life.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "V-ONE Creations | V-ONE Groups",
    description:
      "Video production, creative design, events and digital storytelling by V-ONE Creations.",
  },
};

export default function CreationsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
