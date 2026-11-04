import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MLGxGame - games, templates et équipement gaming",
  description:
    "Découvre des games en ligne, des templates web et une sélection d'équipement pour gamers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pb-24 lg:pb-0 lg:pr-24`}>
        <Header />
        <NavBar />
        {children}
      </body>
    </html>
  );
}