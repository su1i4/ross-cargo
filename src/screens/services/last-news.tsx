import { libNews } from "@/lib/news";
import Image from "next/image";

const NewsCard = ({ ...items }: any) => {
  return (
    <div key={items.key} className="w-full bg-white rounded-[30px] p-[10px]">
      <div>
        <Image
          alt={items.name}
          src={items.icon}
          width={500}
          height={300}
          className="w-full "
        />
      </div>
      <p className="text-[#030115] text-[25px] leading-7 font-[600] h-24 mt-4">
        {items.name}
      </p>
      <p className="text-[#878787]">{items.content}</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-[#1342DD]">Оформить заявку</p>
        <div className="rounded-full hover:scale-105 transition-all duration-300 hover:bg-gray-100 cursor-pointer">
          <Image
            width={30}
            height={30}
            src="/arrow-up-right copy.svg"
            alt="arrow"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export const LastNews = () => {
  return (
    <div className="bg-[#F8F8F8] py-16 px-8">
      <div className="container mx-auto">
        <p className="text-[#030115] text-[48px] font-[600]">
          Последние новости
        </p>
        <p className="text-[#4A4B4C] text-[20px] mt-2">
          Будьте в курсе последних событий
        </p>
        <div className="grid grid-cols-3 gap-[30px] mt-10">
          {libNews.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
