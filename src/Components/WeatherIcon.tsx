import AnimatedDay from "../SVGs/animated/day.svg";
import Day from "../SVGs/static/day.svg";
import AnimatedNight from "../SVGs/animated/night.svg";
import Night from "../SVGs/static/night.svg";
import AnimatedCloudyDay from "../SVGs/animated/cloudyDay.svg";
import CloudyDay from "../SVGs/static/cloudyDay.svg";
import AnimatedCloudyNight from "../SVGs/animated/cloudyNight.svg";
import CloudyNight from "../SVGs/static/cloudyNight.svg";
import AnimatedRainy from "../SVGs/animated/rainy.svg";
import Rainy from "../SVGs/static/rainy.svg";
import AnimatedSnowy from "../SVGs/animated/snowy.svg";
import Snowy from "../SVGs/static/snowy.svg";
import Thunder from "../SVGs/static/thunder.svg";
import AnimatedThunder from "../SVGs/animated/thunder.svg";
//there's 2 different weather icons i have in here one is animated and the other is static
//i made function that return the url of the icon then i use it in div as a background image
export const animatedIcon = (description: string, isDay: boolean) => {
  switch (description) {
    case "few clouds":
    case "scattered clouds":
    case "broken clouds":
    case "clouds": {
      if (isDay) {
        return AnimatedCloudyDay;
      } else {
        return AnimatedCloudyNight;
      }
    }
    case "rainy":
    case "shower rain":
      return AnimatedRainy;
    case "thunderstorm":
      return AnimatedThunder;
    case "snow":
      return AnimatedSnowy;
    default:
      if (isDay) {
        return AnimatedDay;
      } else {
        return AnimatedNight;
      }
  }
};

export const staticIcon = (description: string, isDay: boolean) => {
  switch (description) {
    case "few clouds":
    case "scattered clouds":
    case "broken clouds": {
      if (isDay) {
        return CloudyDay;
      } else {
        return CloudyNight;
      }
    }
    case "rainy":
    case "shower rain":
      return Rainy;
    case "thunderstorm":
      return Thunder;
    case "snow":
      return Snowy;
    default:
      if (isDay) {
        return Day;
      } else {
        return Night;
      }
  }
};
