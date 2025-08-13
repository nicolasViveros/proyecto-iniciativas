import mongoose from "mongoose";

const localizacionSchema = new mongoose.Schema({
  latitud: { type: Number, required: true },
  longitud: { type: Number, required: true },
  pais: { type: String, required: true },
  ciudad: { type: String },
  idIniciativa: { type: String, required: true, unique: true },
});


export default mongoose.model("Localizacion", localizacionSchema);
