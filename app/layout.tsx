import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteMetadata from "@/data/siteMetadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Winbert Zhang Portfolio",
  description: "Winbert Zhang is a software engineer based in Cupertino, CA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteMetadata.language} suppressHydrationWarning>
      <body className={inter.className}>
        <section className="mx-auto max-w-5xl px-4 py-8 sm:px-4 xl:max-w-7xl xl:px-0">
          <Header />
          <div className="flex flex-col justify-between min-h-[80vh]">
            <main className="mb-auto">{children}</main>
          </div>
        </section>
      </body>
    </html>
  );
}
