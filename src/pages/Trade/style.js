import styled from "styled-components";

export const Banner_Container = styled.div`
  background-color: #fff1aa;
  width: 100%;
  height: 37vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  flex-direction: column;
  margin-top: 3em;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
`;

export const Banner_Trade = styled.div`
  margin-top: 3.4%;
  left: 11em;
`;

export const SubTitle = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 1em;
`;

export const Main_Container = styled.div`
  margin: 3em;
  text-align: center;
  justify-content: center;
`;

export const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.2fr);
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 1em;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1em;
`;

export const TradeCard = styled.div`
  border-radius: 10px;
  text-align: start;
  justify-content: center;
`;

export const Image = styled.img`
  border-radius: 10px;
  height: 250px;
  width: 250px;
  align-items: center;
  margin-bottom: 0.5em;
`;

export const ItemName = styled.div`
  font-family: GmarketSansTTFLight;
  font-size: 1em;
  width: 100%;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: -0.5em;
`;

export const Price = styled.p`
  font-size: 1em;
  margin-bottom: -0.5em;
`;

export const Location = styled.p`
  font-size: 0.9em;
  color: #666;
  margin-bottom: -0.5em;
`;

export const InterestChat = styled.p`
  font-size: 0.8em;
  color: #999;
`;
