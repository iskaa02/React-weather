import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../Redux/store";
import SearchBar from "./SideBar/SearchBar";
console.log("this");

export type cityList = {
  list: [];
  active: boolean;
  selected: boolean;
  lon: string;
  lat: string;
};

const CityDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) => props.theme.secondaryColor};
`;
const CitySelect = () => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <CityDiv theme={theme}>
      <SearchBar />
    </CityDiv>
  );
};
export default CitySelect;
