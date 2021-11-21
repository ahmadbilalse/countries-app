import React from "react";
import { useRouter } from "next/router";
import PageContainer from "../components/PageContainer";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import { numberWithCommas } from "../utils/stringFormat";

export default function CountryPage() {
  const router = useRouter();

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
          className="px-4 py-2 my-4 flex items-center dark:bg-primary rounded-md"
          onClick={handleBack}
        >
          <BiArrowBack className="mr-2" /> Back
        </button>
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center sm:gap-16">
          <div className="relative h-auto max-w-lg my-8">
            <Image
              src="/germany.png"
              width={1200}
              height={900}
              layout="responsive"
              alt="flag"
            />
          </div>
          <div className="grid grid-flow-row items-start gap-4 leading-loose lg:grid-cols-2 lg:grid-rows-auto-2">
            <p className="text-xl font-bold lg:col-span-2 md:text-2xl lg:text-4xl">
              Germany
            </p>
            <div>
              {detailItem("Native name", "Germany")}
              {detailItem("Population", numberWithCommas(30000000))}
              {detailItem("Region", "Europe")}
              {detailItem("Sub Region", "Western Europe")}
              {detailItem("Capital", "Berlin")}
            </div>
            <div>
              {detailItem("Top Level Domain", "deu")}
              {detailItem("Currencies", "Euro")}
              {detailItem("Languages", "Dutch, French, German")}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
