import * as S from "./HomeDetails.styles";
import homeImg from '../../images/home/image1.png';

function HomeDetails() {
  return (
    <S.HomeDetails>
      <S.HomeDescription>
        <strong>Gap design</strong> - молодая студия широкого профиля основаная в 2023 году. Мы создаем айдентику,
        вебсайты, обложки, иллюстрации, дизайн упаковки, 3Д визуализацию. Так же мы занимаемся
        редакцией, копирайтингом, видеомонтажом, инфографикой.
      </S.HomeDescription>
      <S.HomeDescription>
        Мы беремся за самые необычные проекты и рады каждой
        возможности проявить себя в любой из наших многочисленных ниш.
      </S.HomeDescription>
      <S.DetailsImg style={{backgroundImage: `url(${homeImg}`}}/>
    </S.HomeDetails>
  );
}

export default HomeDetails;
