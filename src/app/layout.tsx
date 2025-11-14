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
