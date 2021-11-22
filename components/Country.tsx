import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Country } from "./Countries";
import { numberWithCommas } from "../utils/stringFormat";

export default function Card(props: any) {
  const country: Country = props.country;

  return (
    <div className="rounded-xl bg-light-primary dark:bg-primary overflow-hidden drop-shadow cursor-pointer">
      <Link href={`/${encodeURIComponent(country.name)}`} passHref>
        <div className="divide-y dark:divide-y-0">
          <div className="bg-light-secondary dark:bg-secondary relative w-full h-48">
            <Image
              src={country?.flag}
              alt="flag"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-8 leading-loose">
            <p className="text-xl font-bold mb-4">{country.name}</p>
            <p>Population: {numberWithCommas(country.population)}</p>
            <p>Region: {country.region ? country.region : '-'}</p>
            <p>Capital: {country.capital ? country.capital : '-'}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
