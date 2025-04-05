"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Select } from "@/components/ui/select";

// Определение типов для формы
type CalculateFormInputs = {
  origin: string;
  destination: string;
  cargoType: string;
  weight: string;
};

export const CalculateTarifForm = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [price, setPrice] = useState<number | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CalculateFormInputs>();

  const onSubmit: SubmitHandler<CalculateFormInputs> = async (data) => {
    setIsCalculating(true);
    
    try {
      console.log(data)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Пример расчета - в реальном приложении здесь будет запрос к API
      const calculatedPrice = Math.floor(Math.random() * 10000) + 5000;
      setPrice(calculatedPrice);
    } catch (error) {
      console.error("Ошибка при расчете стоимости:", error);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            placeholder="Откуда"
            {...register("origin", { required: "Укажите пункт отправления" })}
            className={` ${errors.origin ? "border-red-500" : ""}`}
          />
          {errors.origin && (
            <p className="text-red-500 text-sm mt-1">{errors.origin.message}</p>
          )}
        </div>
        
        <div>
          <Input
            placeholder="Куда"
            {...register("destination", { required: "Укажите пункт назначения" })}
            className={` ${errors.destination ? "border-red-500" : ""}`}
          />
          {errors.destination && (
            <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
          )}
        </div>
        
        <div>
          <Input
            placeholder="Тип груза"
            {...register("cargoType", { required: "Укажите тип груза" })}
            className={` ${errors.cargoType ? "border-red-500" : ""}`}
          />
          {errors.cargoType && (
            <p className="text-red-500 text-sm mt-1">{errors.cargoType.message}</p>
          )}
        </div>
        
        <div>
          <Input
            placeholder="Вес в киллограммах"
            type="number"
            {...register("weight", { 
              required: "Укажите вес груза",
              min: { value: 1, message: "Вес должен быть больше 0" }
            })}
            className={` ${errors.weight ? "border-red-500" : ""}`}
          />
          {errors.weight && (
            <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          disabled={isCalculating}
          className="w-fit bg-blue-600 hover:bg-blue-700 text-white "
        >
          {isCalculating ? "Расчет..." : "Рассчитать стоимость"}
        </Button>
      </form>
      
      {price !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-md">
          <p className="text-center font-bold">Стоимость доставки: {price} руб.</p>
        </div>
      )}
    </div>
  );
};