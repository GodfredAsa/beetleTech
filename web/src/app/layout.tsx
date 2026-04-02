import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BeetleCursor } from "@/components/BeetleCursor";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.ventureName} · ${site.tagline}`,
  description: site.bio,
  icons: {
    icon: [
      {
        url: site.brandIconSrc,
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      { url: site.profilePhotoSrc, sizes: "180x180", type: "image/png" },
    ],
    /** Tab / bookmark icon (many browsers still request `shortcut icon`). */
    shortcut: site.brandIconSrc,
  },
  openGraph: {
    title: `${site.ventureName} · ${site.name}`,
    description: site.bio,
    type: "website",
    images: [
      {
        url: site.profilePhotoSrc,
        width: 512,
        height: 512,
        alt: site.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
        <BeetleCursor />
      </body>
    </html>
  );
}
