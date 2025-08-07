import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export const getGeocodeData = async (address) => {
  // const address = req.query.req || "";
  //   console.log("address: ", address);
  const apiKey = process.env.HERE_API_KEY;
  //   console.log("apiKey: ", apiKey);

  //console.log(address);
  try {
    // console.log(
    //   `https://geocode.search.hereapi.com/v1/geocode?q=` +
    //     address +
    //     `&apiKey=` +
    //     apiKey
    // );
    const response = await axios.get(
      `https://geocode.search.hereapi.com/v1/geocode?q=` +
        address +
        `&apiKey=` +
        apiKey
    );

    console.log("res: mapa", response.data);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
