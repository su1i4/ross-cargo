import Image from "next/image";
import Truck from "@/assets/icons/truck.svg";
import Hand from "@/assets/icons/hand-coins.svg";
import Shield from "@/assets/icons/shield-check.svg";
import Star from "@/assets/icons/star.svg";
import { ReactElement } from "react";

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

type IntegrationItem = {
  icon: ReactElement;
  name: string;
  content: string;
};

const IntegrationCard = ({ icon, name, content }: IntegrationItem) => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="min-w-[60px]">{icon}</div>
        <p className="text-[#030115] text-[25px] font-[600]">{name}</p>
      </div>
      <p className="text-[#878787] ml-[70px]">{content}</p>
    </div>
  );
};

export const ReverseIntegration = () => {
  return (
    <div className="py-16 bg-white px-8">
      <div className="container mx-auto flex gap-8">
        <div className="w-[40%]">
          <Image
            alt="integration"
            src="/reverseIntegration.png"
            width={400}
            height={500}
            className="w-full h-[700px] object-cover rounded-[30px]"
          />
        </div>
        <div className="w-[60%]">
          <p className="text-[#030115] text-[48px] font-[600]">
            Быстро интегрируемся в ваш бизнес
          </p>
          <div className="flex flex-col gap-8 mt-8">
            {IntegrationData.map((item, index) => (
              <IntegrationCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
