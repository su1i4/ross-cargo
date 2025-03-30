"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Define form input types
type FormInputs = {
  name: string;
  phone: string;
  message: string;
};

export const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission logic
      // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Имя"
          {...register("name", { required: "Имя обязательно" })}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <Input
          placeholder="Номер телефона"
          {...register("phone", { 
            required: "Номер телефона обязателен",
            pattern: {
              value: /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
              message: "Введите действительный номер телефона"
            }
          })}
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
      
      <div>
        <Textarea
          placeholder="Опишите задачу"
          rows={5}
          {...register("message", { 
            required: "Описание задачи обязательно", 
            minLength: { value: 10, message: "Минимум 10 символов" } 
          })}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-fit bg-[#1342DD] hover:bg-[#1342DD]"
      >
        {isSubmitting ? "Отправка..." : "Рассчитать стоимость"}
      </Button>
      
      {isSuccess && (
        <p className="text-green-500 text-center">Сообщение успешно отправлено!</p>
      )}
    </form>
  );
};
