// app.js
const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();

// Motor de vistas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/", indexRouter);

// Arranque (preparado para Render / nube)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor escuchando en http://localhost:" + PORT);
});
