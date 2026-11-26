import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { CountryProvider } from "@/lib/CountryContext";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://tsecond.ai"),
  title: {
    default: "Tsecond — Edge. AI. Compute.",
    template: "%s — Tsecond",
  },
  description:
    "Enabling mission critical teams with BRYCK. Real-time intelligence at the tactical edge through hyperconverged Edge AI, Storage and Compute solutions.",
  keywords: ["edge AI", "tactical edge", "BRYCK", "petabyte storage", "DDIL", "edge compute"],
  openGraph: {
    title: "Tsecond — Edge. AI. Compute.",
    description: "Real-time intelligence at the tactical edge.",
    type: "website",
    siteName: "Tsecond",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#FBFCFE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans text-base leading-[1.6]">
        {/* the field the glass refracts */}
        <div className="field" aria-hidden="true">
          <i className="f1" />
          <i className="f2" />
          <i className="f3" />
          <i className="grid" />
        </div>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <CountryProvider>
          <div className="relative z-[2]">
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </div>
        </CountryProvider>

        <Reveal />
      </body>
    </html>
  );
}
