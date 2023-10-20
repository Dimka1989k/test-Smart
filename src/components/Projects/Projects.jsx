import {
  SectionProjects,
  HaaderProjects,
  Container,
  //   ContainerImage,
  HeaderImage,
  ButtonArrow,
  Arrow,
  Background,
  ContainerImages,
  ButtonBlack,
  ContainerButton,
  BackgroundContainer,
  Picture,
} from "../../components/Projects/Projects.styled.jsx";

import ArrowLight from "../../images/Projects/arrowLight.svg";
import Bar from "../../images/Projects/Bar.png";
import Bar2x from "../../images/Projects/Bar@2x.png";
import HouseSun from "../../images/Projects/SunHouse.png";
import HouseSun2x from "../../images/Projects/SunHouse@2x.png";
import Stadium from "../../images/Projects/Stadium.png";
import Stadium2x from "../../images/Projects/Stadium@2x.png";
import Appartment from "../../images/Projects/Appartment.png";
import Appartment2x from "../../images/Projects/Appartment@2x.png";
import StadiumGreate from "../../images/Projects/StadiumGreate.png";
import StadiumGreate2x from "../../images/Projects/StadiumGreate@2x.png";

export const Projects = () => {
  return (
    <SectionProjects>
      <HaaderProjects>Our projects</HaaderProjects>
      <Container>
        <BackgroundContainer>
          <Picture>
            <source
              srcSet={`${Bar} 1x, ${Bar2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${Bar} 1x, ${Bar2x} 2x`}
              media="(max-width: 1279px)"
            />
            <source
              srcSet={`${Bar} 1x, ${Bar2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Bar} 1x, ${Bar2x} 2x`}
              media="(min-width: 1440px)"
            />
            <img src={HouseSun} alt="HouseSun" />
          </Picture>
          <HeaderImage>LEISURE CENTER</HeaderImage>
          <ButtonArrow>
            MORE DETAILS
            <Arrow src={ArrowLight} alt="ArrowLight" />
          </ButtonArrow>
        </BackgroundContainer>
        <Background>
          <picture>
            <source
              srcSet={`${HouseSun} 1x, ${HouseSun2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${HouseSun} 1x, ${HouseSun2x} 2x`}
              media="(max-width: 1279px)"
            />
            <source
              srcSet={`${HouseSun} 1x, ${HouseSun2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${HouseSun} 1x, ${HouseSun2x} 2x`}
              media="(min-width: 1440px)"
            />
            <img src={HouseSun} alt="HouseSun" />
          </picture>
        </Background>
      </Container>
      <ContainerImages>
        <div>
          <picture>
            <source
              srcSet={`${Stadium} 1x, ${Stadium2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${Stadium} 1x, ${Stadium2x} 2x`}
              media="(max-width: 1279px)"
            />
            <source
              srcSet={`${Stadium} 1x, ${Stadium2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Stadium} 1x, ${Stadium2x} 2x`}
              media="(min-width: 1440px)"
            />
            <img src={Stadium} alt="HouseSun" />
          </picture>
        </div>
        <div>
          <picture>
            <source
              srcSet={`${Appartment} 1x, ${Appartment2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${Appartment} 1x, ${Appartment2x} 2x`}
              media="(max-width: 1279px)"
            />
            <source
              srcSet={`${Appartment} 1x, ${Appartment2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Appartment} 1x, ${Appartment2x} 2x`}
              media="(min-width: 1440px)"
            />
            <img src={Appartment} alt="HouseSun" />
          </picture>
        </div>
        <div>
          <picture>
            <source
              srcSet={`${StadiumGreate} 1x, ${StadiumGreate2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${StadiumGreate} 1x, ${StadiumGreate2x} 2x`}
              media="(max-width: 1279px)"
            />
            <source
              srcSet={`${StadiumGreate} 1x, ${StadiumGreate2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${StadiumGreate} 1x, ${StadiumGreate2x} 2x`}
              media="(min-width: 1440px)"
            />
            <img src={StadiumGreate} alt="HouseSun" />
          </picture>
        </div>
      </ContainerImages>
      <ContainerButton>
        <ButtonBlack>
          ALL PROJECTS <Arrow src={ArrowLight} alt="ArrowLight" />
        </ButtonBlack>
      </ContainerButton>
    </SectionProjects>
  );
};
