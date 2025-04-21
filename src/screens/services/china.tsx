import Image from "next/image";
import Truck from "@/assets/icons/truck.svg";
import Calendar from "@/assets/icons/calendar-days.svg";
import Shield from "@/assets/icons/shield-check.svg";
import Link from "next/link";

const ChinaData = [
  {
    icon: <Image src={Truck} alt="Truck" width={50} height={50} />,
    name: "Прямые поставки из Китая",
    content:
      "Организуем доставку ваших грузов без посредников. Контролируем весь процесс: от забора у поставщика до прибытия в Россию",
  },
  {
    icon: <Image src={Calendar} alt="Hand" width={50} height={50} />,
    name: "Оптимальные сроки и маршруты",
    content:
      "Предлагаем авто-, авиа- и ж/д-доставку с учётом ваших сроков и бюджета. Помогаем выбрать лучший вариант по скорости и цене",
  },
  {
    icon: <Image src={Shield} alt="Shield" width={50} height={50} />,
    name: "Полная прозрачность и контроль",
    content:
      "Отслеживание груза на каждом этапе. Гарантируем надёжность, страхование и таможенное оформление без лишних хлопот",
  },
];

const ChinaCard = ({ ...items }) => {
  return (
    <div key={items.key} className="w-full bg-white rounded-[30px] p-[30px]">
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

export const China = () => {
  return (
    <div id="china" className="bg-[#F8F8F8] py-16 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-[#030115] text-[48px] font-[600]">
              Доставка из Китая
            </p>
            <p className="text-[#4A4B4C] text-[20px]">
              Быстро и надёжно доставляем грузы из Китая в Россию. Полный цикл{" "}
              <br />
              логистики: от забора товара у поставщика до доставки на ваш склад
            </p>
          </div>
          <Image
            src="/flag-china.svg"
            alt="flag-china svg"
            width={200}
            height={200}
            className="mt-6 md:mt-0"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-10">
          {ChinaData.map((item, index) => (
            <ChinaCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
