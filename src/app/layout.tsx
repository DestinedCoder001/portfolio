import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Destiny Olowokere",
  description: "Destiny Olowokere: Frontend Developer",
  keywords: [
    "Destiny",
    "Olowokere",
    "Frontend",
    "Developer",
    "Fullstack",
    "MERN",
  ],
  openGraph: {
    title: "Destiny Olowokere",
    images: [
      {
        url: "https://res.cloudinary.com/dddzjiuet/image/upload/v1761314889/awvdxtzqmbxxvdqm87qs.jpg",
        width: 1200,
        height: 630,
      },
    ],
    description: "Destiny Olowokere: Frontend Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar">
      <body
        className={`${poppins.className} p-[5%] relative max-w-[1500px] mx-auto bg-[#070A17] min-h-screen`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
