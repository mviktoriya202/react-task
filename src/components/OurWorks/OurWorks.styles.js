import styled from "styled-components";
import {Color} from "../../theme/color";

export const OurWorksWrapper = styled.div`
  padding: 80px 0 97px;
  background-color: ${Color.HOVER};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OurWorksTitle = styled.div`
  color: ${Color.TEXT_BLACK};
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.21em;
`;

export const OurWorksImg = styled.div`
  width: 824px;
  height: 824px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 80px;
  position: relative;

  p {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(30, 30, 30, 0.81);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 30px;
    line-height: 33px;
    letter-spacing: 0.21em;
    color: ${Color.HOVER};
    opacity: 0;
    cursor: pointer;
    transition: .5s;
  }

  :hover p {
    opacity: 1;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 620px;
  }
`;

export const RotateText = styled.h2`
  width: fit-content;
  font-family: 'ROOM';
  color: ${Color.TEXT_BLACK};
  font-size: 38px;
  line-height: 46px;
  transform: rotate(90deg);
  position: absolute;
  right: 0;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const PreWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const WorksImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
