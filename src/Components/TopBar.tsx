import { motion } from "framer-motion";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as Constants from "../constants/constants";
import { apiCalls } from "../Redux";
import { RootState } from "../Redux/store";

const TopBarDiv = styled.div`
  display: flex;
  flex-wrap:
  width: 100%;
  padding: 15px 10px;
  align-items: center;
  flex-direction:row-reverse;
  .Unitbuttons {
    width: 140px;
    display: flex;
    justify-content: space-around;
    span {
      background-color: ${(props: any) => props.theme.grayColor};
      cursor:pointer;
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
      
      width:70px;
      height:40px;
      border-radius: 18px;
      padding:3px 3px;
      background-color:black;

      div{
        position:relative;
        margin:3px;
        width: 30px;
        height: 30px;
        
        border-radius: 50%;
          
      }

  }
`;

const TopBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.reducer.theme);

  const metricUnit = useSelector(
    (state: RootState) => state.reducer.config.metricUnits
  );
  const unitAnimatoin = {
    active: {
      backgroundColor: theme.textSecondary,
      opacity: 1,
    },
    disabled: {
      backgroundColor: theme.grayColor,
      opacity: 0.6,
    },
  };
  const themeToggleAnimation = {
    themeSwitch: {
      dark: {
        backgroundColor: "#000",
      },
      light: {
        backgroundColor: "#00B2EE",
      },
    },
    thumb: {
      dark: {
        backgroundColor: "#000",
        boxShadow: "inset 10px 0px #fff, inset 10px 0px 1px 2px #fff",
        left: 2,
      },
      light: {
        backgroundColor: "#FFcc33",
        boxShadow: "inset 0px 0px #fff, inset 0px 0px 0px 0px #fff",
        left: 30,
      },
    },
  };

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", ease: "easeOut", duration: 1 }}
    >
      <TopBarDiv theme={theme}>
        <div className={"Unitbuttons"}>
          <motion.span
            variants={unitAnimatoin}
            onClick={() => dispatch(apiCalls.actions.UNIT_TOGGLE(true))}
            animate={metricUnit ? "active" : "disabled"}
          >
            °C
          </motion.span>
          <motion.span
            onClick={() => dispatch(apiCalls.actions.UNIT_TOGGLE(false))}
            animate={metricUnit ? "disabled" : "active"}
            variants={unitAnimatoin}
          >
            °F
          </motion.span>
        </div>
        <motion.div
          className={"themeSwitch"}
          variants={themeToggleAnimation.themeSwitch}
          animate={theme.theme === "light" ? "light" : "dark"}
          onClick={() => {
            dispatch(apiCalls.actions.THEME_TOGGLE());
          }}
        >
          <motion.div
            variants={themeToggleAnimation.thumb}
            animate={theme.theme === "light" ? "light" : "dark"}
          ></motion.div>
        </motion.div>
      </TopBarDiv>
    </motion.div>
  );
};
export default TopBar;
