import Layout from "@/layouts/layout";
import { Inter } from "next/font/google";
import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <div className="p-9">
      <p>hello world</p>
      <p>hello world</p>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
