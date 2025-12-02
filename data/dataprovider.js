// data/dataprovider.js
const posts = require("./posts.json");

function getAllPosts() {
  return posts;
}

function getPostById(id) {
  // id viene como string en req.params
  return posts.find((p) => p.id == id);
}

function getCategories() {
  // categorías únicas
  return [...new Set(posts.map((post) => post.category))];
}

function getPostsByCategory(category) {
  return posts.filter((post) => post.category === category);
}

module.exports = {
  getAllPosts,
  getPostById,
  getCategories,
  getPostsByCategory,
};
