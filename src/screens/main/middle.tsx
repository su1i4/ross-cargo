import Image from "next/image";

export const Middle = () => {
  return (
    <div className="w-full">
      <p className="text-[#030115] text-[48px] font-[600] mt-14">Росскарго</p>
      <div className="grid grid-cols-2 gap-[20px] mt-14">
        <div className="w-full relative rounded-[30px] overflow-hidden h-[350px]">
          <Image
            width={500}
            height={300}
            src="/banner-truck.png"
            alt="Ross-cargo image"
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-[20px] gap-[20px]">
            <p className="text-[24px] text-white font-[600]">
              Доставка из Кыргызстана
            </p>
            <p className="text-white font-[300]">
              Оперативная перевозка грузов из Кыргызстана. Гарантируем
              безопасность, оптимальные сроки и прозрачность на каждом этапе
            </p>

            <div className="flex justify-between">
              <p className="text-[#FFFFFF] font-[300]">Узнать подробнее</p>
              <div>
                <Image
                  width={30}
                  height={30}
                  src="/arrow-up-right.svg"
                  alt="arrow"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <div className="w-full relative bg-red-200 rounded-[30px] overflow-hidden h-[350px] bg-red-200">
            <Image
              width={500}
              height={300}
              src="/banner-truck.png"
              alt="Ross-cargo image"
              className="w-full h-full object-cover"
              priority={true}
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-[20px] gap-[20px]">
              <p className="text-[24px] text-white font-[600]">
                Доставка из Китая
              </p>
            </div>
          </div>
          <div className="w-full relative bg-red-200 rounded-[30px] overflow-hidden h-[350px] bg-red-200">
            <Image
              width={500}
              height={300}
              src="/banner-truck.png"
              alt="Ross-cargo image"
              className="w-full h-full object-cover"
              priority={true}
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-[20px] gap-[20px]">
              <p className="text-[24px] text-white font-[600]">
                Фулфилмент полного цикла
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
