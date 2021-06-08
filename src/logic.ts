//
import axios from "axios";
import { useDispatch } from "react-redux";
import { apiCalls } from "./Redux";

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
    weather: {
      id: 0,
      main: 0,
      description: "",
      icon: "",
    },
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

export const formatCity = (searchbarInput: string) => {
  //formatting the search string to be used in api
  let search: any = searchbarInput;
  if (search !== "") {
    search = search.split(" ");
    let searchArray = [];
    for (let i = 0; i < search.length; i++) {
      searchArray.push(search[i]);
      if (i !== search.length - 1) {
        searchArray.push("%20");
      }
    }
  }

  //using the formatted search term in the url
  const apiSearch = `https://openweathermap.org/data/2.5/find?callback=jQuery19106513848554651638_1621278502697&q=${search.join(
    " "
  )}&type=lie&srt=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02&_=1621278502698`;

  return apiSearch;
};
const dispatch = useDispatch;

export const fetchCity = (apiSearch: any) => async (dispatch: any) => {
  // axios
  //   .get(apiSearch)
  //   .then((res) => JSON.parse(res.data.split("(")[1].split(")")[0]))
  //   .then((res) => {
  //     let autoCompleteResult = [];
  //     for (let i = 0; i < res.list.slice(0, 4).length; i++) {
  //       autoCompleteResult.push({
  //         //we store the city name, longitude, latitude and the country
  //         name: res.list[i].name,
  //         country: res.list[i].sys.country,
  //         lon: res.list[i].coord.lon,
  //         lat: res.list[i].coord.lat,
  //       });
  //     }
  //     dispatch(
  //       apiCalls.actions.searchRes({
  //         list: autoCompleteResult,
  //         count: res.count,
  //       })
  //     );
  //   });
};

type list = {
  name: string;
  country: string;
  lon: any;
  lat: any;
};

export const fetchWeatherData = () => async (dispatch: any) => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?id=89055&appid=7c429de32f4265da2ae7500c84b55058"
    )
    .then(
      (res) => {
        dispatch(apiCalls.actions.LOAD_DATA_SUCCESS(res.data));
      },
      (err) => {
        dispatch(apiCalls.actions.LOAD_DATA_SUCCESS({ name: "", country: "" }));
      }
    );
};
