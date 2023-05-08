import styled from "styled-components";
import {Color} from "../../theme/color";

export const AboutDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutDescription = styled.p`
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
    padding: 0 15px;
  }
`;
