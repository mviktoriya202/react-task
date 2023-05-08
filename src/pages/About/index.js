import {useEffect, useRef, useState} from "react";
import AboutDetails from "../../components/AboutDetails";
import {ContainerSC} from "../../shared/container";
import * as S from "./About.styles";
import logo from "../../images/about/logo.png";
import GridGallery from "../../components/GridGallery";

function About() {
  const [showDetails, setShowDetails] = useState(false);
  const aboutDetailsRef = useRef();
  const handleShowDetails = () => {
    setShowDetails(true);
  }

  useEffect(() => {
    if (showDetails && aboutDetailsRef.current) {
      aboutDetailsRef.current.scrollIntoView({behavior: "smooth"});
    }
  }, [showDetails]);

  return (
    <S.AboutWrapper>
      <ContainerSC>
        <S.AboutText>
          <S.AboutTitle>Pumpkin coffee</S.AboutTitle>
          <S.AboutDescription>
              <span>
                Визуальная айдентика, нейминг, типографика и 3д рендеры для проекта кофейни в городе Алматы.
              </span>
          </S.AboutDescription>
          <div ref={aboutDetailsRef}>
            {showDetails ? (
              <AboutDetails/>
            ) : (
              <S.AboutButton onClick={handleShowDetails}>
                УЗНАТЬ БОЛЬШЕ
              </S.AboutButton>
            )}
          </div>
        </S.AboutText>
        <S.LogoImg style={{backgroundImage: `url(${logo}`}}/>
        <GridGallery/>
      </ContainerSC>
    </S.AboutWrapper>
  );
}

export default About;
