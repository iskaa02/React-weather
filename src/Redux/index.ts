import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherApi } from "../logic";
import { dark, light } from "../constants/constatns";

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
  },
});

export const { LOAD_DATA_SUCCESS, THEME_TOGGLE } = apiCalls.actions;

// Other code such as selectors can use the imported `RootState` type

export default apiCalls.reducer;
