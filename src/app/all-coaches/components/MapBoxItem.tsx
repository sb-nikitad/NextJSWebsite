"use client";

import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// импортируем стили mapbox-gl чтобы карта отображалась коррекно

export const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYW5kcmlrbGs3NyIsImEiOiJjbHA2eDJybmcwcHF5MnBtcmtpdmg1M25zIn0.Cj8ZcUVHkpgN3mR5by_uZA";

export function MapboxMap() {
  // здесь будет хранится инстанс карты после инициализации
  const [map, setMap] = React.useState<mapboxgl.Map>();

  // React ref для хранения ссылки на DOM ноду который будет
  // использоваться как обязательный параметр `container`
  // при инициализации карты `mapbox-gl`
  // по-умолчанию будет содержать `null`
  const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;
    // если объект window не найден,
    // то есть компонент рендерится на сервере
    // или dom node не инициализирована, то ничего не делаем
    if (typeof window === "undefined" || node === null) return;

    // иначе создаем инстанс карты передавая ему ссылку на DOM ноду
    // а также accessToken для mapbox
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: MAPBOX_ACCESS_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });

    // и сохраняем созданный объект карты в React.useState
    setMap(mapboxMap);

    // чтобы избежать утечки памяти удаляем инстанс карты
    // когда компонент будет демонтирован
    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} className="w-[1000px] h-[500px]" />;
}

export default MapboxMap;
