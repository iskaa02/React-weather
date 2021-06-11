import * as React from "react";
import styled from "styled-components";
import DashBoard from "./Components/DashBoard/DashBoard";
import * as Constants from "./constants/constants";
import SideBar from "./Components/SideBar/SideBar";

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
  return (
    <Wrapper>
      <SideBar />
      <DashBoard />
    </Wrapper>
  );
};

export default App;
