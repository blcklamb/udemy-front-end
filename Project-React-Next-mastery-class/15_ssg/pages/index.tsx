import { fetchCountries } from "@/api";
import { useEffect } from "react";

interface Country {
  capital: string[];
  code: string;
  commonName: string;
  flagEmoji: string;
  flagImg: string;
  population: number;
  region: string;
}

export default function Home(props: { countries: Country[] }) {
  // client에서만 실행시키고 싶은 코드
  useEffect(() => {
    console.log("HOME MOUNT");
  });
  return (
    <div>
      {props.countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수

  // API 호출
  const countries = await fetchCountries();
  console.log("=====call server side=====");
  return {
    props: {
      countries,
    },
  };
};
