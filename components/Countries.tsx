import React from "react";
import Country from "./Country";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export type Country = {
  id: string;
  name: string;
  region: string;
  population: number;
  capital: string;
  flag: string;
};

export default function Countries(props: any) {
  const input = useSelector((state: RootState) => state.search.input);
  const filter = useSelector((state: RootState) => state.filter.regionFilter);
  const { countries } = props;
  const cards = countries
    .filter((country: Country) => {
      return country.name.toLowerCase().includes(input.toLowerCase());
    })
    .filter((country: Country) => {
      return country.region.includes(filter);
    })
    .map((country: Country) => {
      return <Country country={country} key={country.id} />;
    });

  return cards.length > 0 ? (
    <div className="grid grid-flow-row gap-8 lg:gap-16 grid-cols-fill-60 justify-center min-h-full min-w-full">
      {cards}
    </div>
  ) : (
    <div className="mt-24 text-center">
      <div className="text-6xl sm:text-8xl md:text-9xl">{"¯\\_(ツ)_/¯"}</div>
      <p className="text-xl mt-4 md:mt-16 md:text-4xl">Country not found</p>
    </div>
  );
}
