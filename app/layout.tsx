import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Provider } from "@/components/Provider";

export const metadata: Metadata = {
  title: "GYMANIA",
  description: "Generated by create FATEH-GH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-roboto transition-all duration-300 ">
        <Provider>
          <NavBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
