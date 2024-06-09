import React from "react";
import * as S from "./style";
import Logo from "../../assets/logo.svg";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const location = useLocation();

  const showFullNav = location.pathname !== "/login";
  return (
    <div>
      <S.Header_Container>
        <S.Header_Logo>
          <S.Header_Nav>
            <Link to="/">
              <img src={Logo} className="Logo" alt="logo" />
            </Link>
            {showFullNav && (
              <>
                <S.Styled_Link to="/Trade">중고거fk</S.Styled_Link>
                <S.Styled_Link to="/Compnay">동네업체</S.Styled_Link>
                <S.Styled_Link to="/Job">알바</S.Styled_Link>
                <S.Styled_Link to="/House">부동산</S.Styled_Link>
                <S.Styled_Link to="/Car">중고차 직거래</S.Styled_Link>
                <S.Search_Container>
                  <S.Header_Search_Input placeholder="물품이나 동네를 검색해보세요"></S.Header_Search_Input>
                  <S.Styled_Link to="/login">
                    <S.Header_Search_Button>채팅하기</S.Header_Search_Button>
                  </S.Styled_Link>
                </S.Search_Container>
              </>
            )}
          </S.Header_Nav>
        </S.Header_Logo>
      </S.Header_Container>
    </div>
  );
}

export default Header;
