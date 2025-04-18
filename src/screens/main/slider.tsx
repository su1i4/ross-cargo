"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";

const Images: string[] = ["/banner-truck.png", "/Kremle.jpg"];

export const Slider = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [direction, setDirection] = React.useState<"forward" | "backward">("forward");

  React.useEffect(() => {
    if (!api) return;

    const autoAdvance = setInterval(() => {
      if (direction === "forward") {
        if (current >= count) {
          setDirection("backward");
          api.scrollPrev();
        } else {
          api.scrollNext();
        }
      } else {
        if (current <= 1) {
          setDirection("forward");
          api.scrollNext();
        } else {
          api.scrollPrev();
        }
      }
    }, 5000);

    return () => clearInterval(autoAdvance);
  }, [api, current, count, direction]);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {Images.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                width={1000}
                height={300}
                src={image}
                alt="Ross-cargo image"
                className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] object-cover rounded-[20px] md:rounded-[30px] transition-all"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
