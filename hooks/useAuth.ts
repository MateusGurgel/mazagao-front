import { useRouter } from "next/router";
import { useEffect } from "react";

import Cookies from "js-cookie";
import mazagaoServices from "@/services/mazagaoServices";

export default function useAuth() {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get(mazagaoServices.TokenKey) == null) {
      router.push("/login");
    }
  });
}
