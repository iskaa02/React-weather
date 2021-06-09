import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DashBoard from "./Components/DashBoard/DashBoard";
import SideBar from "./Components/SideBar/SideBar";
import { RootState } from "./Redux/store";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #e2e2e2;
`;

const App = () => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <Wrapper>
      <SideBar />
      <DashBoard />
    </Wrapper>
  );
};

export default App;
