import { Suspense } from "react";
import { LastNews } from "@/screens/services/last-news";
import { Header } from "@/components/header";

export default function News() {
  return (
    <main className="w-full bg-[#F8F8F8]">
      <Suspense>
        <Header />
        <LastNews />
      </Suspense>
    </main>
  );
}
