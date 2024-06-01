// style.js
import styled from "styled-components";

export const Banner1_Container = styled.div`
  width: 100vw;
  height: 85vh;
  background-color: #fffae0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Banner1_Hi = styled.div`
  height: 40vh;
  margin-right: 2em;
  margin-bottom: 2em;

  @media (min-width: 768px) {
    height: 80vh;
    margin-right: 10vw;
    margin-bottom: 10%;
  }
`;

export const Banner1_MainTitle = styled.div`
  width: 100vw;
  height: auto;
  text-align: center;
  margin-top: 2em;

  @media (min-width: 768px) {
    width: 60vw;
    height: 80vh;
    text-align: left;
    margin-left: 20vw;
    margin-top: 30%;
  }
`;

export const Banner1_Title = styled.div`
  font-family: GmarketSansMedium;
  font-size: 32px;
  color: #212529;
  margin-bottom: 0.5em;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const Banner1_Introduce1 = styled.div`
  color: #7c7c7c;
  font-family: GmarketSansLight;
  font-size: 18px;
  margin-bottom: 1em;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Banner1_ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Button = styled.a`
  width: 30vw;
  height: 6vh;
  background-color: #ff6f0f;
  border-radius: 8px;
  margin: 0.5em;
  color: white;
  font-family: GmarketSansBold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 0.5em;
  font-size: 16px;

  @media (min-width: 768px) {
    width: 11vw;
  }
`;

export const Banner1_Google_Button = styled(Button)``;
export const Banner1_Apple_Button = styled(Button)``;
