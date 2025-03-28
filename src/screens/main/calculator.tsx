import Image from "next/image";

export const Calculator = () => {
  return (
    <div className="mt-14 w-full relative">
      <Image
        width={500}
        height={300}
        src="/Calculator.png"
        alt="Ross-cargo image"
        className="w-full h-full object-cover"
        priority={true}
      />
      <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-[20px] gap-[20px]">
        
      </div>
    </div>
  );
};
