import * as React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { animatedIcon } from "../WeatherIcon";
import { AiOutlineCloud } from "react-icons/ai";
import * as Constants from "../../constants/constatns";
import { WeatherApi } from "../../logic";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const SideBarDiv = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  flex: 1;
  flex-direction: column;
  background-color: ${Constants.SecondaryColorLight};
  padding: 40px 20px;

  .icon {
    width: 100%;
    height: 40%;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 4rem;
    font-weight: ${Constants.FW.regular};
    margin: 0px;
  }
  h2 {
    margin-top: 10px;
    font-family: ${Constants.fontFamily};
    font-weight: ${Constants.FW.regular};
    margin-bottom: 20px;
  }
  .separator {
    color: ${Constants.textSecondary};
    width: 80%;
    align-self: center;
    margin: 30px 0;
  }
  .container {
    display: flex;
    align-items: center;
    padding: 0 15px;
    h3 {
      font-weight: ${Constants.FW.light};
      color: ${Constants.textSecondary};
      font-size: 0.9rem;
      margin-left: 10px;
    }
  }

  .city {
    padding: 10px 40px;
    border-radius: 10px;
    color: white;
    align-self: center;
    position: relative;
    top: 10px;
    justify-self: center;
    background-color: coral;
    span {
      font-size: 1.5rem;
      align-text: center;
      white-space: nowrap;
    }
  }
`;

const SideBar = () => {
  const WeatherIcon = animatedIcon("rainy", true);
  const weatherData = useSelector((state: RootState) => state.reducer.data);
  return (
    <SideBarDiv>
      <SearchBar />
      <div
        className={"icon"}
        style={{
          background: `url(${WeatherIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h1>
        {weatherData.current.temp}
        <sup>°C</sup>
      </h1>
      <h2>
        Monday <span>16:00</span>
      </h2>
      <hr className={"separator"} />
      <div className={"container"}>
        <AiOutlineCloud size={28} style={{ color: Constants.textSecondary }} />
        <h3>{weatherData.current.weather.description}</h3>
      </div>
      <div className={"city"}>
        <span>Al Bayda, Libya</span>
      </div>
    </SideBarDiv>
  );
};

export default SideBar;
