import styled from "styled-components";

export const Banner2_Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner2_Transaction = styled.div`
  margin-left: 20em;
  margin-top: 1em;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2em;
  }
`;

export const Banner2_MainTitle = styled.div`
  width: 100%;
  height: 80%;
  text-align: left;
  margin-top: 20em;
  color: #fe6f0f;
  font-family: GmarketSansBold;

  @media (max-width: 768px) {
    margin-top: 10em;
  }
`;

export const Banner2_Title = styled.div`
  font-family: GmarketSansMedium;
  font-size: 48px;
  color: #212529;
  margin-bottom: 0.5em;
  margin-top: 0.5em;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Banner2_Introduce1 = styled.div`
  color: #7c7c7c;
  font-family: GmarketSansLight;
  font-size: 24px;
  margin-bottom: 1.5em;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Banner2_ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.a`
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

  @media (max-width: 768px) {
    width: 20vw;
    height: 8vh;
    font-size: 14px;
  }
`;

export const Banner2_Trade_Button = styled(Button)``;
export const Banner2_Trust_Button = styled(Button)``;
