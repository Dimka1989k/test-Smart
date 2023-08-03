import { useState } from "react";
import {
  SectionContacts,
  HaaderContacts,
  Container,
  Background,
  Input,
  ContainerForm,
  Textarea,
  Label,
  Paragraph,
  Arrow,
  ButtonBlack,
  ContainerButton,
} from "../../components/Contacts/Contacts.styled.jsx";

import ArrowLight from "../../images/Projects/arrowLight.svg";
import CallImage from "../../images/Contacts/CallImage.png";
import CallImage2x from "../../images/Contacts/CallImage@2x.png";

export const Contacts = () => {
  const [errorSymbol, setErrorSymbol] = useState("*");
  const handleClick = (event) => {
    event.preventDefault();
    setErrorSymbol("*");
  };

  return (
    <SectionContacts>
      <HaaderContacts>Связаться с нами</HaaderContacts>
      <Container>
        <ContainerForm>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onClick={handleClick}
          >
            <Label>
              <Input type="text" placeholder="Имя" />
            </Label>
            <Label>
              <Input type="number" placeholder="Номер телефона" />
              <span
                style={{
                  color: "#C30000",
                  fontSize: "14px",
                  position: "absolute",
                  left: "140px",
                  top: "14px",
                }}
              >
                {errorSymbol}
              </span>
            </Label>
            <Label>
              <Input type="text" placeholder="E-mail" />
              <span
                style={{
                  color: "#C30000",
                  fontSize: "14px",
                  position: "absolute",
                  left: "65px",
                  top: "14px",
                }}
              >
                {errorSymbol}
              </span>
            </Label>
            <Label>
              <Input type="text" placeholder="Интересующий товар/услуга" />
            </Label>
            <Label>
              <Textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Сообщение"
              ></Textarea>
              <span
                style={{
                  color: "#C30000",
                  fontSize: "14px",
                  position: "absolute",
                  left: "94px",
                  top: "14px",
                }}
              >
                {errorSymbol}
              </span>
            </Label>
            <Paragraph>
              Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
            </Paragraph>
            <ContainerButton>
              <ButtonBlack>
                ОТПРАВИТЬ <Arrow src={ArrowLight} alt="ArrowLight" />
              </ButtonBlack>
            </ContainerButton>
          </form>
        </ContainerForm>
        <Background>
          <picture>
            <source
              srcSet={`${CallImage} 1x, ${CallImage2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${CallImage} 1x, ${CallImage2x} 2x`}
              media="(max-width: 1279px)"
            />
            <source
              srcSet={`${CallImage} 1x, ${CallImage2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${CallImage} 1x, ${CallImage2x} 2x`}
              media="(min-width: 1440px)"
            />
            <img src={CallImage} alt="CallImagen" />
          </picture>
        </Background>
      </Container>
    </SectionContacts>
  );
};
