import axios from "axios";

export const baseParams = {
    access_token: localStorage.getItem("mapbox_API_key"),
};

export default axios.create({
  baseURL: "https://api.mapbox.com/"
});