import {
  Container,
  ContainerInfo,
  Background,
  Paragraph,
  SectionMain,
  Picture,
  ContainerArrow,
  Arrow,
  ButtonArrow,
  NumberPage,
  ContainerPage,
  LineNumber,
  ButtonImage,
  ArrowButton,
} from "../../components/Main/Main.styled.jsx";

import ArrowLeft from "../../images/Main/ArrowLeft.svg";
import ArrowLRight from "../../images/Main/ArrowRight.svg";
import Line from "../../images/Main/Line.svg";

import BackgroundImage from "../../images/Main/BackgroundImage.png";
import BackgroundImage2x from "../../images/Main/BackgroundImage@2x.png";

export const Main = () => {
  return (
    <SectionMain>
      <main>
        <Container>
          <ContainerInfo>
            <Paragraph>
              PROJECT
              <span>HOME </span>
            </Paragraph>
            <ContainerArrow>
              <ButtonArrow>
                <Arrow src={ArrowLeft} />
              </ButtonArrow>
              <ButtonArrow>
                <Arrow src={ArrowLRight} />
              </ButtonArrow>
            </ContainerArrow>
            <ContainerPage>
              <NumberPage>01</NumberPage>
              <LineNumber src={Line} />
              <NumberPage>02</NumberPage>
            </ContainerPage>
          </ContainerInfo>
          <Background>
            <Picture>
              <source
                srcSet={`${BackgroundImage} 1x, ${BackgroundImage2x} 2x`}
                media="(max-width: 767px)"
              />
              <source
                srcSet={`${BackgroundImage} 1x, ${BackgroundImage2x} 2x`}
                media="(max-width: 1279px)"
              />
              <source
                srcSet={`${BackgroundImage} 1x, ${BackgroundImage2x} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${BackgroundImage} 1x, ${BackgroundImage2x} 2x`}
                media="(min-width: 1440px)"
              />
              <img src={BackgroundImage} alt="video" />
              <ButtonImage>
                Take a look
                <ArrowButton src={ArrowLRight} />
              </ButtonImage>
            </Picture>
          </Background>
        </Container>
      </main>
    </SectionMain>
  );
};
