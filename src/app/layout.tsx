import type { Metadata } from "next";
import "./globals.css";
import LayoutMain from "@/components/layout";

export const metadata: Metadata = {
  title: "Challenge-NEOWYZE",
  description: "Challenge Neowyze",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutMain>
          <main>{children}</main>
        </LayoutMain>
      </body>
    </html>
  );
}
