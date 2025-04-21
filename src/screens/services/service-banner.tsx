import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const ServiceBanner = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        alt="Фоновое изображение"
        src="/service-banner.png"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#41414138]">
        <div className="container h-full flex flex-col">
          <Header textColor="text-white" />

          <div className="px-8 mt-10 text-white flex items-center gap-2 text-sm sm:text-base">
            <p>Главная</p> / <p>Услуги</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center flex-1 gap-6">
            <h1 className="text-white text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] font-semibold leading-tight">
              Доставка из Кыргызстана
            </h1>

            <p className="text-white text-[18px] sm:text-[20px] md:text-[25px] max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] font-medium">
              Оперативная перевозка грузов из Кыргызстана. Гарантируем
              безопасность, оптимальные сроки и прозрачность на каждом этапе
            </p>

            <Link href="/?link=leave-a-request">
              <Button className="bg-[#1342DD] hover:bg-[#1036b3] transition-colors">
                Рассчитать стоимость
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
