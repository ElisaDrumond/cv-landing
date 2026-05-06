import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Elisa Drumond Anjo | Fullstack Developer React, Next.js e Node.js",
  description:
    "Portfólio de Elisa Drumond com projetos em React, Next.js, Node.js, SEO técnico, performance web, APIs REST e experiências digitais modernas.",
  keywords: [
    "Elisa Drumond",
    "Elisa Drumond Anjo",
    "Desenvolvedora Fullstack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Performance Web",
    "SEO",
  ],
  authors: [{ name: "Elisa Drumond" }],
  creator: "Elisa Drumond",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title:
      "Elisa Drumond Anjo | Fullstack Developer React, Next.js e Node.js",

    description:
      "Portfólio de Elisa Drumond com projetos em React, Next.js, Node.js, SEO técnico, performance web, APIs REST e experiências digitais modernas.",

    url: siteUrl,

    siteName: "Elisa Drumond",

    images: [
      {
        url: "/og.png?v=2",
        width: 1200,
        height: 630,
        alt: "Portfólio de Elisa Drumond - Fullstack Developer",
      },
    ],

    locale: "pt_BR",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-white">
        {children}

        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}