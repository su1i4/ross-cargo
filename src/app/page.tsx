import { Banner } from "@/screens/main/banner";
import { Calculator } from "@/screens/main/calculator";
import { Middle } from "@/screens/main/middle";

export default function Home() {
  return (
    <main className="container px-8">
        <Banner />
        <Middle />
        <Calculator />
    </main>
  );
}
