import axios from "axios";
import * as React from "react";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as Constants from "../../constants/constants";
import { fetchWeatherData } from "../../SharedLogic";
import { RootState } from "../../Redux/store";

const SearchBarDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props: any) => props.theme.mainColor};
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-bottom: 0;
  padding: 10px;
  input {
    border: none;
    background-color: ${(props: any) => props.theme.mainColor};
    color: ${(props: any) => props.theme.textSecondary};

    margin-left: 5px;
    outline: none;
    font-family: ${Constants.fontFamily};
    font-weight: ${Constants.FW.bold};
  }
  button {
    color: ${(props: any) => props.theme.textSecondary};
    cursor: pointer;

    border: none;
    background-color: ${(props: any) => props.theme.mainColor};
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
      background-color: ${(props: any) => props.theme.grayColor};
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
    background-color: ${(props: any) => props.theme.mainColor};

    list-style: none;
    li {
      padding: 8px 20px;
      cursor: pointer;
      color: ${(props: any) => props.theme.textSecondary};
    }
    li:last-child {
      border-radius: 0 0 10px 10px;
    }
    li:hover {
      background-color: ${(props: any) => props.theme.grayColor};
    }
  }
`;
const CityData = {
  data: [
    {
      name: "",
      country: "",
      coord: {
        lon: 0,
        lat: 0,
      },
    },
  ],
  totalCount: 0,
};
const SearchBar = () => {
  // i use a local state to render the city search
  const [city, setCity] = React.useState(CityData);
  // using ref to send search data to the api
  const inputText = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  //checking which theme is being used
  const theme = useSelector((state: RootState) => state.reducer.theme);
  //function that take a city name as parameter and set the search data as local state
  const search = (apiSearch: any) => {
    // axios
    //   .get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", {
    //     method: "GET",
    //     params: { namePrefix: `${apiSearch}`, limit: "4" },
    //     headers: {
    //       "x-rapidapi-key": process.env.REACT_APP_LOCATION_API,
    //     },
    //   })
    axios
      .get("https://mellow-luxurious-cotija.glitch.me/searchForCity", {
        method: "GET",
        params: { search: `${apiSearch}` },
      })
      .then((val) => {
        const data = val.data;
        setCity({ data: data, totalCount: data.length });
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SearchBarDiv theme={theme}>
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
          onChange={(e) => {
            e.target.value.length !== 3 && search(e.target.value);
          }}
        />
      </SearchBarDiv>
      <SearchResults theme={theme}>
        <ul>
          {/* mapping the search result to a li  */}

          {city.totalCount !== 0 &&
            city.data.map((item: any) => {
              const list = {
                name: item.name,
                lat: item.coord.lat,
                lon: item.coord.lon,
                country: item.country,
              };
              return (
                <li
                  onClick={() => {
                    setCity(CityData);
                    dispatch(fetchWeatherData(list));
                  }}
                >
                  {item.name}, {item.country}
                </li>
              );
            })}
        </ul>
      </SearchResults>
    </div>
  );
};

export default SearchBar;
<h1>hello world</h1>;
