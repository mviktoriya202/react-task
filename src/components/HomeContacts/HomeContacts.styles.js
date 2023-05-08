import styled from "styled-components";
import {Color} from "../../theme/color";

export const HomeContacts = styled.div`
  max-width: 1193px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  a {
    color: ${Color.TEXT_BLACK};
    font-size: 35px;
    line-height: 39px;
    margin-top: 10px;
    transition: color .3s;

    :hover {
      color: ${Color.HOVER};
    }
  }

  @media (max-width: 1200px) {
    max-width: unset;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    margin-top: 37px;
  }
`;

export const ContactsTitle = styled.p`
  font-size: 16px;
  color: ${Color.TEXT_BLACK};
  line-height: 18px;
  letter-spacing: 0.21em;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 25px;
    line-height: 28px;
  }
`;
