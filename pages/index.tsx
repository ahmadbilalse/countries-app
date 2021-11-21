import { gql } from "@apollo/client";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import Countries, { Country } from "../components/Countries";
import PageContainer from "../components/PageContainer";
import SearchForm from "../components/SearchForm";
import client from "../utils/apolloClient";

const Home: NextPage = (props: any) => {
  return (
    <div className="">
      <Head>
        <title>Countries App</title>
        <meta
          name="description"
          content="Countries app, an app that displays countries informations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <main className="p-8 pt-0 sm:px-10 lg:px-20">
          <div className="my-8 lg:my-12 max-w-md">
            <SearchForm />
          </div>
          <Countries {...props} />
        </main>
      </PageContainer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const transformCountryPayload = (rawData: any) => {
    const countries = rawData.countries.edges.map((node: any) => {
      const country: Country = node.node;
      return country;
    });

    return countries;
  };

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

  const { data } = await client.query({
    query: COUNTRIES,
  });

  const countries = transformCountryPayload(data);

  return { props: { countries } };
};
