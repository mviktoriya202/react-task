import styled from "styled-components";
import {Color} from "../../theme/color";

export const HeaderWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  max-width: 298px;
  width: 100%;
  padding: 43px 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 9;
  list-style: none;

  li a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.21em;
    color: ${Color.TEXT_BLACK};
    transition: color 0.3s;

    :hover {
      color: ${(props) => props.isCurrent ? Color.RED_BACKGROUND : Color.HOVER};
    }
  }
`;
