import Image from "next/image";
import Warehouse from "@/assets/icons/warehouse.svg";
import Package from "@/assets/icons/package.svg";
import Shield from "@/assets/icons/shield-check.svg";
import Link from "next/link";

const BuisenessData = [
  {
    icon: <Image src={Warehouse} alt="Warehouse" width={50} height={50} />,
    name: "Хранение и обработка заказов",
    content:
      "Принимаем, сортируем и храним ваш товар на складе. Контролируем условия, ведём учёт и готовим заказы к отправке быстро и аккуратно",
  },
  {
    icon: <Image src={Package} alt="Package" width={50} height={50} />,
    name: "Сборка и отправка без задержек",
    content:
      "Комплектуем заказы, упаковываем по стандартам и передаём в доставку. Работаем с разными транспортными службами",
  },
  {
    icon: <Image src={Shield} alt="Shield" width={50} height={50} />,
    name: "Полный контроль и автоматизация",
    content:
      "Отслеживайте остатки и заказы в режиме реального времени. Оптимизируем процессы, чтобы снизить затраты и ускорить доставку",
  },
];

const BuisenessCard = ({ ...items }) => {
  return (
    <div
      key={items.key}
      className="w-full bg-white rounded-[30px] p-[30px] shadow-md"
    >
      <div>{items.icon}</div>
      <p className="text-[#030115] text-[20px] sm:text-[25px] font-[600] h-24 mt-4">
        {items.name}
      </p>
      <p className="text-[#878787] text-sm sm:text-base">{items.content}</p>
      <Link
        href="/?link=leave-a-request"
        className="mt-4 flex justify-between items-center"
      >
        <p className="text-[#1342DD] text-sm sm:text-base">Оформить заявку</p>
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

export const Fullfilment = () => {
  return (
    <div id="fullfilment" className="bg-[#F8F8F8] py-16 px-8">
      <div className="container mx-auto">
        <p className="text-[#030115] text-[32px] sm:text-[48px] font-[600] text-center sm:text-left">
          Фулфилмент
        </p>
        <p className="text-[#4A4B4C] text-[16px] sm:text-[20px] mt-2 text-center sm:text-left">
          Берём на себя хранение, обработку и отправку заказов. <br />{" "}
          Оптимизируем логистику, снижая ваши затраты и ускоряя доставку
          клиентам
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
