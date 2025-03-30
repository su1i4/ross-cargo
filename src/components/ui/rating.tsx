'use client'


import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const Rating = ({ rating, setRating = () => false, maxStars = 5 }: { rating: number; setRating?: (value: number) => void; maxStars?: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            className={cn(
              "w-4 h-4 cursor-pointer transition-colors",
              starValue <= rating ? "fill-yellow-400 stroke-yellow-400" : "fill-gray-300 stroke-gray-300"
            )}
            onClick={() => setRating(starValue)}
          />
        );
      })}
    </div>
  );
};

export default Rating;
