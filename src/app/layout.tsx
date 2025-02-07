import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Clàudia & Dani",
  description: "Invitació",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <meta property="og:title" content="Clàudia & Dani - Invitació" />
      <meta property="og:description" content="🧡" />
      <meta property="og:image" itemProp="image" content="https://daxin3.github.io/invitacio/preview-invitacio.png" />
      <meta property="og:type" content="website" />
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
