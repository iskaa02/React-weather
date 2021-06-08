
# React Weather App
Simple weather app using React, Redux and styled components

## APIs used in this project
Weather data: [Open weather api](openweathermap.org/api)
Location data: [GeoDB Cities](rapidapi.com/wirefreethought/api/geodb-cities)
## for local development 
clone this repo `git clone https://github.com/iskaa02/react-weather-app-2.0.0`
run 
`$ yarn add` 
`$ yarn start` 
## live demo
[React weather app]( )
##  Roadmap

**Autocomplete Search bar**
i could not apply the auto complete the search bar cause of the API limitations (only 1 request per second), now i'm working on a simple node js server with cities data
you can find the JSON file containing the cities information [here](http://bulk.openweathermap.org/sample/city.list.json.gz) 

**responsive design** 
this app is not responsive yet, i spent too much time learning redux so i didn't have any time for responsive CSS

 **React Native**
 after finishing the server and responsive design, i'll be looking at developing React Native app and try to re-use most of the code.
