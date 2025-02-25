import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vlad Verheij - Software Developer",
  description: "Front-end developer specialized in JavaScript OOP, SCSS, and BEM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
