import React from "react";
import * as S from "./style";
import Transaction from "../../../assets/transaction.svg";
import { Link } from "react-router-dom";

function Banner2() {
  const mainTitle = "중고거래";
  const titleLine1 = "믿을만한";
  const titleLine2 = "이웃 간 중고거래";
  const introduce1 = "동네 주민들과 가깝고 따뜻한 거래를 ";
  const introduce2 = "지금 경험해보세요.";

  return (
    <div>
      <S.Banner2_Container>
        <S.Banner2_Transaction>
          <img src={Transaction} className="Transaction" alt="Transaction" />
        </S.Banner2_Transaction>
        <S.Banner2_MainTitle>
          {mainTitle}
          <S.Banner2_Title>
            {titleLine1}
            <br />
            {titleLine2}
          </S.Banner2_Title>
          <S.Banner2_Introduce1>
            {introduce1}
            <br />
            {introduce2}
          </S.Banner2_Introduce1>
          <S.Banner2_ButtonContainer>
            <Link to="/Trade" style={{ textDecoration: "none" }}>
              <S.Banner2_Trade_Button>인기매물 보기</S.Banner2_Trade_Button>
            </Link>
            <Link to="/trust" style={{ textDecoration: "none" }}>
              <S.Banner2_Trust_Button>
                믿을 수 있는 중고거래
              </S.Banner2_Trust_Button>
            </Link>
          </S.Banner2_ButtonContainer>
        </S.Banner2_MainTitle>
      </S.Banner2_Container>
    </div>
  );
}

export default Banner2;
