import Image from "next/image";

export const Middle = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <p className="text-[#030115] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-[600] mt-14 text-center lg:text-left">
        Росскарго
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Кыргызстан */}
        <div className="group relative rounded-[20px] overflow-hidden h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px] transition-all cursor-pointer">
          <Image
            width={500}
            height={300}
            src="/Kyrgyzstan.png"
            alt="Ross-cargo image"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-4 sm:p-5 md:p-6 gap-3 sm:gap-4">
            <p className="text-[18px] sm:text-[20px] md:text-[22px] text-white font-[600] translate-y-[60px] group-hover:translate-y-0 transition-all duration-500">
              Доставка из Кыргызстана
            </p>
            <div className="transition-all duration-500 translate-x-[-300px] group-hover:translate-x-0">
              <p className="text-white text-sm sm:text-base font-[300] whitespace-nowrap">
                Оперативная перевозка грузов из Кыргызстана. Гарантируем
              </p>
              <p className="text-white text-sm sm:text-base font-[300] whitespace-nowrap">
                безопасность, оптимальные сроки и прозрачность на каждом этапе
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-white font-[300] text-sm sm:text-base">Узнать подробнее</p>
              <Image
                width={24}
                height={24}
                src="/arrow-up-right.svg"
                alt="arrow"
                priority
              />
            </div>
          </div>
        </div>

        {/* Китай */}
        <div className="group relative rounded-[20px] overflow-hidden h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px] transition-all cursor-pointer">
          <Image
            width={500}
            height={300}
            src="/China.png"
            alt="Ross-cargo image"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-4 sm:p-5 md:p-6 gap-3 sm:gap-4">
            <p className="text-[18px] sm:text-[20px] md:text-[22px] text-white font-[600] translate-y-[60px] group-hover:translate-y-0 transition-all duration-500">
              Доставка из Китая
            </p>
            <div className="transition-all duration-500 translate-x-[-300px] group-hover:translate-x-0">
              <p className="text-white text-sm sm:text-base font-[300] whitespace-nowrap">
                Доставляем грузы из Гуанчжоу, Иу и Урумчи в Россию безопасно и
              </p>
              <p className="text-white text-sm sm:text-base font-[300] whitespace-nowrap">
                выгодно. Байерство, поиск, проверка и инспекция товаров, Бизнес
              </p>
              <p className="text-white text-sm sm:text-base font-[300] whitespace-nowrap">
                туры в Китай. Мы работаем, чтобы ваш бизнес рост!
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-white font-[300] text-sm sm:text-base">Узнать подробнее</p>
              <Image
                width={24}
                height={24}
                src="/arrow-up-right.svg"
                alt="arrow"
                priority
              />
            </div>
          </div>
        </div>

        {/* Россия */}
        <div className="group relative rounded-[20px] overflow-hidden h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px] transition-all cursor-pointer">
          <Image
            width={500}
            height={300}
            src="/Russia.jpg"
            alt="Ross-cargo image"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-4 sm:p-5 md:p-6 gap-3 sm:gap-4">
            <p className="text-[18px] sm:text-[20px] md:text-[22px] text-white font-[600] translate-y-[60px] group-hover:translate-y-0 transition-all duration-500">
              Фулфилмент
            </p>
            <p className="text-white text-sm sm:text-base font-[300] transition-all duration-500 translate-x-[-300px] group-hover:translate-x-0">
              Команда из экспертов своего дела, чтобы развивать бизнес селлеров!
              Хранение, отдел контроля качества, маркировка, упаковка, быстрые
              поставки в склады маркетплейсов
            </p>

            <div className="flex justify-between items-center">
              <p className="text-white font-[300] text-sm sm:text-base">Узнать подробнее</p>
              <Image
                width={24}
                height={24}
                src="/arrow-up-right.svg"
                alt="arrow"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
