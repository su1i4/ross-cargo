import { Header } from "@/components/header";
import clsx from "clsx";

export const NewsBanner = () => {
  return (
    <div className="w-full h-[100vh] relative overflow-hidden bg-white">

      <div className="container relative z-10">
        <Header />
        <div className="flex flex-col gap-2 px-8 mb-8">
          <p className="space-x-1 text-white">
            <span>Главная</span>
            <span>/</span>
            <span>Новости</span>
          </p>
          <p className="mt-4">10 марта 2025</p>
          <div className="w-full flex flex-col lg:flex-row justify-between mt-8 gap-6">
            <p className=" text-[32px] lg:text-[48px] font-[600] leading-12 lg:w-[60%]">
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
            <p className=" text-[16px] lg:text-[18px] lg:!w-[40%]">
              более 17 лет успешной работы в сфере логистики. Мы осуществляем
              доставку грузов из Кыргызстана и Китая, по всем городам России и
              обеспечиваем полный цикл услуг, включая фулфилмент и комплекс
              услуг по доставке
            </p>
          </div>
        </div>
      </div>
      <video
        className=" w-full h-full object-cover z-0 bg-red-200"
        src="/5598972-uhd_3840_2160_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};
