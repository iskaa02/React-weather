import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import * as Constants from "../../constants/constatns";
import { WeatherApi } from "../../logic";
import store, { RootState } from "../../Redux/store";
import TopBar from "../TopBar";
import Chart from "./chart";
import ExtraWeather from "./ExtraWeather";
import WeatherCards from "./WeatherCards";
const DashBoardDiv = styled.div`
  display: flex;
  padding: 0 90px 20px 90px;
  flex: 4;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props: any) => props.theme.mainColor};
  }

  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 5px;
  }
  span {
    font-weight: ${Constants.FW.bolder};
    color: ${(props: any) => props.theme.textSecondary};
  }

  flex-direction: column;
  background-color: ${(props: any) => props.theme.mainColor};
`;
const DashBoard = () => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <DashBoardDiv theme={theme}>
      <TopBar />
      <WeatherCards />
      <span>Today Highlights</span>
      <ExtraWeather />
    </DashBoardDiv>
  );
};
export default DashBoard;
