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

export const metadata: Metadata = {
  title: "Shruti Bagoriya — Content partner for founders building in public",
  description:
    "LinkedIn ghostwriting for founders. I turn your everyday work — meetings, hires, decisions — into content that earns trust, stays visible, and compounds over time.",
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
