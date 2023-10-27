import Button from "@/components/button";
import CustomLink from "@/components/customLink";
import HomeLink from "@/components/homeLink";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import mazagaoServices from "@/services/mazagaoServices";
import { useRouter } from "next/router";

export default function Header() {
  const isAthenticated = useIsAuthenticated();
  const router = useRouter();

  function logout() {
    mazagaoServices.logout();
    router.push("/");
  }

  return (
    <header className=" h-85 py-5 px-8 bg-header flex items-center justify-between ">
      <HomeLink />
      {isAthenticated != undefined && (
        <div className=" flex gap-6">
          {isAthenticated && (
            <CustomLink href="/dashboard">Dashboard</CustomLink>
          )}
          {isAthenticated && <Button onClick={() => logout()}>Logout</Button>}
          {!isAthenticated && <CustomLink href="/login">Login</CustomLink>}
          {!isAthenticated && (
            <CustomLink href="/register">Register</CustomLink>
          )}
        </div>
      )}
    </header>
  );
}
