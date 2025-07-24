import mongoose, { mongo } from "mongoose";

//const uri  = "mongodb+srv://alejandro11111:proyecto1@cluster0.jqyvgsz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.6";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

export const conectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas:", error);
  }
};
