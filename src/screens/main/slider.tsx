"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";

const Images: string[] = ["/banner-truck.png"];

export const Slider = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <CarouselContent className="">
        {Images.map((image, index) => (
          <CarouselItem key={index}>
            <Image width={1000} height={300} src={image} alt="Ross-cargo image" className="w-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
