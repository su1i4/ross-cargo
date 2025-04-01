import Image from "next/image";
import Truck from "@/assets/icons/truck.svg";
import Hand from "@/assets/icons/hand-coins.svg";
import Shield from "@/assets/icons/shield-check.svg";

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

const ChinaCard = ({ ...items }: any) => {
  return (
    <div key={items.key} className="w-full bg-white rounded-[30px] p-[30px]">
      <div>{items.icon}</div>
      <p className="text-[#030115] text-[25px] font-[600] h-24 mt-4">
        {items.name}
      </p>
      <p className="text-[#878787]">{items.content}</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-[#1342DD]">Оформить заявку</p>
        <Image
          width={30}
          height={30}
          src="/arrow-up-right copy.svg"
          alt="arrow"
          priority={true}
        />
      </div>
    </div>
  );
};

export const China = () => {
  return (
    <div className="bg-[#F8F8F8] py-16 px-8">
      <div className="container mx-auto">
        <p className="text-[#030115] text-[48px] font-[600]">
          Доставка из Китая
        </p>
        <p className="text-[#4A4B4C] text-[20px] mt-2">
          Быстро и надёжно доставляем грузы из Китая в Россию. Полный цикл <br />
          логистики: от забора товара у поставщика до доставки на ваш склад
        </p>
        <div className="grid grid-cols-3 gap-[30px] mt-10">
          {BuisenessData.map((item, index) => (
            <ChinaCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
