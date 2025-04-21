import { Header } from "@/components/header";
import { Calculator } from "@/screens/main/calculator";
import { Feedbacks } from "@/screens/main/feedbacks";
import { BlogNews } from "@/screens/news/blog-news";
import { CompanyNews } from "@/screens/news/company-news";
import { NewsBanner } from "@/screens/news/news-banner";
import { LastNews } from "@/screens/services/last-news";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новости | Росскарго - события и обновления компании",
  description: "Последние новости, обновления и события компании Росскарго. Изменения в логистической сфере, новые маршруты и услуги.",
  keywords: "новости Росскарго, события логистической компании, обновления логистических услуг, новые маршруты доставки, логистические новости",
  openGraph: {
    title: "Новости логистической компании Росскарго",
    description: "Будьте в курсе последних событий и изменений в сфере логистики и международных перевозок.",
    url: "https://rosscargo.kg/news",
    images: [
      {
        url: "https://rosscargo.kg/vehicle-road 1.png",
        width: 1200,
        height: 630,
        alt: "Новости компании Росскарго",
      },
    ],
  },
};

export default function News() {
  return (
    <main className="w-full bg-[#F8F8F8]">
      {/* <NewsBanner /> */}
      <Header />
      <LastNews />
      {/* <BlogNews /> */}
      {/* <div className="bg-white flex justify-center pb-10 px-4">
        <Feedbacks />
      </div>
      <div className="w-full">
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </div> */}
    </main>
  );
}
