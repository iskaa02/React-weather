import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../Redux/store";
import * as Constants from "../../constants/constants";
import * as Cards from "./ExtraWeatherCards";
const GridDiv = styled.div`
  width: "100%";
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
  justify-content: center;
  align-items: center;
  ${Constants.mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  ${Constants.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const ExtraWeather = () => {
  const weatherData = useSelector((state: RootState) => state.reducer.data);

  return (
    <div style={{ width: "100%", height: "100%", padding: "20px 0" }}>
      <GridDiv>
        <Cards.UV UV={weatherData.current.uvi} duration={2} delay={0.1} />
        <Cards.WindStatus
          duration={2}
          delay={0.2}
          Wind={weatherData.current.wind_speed}
          windDeg={weatherData.current.wind_deg}
        />
        <Cards.Sunrise
          delay={0.3}
          duration={2}
          sunrise={weatherData.current.sunrise}
          sunset={weatherData.current.sunset}
        />
        <Cards.AirPressure
          delay={0.4}
          pressure={weatherData.current.pressure}
          duration={2}
        />
        <Cards.Humidity
          delay={0.5}
          humidity={weatherData.current.humidity}
          duration={2}
        />
        <Cards.Visibility
          delay={0.6}
          visibility={weatherData.current.visibility}
          duration={2}
        />
      </GridDiv>
    </div>
  );
};
export default ExtraWeather;
