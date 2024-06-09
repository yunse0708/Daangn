import React from "react";
import * as S from "./style";
import Job from "../../../assets/job.svg";
import { Link } from "react-router-dom";

function Banner4() {
  const mainTitle = "알바";
  const titleLine1 = "걸어서 10분!";
  const titleLine2 = "동네 알바 구하기";
  const introduce1 = "당근하듯 쉽고, 편하게";
  const introduce2 = "당근 알바로 동네 알바를 구할 수 있어요.";

  return (
    <div>
      <S.Banner4_Container>
        <S.Banner4_Job>
          <img src={Job} className="Transaction" alt="Transaction" />
        </S.Banner4_Job>
        <S.Banner4_MainTitle>
          {mainTitle}
          <S.Banner4_Title>
            {titleLine1}
            <br />
            {titleLine2}
          </S.Banner4_Title>
          <S.Banner4_Introduce1>
            {introduce1}
            <br />
            {introduce2}
          </S.Banner4_Introduce1>
          <S.Banner4_ButtonContainer>
            <Link to="/Job" style={{ textDecoration: "none" }}>
              <S.Banner4_Job_Button>내 근처 알바보기</S.Banner4_Job_Button>
            </Link>
          </S.Banner4_ButtonContainer>
        </S.Banner4_MainTitle>
      </S.Banner4_Container>
    </div>
  );
}

export default Banner4;
