import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/button";
import Input from "@/components/input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<inputs> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center min-h-min-content bg-background">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-80 gap-3 py-8 px-10 bg-menu"
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

        <Button className="mt-4">Register</Button>
      </form>
    </div>
  );
}
