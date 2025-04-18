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
    name: "Логистика без границ: Как выбрать надежного грузоперевозчика?",
    content: "Расскажем, на что обращать внимание при выборе логистической компании: сроки доставки, страхование груза, прозрачность тарифов и сервис поддержки",
    fullContent: "Разбираем новые требования к импортируемым товарам и как они повлияют на бизнес.....",
  },
  {
    date: "28 февраля 2025",
    name: "Популярные маршруты грузоперевозок в 2024 году",
    content: "Обзор самых востребованных направлений, тенденций в логистике и новинок в маршрутах (например, новые ЖД-сообщения, альтернативные пути из Китая в Россию)",
    fullContent: "Благодаря улучшенной логистической сети теперь мы доставляем еще быстрее.....",
  },
  {
    date: "20 февраля 2025",
    name: "Что влияет на стоимость доставки?",
    content: "Разбор ключевых факторов: топливо, таможенные сборы, сезонность, расстояние, способ транспортировки. Советы по снижению затрат",
    fullContent: "Новые возможности для продавцов маркетплейсов: улучшенные условия хранения и обновленный....",
  },
  {
    date: "10 марта 2025",
    name: "Тренды в логистике: что изменилось за последние 5 лет?",
    content: "Как новые технологии (автоматизация, трекинг, экология) меняют рынок грузоперевозок",
    fullContent: "Новые возможности для продавцов маркетплейсов: улучшенные условия хранения и обновленный....",
  },
];

const NewsCard = ({
  date,
  name,
  content,
  fullContent,
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
