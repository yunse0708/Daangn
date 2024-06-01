import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Header_Container = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #fff;
  display: flex;
`;

export const Header_InContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 10%;
`;

export const Header_Logo = styled.div`
  height: 80vh;
  padding-left: 5vw;
`;

export const Header_Nav = styled.div`
  display: flex;
  max-width: 100vw;
  align-items: center;
  height: 100%;
  margin-left: 20px;
`;

export const Styled_Link = styled(Link)`
  font-family: GmarketSansTTFMedium;
  color: #4d5159;
  font-size: 18px;
  text-decoration: none;
  padding-left: 13px;
  padding-top: 2px;
  &:hover {
    color: lightGray;
  }
  ${(props) =>
    props.active &&
    css`
      color: #fe6f0f;
    `}
  ${(props) =>
    props.active &&
    css`
      &:hover {
        color: #fe6f0f;
      }
    `}
`;

export const Search_Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 200px;
`;

export const Header_Search_Input = styled.input`
  width: 17em;
  height: 2.8em;
  border: none;
  border-radius: 0.3em;
  background-color: #f2f3f6;
  padding-left: 8px;
  padding-top: 5px;
  &:focus {
    outline: none;
  }
`;

export const Header_Search_Button = styled.div`
  width: 5em;
  height: 2.6em;
  align-items: center;
  border: 0.06em solid #f2f3f6;
  border-radius: 0.3em;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212124;
  font-family: GmarketSansTTFMedium;
  font-size: 14px;
  text-decoration: none;
  position: relative;
`;

export const Search_Label = styled.label`
  display: flex;
  font-family: GmarketSansTTFMedium;
  color: #4d5159;
  font-size: 18px;
`;
