import SubLayout from "@/components/SubLayout";
import React from "react";

export default function Search() {
  return <div>Search Page</div>;
}

Search.getLayout = function getLayout(page: React.ReactElement) {
  return <SubLayout>{page}</SubLayout>;
};
