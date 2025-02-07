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
      <head>
        <meta property="og:site_name" content="Clàudia & Dani - Invitació" />
        <meta property="og:title" content="Clàudia & Dani - Invitació" />
        <meta property="og:description" content="Festa Major" />
        <meta property="og:image" content="https://daxin3.github.io/invitacio/preview-invitacio.png" />
        <meta property="og:image:secure_url" content="https://daxin3.github.io/invitacio/preview-invitacio.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="431" />
        <meta property="og:image:height" content="352" />
        
        
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="2025-02-07T21:25:42Z" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
    
  );
}
