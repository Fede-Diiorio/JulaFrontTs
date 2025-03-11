import { Field } from "../../components";
import classes from "./StudentNavigation.module.scss";
import {
  FaCalendarDays,
  FaTableCellsLarge,
  FaUserGroup,
} from "react-icons/fa6";

export const StudentNavigation = () => {
  const toPrincipal = () => console.log("Prueba de navegación");

  return (
    <nav>
      <ul className={classes.ul}>
        <li>
          <Field
            icon={<FaTableCellsLarge />}
            label="Página principal"
            parentMethod={toPrincipal}
          />
        </li>

        <li>
          <Field
            icon={<FaCalendarDays />}
            label="Historial de turnos"
            parentMethod={toPrincipal}
          />
        </li>

        <li>
          <Field
            icon={<FaUserGroup />}
            label="Grabaciones"
            parentMethod={toPrincipal}
          />
        </li>
      </ul>
    </nav>
  );
};
