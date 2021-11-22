import React from "react";
import Header from "./Header";

export default function PageContainer(props: any) {
  return (
    <div className="min-h-screen bg-light-background dark:bg-background">
      <Header />
      {props.children}
    </div>
  );
}
