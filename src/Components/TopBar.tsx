import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as Constants from "../constants/constatns";
import { apiCalls } from "../Redux";
import store, { RootState } from "../Redux/store";

const TopBarDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 10px;
  align-items: center;

  .Unitbuttons {
    width: 140px;
    display: flex;
    justify-content: space-around;
    span {
      background-color: ${(props: any) => props.theme.grayColor};
      color:white;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      font-weight:${Constants.FW.bold}
      border: none;
      padding: 15px;
    }
  }
  .themeSwitch{
      
      width:55px;
      height:30px;
      border-radius: 15px;
      background-color:red;
      span{
          display:block;
          border-radius:50%;
          width:30px;
          height:30px;
          background-color:white;
          
      }

  }
`;

const TopBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <TopBarDiv>
      <div className={"Unitbuttons"}>
        <span>°C</span>
        <span>°F</span>
      </div>
      <div
        className={"themeSwitch"}
        onClick={() => {
          dispatch(apiCalls.actions.THEME_TOGGLE());
        }}
      >
        <span></span>
      </div>
    </TopBarDiv>
  );
};
export default TopBar;
