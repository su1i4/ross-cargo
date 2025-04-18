'use client';

import React, { useEffect, useRef } from "react";

interface YMaps {
  Map: any;
  Placemark: any;
  ready: (callback: () => void) => void;
}

declare global {
  interface Window {
    ymaps: YMaps;
  }
}

const YandexMap = () => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const customMarkerURL = useRef(
    "data:image/svg+xml;base64," +
      btoa(`
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 0C14.6 0 7 7.6 7 17C7 29.8 24 48 24 48C24 48 41 29.8 41 17C41 7.6 33.4 0 24 0ZM24 23C20.7 23 18 20.3 18 17C18 13.7 20.7 11 24 11C27.3 11 30 13.7 30 17C30 20.3 27.3 23 24 23Z" fill="#B30000"/>
        </svg>
      `)
  );

  useEffect(() => {
    // Prevent double loading
    if (window.ymaps) {
      window.ymaps.ready(initMap);
      return;
    }

    const yandexScript = document.createElement("script");
    yandexScript.src =
      "https://api-maps.yandex.ru/2.1/?apikey=ef84f2a7-333d-4b33-b3d5-5263cb19fb71&lang=ru_RU";
    yandexScript.type = "text/javascript";
    yandexScript.async = true;

    scriptRef.current = yandexScript;
    document.body.appendChild(yandexScript);

    yandexScript.onload = () => {
      window.ymaps.ready(initMap);
    };

    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);

  const initMap = () => {
    const map = new window.ymaps.Map("yandex-map", {
      center: [42.875652, 74.622943],
      zoom: 16,
      controls: [],
    });

    const placemark = new window.ymaps.Placemark(
      [42.875652, 74.622943],
      {
        hintContent: "Prestige Tower",
        balloonContent: "бизнес-центр Prestige Tower",
      },
      {
        iconLayout: "default#image",
        iconImageHref: customMarkerURL.current,
        iconImageSize: [48, 48],
        iconImageOffset: [-24, -48],
      }
    );

    map.geoObjects.add(placemark);
  };

  return (
    <div className="relative w-full h-[450px] sm:h-[600px] md:h-[700px] rounded-[20px] overflow-hidden">
      <div
        id="yandex-map"
        className="w-full h-full"
        style={{
          filter: "grayscale(0.1) brightness(1.05)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "rgba(200, 200, 200, 0.3)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
};

export default YandexMap;
