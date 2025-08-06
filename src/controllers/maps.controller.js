import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export const getGeocodeData = async (req, res) => {
  const address = req.query.req || "";
  console.log("address: ", address);
  const apiKey = process.env.HERE_API_KEY;
  console.log("apiKey: ", apiKey);

  //console.log(address);
  try {
    const response = await axios.get(
      `https://geocode.search.hereapi.com/v1/geocode`,
      {
        params: {
          q: address,
          apiKey: apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
