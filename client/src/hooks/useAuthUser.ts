import { useMemo } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export type TokenPayload = {
  id: string;
  username: string;
  email: string;
  role: string;
  isVerified: boolean;
  exp: number;
  iat: number;
};

export const decodedJwtToken = () => {
  const token = Cookies.get("token");
  if (!token) return null;

  try {
    return jwtDecode<TokenPayload>(token);
  } catch {
    return null;
  }
};

export function useAuthUser(): TokenPayload | null {
  return useMemo(() => decodedJwtToken(), []);
}
