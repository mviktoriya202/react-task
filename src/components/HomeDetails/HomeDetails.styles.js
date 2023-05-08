import styled from "styled-components";
import {Color} from "../../theme/color";

export const HomeDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeDescription = styled.p`
  font-weight: 400;
  font-size: 58px;
  line-height: 65px;
  text-align: center;
  color: ${Color.TEXT_BLACK};
  margin: 64px 0 0;

  strong {
    font-family: 'ROOM';
    font-weight: bold;
    color: ${Color.TEXT_BLACK};
  }

  @media (max-width: 1200px) {
    font-size: 30px;
    line-height: 33px;
    margin: 62px 0 0;
  }
`;

export const DetailsImg = styled.div`
  max-width: 574px;
  width: 100%;
  min-height: 478px;
  margin: 64px 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1200px) {
    max-width: 400px;
    min-height: 334px;
  }
`;
