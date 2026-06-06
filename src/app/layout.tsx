import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
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
      className={`${inter.variable} ${jbMono.variable} h-full antialiased dark`}
    >
      <body className="relative flex min-h-full flex-col bg-black">
        {children}
      </body>
    </html>
  );
}
