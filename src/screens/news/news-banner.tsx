import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";

export const NewsBanner = () => {
  return (
    <div className="w-full h-[100vh] relative bg-white">
      <div className="container">
        <Header />
        <div className="flex flex-col gap-2 px-8 mt-14 text-black">
          <p className="space-x-1">
            <span>Главная</span>
            <span>/</span>
            <span>Новости</span>
          </p>
          <p className="text-black mt-4">10 марта 2025</p>
          <div className="w-full flex justify-between mt-8">
            <p className="text-[#030115] text-[48px] font-[600] w-[60%] leading-12">
              {"«Росскарго» открывает \n новый склад в Китае!"
                .split("\n")
                .map((line, lineIndex) => (
                  <span key={`line-${lineIndex}`} className="block">
                    {line.split("").map((char, charIndex) => (
                      <span
                        key={`char-${lineIndex}-${charIndex}`}
                        className={clsx("animated-char", {
                          "mr-2": char === " ",
                        })}
                        style={{
                          animationDelay: `${
                            (lineIndex * 10 + charIndex) * 0.03
                          }s`,
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
            </p>
            <p className="text-[#878787] text-[18px] !w-[40%]">
              более 17 лет успешной работы в сфере логистики. Мы осуществляем
              доставку грузов из Кыргызстана и Китая, по всем городам России и
              обеспечиваем полный цикл услуг, включая фулфилмент и комплекс
              услуг по доставке
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
