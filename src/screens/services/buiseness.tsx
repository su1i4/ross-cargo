"use client";

import Image from "next/image";
import Truck from "@/assets/icons/truck.svg";
import Hand from "@/assets/icons/hand-coins.svg";
import Shield from "@/assets/icons/shield-check.svg";
import Link from "next/link";

const BuisenessData = [
  {
    icon: <Image src={Truck} alt="Truck" width={50} height={50} />,
    name: "Быстрая доставка из Кыргызстана",
    content:
      "Организуем доставку ваших грузов без посредников. Контролируем весь процесс: от забора у поставщика до прибытия в Россию",
  },
  {
    icon: <Image src={Hand} alt="Hand" width={50} height={50} />,
    name: "Выгодные тарифы и условия",
    content:
      "Предлагаем гибкие цены и оптимальные маршруты. Подбираем транспорт под ваш груз, чтобы минимизировать затраты",
  },
  {
    icon: <Image src={Shield} alt="Shield" width={50} height={50} />,
    name: "Полный контроль и безопасность",
    content:
      "Обеспечиваем отслеживание груза, страхование и таможенное оформление. Гарантируем надёжность на каждом этапе перевозки",
  },
];

const BuisenessCard = ({ ...items }) => {
  return (
    <div
      key={items.key}
      className="w-full bg-white rounded-[30px] p-[30px] shadow-md"
    >
      <div>{items.icon}</div>
      <p className="text-[#030115] text-[25px] font-[600] h-24 mt-4">
        {items.name}
      </p>
      <p className="text-[#878787]">{items.content}</p>
      <Link
        href="/?link=leave-a-request"
        className="mt-4 flex justify-between items-center"
      >
        <p className="text-[#1342DD]">Оформить заявку</p>
        <div className="rounded-full hover:scale-105 transition-all duration-300 hover:bg-gray-100 cursor-pointer">
          <Image
            width={30}
            height={30}
            src="/arrow-up-right copy.svg"
            alt="arrow"
            priority={true}
          />
        </div>
      </Link>
    </div>
  );
};

export const Buiseness = () => {
  return (
    <div className="bg-[#F8F8F8] py-16 px-8">
      <div className="container mx-auto">
        <p className="text-[#030115] text-[48px] font-[600] text-center sm:text-left">
          Выгодно для бизнеса
        </p>
        <p className="text-[#4A4B4C] text-[20px] mt-2 text-center sm:text-left">
          Наш подход и технологии позволяют бизнесу быть <br /> эффективным и
          быстрым
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-10">
          {BuisenessData.map((item, index) => (
            <BuisenessCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
