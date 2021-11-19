import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import Country from "./Country";

export type Country = {
  id: string;
  name: string;
  region: string;
  population: number;
  capital: string;
  flag: string;
};

export default function Countries() {
  const COUNTRIES = gql`
    query GetCountries {
      countries {
        edges {
          node {
            id
            name
            population
            region
            capital
            flag
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(COUNTRIES);

  if (loading || data) {
    return (
      <div className="grid grid-flow-row gap-8 lg:gap-16 grid-cols-fill-60 justify-center min-h-full min-w-full">
        {loading
          ? Array.from(Array(15)).map((_, index) => {
              return <Country key={index} />;
            })
          : data.countries.edges.map((node: any) => {
              const country: Country = node.node;
              return <Country country={country} key={country.id} />;
            })}
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-xl">Something went wrong...</div>;
  }

  return null;
}
