"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";
import { scrollToId } from "@/lib/utils";

// Type definitions
type City = {
  id: number;
  cityname: string;
  countryId: number;
  type: string;
};

type ParcelType = {
  id: number;
  name: string;
};

type BagType = {
  id: number;
  title: string;
  price: number;
};

type CalculateFormInputs = {
  cityFromId: number;
  cityToId: number;
  parcelTypeId: number;
  weight: number;
};

const url = 'https://rosscargo.kg/api';

export const ShippingCalculator = () => {
  // States for data
  const [fromCities, setFromCities] = useState<City[]>([]);
  const [toCities, setToCities] = useState<City[]>([]);
  const [parcelTypes, setParcelTypes] = useState<ParcelType[]>([]);
  const [bagTypes, setBagTypes] = useState<BagType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);
  const [price, setPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const link = searchParams.get("link");
    if (link) {
      setTimeout(() => scrollToId(link), 300);
    }
  }, [searchParams]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<CalculateFormInputs>({
    defaultValues: {
      cityFromId: 0,
      cityToId: 0,
      parcelTypeId: 0,
      weight: 0,
    },
  });

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch cities
        const citiesResponse = await fetch(`${url}/locations/cities`);
        if (!citiesResponse.ok) throw new Error("Failed to fetch cities");
        const citiesData: City[] = await citiesResponse.json();
        
        // Split cities by type
        setFromCities(citiesData.filter(city => city.type === "From"));
        setToCities(citiesData.filter(city => city.type === "To"));

        // Fetch parcel types
        const parcelTypesResponse = await fetch(`${url}/parcel-type`);
        if (!parcelTypesResponse.ok) throw new Error("Failed to fetch parcel types");
        const parcelTypesData: ParcelType[] = await parcelTypesResponse.json();
        setParcelTypes(parcelTypesData);

        // Fetch bag types
        const bagsResponse = await fetch(`${url}/bags`);
        if (!bagsResponse.ok) throw new Error("Failed to fetch bag types");
        const bagsData: BagType[] = await bagsResponse.json();
        setBagTypes(bagsData);

        // Set default values if data is available
        if (citiesData.length > 0) {
          const defaultFromCity = citiesData.find(city => city.type === "From");
          if (defaultFromCity) setValue("cityFromId", defaultFromCity.id);
          
          const defaultToCity = citiesData.find(city => city.type === "To");
          if (defaultToCity) setValue("cityToId", defaultToCity.id);
        }

        if (parcelTypesData.length > 0) {
          setValue("parcelTypeId", parcelTypesData[0].id);
        }

      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Не удалось загрузить данные. Пожалуйста, попробуйте позже.");
        
        // Fallback to static data if API fails
        const citiesData = [
          { id: 5, cityname: "Бишкек", countryId: 3, type: "From" },
          { id: 6, cityname: "Москва", countryId: 2, type: "To" },
          { id: 7, cityname: "Казань", countryId: 2, type: "To" },
          { id: 8, cityname: "Ростов-на-Дону", countryId: 2, type: "To" },
          { id: 9, cityname: "Самара", countryId: 2, type: "To" },
          { id: 10, cityname: "Оренбург", countryId: 2, type: "To" },
          { id: 11, cityname: "Уфа", countryId: 2, type: "To" },
          { id: 12, cityname: "Челябинск", countryId: 2, type: "To" },
          { id: 13, cityname: "Екатеринбург", countryId: 2, type: "To" },
          { id: 14, cityname: "Омск", countryId: 2, type: "To" },
          { id: 15, cityname: "Новосибирск", countryId: 2, type: "To" },
          { id: 16, cityname: "Красноярск", countryId: 2, type: "To" },
          { id: 17, cityname: "Иркутск", countryId: 2, type: "To" },
          { id: 18, cityname: "Хасавюрт", countryId: 2, type: "To" },
          { id: 20, cityname: "Абакан", countryId: 2, type: "To" }
        ];
        
        const parcelTypesData = [
          { id: 1, name: "Пошив" },
          { id: 2, name: "Привозные" },
          { id: 3, name: "Маркированный Товар" },
          { id: 5, name: "Обувь" },
          { id: 6, name: "Бренд" }
        ];
        
        const bagTypesData = [
          { id: 1, title: "Маленький мешок", price: 60 },
          { id: 2, title: "Большой мешок", price: 220 },
          { id: 3, title: "Средний мешок", price: 200 },
          { id: 4, title: "Мешок для рулона", price: 230 }
        ];
        
        setFromCities(citiesData.filter(city => city.type === "From"));
        setToCities(citiesData.filter(city => city.type === "To"));
        setParcelTypes(parcelTypesData);
        setBagTypes(bagTypesData);
        
        // Set default values
        setValue("cityFromId", 5);
        setValue("cityToId", 6);
        setValue("parcelTypeId", 1);
        
        setError(null); // Clear error since we have fallback data
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setValue]);

  const onSubmit = async (data: CalculateFormInputs) => {
    setIsCalculating(true);
    setError(null);
    
    try {
      const response = await fetch(`${url}/calculator`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...data, weight: Number(data?.weight)}),
      });

      if (!response.ok) {
        throw new Error("Calculation failed");
      }

      const result = await response.json();
      setPrice(result);
    } catch (error) {
      console.error("Error calculating price:", error);
      setError("Не удалось рассчитать стоимость. Пожалуйста, попробуйте снова.");
      
      // Fallback calculation if API fails
      setError(null); // Clear error since we have fallback calculation
    } finally {
      setIsCalculating(false);
    }
  };

  if (isLoading) {
    return <div className="text-center p-4">Загрузка данных...</div>;
  }

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
        {/* From City */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Откуда</label>
          <Controller
            name="cityFromId"
            control={control}
            rules={{ required: "Выберите город отправления" }}
            render={({ field }) => (
              <Select 
                onValueChange={(value) => field.onChange(Number(value))}
                value={field.value > 0 ? field.value.toString() : undefined}
              >
                <SelectTrigger className="w-full h-10 sm:h-11">
                  <SelectValue placeholder="Выберите город" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {fromCities.map((city) => (
                      <SelectItem key={city.id} value={city.id.toString()}>
                        {city.cityname}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.cityFromId && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.cityFromId.message}</p>
          )}
        </div>

        {/* To City */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Куда</label>
          <Controller
            name="cityToId"
            control={control}
            rules={{ required: "Выберите город назначения" }}
            render={({ field }) => (
              <Select 
                onValueChange={(value) => field.onChange(Number(value))}
                value={field.value > 0 ? field.value.toString() : undefined}
              >
                <SelectTrigger className="w-full h-10 sm:h-11">
                  <SelectValue placeholder="Выберите город" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {toCities.map((city) => (
                      <SelectItem key={city.id} value={city.id.toString()}>
                        {city.cityname}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.cityToId && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.cityToId.message}</p>
          )}
        </div>

        {/* Parcel Type */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Тип товара</label>
          <Controller
            name="parcelTypeId"
            control={control}
            rules={{ required: "Выберите тип товара" }}
            render={({ field }) => (
              <Select 
                onValueChange={(value) => field.onChange(Number(value))}
                value={field.value > 0 ? field.value.toString() : undefined}
              >
                <SelectTrigger className="w-full h-10 sm:h-11">
                  <SelectValue placeholder="Выберите тип товара" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {parcelTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id.toString()}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.parcelTypeId && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.parcelTypeId.message}</p>
          )}
        </div>

        {/* Weight */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Вес (кг)</label>
          <Input
            type="number"
            placeholder="Введите вес"
            {...register("weight", {
              required: "Укажите вес",
              min: { value: 1, message: "Вес должен быть больше 0" },
            })}
            className={`h-10 sm:h-11 ${errors.weight ? "border-red-500" : ""}`}
          />
          {errors.weight && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.weight.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isCalculating}
          className="w-full h-11 sm:h-12 bg-[var(--ross)] hover:bg-[var(--ross)] text-white font-semibold mt-4 sm:mt-6"
        >
          {isCalculating ? "Расчет..." : "РАССЧИТАТЬ СТОИМОСТЬ"}
        </Button>
      </form>

      {/* Result Display */}
      {price !== null && !error && (
        <div className="mt-4 p-3 sm:p-4 bg-green-100 border border-green-300 rounded-md">
          <p className="text-center font-bold text-sm sm:text-base">Стоимость доставки: {price} руб.</p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 sm:p-4 bg-red-100 border border-red-300 rounded-md">
          <p className="text-center text-red-700 text-sm sm:text-base">{error}</p>
        </div>
      )}
    </div>
  );
};

export default ShippingCalculator;