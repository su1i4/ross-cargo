'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { MdPhoneForwarded } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";

const SwitchContact = () => {
  const [open, setOpen] = useState(false);

  // Improved animation function with better types
  const LogoAnimate = (
    x: number, 
    y: number, 
    scale: number, 
    rotate: number, 
    opacity: number
  ) => ({
    opacity,
    x,
    y,
    scale,
    rotate,
  });

  return (
    <>
      {/* Main floating button */}
      <motion.div
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.8 }}
        className="fixed w-14 h-14 bg-[#bab8b8] rounded-full bottom-10 right-8 cursor-pointer flex items-center justify-center z-50 sm:w-12 sm:h-12 sm:bottom-8 sm:right-6 noselect"
      >
        {/* Ping animation */}
        <div
          className={`w-14 h-14 bg-[#5d5a5a] rounded-full absolute sm:w-12 sm:h-12 ${
            open ? "" : "animate-ping"
          }`}
        ></div>
        
        {/* Phone icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className="z-30 w-8 h-8 sm:w-6 sm:h-6"
          fill="white"
        >
          <path d="M3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V6C3 14.284 9.716 21 18 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15.721C21.0001 15.511 20.934 15.3064 20.8112 15.136C20.6885 14.9657 20.5152 14.8383 20.316 14.772L15.823 13.274C15.5947 13.1981 15.3466 13.2071 15.1244 13.2993C14.9021 13.3915 14.7205 13.5607 14.613 13.776L13.483 16.033C11.0345 14.9267 9.07332 12.9655 7.967 10.517L10.224 9.387C10.4393 9.27945 10.6085 9.0979 10.7007 8.87564C10.7929 8.65339 10.8019 8.40534 10.726 8.177L9.228 3.684C9.16171 3.48496 9.03449 3.3118 8.86436 3.18905C8.69422 3.0663 8.48979 3.00016 8.28 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579Z" />
        </svg>
      </motion.div>

      {/* WhatsApp button - positioned to the left */}
      <motion.a
        href="https://wa.me/996509003003"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        initial={{ opacity: 0 }}
        animate={
          open
            ? LogoAnimate(-80, 0, 1, 0, 1)
            : LogoAnimate(0, 0, 0.1, 360, 0)
        }
        transition={{ delay: !open ? 0 : 0.2 }}
        className="fixed w-10 h-10 bg-[#5d5a5a] rounded-full bottom-10 right-8 flex justify-center items-center z-40 shadow-sm shadow-[#bab8b8] sm:w-9 sm:h-9 sm:bottom-8 sm:right-6"
      >
        <ImWhatsapp
          color="white"
          className="w-5 h-5 sm:w-4 sm:h-4"
        />
      </motion.a>

      {/* Instagram button - positioned above */}
      <motion.a
        href="https://www.instagram.com/rosscargokg/"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        initial={{ opacity: 0 }}
        animate={
          open
            ? LogoAnimate(0, -80, 1, 0, 1)
            : LogoAnimate(0, 0, 0.1, 360, 0)
        }
        transition={{ delay: !open ? 0 : 0.25 }}
        className="fixed w-10 h-10 bg-[#5d5a5a] rounded-full bottom-10 right-8 flex justify-center items-center z-40 shadow-sm shadow-[#bab8b8] sm:w-9 sm:h-9 sm:bottom-8 sm:right-6"
      >
        <GrInstagram
          color="white"
          className="w-5 h-5 sm:w-4 sm:h-4"
        />
      </motion.a>

      {/* Phone call button - positioned diagonally */}
      <motion.a
        href="tel:+996509003003"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        initial={{ opacity: 0 }}
        animate={
          open
            ? LogoAnimate(-60, -60, 1, 0, 1)
            : LogoAnimate(0, 0, 0.1, 360, 0)
        }
        transition={{ delay: !open ? 0 : 0.35 }}
        className="fixed w-10 h-10 bg-[#5d5a5a] rounded-full bottom-10 right-8 flex justify-center items-center z-40 shadow-sm shadow-[#bab8b8] sm:w-9 sm:h-9 sm:bottom-8 sm:right-6"
      >
        <MdPhoneForwarded
          color="white"
          className="w-5 h-5 sm:w-4 sm:h-4"
        />
      </motion.a>
    </>
  );
};

export default SwitchContact;