import mongoose from "mongoose";


const iniciativaSchema = new mongoose.Schema({
  pais: { type: String, required: true },
  ciudad: { type: String, required: true },
  alcance: { type: String },
  institucionEncargada: { type: String },
  paginaWebInstitucion: { type: String },
  tipoInstitucion: { type: String },
  personaContacto: { type: String },
  ejecutor: { type: String },
  actoresInvolucrados: { type: String }, // o usar [String] si planeas separarlos
  nombreIniciativa: { type: String, required: true },
  pertinencia: { type: String },
  categoria: { type: String },
  tipoIniciativa: { type: String },
  justificacion: { type: String },
  objetivo: { type: String },
  descripcionIniciativa: { type: String },
  fechaInicioTermino: { type: String }, // Podrías dividirlo en dos campos si quisieras fechas exactas
  logrosResultados: { type: [String] },
  grupoObjetivo: { type: String },
  mujeresParticipantes: { type: String },
  costoAnualUSD: { type: String },
  documentos: { type: String },
  links: { type: [String] },
  comentariosAdicionales: { type: String }
}, {
  timestamps: true
});

export default mongoose.model('Iniciativa', iniciativaSchema);
