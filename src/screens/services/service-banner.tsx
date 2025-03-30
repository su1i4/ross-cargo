import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const ServiceBanner = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <Image
        alt="asd"
        src="/service-banner.png"
        width={1400}
        height={900}
        className="w-full h-full object-cover"
      />
      {/* <Header /> */}
      <div className="absolute inset-0 bg-[#41414138]">
        <div className="container">
          <Header textColor="text-white" />
          <div className="flex items-center gap-2 px-8 mt-20 text-white">
            <p>Главная</p>/<p>Услуги</p>
          </div>
          <div className="w-full flex flex-col items-center mt-20 gap-4">
            <p className="text-white text-[70px] font-[600]">
              Доставка из Кыргызстана
            </p>
            <p className="text-white text-[25px] text-center max-w-[60%] font-[500]">
              Оперативная перевозка грузов из Кыргызстана. Гарантируем
              безопасность, оптимальные сроки и прозрачность на каждом этапе
            </p>
            <Button className="bg-[#1342DD] hover:bg-[#1342DD]">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
