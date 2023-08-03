import styled from "styled-components";
import { device } from "../../utils/mixin";

export const ContainerHeader = styled.header`
  display: flex;
  height: 102px;
  margin-left: 20px;
  margin-right: 20px;
  ${device.mobile} {
    margin-left: 30px;
    margin-right: 30px;
  }

  ${device.tablet} {
    margin-left: 60px;
    margin-right: 60px;
  }
  ${device.desktop} {
    margin-left: 135px;
    margin-right: 135px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogoType1 = styled.img`
  width: 68px;
  height: 31px;
`;
export const LogoType2 = styled.img`
  width: 68px;
  height: 12px;
`;
