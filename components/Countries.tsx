import { useLazyQuery, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React, { useEffect } from "react";
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { initCountries } from "../features/countrySlice";

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

  const [getCountries, { loading, error, data }] = useLazyQuery(COUNTRIES);
  const input = useSelector((state: RootState) => state.search.input);
  const countries = useSelector((state: RootState) => state.country.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (data) {
      const countries = data.countries.edges.map((node: any) => {
        const country: Country = node.node;
        return country;
      });
      dispatch(initCountries(countries));
    }
  }, [data, dispatch]);

  if (loading || countries) {
    return (
      <div className="grid grid-flow-row gap-8 lg:gap-16 grid-cols-fill-60 justify-center min-h-full min-w-full">
        {loading
          ? Array.from(Array(15)).map((_, index) => {
              return <Country key={index} />;
            })
          : countries
              .filter((country: Country) => {
                return country.name.toLowerCase().includes(input.toLowerCase());
              })
              .map((country: Country) => {
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
