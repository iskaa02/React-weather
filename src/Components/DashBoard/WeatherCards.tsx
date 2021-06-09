import * as Constants from "../../constants/constatns";
import * as React from "react";
import styled from "styled-components";
import { AiOutlineMinus } from "react-icons/ai";
import { staticIcon } from "../WeatherIcon";
import { WeatherApi } from "../../logic";
import store, { RootState } from "../../Redux/store";
import { useSelector } from "react-redux";

const CardDiv = styled.div`
  width: 100px;
  padding: 15px 5px;

  height: 140px;
  border-radius: 30px 0px 30px;

  background-color: ${(props: any) => props.theme.secondaryColor};
  h1 {
    font-size: 1rem;
    margin: 0;
    color: ${(props: any) => props.theme.textSecondary};
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
  const theme = useSelector((state: RootState) => state.reducer.theme);

  const WeatherIcon = staticIcon(string, true);

  return (
    <CardDiv theme={theme}>
      <h1>Sun</h1>
      <div
        className={"icon"}
        style={{
          backgroundImage: `url(${WeatherIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: theme.textSecondary,
        }}
      >
        {tempMax}
        <AiOutlineMinus
          style={{ transform: "rotate(90deg)", margin: "10px 0" }}
          size={20}
          color={theme.textSecondary}
        />{" "}
        {tempMin}
      </div>
    </CardDiv>
  );
};
const Selector = styled.div`
  span {
    margin-right: 50px;
    cursor: pointer;
  }
`;
const CardsWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
`;
const WeatherCards = () => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <>
      <Selector>
        <span>This Week</span>
        <span>This Day</span>
        <div className={"indicator"}></div>
      </Selector>
      <CardsWrapper>
        <Card tempMax={18} tempMin={6} string={"few clouds"} />
        <Card tempMax={18} tempMin={6} string={"few clouds"} />
        <Card tempMax={18} tempMin={6} string={"few clouds"} />
        <Card tempMax={18} tempMin={6} string={"few clouds"} />
      </CardsWrapper>
    </>
  );
};
export default WeatherCards;
