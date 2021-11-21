import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Countries from "../components/Countries";
import PageContainer from "../components/PageContainer";
import SearchForm from "../components/SearchForm";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Countries App</title>
        <meta name="description" content="Countries app, an app that displays countries informations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <main className="p-8 pt-0 sm:px-10 lg:px-20">
        <div className="my-8 lg:my-12 max-w-md">
          <SearchForm />
        </div>
        <Countries />
      </main>
      </PageContainer>
    </div>
  );
};

export default Home;
