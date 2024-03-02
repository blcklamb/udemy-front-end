import { fetchSearchResults } from "@/api";
import SubLayout from "@/components/SubLayout";
import { Nara } from "@/type";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React, { useCallback, useEffect, useState } from "react";

interface Params extends ParsedUrlQuery {
  q: string;
}

export default function Search() {
  const router = useRouter();
  const { q } = router.query as Params;

  const [countries, setCountries] = useState<Nara[]>([]);

  const setData = useCallback(async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  }, [q]);

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q, setData]);

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
