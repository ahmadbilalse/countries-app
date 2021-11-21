import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Country } from "./Countries";

export default function Card(props: any) {
  const country: Country = props.country;

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="rounded-xl dark:bg-primary overflow-hidden">
      {country ? (
        <Link
          href={`/${encodeURIComponent(country.name.toLowerCase())}`}
          passHref
        >
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
      ) : (
        <>
          <div className="animate-pulse dark:bg-secondary relative w-full h-48"></div>
          <div className="p-8 leading-loose animate-pulse">
            <p className="dark:bg-secondary rounded-md text-xl font-bold mb-4">
              &nbsp;
            </p>
            <div className="rounded-md overflow-hidden">
              <p className="dark:bg-secondary ">&nbsp;</p>
              <p className="dark:bg-secondary ">&nbsp;</p>
              <p className="dark:bg-secondary ">&nbsp;</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
