import React from "react";
import * as S from "./style";
import Town from "../../../assets/company.svg";
import { Link } from "react-router-dom";

function Banner5() {
  const mainTitle = "동네업체";
  const titleLine1 = "내 근처에서 찾는";
  const titleLine2 = "동네업체";
  const introduce1 = "이웃들의 추천 후기를 확인하고";
  const introduce2 = "동네 곳곳의 업체들을 찾을 수 있어요.";

  return (
    <div>
      <S.Banner5_Container>
        <S.Banner5_MainTitle>
          {mainTitle}
          <S.Banner5_Title>
            {titleLine1}
            <br />
            {titleLine2}
          </S.Banner5_Title>
          <S.Banner5_Introduce1>
            {introduce1}
            <br />
            {introduce2}
          </S.Banner5_Introduce1>
          <S.Banner5_ButtonContainer>
            <Link to="/Job" style={{ textDecoration: "none" }}>
              <S.Banner5_Company_Button>
                당근 동네업체 보기
              </S.Banner5_Company_Button>
            </Link>
          </S.Banner5_ButtonContainer>
        </S.Banner5_MainTitle>

        <S.Banner5_Town>
          <img src={Town} className="Town" alt="Town" />
        </S.Banner5_Town>
      </S.Banner5_Container>
    </div>
  );
}

export default Banner5;
