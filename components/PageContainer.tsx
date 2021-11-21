import React from "react";
import SearchForm from "./SearchForm";
import Header from "./Header";
import Countries from "./Countries";

export default function PageContainer(props: any) {
  return (
    <div className="min-h-screen dark:bg-background">
      <Header />
      {props.children}
    </div>
  );
}
