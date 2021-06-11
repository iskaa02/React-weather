import { motion } from "framer-motion";
import { VscLocation } from "react-icons/vsc";
import { useSelector } from "react-redux";
import styled from "styled-components";
import * as Constants from "../../constants/constants";
import { RootState } from "../../Redux/store";
import Chart from "./chart";
import SunriseIcon from "./Sunrise";

const Card = styled(motion.div)`
  border-radius: 15px;
  width: 100%;
  height: 200px;
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
  ${Constants.mediaQueries.mobile} {
    width: 215px;
    height: 200px;
  }
`;
export const WindStatus = ({ Wind, windDeg, duration, delay }: any) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <Card
      theme={theme}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration, type: "spring", delay: delay }}
    >
      <span>Wind status</span>
      <h2>
        {Wind}
        <i>km/h</i>
      </h2>

      <Card
        color={theme.textSecondary}
        animate={{ transform: `rotate(${windDeg}deg)` }}
        transition={{ type: "spring", duration: 1.5 }}
        style={{ width: 25, color: theme.textSecondary }}
      >
        <VscLocation size={25} />
      </Card>
    </Card>
  );
};

type sunsetAndRise = {
  sunrise: number;
  duration: number;
  delay: number;
  sunset: number;
};

export const Sunrise = (props: sunsetAndRise) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  const sunrise = new Date(props.sunrise * 1000);
  const sunset = new Date(props.sunset * 1000);

  return (
    <motion.div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: props.duration,
        type: "spring",
        delay: props.delay,
      }}
    >
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
    </motion.div>
  );
};

export const UV = ({ UV, duration, delay }: any) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <motion.div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration, type: "spring", delay: delay }}
    >
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
    </motion.div>
  );
};
export const Humidity = ({ humidity, duration, delay }: any) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <motion.div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration, type: "spring", delay: delay }}
    >
      <Card theme={theme}>
        <span>Humidity</span>
        <h2>
          {humidity}
          <sup>%</sup>
        </h2>
      </Card>
    </motion.div>
  );
};

export const Visibility = ({ visibility, duration, delay }: any) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <motion.div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration, type: "spring", delay: delay }}
    >
      <Card theme={theme}>
        <span>Visibility</span>
        <h2>
          {(visibility * 10 ** -3).toFixed(1)}
          <i>km</i>
        </h2>
      </Card>
    </motion.div>
  );
};

export const AirPressure = ({ pressure, duration, delay }: any) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <motion.div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration, type: "spring", delay: delay }}
    >
      <Card theme={theme}>
        <span>Air Pressure</span>
        <h2>
          {pressure} <i>hPa</i>
        </h2>
      </Card>
    </motion.div>
  );
};
