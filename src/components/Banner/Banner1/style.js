// style.js
import styled from "styled-components";

export const Banner1_Container = styled.div`
  width: 100vw;
  height: 95vh;
  background-color: #fffae0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner1_Hi = styled.div`
  height: 80vh;
  margin-right: 12em;
`;

export const Banner1_MainTitle = styled.div`
  width: 100%;
  height: 80%;
  margin-left: 23em;
  text-align: left;
  margin-top: 30em;
`;

export const Banner1_Title = styled.div`
  font-family: GmarketSansMedium;
  font-size: 3.2em;
  color: #212529;
  margin-bottom: 0.5em;
`;

export const Banner1_Introduce1 = styled.div`
  color: #7c7c7c;
  font-family: GmarketSansLight;
  font-size: 1.5em;
  margin-bottom: 1em;
`;

export const Banner1_ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.a`
  width: 11vw;
  height: 6vh;
  background-color: #ff6f0f;
  border-radius: 10px;
  margin: 0.4em;
  color: white;
  font-family: GmarketSansBold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 0.5em;
`;

export const Banner1_Google_Button = styled(Button)``;
export const Banner1_Apple_Button = styled(Button)``;
