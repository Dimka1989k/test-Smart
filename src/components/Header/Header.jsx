import {
  ContainerHeader,
  ContainerLogo,
  LogoType1,
  LogoType2,
} from "./Header.styled.jsx";

import Logo1 from "../../images/Logo1.svg";
import Logo2 from "../../images/Logo2.svg";
import { Navigation } from "../Navigation/Navigation.jsx";

const Header = () => {
  return (
    <>
      <ContainerHeader>
        <ContainerLogo>
          <LogoType1 src={Logo1} />
          <LogoType2 src={Logo2} />
        </ContainerLogo>
        <Navigation />
      </ContainerHeader>
    </>
  );
};

export default Header;
