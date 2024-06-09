import React from "react";
import * as S from "./style";
import Hi from "../../../assets/Hi.svg";
import Apple from "../../../assets/apple.svg";
import Google from "../../../assets/google.svg";
import Header from "../../../components/Header";

function Banner1() {
  const titleLine1 = "당신 근처의";
  const titleLine2 = "지역 생활 커뮤니티";
  const introduce1 = "동네라서 가능한 모든 것";
  const introduce2 = "당근에서 가까운 이웃과 함께해요.";

  return (
    <div>
      <Header />
      <S.Banner1_Container>
        <S.Banner1_MainTitle>
          <S.Banner1_Title>
            {titleLine1}
            <br />
            {titleLine2}
          </S.Banner1_Title>
          <S.Banner1_Introduce1>
            {introduce1}
            <br />
            {introduce2}
          </S.Banner1_Introduce1>
          <S.Banner1_ButtonContainer>
            <S.Banner1_Google_Button href="https://play.google.com/store/apps/details?id=com.towneers.www">
              <img src={Google} className="Google" alt="Google" />
              Groogle Play
            </S.Banner1_Google_Button>
            <S.Banner1_Apple_Button href="https://apps.apple.com/us/app/karrot-buy-sell-locally/id1018769995">
              <img src={Apple} className="Apple" alt="Apple" />
              App Store
            </S.Banner1_Apple_Button>
          </S.Banner1_ButtonContainer>
        </S.Banner1_MainTitle>
        <S.Banner1_Hi>
          <img src={Hi} className="Hi" alt="Hi" />
        </S.Banner1_Hi>
      </S.Banner1_Container>
    </div>
  );
}

export default Banner1;
