import styled from "styled-components";
import { device } from "../../utils/mixin";
// import Bar from "../../images/Projects/Bar.png";

export const SectionProjects = styled.section`
  padding: 30px;
  ${device.tablet} {
    padding: 60px;
  }

  ${device.desktop} {
    padding: 60px 135px;
  }
`;

export const HaaderProjects = styled.h2`
  color: #bdbdbd;
  text-align: center;
  font-size: 44px;
  font-style: normal;
  font-weight: 300;
  line-height: 44px;
  margin-bottom: 42px;
  display: flex;
  justify-content: center;

  ${device.desktop} {
    justify-content: start;
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 62px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${device.desktop} {
    display: flex;
    flex-direction: row;
  }
`;

export const BackgroundContainer = styled.div`
  position: relative;
`;
export const Picture = styled.picture`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const HeaderImage = styled.p`
  position: absolute;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  top: 28px;
  left: 79px;

  ${device.mobile} {
    font-size: 24px;
    line-height: 34px;
    top: 48px;
    left: 79px;
  }

  ${device.tablet} {
    font-size: 34px;
    line-height: 44px;
    top: 88px;
  }

  ${device.desktop} {
    font-size: 64px;
    top: 48px;
    left: 79px;
    line-height: 64px;
  }
`;

export const ButtonArrow = styled.button`
  position: absolute;
  left: 79px;
  top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border: none;
  color: #fff;
  font-family: "Gothic A1", sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 14px;

  ${device.mobile} {
    font-size: 14px;
    top: 90px;
  }

  ${device.tablet} {
    top: 190px;
  }

  ${device.desktop} {
    left: 79px;
    top: 170px;
  }
`;

export const Arrow = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  ${device.desktop} {
    margin-left: 12px;
  }
`;

export const Background = styled.div`
  margin-left: 0;
  margin-top: 30px;

  ${device.desktop} {
    margin-left: 30px;
    margin-top: 0px;
  }
`;

export const ContainerImages = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  ${device.desktop} {
    gap: 30px;
    margin-top: 30px;
  }
`;

export const ButtonBlack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  background: #333;
  border: none;
  padding: 10px 20px;

  cursor: pointer;

  ${device.desktop} {
    padding: 30px 40px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  ${device.desktop} {
    justify-content: end;
    margin-top: 30px;
  }
`;
