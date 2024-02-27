import "@/styles/globals.css";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { NextPage } from "next";

// interface CustomAppProps extends Omit<AppProps, "Component"> {
//   Component: AppProps["Component"] & { Layout: React.ComponentType };
// }

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const EmptyLayout = ({ props: { children } }: React.ReactElement) => (
    <>{children}</>
  );
  const SubLayout = Component.getLayout ?? EmptyLayout;
  const getLayout = Component.getLayout || ((page) => page);

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}
