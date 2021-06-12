//
import axios from "axios";
import { apiCalls } from "./Redux";
//this object is what the api will return
export const WeatherApi = {
  lat: 0,
  lon: 0,
  timezone: "",
  timezone_offset: 0,
  current: {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [
      {
        id: 0,
        main: "",
        description: "",
        icon: "",
      },
    ],
  },
  hourly: [
    {
      dt: 0,
      temp: 0,
      feels_like: 0,
      pressure: 0,
      humidity: 0,
      dew_point: 0,
      uvi: 0,
      clouds: 0,
      visibility: 0,
      wind_speed: 0,
      wind_deg: 0,
      wind_gust: 0,
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
      pop: 0,
    },
  ],
  daily: [
    {
      dt: 0,
      sunrise: 0,
      sunset: 0,
      moonrise: 0,
      moonset: 0,
      moon_phase: 0,
      temp: {
        day: 0,
        min: 0,
        max: 0,
        night: 0,
        eve: 0,
        morn: 0,
      },
      feels_like: {
        day: 0,
        night: 0,
        eve: 0,
        morn: 0,
      },
      pressure: 0,
      humidity: 0,
      dew_point: 0,
      wind_speed: 0,
      wind_deg: 0,
      wind_gust: 0,
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
      clouds: 0,
      pop: 0,
      uvi: 0,
    },
  ],
};

type list = {
  name: string;
  country: string;
  lon: any;
  lat: any;
};

export const fetchWeatherData = (location: list) => async (dispatch: any) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
    )
    .then(
      (res) => {
        const data = {
          data: res.data,
          country: location.country,
          city: location.name,
        };
        dispatch(apiCalls.actions.LOAD_DATA_SUCCESS(data));
      },
      (err) => {
        dispatch(apiCalls.actions.LOAD_DATA_SUCCESS({ name: "", country: "" }));
      }
    );
};

export const toFahrenheit = (C: number) => {
  const F = (C * 9) / 5 + 32;
  return F;
};
