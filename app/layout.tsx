import type { Metadata } from "next";
import { Geist, Anton, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Heavy condensed display face for headlines — the punchy, high-impact look.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

// Editorial serif for voice lines + quotes — signals "writer," not template.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://shrutibagoriya.vercel.app";
const SITE_TITLE =
  "Shruti Bagoriya — Content strategist & ghostwriter for consumer app founders";
const SITE_DESC =
  "You have a POV worth sharing. I turn it into content that drives users, attracts talent, and builds credibility — LinkedIn ghostwriting for consumer app founders.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESC,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: "Shruti Bagoriya",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/og.png"],
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${anton.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        {/* Add `js` before paint so reveal animations never hide content on no-JS */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
