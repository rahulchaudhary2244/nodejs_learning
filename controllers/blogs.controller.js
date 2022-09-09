const Blogs = require("../model/blogs.model");

const createNewBlog = async (req, res) => {
  try {
    const { title } = req.body;
    const newBlog = new Blogs({ title });
    const result = await newBlog.save();
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
};

const getBlogs = async (req, res) => {
  try {
    const result = await Blogs.find({});
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await Blogs.findOneAndDelete({ _id: id });
    return res.json(deletedData);
  } catch (err) {
    res.sendStatus(500);
  }
};

const updateBlogById = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const update = req.body;

    const result = await Blogs.findOneAndUpdate(filter, update, { new: true });

    return res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = {
  createNewBlog: createNewBlog,
  getBlogs: getBlogs,
  deleteBlogById: deleteBlogById,
  updateBlogById: updateBlogById,
};
