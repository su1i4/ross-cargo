import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Rating from "@/components/ui/rating";

const FeedbackData = [
  {
    rate: 5,
    person: "Анна Смирнова, г. Екатеринбург",
    feedback:
      "«Работаем с Росс Карго почти год. Удобный личный кабинет, всегда на связи менеджер, ни разу не подвели по срокам. Отдельное спасибо за честные цены и понятные условия.»",
  },
  {
    rate: 5,
    person: "Тимур Асанов, г. Новосибирск",
    feedback:
      "«Отличный сервис! Оформление отправки занимает пару минут, всё прозрачно, статус груза отслеживается. С Росс Карго стало проще вести бизнес с Бишкеком.»",
  },
  {
    rate: 5,
    person: "Елена Горбачёва, г. Казань",
    feedback:
      "«Очень довольна качеством обслуживания. Заказы доставляют быстро, никаких повреждений. Поддержка — на высоте. Спасибо за надёжность!»",
  },
  {
    rate: 5,
    person: "Игорь Литвинов, г. Москва",
    feedback:
      "«Приятно удивлён уровнем логистики — чётко, без накладок, плюс можно вызывать выездную группу, что очень удобно. Буду рекомендовать коллегам.»",
  },
  {
    rate: 5,
    person: "Динара Маматова, г. Бишкек",
    feedback:
      "«Отправляю товар в Россию только через Росс Карго. Адекватные тарифы, всегда помогают с оформлением, даже когда большой объём. Работаю с ними с уверенностью.»",
  },
  {
    rate: 5,
    person: "Артём Куликов, г. Санкт-Петербург",
    feedback:
      "«С Росс Карго никаких нервов — всё чётко, документы в порядке, грузы идут быстро. Если нужна консультация — менеджеры на связи моментально.»",
  },
  {
    rate: 5,
    person: "Жанара Сатыбалдиева, г. Ош",
    feedback:
      "«Очень хорошая компания, помогли масштабировать наш экспорт. Удобно, что у них филиалы и в Кыргызстане, и в России. Большое спасибо!»",
  },
  {
    rate: 5,
    person: "Руслан Петров, г. Нижний Новгород",
    feedback:
      "«Отличная логистика. Особенно нравится, что можно смотреть все накладные в личном кабинете и получать отчёты. Сервис на уровне европейского.»",
  },
  {
    rate: 5,
    person: "Анастасия Блинова, г. Ростов-на-Дону",
    feedback:
      "«Сотрудничаем третий месяц — никаких нареканий. Быстро, чётко, удобно. Очень профессиональный подход. Спасибо Росс Карго за стабильность!»",
  },
  {
    rate: 5,
    person: "Владислав Ершов, г. Самара",
    feedback:
      "«Сначала сомневался, но теперь понимаю, что нашёл своего логистического партнёра. Всегда на связи, всё объяснят, даже помогают с упаковкой. Респект!»",
  },
];


const FeedbackCard = ({
  rate,
  person,
  feedback,
}: {
  rate: number;
  person: string;
  feedback: string;
}) => {
  return (
    <div className="w-full h-[300px] gap-6 flex flex-col justify-between rounded-[30px] bg-[#F8F8F8] p-6 sm:p-8">
      <Rating rating={rate} />
      <div className="w-full">
        <p className="text-[14px] sm:text-[16px] font-[600] text-[#030115] max-h-[180px] overflow-y-auto">
          {feedback}
        </p>
        <p className="text-[#ACACAC] text-[13px] sm:text-[15px] mt-2">{person}</p>
      </div>
    </div>
  );
};

export const Feedbacks = () => {
  return (
    <div className="w-full px-4 sm:px-3 md:px-8 lg:px-12 xl:px-16 py-14">
      <p className="text-[#030115] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[600] mb-10 text-center sm:text-left">
        Что говорят о нас наши клиенты?
      </p>

      <Carousel className="mt-8">
        <CarouselContent className="-ml-4">
          {FeedbackData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[90%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <FeedbackCard
                rate={item.rate}
                person={item.person}
                feedback={item.feedback}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
