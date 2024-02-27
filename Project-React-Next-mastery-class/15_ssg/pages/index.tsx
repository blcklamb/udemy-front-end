import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const code = "KOR";

  const router = useRouter();

  const onClickButton01 = () => {
    router.push("/search");
  };
  const onClickButton02 = () => {
    router.push({ pathname: "/country/[code]", query: { code } });
  };
  const onClickButton03 = () => {
    router.replace("/search");
  };

  return (
    <div>
      Home
      <div>
        <button type="button" onClick={onClickButton03}>
          Search 페이지로 이동
        </button>
      </div>
      <div>
        <Link href={"/search"}>Search Page 이동</Link>
      </div>
      <div>
        <Link href={{ pathname: "/country/[code]", query: { code } }}>
          {code} 페이지로 이동
        </Link>
      </div>
    </div>
  );
}
