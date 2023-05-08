import styled from "styled-components";
import {Color} from "../../theme/color";

export const HomeWrapper = styled.div`
  min-height: auto;
  background-color: ${Color.RED_BACKGROUND};
  position: relative;
  padding: 141px 15px 88px;

  @media (max-width: 1200px) {
    font-size: 51px;
    line-height: 61px;
    padding: 141px 15px 30px;
  }
`;

export const HomeText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const HomeTitle = styled.h1`
  width: 100%;
  font-family: 'ROOM';
  font-weight: 400;
  font-size: 100px;
  line-height: 120px;
  color: ${Color.TEXT_BLACK};
  margin: 0 auto;

  @media (max-width: 1200px) {
    font-size: 51px;
    line-height: 61px;
    word-break: break-all;
  }
`;

export const HomeDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 58px;
  line-height: 65px;
  text-align: center;
  color: ${Color.TEXT_BLACK};
  margin: 64px 0 0;
  word-break: break-all;

  div {
    width: 100%;
    word-break: initial;
    display: flex;
    flex-direction: column;
  }

  a {
    font-weight: bold;
    color: ${Color.TEXT_BLACK};
  }

  @media (max-width: 1200px) {
    font-size: 30px;
    line-height: 33px;
    margin: 62px 0 0;
  }
`;

export const HomeButton = styled.button`
  width: fit-content;
  padding: 15px 39px;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.21em;
  color: ${Color.TEXT_BLACK};
  background-color: transparent;
  border: 1px solid ${Color.TEXT_BLACK};
  cursor: pointer;
  margin: 86px 0 0;

  a {
    font-weight: bold;
    color: ${Color.TEXT_BLACK};
  }

  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 13px;
    letter-spacing: 0.21em;
  }
`;

export const Contacts = styled.div`
  padding-top: 141px;

  @media (max-width: 1200px) {
    padding-top: 64px;
  }
`;
