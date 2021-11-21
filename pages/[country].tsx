import React from "react";
import { useRouter } from "next/router";
import PageContainer from "../components/PageContainer";
import { BiArrowBack } from "react-icons/bi";

export default function CountryPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  }

  return (
    <PageContainer>
      <div className="p-4">
        <button className="px-4 py-2 flex items-center dark:bg-primary rounded-md" onClick={handleBack}>
          <BiArrowBack className="mr-2" /> Back
        </button>
      </div>
    </PageContainer>
  );
}
