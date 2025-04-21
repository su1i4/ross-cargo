import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Footer } from "@/components/footer";
import SwitchContact from "@/components/switch-contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rosscargo.kg'),
  title: "Росскарго - логистическая компания по доставке грузов из Кыргызстана и Китая в Россию",
  description: "Надежные и быстрые грузоперевозки из Кыргызстана и Китая в Россию. Фулфилмент - полного цикла. с 2008 года в логистике.",
  keywords: "грузоперевозки Бишкек, логистика из Бишкека, доставка из Китая, доставка из Кыргызстана, Фулфилмент Бишкек, Международные перевозки из Кыргызстана, Доставка из Киргизии, Логистика из Киргизии, карго из Китая, доставка в Россию, перевозки Кыргызстан-Россия",
  authors: [{ name: "Росскарго", url: "https://rosscargo.kg" }],
  creator: "Росскарго",
  publisher: "Росскарго",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Росскарго - надежная доставка из Кыргызстана и Китая",
    description: "Грузоперевозки и логистические решения для вашего бизнеса. Быстрая и безопасная доставка из Кыргызстана и Китая в Россию.",
    url: "https://rosscargo.kg",
    siteName: "Росскарго",
    images: [
      {
        url: "https://rosscargo.kg/banner-truck.png",
        width: 1200,
        height: 630,
        alt: "Логистические услуги Росскарго",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="canonical" href="https://rosscargo.kg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiase`}
      >
        {children}
        <Footer />
        <div className="fixed bottom-6 right-6 z-50">
          <SwitchContact />
        </div>
      </body>
    </html>
  );
}
