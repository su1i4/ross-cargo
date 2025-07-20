import { Suspense } from "react";
import { Header } from "@/components/header";
import { Banner } from "@/screens/main/banner";
import { Calculator } from "@/screens/main/calculator";
import { Consultation } from "@/screens/main/consultation";
import { Feedbacks } from "@/screens/main/feedbacks";
import { Map } from "@/screens/main/map";
import { Middle } from "@/screens/main/middle";
import { Questions } from "@/screens/main/questions";

export default function Home() {
  return (
    <>
      <Header />
      <Suspense>
        <main className="container md:px-8 px-2">
          <Banner />
          <Middle />
          <Calculator />
          <Questions />
          <Feedbacks />
          <Consultation />
          <Map />
        </main>
      </Suspense>
    </>
  );
}
