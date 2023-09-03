import axios from "axios";

export const LoadSlider = async () => 
      axios
        .get("http://localhost:3001/dataSlider")
        .then((response) => response.data)
        
        .catch((error) => {
          console.log(error);
        });