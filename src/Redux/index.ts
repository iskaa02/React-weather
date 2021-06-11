import { createSlice } from "@reduxjs/toolkit";
import { dark, light } from "../constants/constants";
import { WeatherApi } from "../logic";

// Define a type for the slice state
const searchRes = {
  count: 0,
  list: [{}],
  selected: { lon: 0, lat: 0, name: "Search your city", country: "" },
};

interface globalState {
  active: boolean;
  data: typeof WeatherApi;
  search: typeof searchRes;
  theme: typeof light;
  config: {
    metricUnits: boolean;
  };
  // {
  //   list: [{ lon: number; lat: number; name: string; country: string }];
  // };
}

// Define the initial state using that type
const initialState: globalState = {
  active: false,
  data: WeatherApi,
  search: searchRes,
  theme: light,
  config: {
    metricUnits: false,
  },
  // {

  // list: [{ lon: 0, lat: 0, name: "", country: "" }],
  // selected: { lon: 0, lat: 0, name: "", country: "" },
  // },
};
export const apiCalls = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    LOAD_DATA_SUCCESS: (state, action) => {
      state.data = action.payload.data;
      state.active = true;
      state.search.selected.name = action.payload.city;
      state.search.selected.country = action.payload.country;
    },
    THEME_TOGGLE: (state) => {
      state.theme.theme === "light"
        ? (state.theme = dark)
        : (state.theme = light);
    },
    UNIT_TOGGLE: (state, action) => {
      state.config.metricUnits = action.payload;
    },
  },
});

export const { LOAD_DATA_SUCCESS, THEME_TOGGLE, UNIT_TOGGLE } =
  apiCalls.actions;

export default apiCalls.reducer;
