import { ReactNode, useContext } from "react";
import classes from "./Sidebar.module.scss";
import logo from "../../assets/logo.jpg";
import { Field } from "./components";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { AuthContext } from "../../context";
import { FlexContainerColumn } from "../../styled_components";

interface Props {
  navbar: ReactNode;
}

export const Sidebar = ({ navbar }: Props) => {
  const { logout } = useContext(AuthContext);

  return (
    <section className={classes.flexBox}>
      <div className={classes.background}>
        <FlexContainerColumn>
          <img src={logo} alt="Logo de la facultad" className={classes.logo} />
          {navbar}
        </FlexContainerColumn>

        <Field
          icon={<FaArrowRightToBracket />}
          label="Cerrar Sesión"
          parentMethod={logout}
        />
      </div>
    </section>
  );
};
