import "./App.css";
import { LoginContainer, Dashboard } from "./pages";
import { AuthContext, AuthProvider } from "./context";
import { useContext } from "react";
import { Button } from "./components";

function AppContent() {
  const { token } = useContext(AuthContext);
  return token ? <Dashboard /> : <LoginContainer />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
      <Button label="Test" parentMethod={() => console.log("boton")} />
    </AuthProvider>
  );
}

export default App;
