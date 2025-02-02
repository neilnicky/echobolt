import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EchoBits - Real-time Website Analytics',
  description: 'Powerful real-time website analytics and visitor tracking for modern web applications',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}