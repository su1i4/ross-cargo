import YandexMap from "./ui/yandex-map";

export const Map = () => {
  return (
    <div className="bg-[#F8F8F8] rounded-[30px] p-[30px] flex flex-col gap-[20px] mt-14">
      <div className="w-full rounded-[30px] overflow-clip">
        <YandexMap />
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="w-full bg-[#FFFFFF] rounded-[30px] p-[30px] flex flex-col gap-[10px]">
          <p className="text-[#030115] text-[30px] font-[600]">82 000+</p>
          <p className="text-[#030115] tet-[20px]">Доставленных посылок</p>
          <p className="text-[#878787]">
            Мы обеспечиваем быструю и безопасную доставку товаров между
            Кыргызстаном и Россией. Надежность, скорость и удобство — наш
            приоритет
          </p>
        </div>
        <div className="w-full bg-[#FFFFFF] rounded-[30px] p-[30px] flex flex-col gap-[10px]">
          <p className="text-[#030115] text-[30px] font-[600]">5000+</p>
          <p className="text-[#030115] tet-[20px]">Довольных клиентов</p>
          <p className="text-[#878787]">
            Нам доверяют компании и частные лица, выбирая надежность, качество и
            удобный сервис
          </p>
        </div>
      </div>
    </div>
  );
};
