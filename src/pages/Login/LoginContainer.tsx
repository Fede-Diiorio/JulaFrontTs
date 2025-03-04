import { LoginForm, RegisterForm, FormLayout } from "../../components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const LoginContainer = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FormLayout
                form={<LoginForm />}
                title="Bienvenido"
                legend="Oficina Virtual del CIM - Departamento de laboratorios remotos"
              />
            }
          />
          <Route
            path="/login"
            element={
              <FormLayout
                form={<LoginForm />}
                title="Bienvenido"
                legend="Oficina Virtual del CIM - Departamento de laboratorios remotos"
              />
            }
          />
          <Route
            path="/register"
            element={
              <FormLayout
                form={<RegisterForm />}
                title="Registro"
                legend="Ingrese los datos para dar de alta su usuario"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
