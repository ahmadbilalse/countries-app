import React from "react";
import Card from "./Card";
import SearchForm from "./SearchForm";
import Header from "./Header";

export default function PageContainer() {
  return (
    <div className="min-h-screen dark:bg-background">
      <Header />
      <main className="p-8 pt-0 sm:px-10 lg:px-20">
        <div className="my-8 lg:my-12 max-w-md">
          <SearchForm />
        </div>
        <div className="grid grid-flow-row gap-8 lg:gap-16 grid-cols-fill-60 justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
