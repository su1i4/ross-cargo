import { Logo } from "@/assets/icons/Logo";
import { linksFooter, linksFooterName } from "@/lib/links";
import { MdOutlineEmail } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

const contacts = [
  {
    icon: <MdOutlineEmail size={24} />,
    label: "Электронная почта",
    value: "rosscargo.kg@gmail.com",
  },
  {
    icon: <BsGeoAlt size={24} />,
    label: "Главный офис",
    value: "г. Бишкек ул. Кожевенная 74/2",
  },
  {
    icon: <FiPhone size={24} />,
    label: "Телефон",
    value: "+996 509-003-003",
  },
];

export const Footer = () => {
  return (
    <footer className="container px-8 py-20 flex flex-col md:flex-row justify-between gap-10">
      <div className="md:w-[60%]">
        <h2 className="text-[#030115] text-[40px] md:text-[48px] font-semibold mb-4">
          Росскарго
        </h2>
        <p className="text-[#030115] mb-10 leading-relaxed">
          Мы всегда готовы ответить на ваши вопросы <br className="hidden md:block" />
          и помочь вам с грузоперевозками
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Logo />
          {Object.entries(linksFooter).map(([key, value]) => (
            <a
              key={key}
              href={value}
              className="text-[#030115] text-[16px] hover:text-[#1342DD] transition-colors"
            >
              {linksFooterName[key as keyof typeof linksFooterName]}
            </a>
          ))}
        </div>
      </div>

      <div className="md:w-[40%] flex flex-col gap-6">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              {contact.icon}
              <span className="text-[#030115] text-[20px] md:text-[25px] font-semibold">
                {contact.label}
              </span>
            </div>
            <p className="text-[#030115] text-[16px]">{contact.value}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};
