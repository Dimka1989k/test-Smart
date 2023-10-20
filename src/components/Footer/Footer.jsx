import {
  ContainerFooter,
  Container,
  Logoicon,
  ContainerInfo,
  Paragraph,
  InfoItem,
  InfoItemContact,
  GeolocationIcon,
  PhoneIcon,
  EmailIcon,
  FaceBookIcon,
  LinkedInIcon,
  TwiterIcon,
  PininterestIcon,
  InfoItemSocial,
  ContainerLine,
  DigitalParagraph,
  ContainerContacts,
  ContainerSocial,
  ContainerContactsInfo,
} from "../../components/Footer/Footer.styled.jsx";

import Logo from "../../images/Footer/LogoFooter.svg";

import GeoLocation from "../../images/Footer/GeoLocation.svg";
import Phone from "../../images/Footer/Phone.svg";
import Email from "../../images/Footer/Email.svg";
import Facebook from "../../images/Footer/Facebook.svg";
import LinkedIn from "../../images/Footer/LinkedIn.svg";
import Twiter from "../../images/Footer/twiter.svg";
import pininterest from "../../images/Footer/pininterest.svg";

export const Footer = () => {
  return (
    <ContainerFooter>
      <Container>
        <ContainerContactsInfo>
          <Logoicon src={Logo} alt="logo" />
          <ContainerInfo>
            <Paragraph>Information</Paragraph>
            <ul>
              <InfoItem>
                <a>Home</a>
              </InfoItem>
              <InfoItem>
                <a>Gallery</a>
              </InfoItem>
              <InfoItem>
                <a>Projects</a>
              </InfoItem>
              <InfoItem>
                <a>Certificates</a>
              </InfoItem>
              <InfoItem>
                <a>Contact</a>
              </InfoItem>
            </ul>
          </ContainerInfo>
          <ContainerContacts>
            <Paragraph>Contacts</Paragraph>
            <ul>
              <InfoItemContact>
                <GeolocationIcon src={GeoLocation} alt="GeoLocation" />
                <a href="https://goo.gl/maps/DaUrFrGB6oiANadv9">
                  100000, Republic of Kazakhstan, <br></br>Karaganda, st.
                  Television 10
                </a>
              </InfoItemContact>
              <InfoItemContact>
                <PhoneIcon src={Phone} alt="PhoneIcon" />
                <a href="tel:+38 (000) 000 00 00">+38 (000) 000 00 00</a>
              </InfoItemContact>
              <InfoItemContact>
                <EmailIcon src={Email} alt="EmailIcon" />
                <a href="mailto:mail@gmail.com">mail@gmail.com</a>
              </InfoItemContact>
            </ul>
          </ContainerContacts>
        </ContainerContactsInfo>
        <ContainerSocial>
          <Paragraph>Social media</Paragraph>
          <ul style={{ display: "flex" }}>
            <InfoItemSocial>
              <a>
                <FaceBookIcon src={Facebook} alt="Icon" />
              </a>
            </InfoItemSocial>
            <InfoItemSocial>
              <a>
                <TwiterIcon src={Twiter} alt="Icon" />
              </a>
            </InfoItemSocial>
            <InfoItemSocial>
              <a>
                <LinkedInIcon src={LinkedIn} alt="Icon" />
              </a>
            </InfoItemSocial>
            <InfoItemSocial>
              <a>
                <PininterestIcon src={pininterest} alt="Icon" />{" "}
              </a>
            </InfoItemSocial>
          </ul>
        </ContainerSocial>
      </Container>
      <ContainerLine />
      <DigitalParagraph>
        © 2019 Digital Project. All rights reserved.
      </DigitalParagraph>
    </ContainerFooter>
  );
};
