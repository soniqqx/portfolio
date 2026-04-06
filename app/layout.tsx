import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and the tools I use.",
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
          <div className="logo">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Portfolio.</Link>
          </div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#skills">Skills</Link></li>
            <li><Link href="/#projects">Projects</Link></li>
          </ul>
        </nav>
        
        <main className="page-container">
          {children}
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} My Portfolio. Built with passion.</p>
        </footer>
      </body>
    </html>
  );
}
