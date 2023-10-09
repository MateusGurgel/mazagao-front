import Button from "@/components/button";
import Input from "@/components/input";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-min-content bg-background">
      <form className="flex flex-col gap-6 bg-menu w-80 text-center text-white py-16 px-10">
        <Input type="email" placeHolder="E-mail" />
        <Input type="password" placeHolder="Senha" />
        <Button className="mt-8">Login</Button>
      </form>
    </div>
  );
}
