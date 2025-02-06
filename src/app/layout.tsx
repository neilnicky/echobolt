import "./globals.css";
import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/landingpage/Footer";
import Navbar from "@/components/landingpage/Navbar";

const catamaran = Catamaran({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EchoLive - Real-time Web Widgets",
  description:
    "Powerful real-time website tools and visitor tracking for modern web applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={catamaran.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
