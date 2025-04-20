"use client";

import { libNews } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NewsItem = {
  id: number;
  header_title: string;
  header_body: string;
  description: string;
  imagePath: string;
};

const NewsCard = ({
  id,
  header_title,
  header_body,
  description,
  imagePath,
}: NewsItem) => {
  const path = `https://rosscargo.kg/api/uploads/${imagePath}`;
  console.log(path);
  return (
    <div className="w-full bg-white rounded-[30px] p-[10px]">
      <div>
        <Image
          alt={imagePath}
          src={path}
          width={500}
          height={300}
          className="w-full rounded-2xl h-[300px] object-cover"
        />
      </div>
      <p className="text-[#030115] text-[25px] leading-7 font-[600] h-24 mt-4">
        {header_title}
      </p>
      <p className="text-[#878787]">{header_body}</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-[#1342DD]">Оформить заявку</p>
        <Link
          href={`/news/${id}`}
          className="rounded-full hover:scale-105 transition-all duration-300 hover:bg-gray-100 cursor-pointer"
        >
          <Image
            width={30}
            height={30}
            src="/arrow-up-right copy.svg"
            alt="arrow"
            priority={true}
          />
        </Link>
      </div>
    </div>
  );
};

export const LastNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://rosscargo.kg/api/services");
        const data = await response.json();
        console.log(data, "data");
        setNews(data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#F8F8F8] py-16 px-8">
      <div className="container mx-auto">
        <p className="text-[#030115] text-[48px] font-[600] sm:text-[36px] md:text-[40px]">
          Последние новости
        </p>
        <p className="text-[#4A4B4C] text-[20px] mt-2 sm:text-[16px]">
          Будьте в курсе последних событий
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-10">
          {news.map((item: NewsItem, index) => (
            <NewsCard
              key={index}
              id={item.id}
              header_body={item.header_body}
              header_title={item.header_title}
              description={item.description}
              imagePath={item.imagePath}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
