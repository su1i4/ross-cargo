"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Calculator, MapPin } from "lucide-react";
import { ShippingCalculator } from "@/screens/main/ui/form-calculate";
import { TrackingSearch } from "./tracking-search";
import { scrollToId } from "@/lib/utils";

type TabType = "calculator" | "tracking";

export const TabsCalculator = () => {
  const [activeTab, setActiveTab] = useState<TabType>("calculator");
  const searchParams = useSearchParams();

  useEffect(() => {
    const linkParam = searchParams.get("link");
    const trackingNumber = searchParams.get("trackingNumber");
    
    if (linkParam === "calculator") {
      setActiveTab("tracking");
    } else if (trackingNumber) {
      // Если есть номер накладной, переключаемся на вкладку отслеживания
      setActiveTab("tracking");
      
      // Скролл к компоненту через небольшую задержку
      setTimeout(() => {
        scrollToId("calculator");
      }, 200);
    }
  }, [searchParams]);

  const tabs = [
    {
      id: "calculator" as TabType,
      label: "Калькулятор",
      icon: Calculator,
    },
    {
      id: "tracking" as TabType,
      label: "Отследить",
      icon: MapPin,
    },
  ];

  return (
    <div id="calculator" className="bg-white rounded-[24px] p-3 lg:p-6 w-full shadow-lg flex flex-col gap-5 mt-8 min-h-[500px]">
      <div className="flex bg-gray-100 rounded-lg overflow-hidden p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors rounded-md ${
                activeTab === tab.id
                  ? "bg-[var(--ross)] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div>
        {activeTab === "calculator" && (
          <div>
            <h2 className="text-[#030115] lg:text-[24px] font-[600] mb-2 text-[18px]">
              Рассчитать доставку
            </h2>
            <p className="text-[#030115] lg:text-base text-[14px] mb-5">
              Быстрая и безопасная доставка грузов из Кыргызстана и Китая по
              всем городам России
            </p>
            <ShippingCalculator />
          </div>
        )}

        {activeTab === "tracking" && (
          <div>
            <h2 className="text-[#030115] lg:text-[24px] font-[600] mb-2 text-[18px]">
              Отследить посылку
            </h2>
            <p className="text-[#030115] text-base mb-5">
              Введите номер накладной для отслеживания
            </p>
            <TrackingSearch />
          </div>
        )}
      </div>
    </div>
  );
};
