import * as React from "react";
import { IoMdSearch } from "react-icons/io";
import * as Constants from "../constants/constatns";
import styled from "styled-components";
import store, { RootState } from "../Redux/store";
import { useSelector } from "react-redux";
console.log("this");

export type cityList = {
  list: [];
  active: boolean;
  selected: boolean;
  lon: string;
  lat: string;
};

type props = {
  cityList: cityList;
  setIdSearch: any;
  setCityList: any;
  idSearch: string;
};

const CityDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .searchbar {
    height: 40px;
    display: flex;
    align-item: center;
    justify-content: space-between;

    .searchIcon {
      position: relative;
      top: 50%;
      left: 90%;
      transform: translate(0, -50%);
    }
    input {
      width: 30vw;
      border: none;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

      padding: 10px;
    }
  }
  .autoComplete {
    list-style: none;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      display: flex;

      width: 300px;
      padding: 5px 10px;
      align-items: center;
      justify-content: space-between;
      background-color: white;
      margin-bottom: 20px;
      border-radius: 10px;
      cursor: pointer;
      font-family: ${Constants.fontFamily};
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      img {
        border-radius: 1px;
      }
    }
  }
`;
const CitySelect = (props: props) => {
  const theme = useSelector((state: RootState) => state.reducer.theme);

  return (
    <CityDiv>
      <div className={"searchbar"}>
        <IoMdSearch
          className={"searchIcon"}
          size={20}
          color={theme.textSecondary}
        />
        <input
          value={props.idSearch}
          placeholder={"Search For cities"}
          onChange={(e) => {
            props.setIdSearch(e.target.value);
          }}
        />
      </div>

      <ul className={"autoComplete"}>
        {props.cityList.list.map((item: any, i: any) => (
          <li
            onClick={() => {
              props.setCityList({
                active: true,
                selected: true,
                lon: item.coord.lon,
                lat: item.coord.lat,
                list: [],
              });
            }}
          >
            <span>
              {item.name}, {item.sys.country}
            </span>
            <img
              src={`https://www.countryflags.io/${item.sys.country}/flat/32.png`}
            ></img>
          </li>
        ))}
      </ul>
    </CityDiv>
  );
};
export default CitySelect;
