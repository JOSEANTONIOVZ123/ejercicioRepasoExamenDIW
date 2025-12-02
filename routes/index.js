// routes/index.js
const express = require("express");
const router = express.Router();
const dataProvider = require("../data/dataprovider");

// HOME: listado de entradas
router.get("/", (req, res) => {
  const posts = dataProvider.getAllPosts();
  const categories = dataProvider.getCategories();  // ← AQUÍ sacamos las categorías

  res.render("index", { posts, categories });       // ← Y las pasamos a la vista
});

// FILTRAR por categoría
router.get("/categoria/:categoria", (req, res) => {
  const categoria = req.params.categoria;
  const posts = dataProvider.getPostsByCategory(categoria);
  const categories = dataProvider.getCategories();

  res.render("index", { posts, categories, categoriaFiltrada: categoria });
});

// DETALLE: una entrada concreta
router.get("/post/:id", (req, res) => {
  const id = req.params.id;
  const post = dataProvider.getPostById(id);

  if (!post) {
    return res.status(404).send("Entrada no encontrada");
  }

  res.render("post", { post });
});

module.exports = router;
