import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import ChromeInstallPrompt from "@/components/ui/ChromeInstallPrompt";
import AppSplashLoader from "@/components/ui/AppSplashLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MERO | Web Architecture, WhatsApp CRM & Business Software",
  description:
    "Supercharge your business with ultra-fast Websites, automated WhatsApp CRM, and Stock Management ERP software.",
  manifest: "/manifest.json",
  themeColor: "#f97316",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MERO",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} min-h-screen flex flex-col font-sans antialiased bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200 overflow-x-hidden`}
      >
        <ThemeProvider>
          <AppSplashLoader />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContact />
          <ChromeInstallPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}
