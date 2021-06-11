# React Weather App
**Simple weather app using:**
- React
- Typescript
- Redux toolkit for state management
- Styled components for styling
- Framer motion for animation


## APIs used in this project
Weather data: [Open weather api](openweathermap.org/api)
Location data: [GeoDB Cities](rapidapi.com/wirefreethought/api/geodb-cities)
## for local development 
clone this repo `git clone https://github.com/iskaa02/react-weather-app-2.0.0`
run 
`$ yarn` 
`$ yarn start` 
## live demo
[React weather app]( https://60c3b3e4f29a7f000805be5e--eager-banach-752141.netlify.app/)
##  Roadmap

**Autocomplete Search bar**
i could not apply the auto complete the search bar cause of the API limitations (only 1 request per second), now i'm working on a simple node js server with cities data.
you can find the JSON file containing the cities information [here](http://bulk.openweathermap.org/sample/city.list.json.gz) 

 **React Native**
 after finishing the server, maybe i'll be looking at developing React Native app and try re-using most of the code.
