import { generateMetadata } from "./generateMetadata";
import { NewsDetail } from "@/screens/news/news-detail";
import type { Metadata } from "next";

interface PageParams {
  params: { id: string };
}

// Экспортируем функцию generateMetadata
export { generateMetadata };

export default function NewsPage({ params }: PageParams) {
  // Рендерим клиентский компонент NewsDetail
  return <NewsDetail id={params.id} />;
}
