import classes from "./Header.module.scss";
import { Container } from "../../styled_components";

export const Header = () => {
  const name = "Nombre";

  return (
    <header className={classes.header}>
      <Container className={classes.textAlign}>
        <div className={classes.infoBox}>
          <h4>¡Hola, {name}!</h4>
          <p>Bienvenido a la web de Laboratorios Remotos</p>
        </div>
      </Container>
    </header>
  );
};
