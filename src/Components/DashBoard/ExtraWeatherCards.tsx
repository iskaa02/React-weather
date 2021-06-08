import styled from "styled-components";
import * as Constants from "../../constants/constatns";
import { VscLocation } from "react-icons/vsc";
import Chart from "./chart";
import SunriseIcon from "./Sunrise";

const Card = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  span {
    color: ${Constants.textSecondary};
    align-self: flex-start;
    font-size: 1.1rem;
    margin-top: 5px;
  }
  h2 {
    margin: 10px 0;
    font-size: 3rem;
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
    font-weight: ${Constants.FW.regular};
  }
`;

export const WindStatus = () => {
  return (
    <Card>
      <span>Wind status</span>
      <h2>
        7.71<i>km/h</i>
      </h2>
      <span>
        <VscLocation size={25} style={{ transform: "rotate(65deg)" }} />
      </span>
    </Card>
  );
};

export const Sunrise = () => {
  return (
    <Card>
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
        <h3 style={{ marginLeft: 20 }}>6:00</h3>
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
        <h3 style={{ marginLeft: 20 }}>19:00</h3>
      </div>
    </Card>
  );
};

export const UV = () => {
  return (
    <Card style={{ alignItems: "center" }}>
      <span style={{ margin: 0 }}>UV Index</span>
      <Chart UV={3} size={170} />
      <span
        style={{
          justifySelf: "center",
          alignSelf: "center",
          position: "relative",
          top: "-70px",
          fontSize: "1.7rem",
          marginBottom: "-50px",
          color: "#000",
          fontWeight: 700,
        }}
      >
        3
      </span>
    </Card>
  );
};

export const Humidity = () => {
  return (
    <Card>
      <span>Humidity</span>
      <h2>
        7.71<sup>%</sup>
      </h2>
    </Card>
  );
};

export const Visibility = () => {
  return (
    <Card>
      <span>Visibility</span>
      <h2>
        7.71<i>km</i>
      </h2>
    </Card>
  );
};

export const AirPressure = () => (
  <Card>
    <span>Air Pressure</span>
    <h2>7.71</h2>
  </Card>
);
