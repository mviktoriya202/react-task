import styled from "styled-components";
import {Color} from "../../theme/color";
import {Link} from "react-router-dom";

export const FooterWrapper = styled.div`
  width: 100%;
  min-height: 105px;
  background-color: ${Color.RED_BACKGROUND};

  @media (max-width: 960px) {
    min-height: 80px;
    padding: 12px 0;
  }
`;

export const FooterContent = styled.div`
  max-width: 750px;
  width: 100%;
  min-height: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    min-height: 80px;
  }
`;


export const FooterLink = styled(Link)`
  color: ${Color.TEXT_BLACK};
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;

  > img {
    margin-right: 8px;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 12px;
  }
`;

export const SocLinksBox = styled.div`
  width: 123px;
  display: flex;
  justify-content: space-between;

  a {
    width: 25px;
    height: 25px;
  }

  img {
    object-fit: cover;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 12px;
  }
`;
