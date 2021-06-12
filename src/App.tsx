import * as React from "react";
import styled from "styled-components";
import DashBoard from "./Components/DashBoard/DashBoard";
import * as Constants from "./constants/constants";
import SideBar from "./Components/SideBar/SideBar";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import CitySelect from "./Components/CitySelect";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #e2e2e2;
  ${Constants.mediaQueries.tabletS} {
    height: auto;
    overflow-y: scroll;
    flex-direction: column;
  }
`;

const App = () => {
  const selectedCity = useSelector((state: RootState) => state.reducer.active);
  if (selectedCity) {
    return (
      <Wrapper>
        <SideBar />
        <DashBoard />
      </Wrapper>
    );
  } else {
    return <CitySelect />;
  }
};

export default App;
