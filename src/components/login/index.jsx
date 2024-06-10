import React from "react";
import * as S from "./style";
import Header from "../../components/Header";
import QR from "../../assets/QR.svg"; // QR 코드 이미지를 여기에 맞는 경로로 수정하세요.

const QRCode = () => {
  return (
    <S.QR_Container>
      <S.TextContainer>
        <S.Instructions>
          <h2>휴대전화로 QR 코드 촬영하기</h2>
          <ol>
            <li>휴대전화에서 카메라 앱을 열어요.</li>
            <li>카메라로 코드를 스캔해요.</li>
            <li>당근채팅 로그인하기 팝업을 클릭해요.</li>
          </ol>
        </S.Instructions>
        <S.Instructions>
          <h2>당근 앱으로 QR 코드 촬영하기</h2>
          <ol>
            <li>휴대전화에서 당근 앱을 열어요.</li>
            <li>채팅 탭에서 QR 코드 스캐너 (🔍)를 선택해요.</li>
            <li>스캐너로 코드를 스캔해요.</li>
            <li>당근채팅 로그인하기 팝업을 선택해요.</li>
          </ol>
        </S.Instructions>
        <S.FooterText>
          아직 계정이 없다면 모바일 앱에서 회원가입해 주세요.{" "}
          <S.FAQ href="#">자주 묻는 질문</S.FAQ>
        </S.FooterText>
      </S.TextContainer>
      <S.QRCodeContainer>
        <S.QRCodeImage src={QR} alt="QR" />
      </S.QRCodeContainer>
    </S.QR_Container>
  );
};

function Login() {
  const { title, introduce } = {
    title: "당근채팅 로그인",
    introduce: "휴대전화의 카메라 또는 당근 앱으로 QR코드를 촬영해주세요.",
  };

  return (
    <div>
      <Header />
      <S.Login_Container>
        <S.Login_InContainer>
          <S.Login_Title>{title}</S.Login_Title>
          <S.Login_Introduce>{introduce}</S.Login_Introduce>
          <QRCode />
        </S.Login_InContainer>
      </S.Login_Container>
    </div>
  );
}

export default Login;
