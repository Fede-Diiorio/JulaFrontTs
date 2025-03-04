import { Header, NavBarLogin, LoginForm, RegisterForm } from "../../components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const LoginContainer = () => {
  return (
    <div>
      <BrowserRouter>
        <Header navbar={<NavBarLogin />} />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
