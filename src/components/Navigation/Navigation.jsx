import { useState } from "react";

import {
  NavMain,
  NavUl,
  ButtonBurger,
} from "../../components/Navigation/NAvigation.styled.jsx";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const data = [
  {
    label: "ГЛАВНАЯ",
  },
  {
    label: "ГАЛЕРЕЯ",
  },

  {
    label: "ПРОЕКТЫ",
  },
  {
    label: "СЕРТИФИКАТЫ",
  },
  {
    label: "КОНТАКТЫ",
  },
];

export const Navigation = () => {
  const [toogleIcon, setToogleIcon] = useState(false);

  const handleToogleIcon = () => {
    setToogleIcon(!toogleIcon);
  };
  return (
    <NavMain>
      <NavUl className={`${toogleIcon ? "active" : ""}`}>
        {data.map((item, key) => (
          <li key={key}>
            <a>{item.label}</a>
          </li>
        ))}
      </NavUl>
      <ButtonBurger onClick={handleToogleIcon}>
        {toogleIcon ? <CgClose size={40} /> : <GiHamburgerMenu size={40} />}
      </ButtonBurger>
    </NavMain>
  );
};
