"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

const NewsData = [
  {
    date: "10 марта 2025",
    name: "Изменения в таможенных правилах на 2025 год",
    content: "Разбираем новые требования к импортируемым товарам и как они повлияют на бизнес.....",
    fullContent: "Разбираем новые требования к импортируемым товарам и как они повлияют на бизнес.....",
  },
  {
    date: "28 февраля 2025",
    name: "Оптимизация маршрутов доставки – сокращаем сроки на 15%!",
    content: "Благодаря улучшенной логистической сети теперь мы доставляем еще быстрее.....",
    fullContent: "Благодаря улучшенной логистической сети теперь мы доставляем еще быстрее.....",
  },
  {
    date: "20 февраля 2025",
    name: "Фулфилмент: что изменилось в 2025 году?",
    content: "Новые возможности для продавцов маркетплейсов: улучшенные условия хранения и обновленный....",
    fullContent: "Новые возможности для продавцов маркетплейсов: улучшенные условия хранения и обновленный....",
  },
  {
    date: "10 марта 2025",
    name: "Фулфилмент: что изменилось в 2025 году?",
    content: "Новые возможности для продавцов маркетплейсов: улучшенные условия хранения и обновленный....",
    fullContent: "Новые возможности для продавцов маркетплейсов: улучшенные условия хранения и обновленный....",
  },
];

const NewsCard = ({
  date,
  name,
  content,
}: {
  date: string;
  name: string;
  content: string;
  fullContent: string;
}) => {
  return (
    <div className="bg-[#F8F8F8] rounded-[30px] p-[30px] w-full">
      <p className="text-[#CBCBCB] text-[15px]">{date}</p>
      <p className="text-[#030115] text-[27px] font-[600] leading-6 mt-8">{name}</p>
      <p className="mt-4 text-[#030115]">{content}</p>
    </div>
  );
};

export const NewsSlider = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  console.log(current, count);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <CarouselContent className="">
        {NewsData.map((item, index) => (
          <CarouselItem className="basis-1/3" key={index}>
            <NewsCard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
