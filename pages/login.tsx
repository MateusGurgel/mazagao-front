import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/button";
import Input from "@/components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface inputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(64),
  })
  .required();

export default function Login() {
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
        className="flex flex-col gap-6 bg-menu w-80 text-white py-16 px-10"
      >
        <Input
          placeHolder="E-mail"
          type="email"
          register={register("email")}
          erroMessage={errors.email?.message}
        />

        <Input
          type="password"
          placeHolder="Senha"
          register={register("password")}
          erroMessage={errors.password?.message}
        />
        <Button className="mt-8">Login</Button>
      </form>
    </div>
  );
}
