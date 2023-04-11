//React import
import { ReactNode } from "react";

//Contex import
import UserProvider from "./User/gitUserContext";

interface ProviderProps {
  children: ReactNode;
}

export function Contexts({ children }: ProviderProps) {
  return <UserProvider>{children}</UserProvider>;
}
