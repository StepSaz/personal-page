import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Stepan Sazanovets - Business Analyst Portfolio & Courses",
  description: "Business Analyst with over 10 years of IT experience. Offering professional courses and mentorship for aspiring business analysts.",
  keywords: ["Business Analyst", "IT", "Courses", "Mentorship", "ERP", "IoT", "AI"],
  authors: [{ name: "Stepan Sazanovets" }],
  openGraph: {
    title: "Stepan Sazanovets - Business Analyst Portfolio & Courses",
    description: "Business Analyst with over 10 years of IT experience. Offering professional courses and mentorship.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
