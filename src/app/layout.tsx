import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Costa | Full Stack & Mobile Tech Lead",
  description: "Tech Lead especializado em React Native, Expo, FastAPI, Next.js e Cloud. Construindo aplicações escaláveis para iOS e Android.",
  keywords: ["Full Stack Developer", "Mobile Developer", "React Native", "FastAPI", "Next.js", "Cloud"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="relative flex min-h-full flex-col bg-zinc-950">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_62%)]" />
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-300/20 via-white/5 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-cyan-300/15 via-white/5 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:100%_96px] opacity-40" />
        </div>
        {children}
      </body>
    </html>
  );
}
