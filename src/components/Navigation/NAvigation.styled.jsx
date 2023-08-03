import styled from "styled-components";
import { device } from "../../utils/mixin";

export const NavMain = styled.nav`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavUl = styled.ul`
  display: flex;

  a {
    line-height: 18px;
  }

  li {
    margin-left: 60px;
    color: #333;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    cursor: pointer;

    :first-child {
      margin-left: 0px;
    }
    &::after {
      content: "";
      display: block;
      height: 1px;
      width: 0;
      background: #333;
      transition: all 0.7s ease;
    }

    &:hover::after {
      width: 100%;
      background: #333;
    }
    &::before {
      margin-left: auto;
    }

    &::before {
      content: "";
      display: block;
      height: 1px;
      width: 0;
      background: #333;
      transition: all 0.7s ease;
    }

    &:hover::before {
      width: 100%;
      background: #333;
    }
    &:hover::after,
    &:hover::before {
      margin-bottom: 2px;
      width: 100%;
    }
  }

  ${device.tablet} {
    li {
      margin-left: 30px;
    }
  }

  ${device.onlytablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 1111111;
    padding: 80px 50px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    top: 80px;
    left: -110%;
    opacity: 1;
    transition: all 0.7s ease;
    gap: 20px;

    &.active {
      background: #fff;
      left: 0px;
      opacity: 1;
    }
    a {
      line-height: 30px;
    }

    li {
      margin-left: 0px;
      color: #333;
      font-size: 22px;
      line-height: 12px;
      font-style: normal;
      font-weight: 600;
      letter-spacing: 2.4px;
      text-transform: uppercase;

      :first-child {
        margin-left: 0px;
      }
      &::after {
        content: "";
        display: block;
        height: 2px;
        width: 0;
        background: #333;
        transition: all 0.7s ease;
      }

      &:hover::after {
        width: 100%;
        background: #333;
      }
      &::before {
        margin-left: auto;
      }

      &::before {
        content: "";
        display: block;
        height: 2px;
        width: 0;
        background: #333;
        transition: all 0.7s ease;
      }

      &:hover::before {
        width: 100%;
        background: #333;
      }
      &:hover::after,
      &:hover::before {
        margin-bottom: 2px;
        width: 100%;
      }
    }
  }
`;

export const NavItemLinks = styled.li`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ButtonBurger = styled.button`
  border: none;
  border-radius: 50%;
  background-color: transparent;

  svg {
    border-radius: 50%;
    color: #333;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  :hover {
    transform: scale(1.2);
    transition: transform 0.5s ease;
  }

  ${device.tablet} {
    display: none;
  }
`;
