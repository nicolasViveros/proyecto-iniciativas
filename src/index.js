import app from "./app.js";
import { conectDB } from "./db.js";
import fs from "fs";

const privateKey = fs.readFileSync("/path/to/mi_clave_privada.key", "utf8");
const certificate = fs.readFileSync("/path/to/certificado.crt", "utf8");

const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);

conectDB();
httpsServer.listen(4000);
console.log("server on port", 4000);
