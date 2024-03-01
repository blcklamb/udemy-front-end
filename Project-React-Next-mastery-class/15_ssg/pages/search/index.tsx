import { fetchSearchResults } from "@/api";
import SubLayout from "@/components/SubLayout";
import { Nara } from "@/type";
import { GetServerSideProps } from "next";
import React from "react";

interface SearchProp {
  countries: Nara[];
}
export default function Search({ countries }: SearchProp) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>
          {country.flagEmoji} {country.commonName}
        </div>
      ))}
    </div>
  );
}

Search.getLayout = function getLayout(page: React.ReactElement) {
  return <SubLayout>{page}</SubLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { q } = context.query;

  let countries = [];

  if (typeof q === "string" && q) {
    countries = await fetchSearchResults(q);
  }

  return {
    props: { countries },
  };
};
