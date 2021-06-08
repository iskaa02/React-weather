import * as React from "react";
import styled from "styled-components";
import * as Constants from "../../constants/constatns";
import { WeatherApi } from "../../logic";
import Chart from "./chart";
import ExtraWeather from "./ExtraWeather";
import WeatherCards from "./WeatherCards";

const DashBoardDiv = styled.div`
  display: flex;
  flex: 4;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${Constants.mainColorLight};
  }

  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 5px;
  }

  padding: 20px 90px;

  flex-direction: column;
  background-color: ${Constants.mainColorLight};
`;
const DashBoard = () => {
  return (
    <DashBoardDiv>
      <WeatherCards />
      <span>Today Highlights</span>
      <ExtraWeather />
    </DashBoardDiv>
  );
};
export default DashBoard;
