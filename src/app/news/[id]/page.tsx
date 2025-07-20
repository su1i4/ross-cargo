import { NewsDetail } from "@/screens/news/news-detail";

export default function NewsPage({ params }: any) {
  return <NewsDetail id={params.id} />;
}
