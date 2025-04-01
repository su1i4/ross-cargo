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
    <div className="w-full px-8">
      <p className="text-[#030115] text-[48px] font-[600] mt-14">
        Часто задаваемые вопросы
      </p>
      <Accordion type="single" collapsible>
        {AccardionData.map((item) => (
          <AccordionItem key={item.title} value="item-1">
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
