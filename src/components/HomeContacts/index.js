import * as S from "./HomeContacts.styles";
import {Link} from "react-router-dom";

function HomeContacts() {
  return (
    <S.HomeContacts>
      <S.ContactBox>
        <S.ContactsTitle>СОЦИАЛЬНЫЕ СЕТИ</S.ContactsTitle>
        <Link to={'/'}>Instagram</Link>
        <Link to={'/'}>Whatsapp</Link>
        <Link to={'/'}>Telegram</Link>
        <Link to={'/'}>Behance</Link>
      </S.ContactBox>
      <S.ContactBox>
        <S.ContactsTitle>КОНТАКТЫ</S.ContactsTitle>
        <Link to={'mailto:Hi@gapdesign.net'}>Hi@gapdesign.net</Link>
        <Link to={'tel:77070700737'}>+7 (707) 070 07 37</Link>
      </S.ContactBox>
    </S.HomeContacts>
  );
}

export default HomeContacts;
