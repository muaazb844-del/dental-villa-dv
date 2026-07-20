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
  title: {
    default: "Dental Villa",
    template: "%s | Dental Villa",
  },

  description:
    "Dental Villa provides modern, comfortable, and patient-focused dental care. We specialize in dental implants, root canal treatment, orthodontics, cosmetic dentistry, scaling & polishing, and teeth whitening.",

  keywords: [
    "Dental Villa",
    "Dentist",
    "Dental Clinic",
    "Dental Implants",
    "Root Canal",
    "Orthodontics",
    "Teeth Whitening",
    "Scaling and Polishing",
    "Cosmetic Dentistry",
    "Dr. Qasim Ikram",
  ],

  authors: [
    {
      name: "Dental Villa",
    },
  ],

  creator: "Dental Villa",
  publisher: "Dental Villa",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Dental Villa | Your Smile, Our Passion",
    description:
      "Premium dental care with advanced treatments and a patient-first approach.",
    url: "https://dentalvilladv.com",
    siteName: "Dental Villa",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Dental Villa Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dental Villa | Your Smile, Our Passion",
    description:
      "Premium dental care with advanced treatments and a patient-first approach.",
    images: ["/logo.png"],
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}