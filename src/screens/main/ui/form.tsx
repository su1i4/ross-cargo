"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import emailjs from "emailjs-com";

// Define form input types
type FormInputs = {
  name: string;
  phoneNumber: string;
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
      await emailjs.send(
        "service_2vwrg5c", // service_id
        "template_b0n6l65", // template_id
        {
          name: data.name,
          phoneNumber: data.phoneNumber,
          message: data.message,
        },
        "Sm_XBc9mi94plAWkQ" // public_key
      );

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Ошибка при отправке:", error);
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
          {...register("phoneNumber", {
            required: "Номер телефона обязателен",
            // pattern: {
            //   // value:
            //   //   /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
            //   message: "Введите действительный номер телефона",
            // },
          })}
          className={errors.phoneNumber ? "border-red-500" : ""}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div>
        <Textarea
          placeholder="Опишите задачу"
          rows={5}
          {...register("message", {
            required: "Описание задачи обязательно",
            minLength: { value: 10, message: "Минимум 10 символов" },
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
        <p className="text-green-500 text-center">
          Сообщение успешно отправлено!
        </p>
      )}
    </form>
  );
};
