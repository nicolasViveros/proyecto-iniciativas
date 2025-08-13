import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export const getGeocodeData = async (address) => {
  const apiKey = process.env.HERE_API_KEY;

  
  try {
    const response = await axios.get(
      `https://geocode.search.hereapi.com/v1/geocode?q=` +
        address +
        `&apiKey=` +
        apiKey
    );

    console.log("res: mapa", response.data);

    return response.data; // Return the data instead of using res
  } catch (error) {
    throw new Error(error.message); // Throw an error to handle it where the function is called
  }
};

