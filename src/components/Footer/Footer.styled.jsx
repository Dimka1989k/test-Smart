import styled from "styled-components";
import { device, transition } from "../../utils/mixin";

export const ContainerFooter = styled.footer`
  background-color: #2c2c2c;
  margin-top: 60px;
  padding-top: 58px;
  padding-bottom: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;

  ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 60px;
    margin-right: 60px;
  }
  ${device.desktop} {
    align-items: start;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 135px;
    margin-right: 135px;
  }
`;

export const ContainerContacts = styled.div`
  margin-left: 0px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${device.tablet} {
    text-align: start;
    align-items: start;
    margin-left: 90px;

    margin-left: 50px;
    margin-top: 0px;
    justify-content: start;
  }
  ${device.desktop} {
    margin-left: 157px;
  }
`;

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-left: 0px;
  ${device.desktop} {
    align-items: start;
    margin-top: 0px;
    margin-left: auto;
  }
`;

export const ContainerContactsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${device.tablet} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Logoicon = styled.img`
  display: flex;
  align-self: center;
  width: 145px;
  height: 94px;
  margin-bottom: 30px;
  ${device.tablet} {
    margin-bottom: 0px;
    align-self: start;
    width: 145px;
    height: 94px;
  }
`;
export const ContainerInfo = styled.div`
  margin-left: 0px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${device.tablet} {
    text-align: start;
    align-items: start;

    margin-left: 50px;
    margin-top: 0px;
    justify-content: start;
  }
  ${device.desktop} {
    margin-left: 90px;
  }
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 25px;
`;

export const InfoItem = styled.li`
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0px;
  }
  a {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.42px;
    margin-bottom: 16px;
    cursor: pointer;

    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const InfoItemContact = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.42px;
    margin-bottom: 16px;
    cursor: pointer;
    text-align: start;

    :last-child {
      margin-bottom: 0px;
    }
  }
  :first-child {
    align-items: center;
    margin-bottom: 16px;
  }
  :last-child {
    margin-top: 16px;
  }
  ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: start;
    :first-child {
      align-items: start;
      margin-bottom: 62px;
    }

    :last-child {
      margin-top: 33px;
    }
  }
`;

export const InfoItemSocial = styled.li`
  margin-right: 40px;
  :last-child {
    margin-right: 0px;
  }
`;

export const GeolocationIcon = styled.img`
  width: 11px;
  height: 16px;
  margin-right: 19px;
`;
export const PhoneIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 14px;
`;
export const EmailIcon = styled.img`
  width: 16px;
  height: 11px;
  margin-right: 14px;
`;

export const FaceBookIcon = styled.img`
  width: 10px;
  height: 19px;
  cursor: pointer;
  :hover,
  :focus {
    transform: scale(1.4);
    transition: transform ${transition};
  }
`;
export const LinkedInIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :hover,
  :focus {
    transform: scale(1.4);
    transition: transform ${transition};
  }
`;
export const TwiterIcon = styled.img`
  width: 22px;
  height: 17px;
  cursor: pointer;
  :hover,
  :focus {
    transform: scale(1.4);
    transition: transform ${transition};
  }
`;

export const PininterestIcon = styled.img`
  width: 14px;
  height: 19px;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.4);
    transition: transform ${transition};
  }
`;

export const ContainerLine = styled.div`
  content: "";
  height: 1px;
  width: 100%;
  background-color: #fff;
  opacity: 0.1;
  margin-top: 60px;
`;

export const DigitalParagraph = styled.p`
  color: rgba(200, 200, 200, 0.5);
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  margin-top: 24px;
`;
