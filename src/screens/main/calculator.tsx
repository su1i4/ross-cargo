import Image from "next/image";
import { ShippingCalculator } from "./ui/form-calculate";

export const Calculator = () => {
  return (
    <div className="mt-14 w-full relative">
      <Image
        width={500}
        height={300}
        src="/Calculator.png"
        alt="Ross-cargo image"
        className="w-full h-full object-cover rounded-[30px] hidden lg:block"
        priority={true}
      />
      <div className="absolute inset-0 bg-black/20 rounded-[30px] justify-end px-[30px] py-[30px] gap-[20px] hidden lg:flex">
        <div className="bg-[#FFFFFF] rounded-[30px] p-[30px] flex flex-col w-[800px] gap-[20px]">
          <p className="text-[#030115] text-[28px] font-[600]">
            Рассчитайте доставку
          </p>
          <p className="text-[#030115]">
            Быстрая и безопасная доставка грузов из Кыргызстана и Китая по всем городам России
          </p>
          <ShippingCalculator />
          <p className="text-[#CBCBCB] text-[14px]">
            Нажимая кнопку рассчитать стоимость вы соглашаетесь обработкой персональных данных, политикой конфиденциальности и публичной офертой
          </p>
        </div>
      </div>

      <div className="block lg:hidden border rounded-2xl">
        <div className="bg-white rounded-[20px] p-4 w-full">
          <p className="text-[#030115] text-[20px] font-[600] mb-2">
            Рассчитайте доставку
          </p>
          <p className="text-[#030115] text-sm mb-4">
            Быстрая и безопасная доставка грузов из Кыргызстана и Китая по всем городам России
          </p>
          <ShippingCalculator />
          <p className="text-[#CBCBCB] text-xs mt-4">
            Нажимая кнопку рассчитать стоимость вы соглашаетесь обработкой персональных данных, политикой конфиденциальности и публичной офертой
          </p>
        </div>
      </div>
    </div>
  );
};
