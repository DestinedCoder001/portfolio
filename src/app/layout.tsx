import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Destiny Olowokere",
  description: "Destiny Olowokere: Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar">
      <head>
      <meta name="title" property="og:title" content="Destiny Olowokere: Frontend Developer" />
      </head>
      <body
        className={`${poppins.className} max-w-[2300px] mx-auto bg-[#070A17] min-h-screen`}
      >
        <Provider>
          <NavBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
