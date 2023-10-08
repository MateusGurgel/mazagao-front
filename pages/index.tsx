import { Inter, Montserrat } from "next/font/google";
import CustomLink from "@/components/customLink";
import type { NextPageWithLayout } from "./_app";

const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  function getTitle() {
    const attributes =
      inter.className + " font-black text-9xl drop-shadow-2xl text-white";

    return <h1 className={attributes}>MAZAGÃO</h1>;
  }

  function getSubtitle() {
    return (
      <h2 className={montserrat.className + " font-light text-2xl text-white"}>
        Onde o filho chora e a mãe não vê
      </h2>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-min-content bg-gray-700 ">
      <div className="flex flex-col items-center text-center gap-6">
        <div>
          {getTitle()}
          {getSubtitle()}
        </div>

        <CustomLink href="/register">Jogue Grátis</CustomLink>
      </div>
    </div>
  );
};

//Home.getLayout = function getLayout(page: ReactElement) {
//  return <Layout>{page}</Layout>;
//};

export default Home;
