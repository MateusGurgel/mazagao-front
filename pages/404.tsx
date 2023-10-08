import { Inter, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function NotFoundPage() {
  return (
    <div
      className={
        "flex flex-col gap-1 justify-center items-center min-h-min-content overflow-hidden text-center bg-background"
      }
    >
      <h1
        className={
          montserrat.className +
          " font-black text-9xl drop-shadow-text text-brand"
        }
      >
        404
      </h1>

      <h2 className={montserrat.className + " font-light text-2xl  text-white"}>
        Página não encontrada
      </h2>
    </div>
  );
}
