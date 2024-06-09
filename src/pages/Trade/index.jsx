// src/pages/Trade/index.jsx
import React from "react";

import {
  HeaderContainer,
  Title,
  SubTitle,
  PopularItemsContainer,
  ItemsGrid,
  Card,
  Image,
  ItemName,
  Price,
  Location,
  InterestChat,
} from "./style";

// Header 컴포넌트
const TradeHeader = () => (
  <HeaderContainer>
    <Title>믿을만한 이웃 간 중고거래</Title>
    <SubTitle>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</SubTitle>
  </HeaderContainer>
);

// ItemCard 컴포넌트
const TradeItemCard = ({ image, name, price, location, interest, chat }) => (
  <Card>
    <Image src={image} alt={name} />
    <ItemName>{name}</ItemName>
    <Price>{price}</Price>
    <Location>{location}</Location>
    <InterestChat>
      관심 {interest} · 채팅 {chat}
    </InterestChat>
  </Card>
);

// PopularItems 컴포넌트
const TradePopularItems = () => {
  const items = [
    {
      image: "https://via.placeholder.com/150", // 실제 이미지 URL로 변경
      name: "시디즈 의자",
      price: "10,000원",
      location: "세종시 고운동",
      interest: 15,
      chat: 41,
    },
    {
      image: "https://via.placeholder.com/150", // 실제 이미지 URL로 변경
      name: "컴터 하나더 팔아요~",
      price: "100,000원",
      location: "경기도 부천시 중1동",
      interest: 35,
      chat: 58,
    },
    {
      image: "https://via.placeholder.com/150", // 실제 이미지 URL로 변경
      name: "스트라이더 밸런스바이크",
      price: "40,000원",
      location: "서울 송파구 잠실동",
      interest: 11,
      chat: 46,
    },
    // 다른 아이템들 추가
  ];

  return (
    <PopularItemsContainer>
      <h2>중고거래 인기매물</h2>
      <ItemsGrid>
        {items.map((item, index) => (
          <TradeItemCard
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
            location={item.location}
            interest={item.interest}
            chat={item.chat}
          />
        ))}
      </ItemsGrid>
    </PopularItemsContainer>
  );
};

// Trade 컴포넌트
const Trade = () => (
  <div>
    <TradeHeader />
    <TradePopularItems />
  </div>
);

export default Trade;
