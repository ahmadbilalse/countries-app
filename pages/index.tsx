import type { NextPage } from "next";
import Head from "next/head";
import PageContainer from "../components/PageContainer";

const Home: NextPage = () => {
  return (
    <div className="font-Nunito dark:text-onPrimary">
      <Head>
        <title>Countries App</title>
        <meta name="description" content="Countries app, an app that displays countries informations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer />
    </div>
  );
};

export default Home;
