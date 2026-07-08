import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1B4332",
};

export const metadata: Metadata = {
  title: "Lavish Foods — Premium Pakistani Basmati Rice Exporter",
  description:
    "Lavish Foods exports premium 1121 Basmati, Super Kernel, PK-386 & IRRI rice from Okara, Punjab, Pakistan to UAE, UK, USA, Saudi Arabia & 30+ countries. ISO, HACCP, HALAL certified.",
  metadataBase: new URL("https://lavishfoods.de"),
  openGraph: {
    title: "Lavish Foods — Premium Pakistani Basmati Rice Exporter",
    description:
      "Premium Pakistani Basmati rice exporter — 1121, Super Kernel, PK-386, IRRI varieties.",
    siteName: "Lavish Foods",
    type: "website",
    url: "https://lavishfoods.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavish Foods — Premium Pakistani Basmati Rice Exporter",
    description:
      "Premium Pakistani Basmati rice exporter — 1121, Super Kernel, PK-386, IRRI varieties.",
  },
  keywords: [
    "basmati rice exporter",
    "Pakistani rice",
    "1121 basmati",
    "super kernel basmati",
    "rice export Germany",
    "halal rice",
    "bulk rice supplier",
    "Lavish Foods",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
