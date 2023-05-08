import React, {useState, useEffect, useRef} from "react";
import * as S from "./Home.styles";
import {ContainerSC} from "../../shared/container";
import {Link} from "react-router-dom";
import HomeDetails from "../../components/HomeDetails";
import HomeContacts from "../../components/HomeContacts";
import OurWorks from "../../components/OurWorks";

function Home({contactsRef}) {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef();
  const handleShowDetails = () => {
    setShowDetails(true);
  };

  useEffect(() => {
    if (showDetails && detailsRef.current) {
      detailsRef.current.scrollIntoView({behavior: "smooth"});
    }
  }, [showDetails]);

  return (<>
      <S.HomeWrapper contactsRef={contactsRef}>
        <ContainerSC>
          <S.HomeText>
            <S.HomeTitle>Gap design studio</S.HomeTitle>
            <S.HomeDescription>
              <span>
                Мы являемся мульти-дисциплинарной студией.
                <Link to={''}>Здесь</Link> перечислены все услуги
                которые мы можем предложить.
              </span>
              <span>
                <Link to={"/about"}>Наши работы</Link> вы можете найти ниже на
                сайте.
              </span>
            </S.HomeDescription>
            <div ref={detailsRef}>
              {showDetails ? (<HomeDetails/>) : (<S.HomeButton onClick={handleShowDetails}>
                  УЗНАТЬ БОЛЬШЕ
                </S.HomeButton>)}
            </div>
          </S.HomeText>
          <S.Contacts ref={contactsRef} id='contacts'>
            <HomeContacts/>
          </S.Contacts>
        </ContainerSC>
      </S.HomeWrapper>
      <OurWorks/>
    </>);
}

export default Home;
