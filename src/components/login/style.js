// style.js
import styled from "styled-components";

export const Login_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 세로 크기에 꽉 차도록 설정 */
  background-color: #eaebee;
`;

export const Login_InContainer = styled.div`
  background-color: white;
  width: 60%;
  height: 100%;
`;

export const Login_Title = styled.h1`
  font-size: 24px;
`;

export const Login_Introduce = styled.p`
  font-size: 16px;
`;

export const Login_footer = styled.div`
  width: 100%;
  height: 20%;
  background-color: #fffae0;
  bottom: 0;
`;
