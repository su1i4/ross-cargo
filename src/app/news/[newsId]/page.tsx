import { Params } from "next/dist/server/request/params";

export default function NewsInner({params}: {params: Params}) {
    console.log(params)
    return (
      <main className="w-ful bg-[#F8F8F8]">
      </main>
    );
  }
  