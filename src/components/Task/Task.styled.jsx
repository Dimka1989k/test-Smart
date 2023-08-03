import styled from "styled-components";
import { device } from "../../utils/mixin";

export const SectionTask = styled.section`
  padding: 30px;

  ${device.tablet} {
    padding: 60px;
  }

  ${device.desktop} {
    padding: 60px 135px;
  }
`;
export const HaaderTask = styled.h2`
  color: #bdbdbd;
  text-align: center;
  font-size: 44px;
  font-style: normal;
  font-weight: 300;
  line-height: 44px;
  margin-bottom: 62px;
  display: flex;
  justify-content: center;

  ${device.desktop} {
    justify-content: start;
    font-size: 64px;
    line-height: 64px;
  }
`;

export const ContainerNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  ${device.desktop} {
    margin-bottom: 0px;
  }
`;

export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${device.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Number = styled.img`
  width: 40px;
  height: 54px;

  ${device.tablet} {
    width: 70px;
    height: 90px;
  }
  ${device.desktop} {
    width: 104px;
    height: 140px;
  }
`;

export const NumberSecond = styled.img`
  width: 40px;
  height: 54px;

  ${device.tablet} {
    width: 70px;
    height: 90px;
  }

  ${device.desktop} {
    width: 120px;
    height: 140px;
  }
`;

export const Paragraph = styled.p`
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-left: 16px;

  ${device.mobile} {
    font-size: 18px;
    line-height: 18px;
  }

  ${device.tablet} {
    font-size: 22px;
    line-height: 32px;
  }

  ${device.desktop} {
    max-width: 279px;
    margin-left: 30px;
    line-height: 36px;
  }
`;

export const ParagraphSecond = styled.p`
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-left: 16px;
  display: flex;
  justify-content: center;
  ${device.mobile} {
    font-size: 18px;
    line-height: 18px;
  }
  ${device.tablet} {
    font-size: 22px;
    line-height: 32px;
  }
  ${device.desktop} {
    max-width: 424px;
    margin-left: 30px;
    justify-content: center;
    margin-left: 30px;
  }
`;
