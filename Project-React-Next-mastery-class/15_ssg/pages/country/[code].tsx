import SubLayout from "@/components/SubLayout";
import { GetServerSideProps } from "next";
import { fetchCountry } from "@/api";
import { NaraSearchByCode } from "@/type";
import { ParsedUrlQuery } from "querystring";

interface CountryProps {
  country: NaraSearchByCode;
}
export default function Country({ country }: CountryProps) {
  if (!country) {
    return <div>존재하지 않는 국가입니다.</div>;
  }
  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: "ABW" } }, { params: { code: "KOR" } }],
    fallback: "blocking",
    // "blocking": paths에 없는 걸 요청하면 server에서 데이터 받아온 뒤 렌더링 완료
    // false: paths에 없는 걸 요청하면 404,
    // true: paths에 없는 걸 요청하면 일단 router.isFallback의 화면 보여준 뒤 server에서 받아오면 그때 반영 ,
  };
};

interface Params extends ParsedUrlQuery {
  code: string;
}
export const getStaticProps: GetServerSideProps = async (context) => {
  const { code } = context.params as Params;

  let country = null;

  if (code) {
    country = await fetchCountry(code);
  }

  return { props: { country } };
};
