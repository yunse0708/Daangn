import styled from "styled-components";

export const QR_Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5em;

  @media screen and (min-width: 768px) {
    width: 60%;
    margin-left: 1.5em;
    margin-top: 0;
  }
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
  width: 100%;
  margin-top: 1.5em;

  @media screen and (min-width: 768px) {
    width: 40%;
    margin-top: 0;
  }
`;

export const QRCodeImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

export const Login_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 91.7vh;
  background-color: #eaebee;
`;

export const Login_InContainer = styled.div`
  background-color: white;
  width: 100vw;
  max-width: 600px;
  padding: 2em; /* 내부 여백을 3em으로 조정 */
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
