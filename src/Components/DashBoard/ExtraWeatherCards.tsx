import styled from "styled-components";
import * as Constants from "../../constants/constatns";
import { VscLocation } from "react-icons/vsc";
import Chart from "./chart";
import SunriseIcon from "./Sunrise";
import { isPropertySignature } from "typescript";
import store, { RootState } from "../../Redux/store";
import { useSelector } from "react-redux";

const Card = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props: any) => props.theme.secondaryColor};

  span {
    color: ${(props: any) => props.theme.textSecondary};
    font-weight: ${Constants.FW.bold};
    align-self: flex-start;
    font-size: 1.1rem;
    margin-top: 5px;
  }
  h2 {
    margin: 10px 0;
    font-size: 3rem;
    color: ${(props: any) => props.theme.textSecondary};
    font-family: ${Constants.fontFamily};
    font-weight: ${Constants.FW.regular};
    i {
      font-size: 1.5rem;
      font-style: normal;
    }
    sup {
      font-size: 1.5rem;
    }
  }
  h3 {
    font-size: 1.3rem;
    color: ${(props: any) => props.theme.textSecondary};
    font-weight: ${Constants.FW.regular};
  }
`;

export const WindStatus = ({ Wind, windDeg }: any) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <Card theme={theme}>
      <span>Wind status</span>
      <h2>
        {Wind}
        <i>km/h</i>
      </h2>
      <span>
        <VscLocation size={25} style={{ transform: `rotate(${windDeg}deg)` }} />
      </span>
    </Card>
  );
};

type sunsetAndRise = {
  sunrise: number;
  sunset: number;
};

export const Sunrise = (props: sunsetAndRise) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  const sunrise = new Date(props.sunrise * 1000);
  const sunset = new Date(props.sunset * 1000);

  console.log(new Date(1623122684 * 1000).getMinutes());
  return (
    <Card theme={theme}>
      <span>Sunrise & Sunset</span>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: 20,
        }}
      >
        <SunriseIcon down={false} />
        <h3
          style={{ marginLeft: 20 }}
        >{`${sunrise.getHours()}:${sunrise.getMinutes()}`}</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: 20,
          alignItems: "center",
        }}
      >
        <SunriseIcon down={true} />
        <h3
          style={{ marginLeft: 20 }}
        >{`${sunset.getHours()}:${sunset.getMinutes()}`}</h3>
      </div>
    </Card>
  );
};

export const UV = ({ UV }: any) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <Card style={{ alignItems: "center" }} theme={theme}>
      <span style={{ margin: 0 }}>UV Index</span>
      <Chart UV={UV} size={170} />
      <span
        style={{
          justifySelf: "center",
          alignSelf: "center",
          position: "relative",
          top: "-70px",
          fontSize: "1.7rem",
          marginBottom: "-50px",
          color: theme.textSecondary,
          fontWeight: 700,
        }}
      >
        {Math.floor(UV)}
      </span>
    </Card>
  );
};
export const Humidity = ({ humidity }: any) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <Card theme={theme}>
      <span>Humidity</span>
      <h2>
        {humidity}
        <sup>%</sup>
      </h2>
    </Card>
  );
};

export const Visibility = ({ visibility }: any) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <Card theme={theme}>
      <span>Visibility</span>
      <h2>
        {(visibility * 10 ** -3).toFixed(1)}
        <i>km</i>
      </h2>
    </Card>
  );
};

export const AirPressure = ({ pressure }: any) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <Card theme={theme}>
      <span>Air Pressure</span>
      <h2>
        {pressure} <i>hPa</i>
      </h2>
    </Card>
  );
};
