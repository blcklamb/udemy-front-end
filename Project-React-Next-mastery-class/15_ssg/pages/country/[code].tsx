import SubLayout from "@/components/SubLayout";
import { GetServerSideProps } from "next";
import { fetchCountry } from "@/api";
import { NaraSearchByCode } from "@/type";
import { ParsedUrlQuery } from "querystring";

interface CountryProps {
  country: NaraSearchByCode;
}
export default function Country({ country }: CountryProps) {
  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

interface Params extends ParsedUrlQuery {
  code: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { code } = context.params as Params;

  let country = null;

  if (code) {
    country = await fetchCountry(code);
  }

  return { props: { country } };
};
