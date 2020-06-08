import axios from "axios";

export const baseParams = {
    appid: localStorage.getItem("weather_API_key"),
    units: "metric",
};

export default axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
});