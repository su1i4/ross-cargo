import { CompanyNews } from "@/screens/news/company-news";
import { NewsBanner } from "@/screens/news/news-banner";

export default function News() {
  return (
    <main className="w-full bg-[#F8F8F8]">
        <NewsBanner />
        <CompanyNews />
    </main>
  );
}
