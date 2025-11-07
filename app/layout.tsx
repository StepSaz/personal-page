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
  title: "Stepan Sazanavets - Business Analyst & AI Consultant",
  description: "Business Analyst with over 10 years of IT experience. Offering AI workbooks and consultation for Business Analysts and Product Owners.",
  keywords: ["Business Analyst", "IT", "AI Workbooks", "Consultation", "Product Owner", "AI Integration", "Career Development"],
  authors: [{ name: "Stepan Sazanovets" }],
  openGraph: {
    title: "Stepan Sazanavets - Business Analyst & AI Consultant",
    description: "AI workbooks and consultation for Business Analysts. Learn practical AI workflows and advance your BA career.",
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
