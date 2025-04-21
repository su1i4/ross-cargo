import YandexMap from "./ui/yandex-map";

export const Map = () => {
  return (
    <div className="bg-[#F8F8F8] rounded-[30px] p-6 sm:p-8 lg:p-[30px] flex flex-col gap-6 sm:gap-[20px] mt-14">
      <p className="text-[#030115] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-[600] text-center lg:text-left">
        Наши филиалы в Бишкеке
      </p>
      <div className="w-full rounded-[20px] overflow-hidden">
        <YandexMap />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[20px]">
        <div className="w-full bg-white rounded-[20px] p-5 sm:p-[30px] flex flex-col gap-2 sm:gap-[10px]">
          <p className="text-[#030115] text-[26px] sm:text-[30px] font-semibold">
            82 000+
          </p>
          <p className="text-[#030115] text-[18px] sm:text-[20px]">
            Доставленных посылок
          </p>
          <p className="text-[#878787] text-[14px] sm:text-[15px] leading-snug">
            Мы обеспечиваем быструю и безопасную доставку товаров между
            Кыргызстаном и Россией. Надежность, скорость и удобство — наш
            приоритет
          </p>
        </div>

        <div className="w-full bg-white rounded-[20px] p-5 sm:p-[30px] flex flex-col gap-2 sm:gap-[10px]">
          <p className="text-[#030115] text-[26px] sm:text-[30px] font-semibold">
            5000+
          </p>
          <p className="text-[#030115] text-[18px] sm:text-[20px]">
            Довольных клиентов
          </p>
          <p className="text-[#878787] text-[14px] sm:text-[15px] leading-snug">
            Нам доверяют компании и частные лица, выбирая надежность, качество и
            удобный сервис
          </p>
        </div>
      </div>
    </div>
  );
};
