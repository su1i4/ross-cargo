"use client";

import { FC, useEffect, useState } from "react";
import { libNews } from "@/lib/news";
import { Header } from "@/components/header";
import Image from "next/image";

interface PageDetailNewsProps {
  params: { id: string };
}

const PageDetailNews: FC<PageDetailNewsProps> = ({ params }) => {
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rosscargo.kg/api/services/${params.id}`
        );
        const data = await response.json();
        console.log(data, "data");
        setNews(data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  const path = news && `https://rosscargo.kg/api/uploads/${news?.imagePath}`;

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col gap-4 px-8">
        <Header />
        <div className=" mt-10 text-black flex items-center gap-2 text-sm sm:text-base">
          <p>Главная</p> / <p>Услуги</p> / <p>{news?.header_title}</p>
        </div>
        <h1 className="text-[#030115] text-[50px] font-[600]">
          {news?.header_title}
        </h1>
        <div className="rounded-3xl bg-[#F8F8F8] p-[20px] flex flex-col gap-4">
          <p className="text-[20px] font-[500]">{news?.header_body}</p>
          <p className="font-[500] text-black">{news?.description}</p>
          {path && (
            <Image
              alt={news?.header_body}
              src={path}
              width={1000}
              height={600}
              className="w-full object-cover max-h-[60vh] rounded-2xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageDetailNews;
