import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header_Container = styled.div`
  position: fixed;
  width: 100%;
  height: 4em;
  background-color: #fff;
  display: flex; /* 세로 중앙 정렬을 위해 추가 */
  justify-content: center;
  align-items: center;
`;

export const Header_Logo = styled.div`
  height: 80%;
  margin-left: 20em;
  margin-right: auto;
`;

export const Header_Nav = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  height: 100%;
`;

export const Styled_Link = styled(Link)`
  font-family: GmarketSansTTFMedium;
  color: #4d5159;
  font-size: 1.1em;
  text-decoration: none;
  margin-left: 1.3em; // 링크들 사이에 간격 추가
  margin-top: 0.2em;
  &:hover {
    color: lightGray;
  }
`;

export const Search_Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Header_Search_Input = styled.input`
  width: 17em;
  height: 2.8em;
  border: none;
  border-radius: 5px;
  background-color: #f2f3f6;
  margin-left: 15rem;
  margin-top: 0.5em;
  padding-left: 0.5em;
  &:focus {
    outline: none;
  }
`;

export const Header_Search_Button = styled.div`
  width: 5em;
  height: 2.6em;
  align-items: center;
  border: 1px solid #f2f3f6;
  border-radius: 5px;
  margin-left: -1em; // 검색 입력란과 버튼 사이의 간격
  display: flex;
  text-align: center;
  justify-content: center;
  color: #212124;
  font-family: GmarkSansTTFMedium;
  font-size: 0.9rem;
  cursor: pointer;
`;
