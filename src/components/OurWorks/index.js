import * as S from "./OurWorks.styles";
import WorksImg from "../../images/home/bluegirlscream1.png";

function OurWorks() {
  return (
    <S.OurWorksWrapper>
      <S.OurWorksTitle>НАШИ РАБОТЫ</S.OurWorksTitle>
      <S.PreWrapper>
        <S.WorksImageWrapper>
          <S.OurWorksImg style={{backgroundImage: `url(${WorksImg}`}}>
            <p>PUMPKIN COFFEE</p>
          </S.OurWorksImg>
          <S.RotateText>
            Gap Design Studio
          </S.RotateText>
        </S.WorksImageWrapper>
      </S.PreWrapper>
    </S.OurWorksWrapper>
  );
}

export default OurWorks;
