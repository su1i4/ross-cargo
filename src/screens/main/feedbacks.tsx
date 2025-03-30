import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Rating from "@/components/ui/rating";

const FeedbackData = [
  {
    rate: 4,
    person: "Александр К.",
    feedback:
      "«Пользуюсь услугами «Росскарго» уже год — быстрая доставка, вежливый персонал, удобный личный кабинет. Все супер!»",
  },
  {
    rate: 4,
    person: "Александр К.",
    feedback:
      "«Пользуюсь услугами «Росскарго» уже год — быстрая доставка, вежливый персонал, удобный личный кабинет. Все супер!»",
  },
  {
    rate: 4,
    person: "Александр К.",
    feedback:
      "«Пользуюсь услугами «Росскарго» уже год — быстрая доставка, вежливый персонал, удобный личный кабинет. Все супер!»",
  },
  {
    rate: 4,
    person: "Александр К.",
    feedback:
      "«Пользуюсь услугами «Росскарго» уже год — быстрая доставка, вежливый персонал, удобный личный кабинет. Все супер!»",
  },
  {
    rate: 4,
    person: "Александр К.",
    feedback:
      "«Пользуюсь услугами «Росскарго» уже год — быстрая доставка, вежливый персонал, удобный личный кабинет. Все супер!»",
  },
  {
    rate: 4,
    person: "Александр К.",
    feedback:
      "«Пользуюсь услугами «Росскарго» уже год — быстрая доставка, вежливый персонал, удобный личный кабинет. Все супер!»",
  },
];

const FeedbackCard = ({ rate, person, feedback }: any) => {
  return (
    <div className="w-full h-[300px] gap-8 flex flex-col justify-between rounded-[30px] bg-[#F8F8F8] p-[30px]">
      <Rating rating={rate} />
      <div className="w-full">
        <p className="text-[16px] font-[600] text-[#030115] max-h-[180px] overflow-y-auto">
          {feedback} {feedback}
        </p>
        <p className="text-[#ACACAC] text-[15px]">{person}</p>
      </div>
    </div>
  );
};

export const Feedbacks = () => {
  return (
    <div className="w-full">
      <p className="text-[#030115] text-[48px] font-[600] mt-14">
        Что говорят о нас наши клиенты?
      </p>
      <Carousel className="mt-14">
        <CarouselContent className="-ml-4">
          {FeedbackData.map((item, index) => (
            <CarouselItem key={index} className="pl-4 basis-1/4">
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
