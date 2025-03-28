import clsx from "clsx";
import { Slider } from "./slider";

export const Banner = () => {
  return (
    <>
      <div className="w-full flex justify-between mt-14">
        <p className="text-[#030115] text-[48px] font-[600] w-[60%] leading-12">
          {"«Росскарго — это \n надёжная и быстрая логистика \n для вашего бизнеса»"
            .split("\n")
            .map((line, lineIndex) => (
              <span key={`line-${lineIndex}`} className="block">
                {line.split("").map((char, charIndex) => (
                  <span
                    key={`char-${lineIndex}-${charIndex}`}
                    className={clsx("animated-char", { "mr-2": char === " " })}
                    style={{
                      animationDelay: `${(lineIndex * 10 + charIndex) * 0.03}s`,
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
          обеспечиваем полный цикл услуг, включая фулфилмент и комплекс услуг по
          доставке
        </p>
      </div>
      <div className="w-full mt-14">
        <Slider />
      </div>
    </>
  );
};
