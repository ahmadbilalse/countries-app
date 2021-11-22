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

  return (
    <div className="grid grid-flow-row gap-8 lg:gap-16 grid-cols-fill-60 justify-center min-h-full min-w-full">
      {countries
        .filter((country: Country) => {
          return country.name.toLowerCase().includes(input.toLowerCase());
        })
        .filter((country: Country) => {
          return country.region.includes(filter);
        })
        .map((country: Country) => {
          return <Country country={country} key={country.id} />;
        })}
    </div>
  );
}
