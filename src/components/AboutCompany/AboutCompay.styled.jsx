import styled from "styled-components";

import { device } from "../../utils/mixin";

export const SectionAbout = styled.section`
  padding: 30px;

  ${device.tablet} {
    padding: 60px;
  }

  ${device.desktop} {
    padding: 60px 135px;
  }
`;

export const Background = styled.div`
  margin-top: 30px;
`;

export const BackgroundFirst = styled.div``;

export const BackgroundImage = styled.div`
  margin-top: 30px;
  ${device.desktop} {
    margin-top: 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  gap: 0px;

  ${device.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    max-height: 435px;
    background-color: #fbfbfb;
  }
`;

export const ContainerAbout = styled.div`
  h2 {
    display: flex;
    justify-content: center;
    color: #bdbdbd;
    font-size: 44px;
    font-style: normal;
    font-weight: 300;
    line-height: 64px;
    margin-top: 0px;
    ${device.desktop} {
      justify-content: start;
      font-size: 64px;
      margin-top: 30px;
    }
  }

  p {
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px;

    margin-top: 20px;

    ${device.desktop} {
      font-size: 16px;
      justify-content: start;
      text-align: start;
      max-width: 396px;
    }
  }
`;

export const ButtonRead = styled.button`
  background: #fbfbfb;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  padding: 10px 30px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  ${device.desktop} {
    background: #fff;
    padding: 23px 65px;
  }
`;

export const Arrow = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 12px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  ${device.desktop} {
    justify-content: start;
    align-items: center;
    margin-top: 20px;
  }
`;
