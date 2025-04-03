import { Questions } from "@/screens/main/questions";
import { Buiseness } from "@/screens/services/buiseness";
import { China } from "@/screens/services/china";
import { Fuck } from "@/screens/services/fuck";
import { Fullfilment } from "@/screens/services/fullfillment";
import { Integration } from "@/screens/services/integration";
import { LastNews } from "@/screens/services/last-news";
import { ReverseIntegration } from "@/screens/services/reverseIntegration";
import { ServiceBanner } from "@/screens/services/service-banner";

export default function Services() {
  return (
    <main className="w-ful bg-[#F8F8F8]">
      <ServiceBanner />
      <Buiseness />
      <Fuck />
      <LastNews />
      <Integration />
      <div className="container mx-auto">
        <Questions />
      </div>
      <Fullfilment />
      <ReverseIntegration />
      <China />
    </main>
  );
}
