import { Buiseness } from "@/screens/services/buiseness";
import { Fuck } from "@/screens/services/fuck";
import { Integration } from "@/screens/services/integration";
import { LastNews } from "@/screens/services/last-news";
import { ServiceBanner } from "@/screens/services/service-banner";

export default function Services() {
  return (
    <main className="w-full">
      <ServiceBanner />
      <Buiseness />
      <Fuck />
      <LastNews />
      <Integration />
    </main>
  );
}
