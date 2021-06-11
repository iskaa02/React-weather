import { motion, useAnimation } from "framer-motion";
import * as React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as Constants from "../../constants/constants";
import { apiCalls } from "../../Redux";
import { RootState } from "../../Redux/store";
import { staticIcon } from "../WeatherIcon";
import { toFahrenheit } from "../../logic";

const CardDiv = styled(motion.div)`
  width: 100px;
  padding: 15px 5px;
  margin: 10px 5px;
  height: 140px;
  border-radius: 30px 5px 30px;

  background-color: ${(props: any) => props.theme.secondaryColor};
  h1 {
    font-size: 1rem;
    margin: 0;
    color: ${(props: any) => props.theme.textSecondary};
    font-weight: ${Constants.FW.bold};
  }

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .icon {
    width: 100%;
    height: 50%;
    margin: 0;
  }
`;
type card = {};

const Card = ({ data, delay, type, weekIsActive, key1 }: any) => {
  const metricUnit = useSelector(
    (state: RootState) => state.reducer.config.metricUnits
  );
  const theme = useSelector((state: RootState) => state.reducer.theme);
  const sunset = new Date(
    useSelector((state: RootState) => state.reducer.data.current.sunset) * 1000
  );
  const sunrise = new Date(
    useSelector((state: RootState) => state.reducer.data.current.sunrise) * 1000
  );
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const time = new Date(data.dt * 1000);
  const day = daysOfWeek[time.getDay()];
  const tempMax = metricUnit
    ? Math.round(data.temp.max)
    : Math.round(toFahrenheit(data.temp.max));
  const tempMin = metricUnit
    ? Math.round(data.temp.min)
    : Math.round(toFahrenheit(data.temp.min));

  const description = data.weather[0].main.toLowerCase();
  const isDay = () => {
    if (time.getHours <= sunset.getHours && time.getHours >= sunrise.getHours) {
      return true;
    }
    return false;
  };
  const WeatherIcon = staticIcon(description, isDay());
  const controls = useAnimation();
  React.useEffect(() => {
    controls.set({ x: 30, opacity: 0 });
    controls.start(() => ({
      opacity: 1,
      x: 0,
      transition: { delay: delay, type: "spring", duration: 1 },
    }));
  }, [weekIsActive]);

  return (
    <CardDiv theme={theme} animate={controls}>
      <h1>{type === "week" ? day : `${time.getHours()}:00`}</h1>
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
        {type === "week"
          ? tempMax
          : metricUnit
          ? Math.round(data.temp) + " °C"
          : Math.round(toFahrenheit(data.temp)) + " °F"}
        {type === "week" && (
          <AiOutlineMinus
            style={{ transform: "rotate(90deg)", margin: "10px 0" }}
            size={20}
            color={theme.textSecondary}
          />
        )}
        {type === "week" && tempMin}
      </div>
    </CardDiv>
  );
};
const Selector = styled.div`
  width: fit-content;

  span {
    cursor: pointer;
    width: 50px;
    white-space: nowrap;
  }
  span:first-child {
    margin-right: 50px;
  }

  .indicator {
    position: relative;

    width: 75px;

    height: 3px;
    background-color: ${(props: any) => props.theme.textSecondary};
    border-radius: 1px;
  }
`;
const CardsWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const WeatherCards = () => {
  const [weekIsActive, setWeekIsActive] = React.useState(true);
  const indicator = {
    left: {
      marginLeft: "0px",
    },
    right: {
      marginLeft: "120px",
    },
  };

  const theme = useSelector((state: RootState) => state.reducer.theme);
  const weatherData = useSelector((state: RootState) => state.reducer.data);
  const daily =
    weatherData.daily.length === 8
      ? [
          weatherData.daily[1],
          weatherData.daily[2],
          weatherData.daily[3],
          weatherData.daily[4],
          weatherData.daily[5],
          weatherData.daily[6],
          weatherData.daily[7],
        ]
      : [weatherData.daily[0]];
  const hourly =
    weatherData.hourly.length > 8
      ? [
          weatherData.hourly[0],
          weatherData.hourly[2],
          weatherData.hourly[4],
          weatherData.hourly[6],
          weatherData.hourly[8],
          weatherData.hourly[10],
        ]
      : [weatherData.hourly[0]];

  return (
    <>
      <Selector theme={theme}>
        <div>
          <span
            onClick={() => {
              setWeekIsActive(true);
            }}
          >
            This Week
          </span>
          <span
            onClick={() => {
              setWeekIsActive(false);
            }}
          >
            This Day
          </span>
        </div>

        <motion.div
          className={"indicator"}
          variants={indicator}
          animate={weekIsActive ? "left" : "right"}
          transition={{
            type: "spring",
            damping: 10,
          }}
        ></motion.div>
      </Selector>
      <CardsWrapper theme={theme}>
        {weekIsActive
          ? daily.map((item, i) => (
              <Card
                data={item}
                delay={(i + 1) / 10}
                key={i}
                type={"week"}
                weekIsActive={weekIsActive}
              />
            ))
          : hourly.map((item, i) => (
              <Card
                data={item}
                delay={(i + 1) / 10}
                key={i}
                key1={i}
                type={"day"}
                weekIsActive={weekIsActive}
              />
            ))}
      </CardsWrapper>
    </>
  );
};
export default WeatherCards;
