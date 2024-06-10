import React from "react";
import Header from "../../components/Header";
import * as S from "./style";
import data from "../../data/contents";
import Trades from "../../assets/Trade.svg";

import { Image, ItemName, Price, Location, InterestChat } from "./style";

const title1 = "믿을만한 ";
const title2 = "이웃 간 중고거래";
const SubTitle = "동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.";

const Banner = () => (
  <S.Banner_Container>
    <S.Text>
      <S.Title>
        {title1} <br /> {title2}
      </S.Title>
      <S.SubTitle>{SubTitle}</S.SubTitle>
    </S.Text>
    <S.Banner_Trade>
      <img src={Trades} alt="Trades" />
    </S.Banner_Trade>
  </S.Banner_Container>
);

const TradeCard = ({ image, name, price, location, interest, chat }) => (
  <S.TradeCard>
    <Image src={image} alt={name} />
    <ItemName>{name}</ItemName>
    <Price>{price}</Price>
    <Location>{location}</Location>
    <InterestChat>
      관심 {interest} · 채팅 {chat}
    </InterestChat>
  </S.TradeCard>
);

const Trade = () => (
  <>
    <Header />
    <Banner />
    <S.Main_Container>
      <h1>중고거래 인기매물</h1>
      <S.ItemBox>
        {data.map((item, index) => (
          <S.Items>
            <TradeCard
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              location={item.location}
              interest={item.interest}
              chat={item.chat}
            />
          </S.Items>
        ))}
      </S.ItemBox>
    </S.Main_Container>
  </>
);

export default Trade;
