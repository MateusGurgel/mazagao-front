import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/button";
import Input from "@/components/input";
import * as yup from "yup";
import mazagaoServices from "@/services/mazagaoServices";
import { useState } from "react";
import { useRouter } from "next/router";

interface inputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .required("O email é obrigatório")
      .email("email inválido"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .min(5, "Senha muito curta")
      .max(64, "Senha grande demais"),
  })
  .required();

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<inputs> = async (data) => {
    const response = await mazagaoServices.login(data.email, data.password);

    if (!response) {
      setErrorMessage("Algo de errado aconteceu");
    } else if ("authenticated" in response) {
      router.push("/");
    } else {
      setErrorMessage(response.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-min-content bg-background">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-80 py-16 px-10 text-center bg-menu"
      >
        <Input
          placeHolder="E-mail"
          register={register("email")}
          erroMessage={errors.email?.message}
        />
        <Input
          type="password"
          placeHolder="Senha"
          register={register("password")}
          erroMessage={errors.password?.message}
        />
        {errorMessage && (
          <h1 className="text-warning p-0 m-0">{errorMessage}</h1>
        )}
        <Button className="mt-3">Login</Button>
      </form>
    </div>
  );
}
