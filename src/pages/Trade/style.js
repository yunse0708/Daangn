// src/pages/Trade/styled.js
import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #fff4cc;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
`;

export const SubTitle = styled.p`
  font-size: 1.2em;
  color: #666;
`;

export const PopularItemsContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ItemsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 15px;
  text-align: center;
  width: 200px;
`;

export const Image = styled.img`
  border-radius: 10px;
  height: 150px;
  width: 100%;
`;

export const ItemName = styled.h3`
  font-size: 1.2em;
  color: #333;
`;

export const Price = styled.p`
  font-size: 1em;
  color: #007bff;
`;

export const Location = styled.p`
  font-size: 0.9em;
  color: #666;
`;

export const InterestChat = styled.p`
  font-size: 0.8em;
  color: #999;
`;
