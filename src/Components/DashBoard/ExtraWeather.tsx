import * as React from "react";
import styled from "styled-components";
import { WeatherApi } from "../../logic";
import * as Cards from "./ExtraWeatherCards";
const GridDiv = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
  justify-content: center;
  align-items: center;
`;

const ExtraWeather = () => {
  return (
    <div style={{ width: "100%", height: "100%", padding: "20px 0" }}>
      <GridDiv>
        <Cards.UV />
        <Cards.WindStatus />
        <Cards.Sunrise />
        <Cards.AirPressure />
        <Cards.Humidity />
        <Cards.Visibility />
      </GridDiv>
    </div>
  );
};
export default ExtraWeather;
