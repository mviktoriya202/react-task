import * as S from "./Footer.styles";
import {ContainerSC} from "../../shared/container";
import instagram from '../../images/home/instagram.png';
import behance from '../../images/home/behance.png';
import gmail from '../../images/home/gmail-logo.png';
import copyright from '../../images/home/copyright.png';

function Footer() {
  return (
    <S.FooterWrapper>
      <ContainerSC>
        <S.FooterContent>
          <S.FooterLink to={'/contacts'}>
            Связаться с нами
          </S.FooterLink>
          <S.SocLinksBox>
            <S.FooterLink to={'/'}>
              <img src={gmail} alt="gmail"/>
            </S.FooterLink>
            <S.FooterLink to={'/'}>
              <img src={behance} alt="behance"/>
            </S.FooterLink>
            <S.FooterLink to={'/'}>
              <img src={instagram} alt="instagram"/>
            </S.FooterLink>
          </S.SocLinksBox>
          <S.FooterLink to={'/'}>
            <img src={copyright} alt="copyright"/>
            2023 Gap design studio
          </S.FooterLink>
        </S.FooterContent>
      </ContainerSC>
    </S.FooterWrapper>
  );
}

export default Footer;
