import { Logo } from "@/assets/icons/Logo";
import { linksFooter, linksFooterName } from "@/lib/links";
import { MdOutlineEmail } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

const Socials = [
  {
    icon: <MdOutlineEmail />,
    name: "Электронная почта",
    content: "rosscargo.kg@gmail.com",
  },
  {
    icon: <BsGeoAlt />,
    name: "Главный офис",
    content: "г. Бишкек ул. Кожевенная 74/2",
  },
  {
    icon: <FiPhone />,
    name: "Телефон",
    content: "+996 509-003-003",
  },
];

export const Footer = () => {
  return (
    <div className="container flex justify-between px-8 py-20">
      <div className="w-[60%]">
        <p className="text-[#030115] text-[48px] font-[600]">Росскарго</p>
        <p className="text-[#030115]">
          Мы всегда готовы ответить на ваши вопросы <br /> и помочь вам с
          грузоперевозками
        </p>
        <div className="flex gap-[20px] mt-20 items-center">
          <Logo />{" "}
          {Object.entries(linksFooter).map(([key, value]) => (
            <a
              href={value}
              key={key}
              className="text-[#030115] text-[18px] hover:text-[#1342DD]"
            >
              {linksFooterName[key as keyof typeof linksFooterName]}
            </a>
          ))}
        </div>
      </div>
      <div className="w-[40%] flex flex-col gap-[20px]">
        {Socials.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex gap-[8px] items-center">
              {item.icon}{" "}
              <p className="text-[#030115] text-[25px] font-[600]">
                {item.name}
              </p>
            </div>
            <p className="text-[#030115]">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
