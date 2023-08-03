import styled from "styled-components";
import { device } from "../../utils/mixin";

export const SectionContacts = styled.section`
  padding: 30px;
  ${device.tablet} {
    padding: 60px;
  }

  ${device.desktop} {
    padding: 60px 135px;
  }
`;

export const HaaderContacts = styled.h2`
  color: #bdbdbd;
  text-align: center;
  font-size: 44px;
  font-style: normal;
  font-weight: 300;
  line-height: 44px;
  margin-bottom: 22px;
  display: flex;
  justify-content: center;

  ${device.desktop} {
    justify-content: start;
    font-size: 64px;
    line-height: 64px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${device.desktop} {
    flex-direction: row;
  }
`;

export const Background = styled.div`
  margin-top: 20px;
  margin-left: 0px;
  ${device.desktop} {
    margin-top: 0px;
    margin-left: auto;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  position: relative;
  background: #f3f3f3;
  border: none;
  width: 100%;
  height: 46px;
  padding-left: 21px;
  margin-bottom: 10px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #8d8d8d;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.56px;
  }

  ${device.desktop} {
    width: 391px;
  }
`;

export const Textarea = styled.textarea`
  position: relative;
  background: #f3f3f3;
  border: none;
  width: 100%;
  height: 147px;
  padding-left: 21px;
  padding-top: 14px;
  margin-bottom: 10px;
  resize: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #8d8d8d;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.56px;
  }
  ${device.desktop} {
    width: 391px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${device.desktop} {
    justify-content: start;
    align-items: start;
  }
`;

export const Paragraph = styled.p`
  color: #333;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.42px;
  margin-top: 22px;
  max-width: 336px;
  margin-left: 40px;
`;

export const Arrow = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  ${device.desktop} {
    margin-left: 12px;
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
    padding: 30px 50px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
  ${device.desktop} {
    justify-content: start;
    margin-top: 21px;
  }
`;
