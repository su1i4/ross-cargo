import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccardionData = [
  {
    title: "Какие услуги вы предоставляете?",
    content:
      "Мы занимаемся международной и внутрироссийской логистикой, включая авиаперевозки, морские контейнерные перевозки, автомобильные и железнодорожные перевозки, а также таможенное оформление и складское хранение.",
  },
  {
    title: "С какими странами вы работаете?",
    content: "С какими странами вы работаете?",
  },
  {
    title: "Как рассчитать стоимость доставки?",
    content: "Как рассчитать стоимость доставки?",
  },
  {
    title: "Какие документы нужны для отправки груза?",
    content: "Какие документы нужны для отправки груза?",
  },
  {
    title: "Сколько времени занимает доставка?",
    content: "Сколько времени занимает доставка?",
  },
];

export const Questions = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-14">
      <p className="text-[#030115] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[600] mb-10 text-center sm:text-left">
        Часто задаваемые вопросы
      </p>
      <Accordion type="single" collapsible>
        {AccardionData.map((item, index) => (
          <AccordionItem key={item.title} value={`item-${index}`}>
            <AccordionTrigger className="text-base sm:text-lg md:text-xl font-medium">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-gray-700">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
