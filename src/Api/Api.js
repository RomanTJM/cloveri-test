import axios from "axios";
// import { dataSlider } from "../Data/Data"

export const LoadSlider = async () =>
  axios
    // .get("http://localhost:3001/dataSlider")
    .get("../Data/Data")
    .then((response) => response.data)

    .catch((error) => {
      console.log(error);
    });