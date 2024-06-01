import styled from "styled-components";

export const Banner4_Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner4_Job = styled.div`
  margin-left: 10vw;
  margin-top: 3vh;
`;

export const Banner4_MainTitle = styled.div`
  text-align: left;
  margin-top: 10vh;
  color: #fe6f0f;
  font-family: GmarketSansBold;
`;

export const Banner4_Title = styled.div`
  font-family: GmarketSansMedium;
  font-size: 40px;
  color: #212529;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;

export const Banner4_Introduce1 = styled.div`
  color: #7c7c7c;
  font-family: GmarketSansLight;
  font-size: 24px;
  margin-bottom: 1.5em;
`;

export const Banner4_ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
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
  font-size: 18px;
`;

export const Banner4_Job_Button = styled(Button)``;
