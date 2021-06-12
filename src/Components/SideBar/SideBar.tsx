import * as React from "react";
import { AiOutlineCloud } from "react-icons/ai";
import { useSelector } from "react-redux";
import styled from "styled-components";
import * as Constants from "../../constants/constants";
import { toFahrenheit } from "../../SharedLogic";
import { RootState } from "../../Redux/store";
import { animatedIcon } from "../WeatherIcon";
import SearchBar from "./SearchBar";

const SideBarDiv = styled.div`
  display: flex;
  width: 30vw;
  max-width: 300px;
  flex-direction: column;
  background-color: ${(props: any) => props.theme.secondaryColor};
  padding: 40px 20px;
  

  .icon {
    width: 100%;
    height: 250px;
    margin-top: 10px;
  }

  h1 {
    font-size: 4rem;
    font-weight: ${Constants.FW.regular};
    color: ${(props: any) => props.theme.textSecondary};

    margin: 0px;
  }
  h2 {
    margin-top: 10px;
    font-family: ${Constants.fontFamily};
    color: ${(props: any) => props.theme.textSecondary};
    font-weight: ${Constants.FW.regular};
    margin-bottom: 20px;
  }
  .separator {
    color: ${(props: any) => props.theme.textSecondary};
    width: 80%;
    align-self: center;
    margin: 30px 0;
  }
  .container {
    display: flex;
    align-items: center;
    padding: 0 15px;
    h3 {
      font-weight: ${Constants.FW.regular};
      color: ${(props: any) => props.theme.textSecondary};
      font-size: 0.9rem;
      margin-left: 10px;
    }
  }

  .city {
    padding: 10px 40px;
    border-radius: 10px;
    color: white;
    align-self: center;
    font-weight: ${Constants.FW.light};
    margin-top: auto;

    background-color: coral;
    span {
      font-size: 1.3rem;
      align-text: center;
    }
  }
  ${Constants.mediaQueries.tablet} {
    padding: 20px 10px;
    .city {
      padding: 10px 20px;
    }
    ${Constants.mediaQueries.tabletS} {
      width: 100%;
      justify-content: center;
      align-items: center;
      max-width: 650px;
      .icon {
        width: 70%;

        margin-top: 10px;
      }
      .city {
        color: white;
        align-self: center;
        margin-top:20px;
        font-weight: ${Constants.FW.light};
        
    
        background-color: coral;
        span {
          font-size: 1.5rem;
          align-text: center;
        }
    }
  }
`;
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const SideBar = () => {
  const weatherData = useSelector((state: RootState) => state.reducer.data);
  const locationData = useSelector((state: RootState) => state.reducer.search);
  const WeatherIcon = animatedIcon(
    weatherData.current.weather[0].main.toLowerCase(),
    true
  );
  const theme = useSelector((state: RootState) => state.reducer.theme);
  const metricUnit = useSelector(
    (state: RootState) => state.reducer.config.metricUnits
  );

  const date = new Date();
  return (
    <SideBarDiv theme={theme}>
      <SearchBar />
      <div
        className={"icon"}
        style={{
          backgroundImage: `url(${WeatherIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h1>
        {metricUnit
          ? Math.round(weatherData.current.temp)
          : Math.round(toFahrenheit(weatherData.current.temp))}
        <sup>{metricUnit ? "°C" : "°F"}</sup>
      </h1>
      <h2>
        {daysOfWeek[date.getDay()]}
        <span> {`${date.getHours()}: ${date.getMinutes()}`}</span>
      </h2>
      <hr className={"separator"} />
      <div className={"container"}>
        <AiOutlineCloud size={28} style={{ color: theme.textSecondary }} />
        <h3>{weatherData.current.weather[0].description}</h3>
      </div>
      <div className={"city"}>
        <span>
          {locationData.selected.name},{locationData.selected.country}
        </span>
      </div>
    </SideBarDiv>
  );
};

export default SideBar;
