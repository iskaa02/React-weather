import { configureStore } from "@reduxjs/toolkit";
import reducer from "./index";
//REDUX stoer
const store = configureStore({
  reducer: { reducer },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
