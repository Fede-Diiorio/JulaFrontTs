import { FlexContainerRow } from "../../styled_components";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

export const NavBarLogin = () => {
  const navigate = useNavigate();
  const toLogin = () => navigate("/login");
  const toRegister = () => navigate("/register");

  return (
    <div>
      <FlexContainerRow>
        <Button label={"Ingresar"} parentMethod={toLogin} />
        <Button label={"Registrarse"} parentMethod={toRegister} />
      </FlexContainerRow>
    </div>
  );
};
