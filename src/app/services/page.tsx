import { Buiseness } from "@/screens/services/buiseness";
import { Fuck } from "@/screens/services/fuck";
import { ServiceBanner } from "@/screens/services/service-banner";

export default function Services() {
  return (
    <main className="w-full">
      <ServiceBanner />
      <Buiseness />
      <Fuck />
    </main>
  );
}
