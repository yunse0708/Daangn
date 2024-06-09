import React from "react";
import * as S from "./style";
import Town from "../../../assets/Town.svg";

function Banner3() {
  const mainTitle = "동네생활";
  const titleLine1 = "이웃만 아는";
  const titleLine2 = "동네 정보와 이야기";
  const introduce1 = "우리동네의 다양한 정보와 이야기를";
  const introduce2 = "공감과 댓글로 나누어요.";

  return (
    <div>
      <S.Banner3_Container>
        <S.Banner3_MainTitle>
          {mainTitle}
          <S.Banner3_Title>
            {titleLine1}
            <br />
            {titleLine2}
          </S.Banner3_Title>
          <S.Banner3_Introduce1>
            {introduce1}
            <br />
            {introduce2}
          </S.Banner3_Introduce1>
        </S.Banner3_MainTitle>
        <S.Banner3_Town>
          <img src={Town} className="Town" alt="Town" />
        </S.Banner3_Town>
      </S.Banner3_Container>
    </div>
  );
}

export default Banner3;
