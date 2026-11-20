
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "V-ONE Bytes | Web Development, App Development & SEO",

  description:
    "V-ONE Bytes is the technology and IT division of V-ONE Groups, offering web development, Android and iOS app development, SEO services, website management and technical support.",

  keywords: [
    "V-ONE Bytes",
    "V-ONE Groups",
    "web development",
    "website development",
    "app development",
    "Android app development",
    "iOS app development",
    "SEO services",
    "technical SEO",
    "local SEO",
    "website management",
    "website maintenance",
    "technical support",
    "digital solutions",
  ],

  alternates: {
    canonical: "/bytes",
  },

  openGraph: {
    type: "website",
    url: "https://vonegroups.com/bytes",
    siteName: "V-ONE Groups",
    title: "V-ONE Bytes | Build Beyond. Think Digital.",
    description:
      "Explore V-ONE Bytes for web development, mobile applications, SEO, website management and reliable technical support.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "V-ONE Bytes | V-ONE Groups",
    description:
      "Websites, mobile applications, SEO and digital technology solutions by V-ONE Bytes.",
  },
};

export default function BytesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
