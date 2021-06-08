import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeatherData, fetchCity, WeatherApi } from "../logic";
// Define a type for the slice state
const searchRes = {
  count: 0,
  list: [{}],
};

interface globalState {
  active: boolean;
  data: typeof WeatherApi;
  search: typeof searchRes;
  // {
  //   list: [{ lon: number; lat: number; name: string; country: string }];
  //   selected: { lon: number; lat: number; name: string; country: string };
  // };
}

// Define the initial state using that type
const initialState: globalState = {
  active: false,
  data: WeatherApi,
  search: searchRes,

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
      state.data = action.payload;
    },
    searchRes: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { LOAD_DATA_SUCCESS } = apiCalls.actions;

// Other code such as selectors can use the imported `RootState` type

export default apiCalls.reducer;
