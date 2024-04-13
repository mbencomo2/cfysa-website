import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/ui/header";
import Background from "@/components/ui/background";
import Footer from "@/components/ui/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Cotton Flower YSA Ward",
  description: "News and Updates for members of the CottonFlower YSA Ward",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="transition-colors duration-300 bg-background text-foreground">
        <Header />
        <main className="flex flex-col items-center md:container md:mx-auto lg:px-12">
          <Background>{children}</Background>
        </main>
        <Footer />
      </body>
    </html>
  );
}
