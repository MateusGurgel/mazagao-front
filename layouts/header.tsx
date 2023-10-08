import CustomLink from "@/components/customLink";
import HomeLink from "@/components/homeLink";

export default function Header() {
  return (
    <header className=" h-85 py-5 px-8 bg-header flex items-center justify-between ">
      <HomeLink />
      <div className=" flex gap-6">
        <CustomLink href="/login">Login</CustomLink>
        <CustomLink href="/register">Register</CustomLink>
      </div>
    </header>
  );
}
