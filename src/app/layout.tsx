import type { Metadata } from "next";
import { Antic_Didone, Roboto } from "next/font/google";
import "./globals.css";

const anticDidone = Antic_Didone({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-antic-didone",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Luna Development | San Diego Coastal Real Estate Development",
  description: "San Diego based real estate development company transforming under-utilized coastal properties into vibrant, modern communities. Specializing in Pacific Beach development.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/lunalogo.png',
    apple: '/lunalogo.png',
  },
  openGraph: {
    title: "Luna Development | San Diego Coastal Real Estate Development",
    description: "San Diego based real estate development company transforming under-utilized coastal properties into vibrant, modern communities. Specializing in Pacific Beach development.",
    url: "https://lunadevelopmentsd.com",
    siteName: "Luna Development",
    images: [
      {
        url: '/lunalogo.png',
        width: 1200,
        height: 630,
        alt: 'Luna Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Luna Development | San Diego Coastal Real Estate Development",
    description: "San Diego based real estate development company transforming under-utilized coastal properties into vibrant, modern communities. Specializing in Pacific Beach development.",
    images: ['/lunalogo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} ${anticDidone.variable} antialiased`}>{children}</body>
    </html>
  );
}
