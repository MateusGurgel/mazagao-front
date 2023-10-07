import Button from "@/components/button";

export default function Header() {
  return (
    <header className=" h-85 p-5 bg-header flex items-center justify-between ">
      <div>Logo</div>
      <div className=" flex gap-6">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </header>
  );
}
