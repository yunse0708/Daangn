// style.js
import styled from "styled-components";

export const Banner5_Container = styled.div`
  width: 100vw;
  height: 95vh;
  background-color: #f6fdec;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner5_Town = styled.div`
  margin-right: 17.8em;
  margin-top: 10em;
`;
export const Banner5_MainTitle = styled.div`
  width: 100%;
  height: 80%;
  margin-left: 22em;
  text-align: left;
  margin-top: 30em;
  color: #fe6f0f;
  font-family: GmarketSansBold;
`;

export const Banner5_Title = styled.div`
  font-family: GmarketSansMedium;
  font-size: 3.2em;
  color: #212529;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;

export const Banner5_Introduce1 = styled.div`
  color: #7c7c7c;
  font-family: GmarketSansLight;
  font-size: 1.5em;
  margin-bottom: 1em;
`;

export const Banner5_ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.div`
  width: 11vw;
  height: 6vh;
  background-color: #e9ecef;
  border-radius: 10px;
  margin: 0.5rem;
  text-align: center;
  color: #212529;
  font-family: GmarketSansBold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner5_Company_Button = styled(Button)``;
