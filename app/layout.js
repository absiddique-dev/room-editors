import { Inter } from "next/font/google";
// import { Montserrat } from "next/font/google";
// import { ThemeProvider } from "./providers";
import "./globals.css";

import "./globals.css";
// import { ThemeProvider } from "next-themes";

const preahvihear = Inter({
  subsets: ["latin"], // Specify the subsets you want to use
  weight: "400", // Specify the font weights you want to use (optional)
  style: "normal", // Specify the style (optional)
  display: "swap", // Control font display behavior (optional)
});

export const metadata = {
  title: "Room Editors",
  description: "Room Editors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={preahvihear.className}>{children}</body>
    </html>
  );
}
