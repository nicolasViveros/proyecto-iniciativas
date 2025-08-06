import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";

import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import fichasRoutes from "./routes/fichas.routes.js";

const app = express();

const allowedOrigins = [
  "https://rumboalaequidad.org",
  "https://www.rumboalaequidad.org",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(morgan("dev"));
//app.use(express.json());
app.use(cookieParser());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api", authRoutes);
app.use("/api", tasksRoutes);
app.use("/api", fichasRoutes);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // crea la carpeta si no existe
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/uploads", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    // Aquí podrías procesar el archivo, guardarlo, etc.
    res.send("File uploaded successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing the file");
  }
});

export default app;
