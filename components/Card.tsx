import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="rounded-xl dark:bg-primary overflow-hidden">
      <div className="relative h-48">
        <Image src="/germany.png" alt="flag" layout="fill" objectFit="cover" />
      </div>
      <div className="p-8 leading-loose">
        <p className="text-xl font-bold mb-4">Germany</p>
        <p>Population: 81,770,000</p>
        <p>Region: Europe</p>
        <p>Capital: Berlin</p>
      </div>
    </div>
  );
}
