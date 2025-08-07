import Iniciativa from "../models/iniciativa.model.js";


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
      if (!iniciativa) return res.status(404).json({ message: "iniciativa not found" });
      res.json(iniciativa);
    } catch (error) {
      return res.status(404).json({ message: "iniciativa not found" });
    }
  };

export const deleteIniciativa = async (req, res) => {   
    try {
      console.log(req.params.id);
      const iniciativa = await Iniciativa.findByIdAndDelete(req.params.id);
      if (!iniciativa) return res.status(404).json({ message: "iniciativa not found" });
      return res.sendStatus(204);
    } catch (error) {
      return res.status(404).json({ message: "iniciativa not found" });
    }
  };

  export const updateIniciativa = async (req, res) => {
    try {
      const iniciativa = await Iniciativa.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!iniciativa) return res.status(404).json({ message: "iniciativa not found" });
      res.json(iniciativa);
    } catch (error) {
      return res.status(404).json({ message: "iniciativa not found" });
    }
  };

  export const getIniciativasPorPais = async (req, res) => {
    try {
      const iniciativas = await Iniciativa.find({ pais: req.params.pais });
      console.log(iniciativas)
      if (!iniciativas) return res.status(404).json({ message: "iniciativa not found" });
      res.json(iniciativas);
    } catch (error) {
      return res.status(404).json({ message: "iniciativa not found" });
    }
  };

