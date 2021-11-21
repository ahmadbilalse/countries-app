import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Country } from "./Countries";
import { numberWithCommas } from "../utils/stringFormat";

export default function Card(props: any) {
  const country: Country = props.country;

  return (
    <div className="rounded-xl dark:bg-primary overflow-hidden">
      <Link href={`/${encodeURIComponent(country.name)}`} passHref>
        <div>
          <div className="dark:bg-secondary relative w-full h-48">
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
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
