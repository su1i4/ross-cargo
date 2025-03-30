import { Logo } from "@/assets/icons/Logo";
import { Form } from "./ui/form";
import Image from "next/image";

export const Consultation = () => {
  return (
    <div className="bg-[#F8F8F8] rounded-[30px] p-[30px] grid grid-cols-2 mt-14 gap-[30px]">
      <div className="flex flex-col gap-[20px]">
        <p className="text-[#030115] text-[28px] font-[600]">
          Получите консультацию по логистике
        </p>
        <p className="text-[#030115]">
          Оставьте заявку и мы разработаем заявку под ваши задачи
        </p>
        <Form />
        <p className="text-[#CBCBCB] text-[14px]">Нажимая кнопку рассчитать стоимость вы соглашаетесь обработкой персональных данных, политикой конфиденциальности и публичной офертой</p>
        <div className="flex items-center gap-2">
          <Logo width={55} height={50} /> <p className="text-[23px]">Росскарго</p>
        </div>
      </div>
      <Image alt="Консультация росскарго" width={300} height={300} src={'/consultation-image.png'} className="w-full h-[450px] object-cover rounded-[30px]"  />
    </div>
  );
};
