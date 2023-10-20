import {
  SectionAbout,
  Background,
  BackgroundImage,
  Container,
  ContainerAbout,
  ButtonRead,
  Arrow,
  ContainerButton,
} from "./AboutCompay.styled.jsx";

import BigHouse from "../../images/AboutCompany/BigHouse.png";
import BigHouse2x from "../../images/AboutCompany/BigHouse@2x.png";
import HouseImage from "../../images/AboutCompany/HouseImage.png";
import HouseImage2x from "../../images/AboutCompany/HouseImage@2x.png";
import InHouse from "../../images/AboutCompany/InHouse.png";
import InHouse2x from "../../images/AboutCompany/InHouse@2x.png";

import ArrowRight from "../../images/Main/ArrowRight.svg";

export const AboutCompay = () => {
  return (
    <SectionAbout>
      <Container>
        <Background>
          <picture>
            <source
              srcSet={`${HouseImage} 1x, ${HouseImage2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${HouseImage} 1x, ${HouseImage2x} 2x`}
              media="(max-width: 1279px)"
            />
            <source
              srcSet={`${HouseImage} 1x, ${HouseImage2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${HouseImage} 1x, ${HouseImage2x} 2x`}
              media="(min-width: 1440px)"
            />
            <img src={HouseImage} alt="house" />
          </picture>
          <Background>
            <picture>
              <source
                srcSet={`${InHouse} 1x, ${InHouse2x} 2x`}
                media="(max-width: 767px)"
              />
              <source
                srcSet={`${InHouse} 1x, ${InHouse2x} 2x`}
                media="(max-width: 1279px)"
              />
              <source
                srcSet={`${InHouse} 1x, ${InHouse2x} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${InHouse} 1x, ${InHouse2x} 2x`}
                media="(min-width: 1440px)"
              />
              <img src={InHouse} alt="InHouse" />
            </picture>
          </Background>
        </Background>
        <BackgroundImage>
          <picture>
            <source
              srcSet={`${BigHouse} 1x, ${BigHouse2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${BigHouse} 1x, ${BigHouse2x} 2x`}
              media="(max-width: 1279px)"
            />
            <source
              srcSet={`${BigHouse} 1x, ${BigHouse2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${BigHouse} 1x, ${BigHouse2x} 2x`}
              media="(min-width: 1440px)"
            />
            <img src={BigHouse} alt="Bighouse" />
          </picture>
        </BackgroundImage>
        <ContainerAbout>
          <h2>About company</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ContainerButton>
            <ButtonRead>
              Read
              <Arrow src={ArrowRight} alt="ArrowRight" />
            </ButtonRead>
          </ContainerButton>
        </ContainerAbout>
      </Container>
    </SectionAbout>
  );
};
