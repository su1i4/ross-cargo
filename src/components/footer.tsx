import { Logo } from "@/assets/icons/Logo";
import { MdOutlineEmail } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import Script from "next/script";

const contacts = [
  {
    icon: <MdOutlineEmail size={24} />,
    label: "Электронная почта",
    value: "rosscargo.kg@gmail.com",
    href: "mailto:rosscargo.kg@gmail.com",
  },
  {
    icon: <BsGeoAlt size={24} />,
    label: "Главный офис",
    value: "г. Бишкек ул. Кожевенная 74/2",
    href: "https://maps.google.com/?q=г. Бишкек ул. Кожевенная 74/2", // можно также использовать Yandex карты
  },
  {
    icon: <FiPhone size={24} />,
    label: "Телефон",
    value: "+996 509-003-003",
    href: "tel:+996509003003",
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
          Мы всегда готовы ответить на ваши вопросы{" "}
          <br className="hidden md:block" />и помочь вам с грузоперевозками
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Logo />
          <Link
            href="/services"
            className="text-[#030115] text-[16px] hover:text-[#1342DD] transition-colors"
          >
            Услуги
          </Link>
          <Link
            href="/"
            className="text-[#030115] text-[16px] hover:text-[#1342DD] transition-colors"
          >
            О компании
          </Link>
          <Link
            href="/news"
            className="text-[#030115] text-[16px] hover:text-[#1342DD] transition-colors"
          >
            Новости
          </Link>
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
            <a
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-[#030115] text-[16px] hover:text-[#1342DD] transition-colors cursor-pointer underline"
            >
              {contact.value}
            </a>
          </div>
        ))}
      </div>

      {/* Schema.org разметка для компании */}
      <Script id="schema-org-script" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "РоссКарго",
          "url": "https://rosscargo.kg",
          "logo": "https://rosscargo.kg/logo.png",
          "description": "Логистическая компания, предоставляющая услуги доставки грузов из Кыргызстана и Китая в Россию. Более 17 лет опыта.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Кожевенная 74/2",
            "addressLocality": "Бишкек",
            "addressCountry": "Кыргызстан"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+996509003003",
              "contactType": "customer service",
              "email": "rosscargo.kg@gmail.com"
            }
          ],
          "sameAs": [
            "https://www.instagram.com/rosscargo",
            "https://t.me/rosscargo",
            "https://vk.com/rosscargo"
          ]
        }
      `}</Script>
    </footer>
  );
};
