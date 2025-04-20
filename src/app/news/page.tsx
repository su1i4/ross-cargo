import { Calculator } from "@/screens/main/calculator";
import { Feedbacks } from "@/screens/main/feedbacks";
import { BlogNews } from "@/screens/news/blog-news";
import { CompanyNews } from "@/screens/news/company-news";
import { NewsBanner } from "@/screens/news/news-banner";
import { LastNews } from "@/screens/services/last-news";

export default function News() {
  return (
    <main className="w-full bg-[#F8F8F8]">
      <NewsBanner />
      <LastNews />
      {/* <BlogNews /> */}
      <div className="bg-white flex justify-center pb-10">
        <Feedbacks />
      </div>
      <div className="w-full">
        <div className="container mx-auto">
          <Calculator />
        </div>
      </div>
    </main>
  );
}
