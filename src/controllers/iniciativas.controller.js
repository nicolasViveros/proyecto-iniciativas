import Iniciativa from "../models/iniciativa.model.js";
import Localizacion from "../models/localizacion.model.js";
import { getGeocodeData } from "./maps.controller.js";

export const getIniciativas = async (req, res) => {
  try {
    const iniciativas = await Iniciativa.find();
    res.json(iniciativas);
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

      console.log(location);

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
