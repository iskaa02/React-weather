# React Weather App

**Simple weather app using:**

- React
- Typescript
- Redux toolkit for state management
- Styled components for styling
- Framer motion for animation

## APIs used in this project

Weather data: [Open weather api](openweathermap.org/api)<br/>
Location data: [GeoDB Cities](rapidapi.com/wirefreethought/api/geodb-cities)

## for local development

clone this repo `git clone https://github.com/iskaa02/react-weather-app-2.0.0`

run
`$ yarn` to install all the dependencies
get api keys from both the api used (both are free)
[Weather Api](openweathermap.org/api)
[Location Api](rapidapi.com/wirefreethought/api/geodb-cities)<br/>
then create .env file at the root directory of the project and put this inside of it
`REACT_APP_WEATHER_API = your weather api key`
`REACT_APP_LOCATION_API = your location api key`
finally run `$ yarn start` to run the project locally

## live demo

[React weather app](https://60c3b3e4f29a7f000805be5e--eager-banach-752141.netlify.app/)

## Bugs 
**some issues with location api** <br/>
the location api has some limtation, sometimes it take long time to respond, and i could not apply the auto completion for the search because api limit you to only 1 request per second, now i'm working on a simple node js server with cities data <br/>
you can find the JSON file containing the cities information [here](http://bulk.openweathermap.org/sample/city.list.json.gz)
