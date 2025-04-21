"use client";

import { FC, useEffect, useState } from "react";
import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { Helmet } from "react-helmet";

interface NewsDetailProps {
  id: string;
}

export const NewsDetail: FC<NewsDetailProps> = ({ id }) => {
  const [news, setNews] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://rosscargo.kg/api/services/${id}`
        );
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const path = news && `https://rosscargo.kg/api/uploads/${news?.imagePath}`;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl">Загрузка...</div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl">Новость не найдена</div>
      </div>
    );
  }

  return (
    <>
      {/* Дополнительные SEO-теги для клиентской стороны */}
      <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={news?.header_title} />
        <meta name="twitter:description" content={news?.header_body} />
        {path && <meta name="twitter:image" content={path} />}
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": news?.header_title,
            "description": news?.header_body,
            "image": path,
            "datePublished": new Date().toISOString(),
            "publisher": {
              "@type": "Organization",
              "name": "Росскарго",
              "logo": {
                "@type": "ImageObject",
                "url": "https://rosscargo.kg/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="flex justify-center">
        <div className="container flex flex-col gap-4 px-8">
          <Header />
          <div className="mt-10 text-black flex items-center gap-2 text-sm sm:text-base">
            <Link href="/">Главная</Link> / <Link href="/news">Новости</Link> /{" "}
            <p>{news?.header_title}</p>
          </div>
          <h1 className="text-[#030115] text-[50px] font-[600]">
            {news?.header_title}
          </h1>
          <div className="rounded-3xl bg-[#F8F8F8] p-[20px] flex flex-col gap-4">
            <p className="text-[20px] font-[500]">{news?.header_body}</p>
            <p className="font-[500] text-black">{news?.description}</p>
            {path && (
              <Image
                alt={news?.header_title || "Изображение новости компании Росскарго"}
                src={path}
                width={1000}
                height={600}
                className="w-full object-cover max-h-[60vh] rounded-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}; 