import * as Constants from "../../constants/constatns";
import * as React from "react";
import styled from "styled-components";
import { AiOutlineMinus } from "react-icons/ai";
import { staticIcon } from "../WeatherIcon";
import { WeatherApi } from "../../logic";
const CardDiv = styled.div`
  width: 100px;
  padding: 20px;

  height: 140px;
  border-radius: 30px 0px 30px;

  background-color: ${Constants.SecondaryColorLight};
  h1 {
    font-size: 1rem;
    margin: 0;
    color: ${Constants.textSecondary};
    font-weight: ${Constants.FW.bold};
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .icon {
    width: 100%;
    height: 50%;
    margin: 0;
  }
`;
const Card = ({ tempMax, tempMin, string }: any) => {
  const WeatherIcon = staticIcon(string, true);

  return (
    <CardDiv>
      <h1>Sun</h1>
      <div
        className={"icon"}
        style={{
          background: `url(${WeatherIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {tempMax}
        <AiOutlineMinus
          style={{ transform: "rotate(90deg)", margin: "10px 0" }}
          size={20}
          color={Constants.textSecondary}
        />{" "}
        {tempMin}
      </div>
    </CardDiv>
  );
};

const CardsWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
`;
const WeatherCards = () => {
  return (
    <CardsWrapper>
      <Card tempMax={18} tempMin={6} string={"few clouds"} />
      <Card tempMax={18} tempMin={6} string={"few clouds"} />
      <Card tempMax={18} tempMin={6} string={"few clouds"} />
      <Card tempMax={18} tempMin={6} string={"few clouds"} />
    </CardsWrapper>
  );
};
export default WeatherCards;
