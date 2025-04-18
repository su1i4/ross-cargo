import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Rating from "@/components/ui/rating";

const FeedbackData = [
  {
    rate: 4,
    person: "Александр К.",
    feedback:
      "«Пользуюсь услугами «Росскарго» уже год — быстрая доставка, вежливый персонал, удобный личный кабинет. Все супер!»",
  },
  // остальные отзывы...
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
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-14">
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
