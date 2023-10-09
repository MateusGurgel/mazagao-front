import Button from "@/components/button";
import Input from "@/components/input";

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-min-content bg-background">
      <form className="flex flex-col gap-3 bg-menu w-80 text-center text-white py-8 px-10">
        <Input type="email" placeHolder="Email" />
        <Input placeHolder="Username" />
        <Input type="password" placeHolder="Senha" />
        <Input type="password" placeHolder="Confirme a senha" />
        <Button className="mt-4">Register</Button>
      </form>
    </div>
  );
}
