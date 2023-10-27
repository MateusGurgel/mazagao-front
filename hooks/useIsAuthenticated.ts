import mazagaoServices from "@/services/mazagaoServices";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export function useIsAuthenticated() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  const cookie = Cookies.get(mazagaoServices.TokenKey);

  useEffect(() => {
    function getAuthentication() {
      setIsAuthenticated(cookie != undefined);
    }

    getAuthentication();
  }, [cookie]);

  return isAuthenticated;
}
