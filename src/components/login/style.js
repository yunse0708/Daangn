import styled from "styled-components";

export const QR_Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 2em;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 1.5em;
`;

export const Instructions = styled.div`
  margin-bottom: 1.5em;
  h2 {
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }
  ol {
    font-size: 1em;
    margin-left: 1em;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9em;
  color: #666;
`;

export const FAQ = styled.a`
  color: #ff8c00;
  text-decoration: none;
  cursor: pointer;
`;

export const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const QRCodeImage = styled.img`
  width: 300px;
  height: 300px;
`;

export const Login_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eaebee;
`;

export const Login_InContainer = styled.div`
  background-color: white;
  width: 50%;
  padding: 2em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Login_Title = styled.h1`
  font-size: 2.5em;
  font-family: GmarketSansTTFBold;
  text-align: center;
  margin-bottom: 1em;
`;

export const Login_Introduce = styled.p`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 2em;
`;
