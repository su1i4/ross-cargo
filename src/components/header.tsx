import { Logo } from "@/assets/icons/Logo";
import { Button } from "./ui/button";
import { links, linksName } from "@/lib/links";
import Link from "next/link";

export const Header = ({ textColor = "text-[#030115]" }) => {
  return (
    <div className="container flex justify-between pt-4 px-8">
      <Link href='/'>
        <Logo />
      </Link>
      <div className="border-[1px] border-[#D4D4D4] border-solid flex items-center py-2 px-4 rounded-[70px] gap-[25px]">
        {Object.entries(links).map(([key, value]) => (
          <Link
            href={value}
            key={key}
            className={`${textColor} text-[18px] hover:text-[#1342DD]`}
          >
            {linksName[key as keyof typeof linksName]}
          </Link>
        ))}
      </div>
      <Button className="bg-[#1342DD]">Оставить заявку</Button>
    </div>
  );
};
