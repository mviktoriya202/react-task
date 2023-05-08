import * as S from "./Header.styles";
import {NavLink, useLocation, useNavigate} from "react-router-dom";

function Header({contactsRef}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactsClick = (e) => {
    navigate("/#contacts");
    e.preventDefault();
    setTimeout(() => {
      contactsRef.current.scrollIntoView({behavior: "smooth"});
    }, 0);
  };

  return (
    <S.HeaderWrapper isCurrent={location.pathname === "/about"}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li ref={contactsRef}>
        <NavLink to="/#contacts" onClick={handleContactsClick}>Contacts</NavLink>
      </li>
    </S.HeaderWrapper>
  );
}

export default Header;
