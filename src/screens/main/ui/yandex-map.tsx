'use client'

import React, { useEffect, useRef } from "react";

// Define a type for the ymaps global
declare global {
  interface Window {
    ymaps: any;
  }
}

const YandexMap = () => {
  // Create a ref to store the script element for proper cleanup
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  
  // URL for custom marker
  const customMarkerURL = "data:image/svg+xml;base64," + btoa(`
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 0C14.6 0 7 7.6 7 17C7 29.8 24 48 24 48C24 48 41 29.8 41 17C41 7.6 33.4 0 24 0ZM24 23C20.7 23 18 20.3 18 17C18 13.7 20.7 11 24 11C27.3 11 30 13.7 30 17C30 20.3 27.3 23 24 23Z" fill="#B30000"/>
    </svg>
  `);

  useEffect(() => {
    // Load the Yandex Maps script dynamically
    const yandexScript = document.createElement("script");
    yandexScript.src = 
      "https://api-maps.yandex.ru/2.1/?apikey=ef84f2a7-333d-4b33-b3d5-5263cb19fb71&lang=ru_RU";
    yandexScript.type = "text/javascript";
    
    // Store the script reference
    scriptRef.current = yandexScript;

    // Initialize the map when the script is loaded
    const initMap = () => {
      const myMap = new window.ymaps.Map("yandex-map", {
        center: [42.875652, 74.622943],
        zoom: 16,
        controls: [],
      });

      const myPlacemark = new window.ymaps.Placemark(
        [42.875652, 74.622943],
        {
          hintContent: "Prestige Tower",
          balloonContent: "бизнес-центр Prestige Tower",
        },
        {
          iconLayout: "default#image",
          iconImageHref: customMarkerURL,
          iconImageSize: [48, 48],
          iconImageOffset: [-24, -48],
        }
      );

      myMap.geoObjects.add(myPlacemark);
    };

    yandexScript.onload = () => {
      window.ymaps.ready(initMap);
    };

    document.body.appendChild(yandexScript);

    // Cleanup function
    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-[700px] sm:h-[600px] xs:h-[450px] relative">
      <div
        id="yandex-map"
        style={{
          width: "100%",
          height: "100%",
          filter: "grayscale(0.1) brightness(1.05)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(200, 200, 200, 0.3)",
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default YandexMap;