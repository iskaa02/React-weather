import axios from "axios";
import * as React from "react";
import { IoMdSearch } from "react-icons/io";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as Constants from "../../constants/constatns";
import { fetchCity, fetchWeatherData, formatCity } from "../../logic";

const SearchBarDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: ${Constants.mainColorLight};
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-bottom: 0;
  padding: 10px;
  input {
    border: none;
    background-color: ${Constants.mainColorLight};

    margin-left: 5px;
    outline: none;
    font-family: ${Constants.fontFamily};
    font-weight: ${Constants.FW.bold};
  }
  button {
    color: ${Constants.textSecondary};
    cursor: pointer;

    border: none;
    background-color: ${Constants.mainColorLight};
    div {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }
  button:hover {
    div {
      background-color: #bdbdbd;
    }
  }
`;
const SearchResults = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  top: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 10px;
    border-radius: 0 0 10px 10px;

    position: absolute;
    background-color: ${Constants.mainColorLight};

    list-style: none;
    li {
      padding: 8px 20px;
      cursor: pointer;
      color: ${Constants.textSecondary};
    }
    li:last-child {
      border-radius: 0 0 10px 10px;
    }
    li:hover {
      background-color: #bdbdbd;
    }
  }
`;
const CityData = {
  data: [{}],
  metadata: {
    totalCount: 0,
  },
};
const SearchBar = () => {
  const inputText = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [city, setCity] = React.useState(CityData);
  const [showRes, setShowRes] = React.useState(false);

  const search = (apiSearch: any) => {
    axios
      .get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", {
        method: "GET",
        params: { namePrefix: `${apiSearch}`, limit: "4" },
        headers: {
          "x-rapidapi-key":
            "6ee64c281fmsh03f1b131dc76d4ap1aa9aejsn7aee16834f1d",
        },
      })
      .then((val) => {
        const data = val.data;
        setCity({ data: data.data, metadata: data.metadata });
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 7px 30px -10px rgba(150, 170, 180, 0.5)",
      }}
    >
      <SearchBarDiv>
        <button>
          <div className={"button"}>
            <IoMdSearch
              style={{ margin: "auto" }}
              size={22}
              onClick={() => {
                inputText.current !== null && search(inputText.current.value);
              }}
            />
          </div>
        </button>
        <input
          type="text"
          ref={inputText}
          placeholder={"search for places..."}
          onFocus={() => {
            setShowRes(true);
          }}
          onBlur={() => {
            setShowRes(false);
          }}
        />
      </SearchBarDiv>
      <SearchResults>
        <ul>
          {showRes &&
            city.metadata.totalCount !== 0 &&
            city.data.map((item: any) => (
              <li
                onClick={() => {
                  setCity(CityData);
                }}
              >
                {item.name},{item.region}, {item.country}
              </li>
            ))}
        </ul>
      </SearchResults>
    </div>
  );
};

export default SearchBar;
<h1>hello world</h1>;
