import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/button";
import Input from "@/components/input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import mazagaoServices from "@/services/mazagaoServices";
import { useState } from "react";
import { useRouter } from "next/router";
interface inputs {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .required("O email é obrigatório")
      .email("email inválido"),
    username: yup
      .string()
      .required("O username é obrigatório")
      .min(3, "O username é muito curto")
      .max(16, "O username é muito grande"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .min(6, "Senha muito curta")
      .max(64, "Senha grande demais"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não coincidem")
      .required(),
  })
  .required();

export default function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<inputs> = async (data) => {
    const response = await mazagaoServices.register(
      data.email,
      data.password,
      data.username
    );

    if (!response) {
      setErrorMessage("Algo deu errado");
    } else if ("username" in response) {
      setErrorMessage("");
      router.push("/login");
    } else {
      setErrorMessage(response.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-min-content bg-background">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-80 gap-3 py-8 px-10 bg-menu text-center"
      >
        <Input
          placeHolder="E-mail"
          register={register("email")}
          erroMessage={errors.email?.message}
        />

        <Input
          type="username"
          placeHolder="Username (mesmo do mine)"
          register={register("username")}
          erroMessage={errors.username?.message}
        />
        <Input
          type="password"
          placeHolder="Senha"
          register={register("password")}
          erroMessage={errors.password?.message}
        />

        <Input
          type="password"
          placeHolder="Confirme sua senha"
          register={register("confirmPassword")}
          erroMessage={errors.confirmPassword?.message}
        />

        {errorMessage && (
          <h1 className="text-warning p-0 m-0">{errorMessage}</h1>
        )}

        <Button className="mt-4">Register</Button>
      </form>
    </div>
  );
}
