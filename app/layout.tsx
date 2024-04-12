import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/ui/header";
import Background from "@/components/ui/background";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Cotton Flower YSA Ward",
  description: "News and Updates for members of the CottonFlower USA Ward",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <Header></Header>
        <main className="flex flex-col items-center min-h-screen lg:container lg:mx-auto">
          <Background>{children}</Background>
        </main>
      </body>
    </html>
  );
}
