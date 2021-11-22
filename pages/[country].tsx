import React from "react";
import { useRouter } from "next/router";
import PageContainer from "../components/PageContainer";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import { numberWithCommas } from "../utils/stringFormat";
import { gql } from "@apollo/client";
import client from "../utils/apolloClient";
import { GetStaticProps } from "next";

type CountryDetail = {
  flag: string;
  capital: string;
  currencies: string[];
  id: string;
  languages: string[];
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
};

export default function CountryPage(props: any) {
  const router = useRouter();
  const { countryDetail }: { countryDetail: CountryDetail } = props;

  const handleBack = () => {
    router.back();
  };

  const detailItem = (title: string, content: string) => {
    return (
      <p>
        <span className="font-semibold">{title}</span>: {content}
      </p>
    );
  };

  return (
    <PageContainer>
      <div className="p-8 md:p-20">
        <button
          className="px-4 py-2 my-4 flex items-center bg-light-primary dark:bg-primary rounded-md drop-shadow"
          onClick={handleBack}
        >
          <BiArrowBack className="mr-2" /> Back
        </button>
        {countryDetail ? (
          <div className="grid gap-8 sm:grid-cols-2 sm:items-center sm:gap-16">
            <div className="relative h-auto max-w-lg my-8">
              <Image
                src={countryDetail.flag}
                width={1200}
                height={900}
                layout="responsive"
                alt="flag"
              />
            </div>
            <div className="grid grid-flow-row items-start gap-4 leading-loose lg:grid-cols-2 lg:grid-rows-auto-2">
              <p className="text-xl font-bold lg:col-span-2 md:text-2xl lg:text-4xl">
                {countryDetail.name}
              </p>
              <div>
                {detailItem("Native name", countryDetail.nativeName)}
                {detailItem(
                  "Population",
                  numberWithCommas(countryDetail.population)
                )}
                {detailItem("Region", countryDetail.region)}
                {detailItem("Sub Region", countryDetail.subregion)}
                {detailItem("Capital", countryDetail.capital)}
              </div>
              <div>
                {detailItem(
                  "Top Level Domain",
                  countryDetail.topLevelDomain.join(", ")
                )}
                {detailItem("Currencies", countryDetail.currencies.join(" "))}
                {detailItem("Languages", countryDetail.languages.join(" "))}
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </PageContainer>
  );
}

export async function getStaticPaths() {
  const COUNTRY_NAMES = gql`
    query GetCountryNames {
      countries {
        edges {
          node {
            name
          }
        }
      }
    }
  `;
  const { data } = await client.query({
    query: COUNTRY_NAMES,
  });

  const countryNames = data.countries.edges.map((item: any) => item.node.name);

  const paths = countryNames.map((item: any) => ({
    params: { country: item },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const transformCountryPayload = (rawData: any) => {
    const data = rawData.countries.edges[0].node;
    const currencies = data.currencies.edges.map((item: any) => {
      return item.node.name;
    });
    const languages = data.currencies.edges.map((item: any) => {
      return item.node.name;
    });

    return {
      ...data,
      currencies,
      languages,
    };
  };

  const COUNTRY_DETAIL = gql`
    query GetCountryByName($name: String!) {
      countries(name: $name) {
        edges {
          node {
            id
            flag
            name
            nativeName
            population
            region
            subregion
            capital
            topLevelDomain
            currencies {
              edges {
                node {
                  name
                }
              }
            }
            languages {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: COUNTRY_DETAIL,
    variables: {
      name: params?.country,
    },
  });

  const countryDetail = transformCountryPayload(data);

  return { props: { countryDetail } };
};
