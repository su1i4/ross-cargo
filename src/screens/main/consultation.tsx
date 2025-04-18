import { Logo } from "@/assets/icons/Logo";
import { Form } from "./ui/form";
import Image from "next/image";

export const Consultation = () => {
  return (
    <div className="bg-[#F8F8F8] rounded-[30px] p-6 sm:p-8 lg:p-[30px] grid grid-cols-1 lg:grid-cols-2 mt-14 gap-6 lg:gap-[30px]">
      <div className="flex flex-col gap-4 sm:gap-5">
        <p className="text-[#030115] text-[22px] sm:text-[26px] lg:text-[28px] font-[600]">
          Получите консультацию по логистике
        </p>
        <p className="text-[#030115] text-[15px] sm:text-[16px]">
          Оставьте заявку и мы разработаем предложение под ваши задачи
        </p>
        <Form />
        <p className="text-[#CBCBCB] text-[13px] sm:text-[14px] leading-snug">
          Нажимая кнопку "Рассчитать стоимость", вы соглашаетесь с обработкой
          персональных данных, политикой конфиденциальности и публичной офертой
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Logo width={45} height={40} />
          <p className="text-[20px] sm:text-[23px] text-[#030115]">Росскарго</p>
        </div>
      </div>

      <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px]">
        <Image
          width={500}
          height={500}
          alt="Консультация Росскарго"
          src="/consultation-image.png"
          className="object-cover rounded-[30px]"
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
};
