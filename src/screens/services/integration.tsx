import Image from "next/image";
import Truck from "@/assets/icons/truck.svg";
import Hand from "@/assets/icons/hand-coins.svg";
import Shield from "@/assets/icons/shield-check.svg";
import Star from "@/assets/icons/star.svg";

const IntegrationData = [
  {
    icon: <Image src={Truck} alt="Truck" width={50} height={50} />,
    name: "Готовы к быстрому старту в вашем бизнесе",
    content:
      "Мы предлагаем решения, которые позволяют быстро адаптировать ваш бизнес к любым изменениям, снижая затраты времени и усилий",
  },
  {
    icon: <Image src={Hand} alt="Hand" width={50} height={50} />,
    name: "Эффективные решения для вашего бизнеса за минимальное время",
    content:
      "Наша команда готова быстро интегрировать новейшие технологии и инструменты, которые помогут вашему бизнесу расти с минимальными вложениями",
  },
  {
    icon: <Image src={Shield} alt="Shield" width={50} height={50} />,
    name: "Интеграция, которая ускоряет рост вашего бизнеса",
    content:
      "С нами ваш бизнес получит мощный старт за счет оперативной интеграции и внедрения инноваций",
  },
  {
    icon: <Image src={Star} alt="Shield" width={50} height={50} />,
    name: "Максимальная скорость и минимальные усилия для вашего успеха",
    content:
      "Мы понимаем, как важна скорость в бизнесе, поэтому предлагаем решения, которые интегрируются быстро и эффективно",
  },
];

const IntegrationCard = ({ ...items }: any) => {
  return <div></div>;
};

export const Integration = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto flex">
        <div className="w-full">
          <p className="text-[#030115] text-[48px] font-[600]">
            Выгодно для бизнеса
          </p>
          <div className="flex flex-col gap-[8px]">
            {IntegrationData.map((item) => (
              <IntegrationCard {...item} />
            ))}
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};
