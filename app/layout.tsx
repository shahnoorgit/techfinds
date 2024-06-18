import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["greek-ext"] });

export const metadata: Metadata = {
  title: "TechFinds",
  description: "Multi-vendor Tech Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
