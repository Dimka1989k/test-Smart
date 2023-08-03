import styled from "styled-components";
import { device, transition } from "../../utils/mixin";

export const SectionMain = styled.section`
  ${device.tablet} {
    padding: 0px 60px 60px;
  }

  ${device.desktop} {
    padding: 0px 135px 60px;
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

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonArrow = styled.button`
  padding: 22px 17px 18px;
  border: 1px solid #f2f2f2;
  background: #f9f9f9;
  margin-right: 22px;
  cursor: pointer;
  :hover,
  :focus {
    transform: scale(1.3);
    transition: transform ${transition};
  }
  :last-child {
    margin-right: 0px;
  }
`;

export const Arrow = styled.img`
  width: 17px;
  height: 8px;
`;

export const ArrowButton = styled.img`
  width: 14px;
  height: 6px;
  margin-left: 10px;

  ${device.desktop} {
    width: 17px;
    height: 8px;
    margin-left: 12px;
  }
`;
export const ContainerArrow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;

  ${device.desktop} {
    display: flex;
    justify-content: start;
    margin-top: 90px;
    margin-bottom: 94px;
  }
`;

export const NumberPage = styled.p`
  color: #bdbdbd;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;

  ${device.desktop} {
    justify-content: start;
    gap: 15px;
  }
`;

export const LineNumber = styled.img`
  width: 28px;
`;

export const Background = styled.div`
  display: flex;
  margin-left: 0px;
  position: relative;
  margin-top: 30px;

  ${device.desktop} {
    margin-left: auto;
    margin-top: 0px;
  }
`;

export const ButtonImage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  left: -0.3px;
  background: #fff;
  border: none;
  color: #333;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.2);
    transition: transform ${transition};
  }

  ${device.desktop} {
    padding: 30px 60px;
    font-size: 12px;
    font-style: normal;
  }
`;

export const Paragraph = styled.h1`
  font-family: "TTHoves-Light", sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  color: #bdbdbd;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: 64px;

  span {
    font-family: "TTHoves-Black", sans-serif;
    color: #333;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    margin-left: 10px;
  }
  ${device.mobile} {
    font-size: 34px;
    font-style: normal;
    font-weight: 300;

    span {
      margin-left: 16px;
      font-size: 34px;
    }
  }

  ${device.tablet} {
    flex-direction: row;
    margin-top: 40px;
    color: #bdbdbd;
    font-size: 44px;

    span {
      font-size: 44px;
      margin-left: 20px;
    }
  }

  ${device.desktop} {
    flex-direction: column;
    justify-content: start;
    margin-top: auto;
    font-size: 64px;

    span {
      font-size: 64px;
      margin-left: 0px;
    }
  }
`;

export const Picture = styled.picture`
  display: flex;
  justify-content: end;

  ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${device.desktop} {
    display: flex;
    justify-content: end;
  }
`;
