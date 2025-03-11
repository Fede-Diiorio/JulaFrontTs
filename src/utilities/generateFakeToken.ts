import { useEffect } from "react";

export const generateFakeToken = () => {
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");

    if (!storedToken) {
      // Simula un token generado por el backend
      const fakeToken = "fake-jwt-token-12345";
      sessionStorage.setItem("token", fakeToken);
    }
  }, []);
};
