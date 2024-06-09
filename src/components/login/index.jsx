import React from "react";
import * as S from "./style";

function Login() {
  const { title, introduce } = {
    title: "당근채팅 로그인",
    introduce: "휴대전화의 카메라 또는 당근 앱으로 QR코드를 촬영해주세요.",
  };
  return (
    <div>
      <S.Login_Container>
        <S.Login_InContainer>
          <S.Login_Title>{title}</S.Login_Title>
          <S.Login_Introduce>{introduce}</S.Login_Introduce>
        </S.Login_InContainer>
      </S.Login_Container>
    </div>
  );
}

export default Login;
