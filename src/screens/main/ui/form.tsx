"use client";

import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
    control,
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
      setTimeout(() => setIsSuccess(false), 10000);
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
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: "Номер телефона обязателен" }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              country="kg"
              onlyCountries={["ru", "kz", "cn", "uz", "kg"]}
              preferredCountries={["ru", "kz", "cn", "uz", "kg"]}
              value={value}
              onChange={onChange}
              inputClass={errors.phoneNumber ? "border-red-500" : ""}
              containerClass="w-full bg-[#F0F0F0]"
              inputStyle={{ width: "100%", backgroundColor: "#F0F0F0" }}
              placeholder="Номер телефона"
              masks={{
                ru: "... ... .. ..",
                kz: "... ... .. ..",
                cn: "... .... ....",
                uz: ".. ... .. ..",
                kg: "... ... ..."
              }}
            />
          )}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.phoneNumber.message}
          </p>
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
