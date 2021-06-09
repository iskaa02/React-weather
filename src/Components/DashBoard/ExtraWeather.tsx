import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { WeatherApi } from "../../logic";
import { RootState } from "../../Redux/store";
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
  const weatherData = useSelector((state: RootState) => state.reducer.data);

  return (
    <div style={{ width: "100%", height: "100%", padding: "20px 0" }}>
      <GridDiv>
        <Cards.UV UV={weatherData.current.uvi} />
        <Cards.WindStatus
          Wind={weatherData.current.wind_speed}
          windDeg={weatherData.current.wind_deg}
        />
        <Cards.Sunrise
          sunrise={weatherData.current.sunrise}
          sunset={weatherData.current.sunset}
        />
        <Cards.AirPressure pressure={weatherData.current.pressure} />
        <Cards.Humidity humidity={weatherData.current.humidity} />
        <Cards.Visibility visibility={weatherData.current.visibility} />
      </GridDiv>
    </div>
  );
};
export default ExtraWeather;
