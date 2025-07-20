import { Suspense } from "react";
import { Questions } from "@/screens/main/questions";
import { Buiseness } from "@/screens/services/buiseness";
import { China } from "@/screens/services/china";
import { ServiceDescription } from "@/screens/services/ServiceDescription";
import { Fullfilment } from "@/screens/services/fullfillment";
import { Integration } from "@/screens/services/integration";
import { LastNews } from "@/screens/services/last-news";
import { ReverseIntegration } from "@/screens/services/reverseIntegration";
import { ServiceBanner } from "@/screens/services/service-banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги | Росскарго - доставка грузов из Кыргызстана и Китая",
  description: "Полный спектр логистических услуг: грузоперевозки, таможенное оформление, хранение, фулфилмент, интеграция с маркетплейсами и многое другое.",
  keywords: "логистические услуги, грузоперевозки, фулфилмент Кыргызстан, доставка из Китая, интеграция с маркетплейсами, таможенное оформление",
  openGraph: {
    title: "Услуги логистической компании Росскарго",
    description: "Комплексные логистические услуги для вашего бизнеса: от доставки из Китая до фулфилмента и интеграции с маркетплейсами.",
    url: "https://rosscargo.kg/services",
    images: [
      {
        url: "https://rosscargo.kg/service-banner.png",
        width: 1200,
        height: 630,
        alt: "Услуги компании Росскарго",
      },
    ],
  },
};

export default function Services() {
  return (
    <Suspense fallback={null}>
      <main className="w-ful bg-[#F8F8F8]">
        <ServiceBanner />
        <Buiseness />
        <ServiceDescription />
        <LastNews />
        <Integration />
        <div className="container mx-auto">
          <div className="px-4">
            <Questions />
          </div>
        </div>
        <Fullfilment />
        <ReverseIntegration />
        <China />
      </main>
    </Suspense>
  );
}
