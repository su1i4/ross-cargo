"use client";

import React, { useEffect, useRef, useState } from "react";

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
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const customMarkerURL = "data:image/svg+xml;base64," +
    btoa(`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0C14.6 0 7 7.6 7 17C7 29.8 24 48 24 48C24 48 41 29.8 41 17C41 7.6 33.4 0 24 0ZM24 23C20.7 23 18 20.3 18 17C18 13.7 20.7 11 24 11C27.3 11 30 13.7 30 17C30 20.3 27.3 23 24 23Z" fill="#B30000"/>
      </svg>
    `);

  const locations = [
    {
      coordinates: [42.943066, 74.620625],
      hint: "Кожевенная улица, 74Б",
      balloon: "Кожевенная улица, 74Б"
    },
    {
      coordinates: [42.875408, 74.685079],
      hint: "Микрорайон Аламедин-1, 50/1",
      balloon: "Микрорайон Аламедин-1, 50/1"
    },
    {
      coordinates: [42.870063, 74.638062],
      hint: "Улица Менделеева, 132",
      balloon: "Улица Менделеева, 132"
    }
  ];

  console.log(mapLoaded);

  const loadYandexMapsScript = () => {
    return new Promise<void>((resolve, reject) => {
      if (window.ymaps) {
        setMapLoaded(true);
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=ef84f2a7-333d-4b33-b3d5-5263cb19fb71&lang=ru_RU";
      script.type = "text/javascript";
      script.async = true;
      
      script.onload = () => {
        setMapLoaded(true);
        resolve();
      };
      
      script.onerror = (error) => {
        console.error("Failed to load Yandex Maps script:", error);
        reject(error);
      };
      
      document.head.appendChild(script);
    });
  };

  const initMap = () => {
    if (!window.ymaps || !mapRef.current) return;

    window.ymaps.ready(() => {
      try {
        const map = new window.ymaps.Map(mapRef.current, {
          center: [42.875652, 74.622943],
          zoom: 12,
          controls: []
        });

        locations.forEach(location => {
          const placemark = new window.ymaps.Placemark(
            location.coordinates,
            {
              hintContent: location.hint,
              balloonContent: location.balloon
            },
            {
              iconLayout: "default#image",
              iconImageHref: customMarkerURL,
              iconImageSize: [48, 48],
              iconImageOffset: [-24, -48]
            }
          );
          
          map.geoObjects.add(placemark);
        });
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    });
  };

  useEffect(() => {
    let isMounted = true;
    
    const setupMap = async () => {
      try {
        await loadYandexMapsScript();
        if (isMounted) {
          initMap();
        }
      } catch (error) {
        console.error("Error setting up map:", error);
      }
    };
    
    setupMap();
    
    return () => {
      isMounted = false;
    };
  }, [initMap]);

  return (
    <div className="relative w-full h-[450px] sm:h-[600px] md:h-[700px] rounded-[20px] overflow-hidden">
      <div
        ref={mapRef}
        id="yandex-map"
        className="w-full h-full"
        style={{
          filter: "grayscale(0.1) brightness(1.05)"
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "rgba(200, 200, 200, 0.3)",
          mixBlendMode: "overlay"
        }}
      />
    </div>
  );
};

export default YandexMap;