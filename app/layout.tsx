import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alfino Rossesa — Web Profile",
  description:
    "Alfino Rossesa, Backend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
