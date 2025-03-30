import Image from "next/image";
import { CalculateTarifForm } from "./ui/form-calculate";

export const Calculator = () => {
  return (
    <div className="mt-14 w-full relative">
      <Image
        width={500}
        height={300}
        src="/Calculator.png"
        alt="Ross-cargo image"
        className="w-full h-full object-cover"
        priority={true}
      />
      <div className="absolute inset-0 bg-black/20 flex rounded-[30px] justify-end px-[30px] py-[60px] gap-[20px]">
        <div className="bg-[#FFFFFF] rounded-[30px] p-[30px] flex flex-col w-[800px] gap-[30px]">
          <p className="text-[#030115] text-[28px] font-[600]">
            Рассчитайте доставку
          </p>
          <p className="text-[#030115]">
            Быстрая и безопасная доставка грузов из Кыргызстана по всем городам
            России
          </p>
          <CalculateTarifForm />
          <p className="text-[#CBCBCB] text-[14px]">Нажимая кнопку рассчитать стоимость вы соглашаетесь обработкой персональных данных, политикой конфиденциальности и публичной офертой</p>
        </div>
      </div>
    </div>
  );
};
