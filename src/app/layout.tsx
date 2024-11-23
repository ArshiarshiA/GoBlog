import type { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "./globals.css";
import { ToastContainer } from "react-toastify";


export const metadata: Metadata = {
  title: "GoBlog",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
