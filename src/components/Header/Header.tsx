import { ReactNode } from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/react.svg";
import { Container, FlexContainerRow } from "../../styled_components";

interface Props {
  navbar: ReactNode;
}

export const Header = ({ navbar }: Props) => {
  return (
    <header className={classes.header}>
      <Container>
        <FlexContainerRow>
          <img
            src={logo}
            alt="Imagen del logo de la facultad"
            className={classes.logo}
          />
          {navbar}
        </FlexContainerRow>
      </Container>
    </header>
  );
};
