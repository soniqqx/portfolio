import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { siteConfig } from "../data/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supasita Portfolio",
  description: "Front-End Developer & Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar">
          <Link href="/" className="logo">sp</Link>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#skills">Skills</Link></li>
              <li><Link href="/#projects">Projects</Link></li>
            </ul>
          </div>
          <Link href={`mailto:${siteConfig.email}`} className="talk-btn">Contact</Link>
        </nav>

        <main className="page-container">
          {children}
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Supasita Pochawat. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
