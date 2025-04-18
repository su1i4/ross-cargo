import { Button } from "@/components/ui/button";
import { NewsSlider } from "./news-slider";

export const CompanyNews = () => {
  return (
    <div className="border-t-1 border-[#E6E6E6] border-solid py-4 bg-white w-full">
      <div className="container mx-auto flex flex-col gap-8 px-8">
        <Button className="bg-[#1342DD] hover:bg-[#1342DD] rounded-[44px] w-fit">
          Новости компании
        </Button>
        <NewsSlider />
      </div>
    </div>
  );
};
