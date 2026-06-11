import type { Metadata } from "next";
import { Geist, Anton } from "next/font/google";
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
      className={`${geistSans.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
