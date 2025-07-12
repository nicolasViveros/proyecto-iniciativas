import express from "express";

const app = express();

// Redirigir todo el tráfico a HTTPS
app.use((req, res) => {
  const host = req.headers.host;
  res.redirect(301, `https://${host}${req.url}`);
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Redirección HTTP → HTTPS activa en puerto ${PORT}`);
});
