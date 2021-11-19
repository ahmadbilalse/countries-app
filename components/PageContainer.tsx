import React from "react";
import SearchForm from "./SearchForm";
import Header from "./Header";
import Countries from "./Countries";

export default function PageContainer() {
  return (
    <div className="min-h-screen dark:bg-background">
      <Header />
      <main className="p-8 pt-0 sm:px-10 lg:px-20">
        <div className="my-8 lg:my-12 max-w-md">
          <SearchForm />
        </div>
        <Countries />
      </main>
    </div>
  );
}
