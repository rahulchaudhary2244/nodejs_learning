const express = require("express");
const routes = express.Router();

const {
  createNewBlog,
  getBlogs,
  deleteBlogById,
  updateBlogById,
} = require("../controllers/blogs.controller");

routes.get("/", getBlogs);

routes.post("/new", createNewBlog);

routes.delete("/:id", deleteBlogById);

routes.patch("/:id", updateBlogById);

module.exports = routes;
