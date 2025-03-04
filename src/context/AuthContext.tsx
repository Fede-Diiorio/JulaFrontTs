import { createContext, useState, useEffect, ReactNode } from "react";

// Definir la estructura del contexto
interface AuthContextType {
  token: string | null;
  user: any; // Puedes reemplazar 'any' con una interfaz específica para el usuario
  login: (newToken: string) => void;
  logout: () => void;
  userInfo: (newUser: any) => void; // Reemplaza 'any' con la interfaz específica del usuario
}

// Crear el contexto con un valor por defecto
export const AuthContext = createContext<AuthContextType>({
  token: null,
  user: null,
  login: () => {},
  logout: () => {},
  userInfo: () => {},
});

// Definir las props del proveedor
interface AuthProviderProps {
  children: ReactNode;
}

// Proveedor del contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    sessionStorage.getItem("token")
  );
  const [user, setUser] = useState<any>(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Función para iniciar sesión
  const login = (newToken: string) => {
    sessionStorage.setItem("token", newToken);
    setToken(newToken);
  };

  // Función para guardar información de usuario
  const userInfo = (newUser: any) => {
    sessionStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  // Función para cerrar sesión
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  // Verificar si hay un token al montar el componente
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    const storedUser = sessionStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout, userInfo, user }}>
      {children}
    </AuthContext.Provider>
  );
};
