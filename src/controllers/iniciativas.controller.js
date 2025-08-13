import Iniciativa from "../models/iniciativa.model.js";
import Localizacion from "../models/localizacion.model.js";
import { getGeocodeData } from "./maps.controller.js";

export const getIniciativas = async (req, res) => {
  try {
    const mixed = [];
    const iniciativas = await Iniciativa.find();
    const results = await Promise.all(
      iniciativas.map(async (iniciativa) => {
        console.log("iniciativa: ", iniciativa);
        const location = await Localizacion.findOne({
          idIniciativa: iniciativa._id,
        });
        return {
          ...iniciativa._doc,
          location,
        };
      })
    );

    mixed.push(...results);
    console.log("mixed: ", mixed);
    res.json(mixed);
  } catch (error) {
    return res.status(500).json({ message: "algo va mal" });
  }
};

export const getIniciativa = async (req, res) => {
  try {
    const iniciativa = await Iniciativa.findById(req.params.id);
    if (!iniciativa)
      return res.status(404).json({ message: "iniciativa not found" });
    res.json(iniciativa);
  } catch (error) {
    return res.status(404).json({ message: "iniciativa not found" });
  }
};

export const deleteIniciativa = async (req, res) => {
  try {
    console.log(req.params.id);
    const iniciativa = await Iniciativa.findByIdAndDelete(req.params.id);
    if (!iniciativa)
      return res.status(404).json({ message: "iniciativa not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "iniciativa not found" });
  }
};

export const updateIniciativa = async (req, res) => {
  try {
    const iniciativa = await Iniciativa.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!iniciativa)
      return res.status(404).json({ message: "iniciativa not found" });
    res.json(iniciativa);
  } catch (error) {
    return res.status(404).json({ message: "iniciativa not found" });
  }
};

export const getIniciativasPorPais = async (req, res) => {
  try {
    const iniciativas = await Iniciativa.find({ pais: req.params.pais });

    iniciativas.map(async (iniciativa) => {
      console.log(iniciativa.pais);
      console.log(iniciativa.ciudad);

      const exists = await Localizacion.findOne({
        idIniciativa: iniciativa._id,
      });

      if (!exists) {
        const location = await getGeocodeData(
          iniciativa.pais + "+" + iniciativa.ciudad
        );
        const localizacion = new Localizacion({
          latitud: location.items[0].position.lat,
          longitud: location.items[0].position.lng,
          pais: iniciativa.pais,
          ciudad: iniciativa.ciudad,
          idIniciativa: iniciativa._id,
        });
        await localizacion.save();
      }
    });

    console.log(iniciativas);
    if (!iniciativas)
      return res.status(404).json({ message: "iniciativa not found" });
    res.json(iniciativas);
  } catch (error) {
    return res.status(404).json({ message: "iniciativa not found" });
  }
};

export const getIniciativasPorCiudad = async (req, res) => {
  try {
    const iniciativas = await Iniciativa.find({ ciudad: req.params.ciudad });

    console.log(req.params.ciudad);
    console.log(iniciativas);

    // Check if initiatives were found
    if (iniciativas.length === 0) {
      return res.status(404).json({ message: "No initiatives found in the specified city" });
    }

    res.json(iniciativas);
  } catch (error) {
    console.error("Error fetching initiatives: ", error); // Log the error for debugging
    return res.status(500).json({ message: "An error occurred while fetching initiatives" });
  }
};

export const createIniciativa = async (req, res) => {
  try {
    const iniciativa = new Iniciativa(req.body);
    const result = await iniciativa.save();
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: "iniciativa not found" });
  }
};

export const getLocationPorIniciativa = async (req, res) => {
  try {
    const location = await Localizacion.findOne({
      idIniciativa: req.params.id,
    });
    if (!location)
      return res.status(404).json({ message: "location not found" });
    res.json(location);
  } catch (error) {
    return res.status(404).json({ message: "location not found" });
  }
};

export const updateLocationPorIniciativa = async (req, res) => {
  try {
    const iniciativa = await Iniciativa.findById(req.params.id);

    if (!iniciativa) {
      return res.status(404).json({ message: "iniciativa not found" });
    }

    const newLocation = await getGeocodeData(`${iniciativa.pais},${iniciativa.ciudad}`);
    if (!newLocation || !newLocation.items || newLocation.items.length === 0) {
      return res.status(500).json({ message: "could not fetch geocode data" });
    }

    const location = await Localizacion.findOneAndUpdate(
      { idIniciativa: req.params.id },
      {
        $set: {
          pais: newLocation.items[0].address_components[0].short_name,
          ciudad: newLocation.items[0].address_components[1].short_name,
          latitud: newLocation.items[0].geometry.location.lat,
          longitud: newLocation.items[0].geometry.location.lng,
        },
      },
      { new: true }
    );

    if (!location) {
      return res.status(404).json({ message: "location not found" });
    }

    res.json(location);
  } catch (error) {
    console.error("Error updating location: ", error); // Log para debug
    return res.status(500).json({ message: "An error occurred while updating location" });
  }
};