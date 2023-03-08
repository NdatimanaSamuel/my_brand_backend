import Blog from "../model/blog.js";
// import { blogs } from "../model/dummy.js";
import errorFunc from "../utils/errorFunc.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

  dotenv.config();
  

  cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

class blogController {
  // CRUD (Create, Read, Update, Delete) Operation 
  // get all blogs
  static async getBlogs(req, res) {
    try {
      const blogs = await Blog.find();
      res.status(200).json({
        data: blogs
      });
    } catch (error) {
      const messageContent = error.message;
      const status = 500;
      errorFunc(res, messageContent, status);
    }
  }

  // get one blog
  static async getBlog(req, res) {
    try {
      const { id } = req.params; // using ES6
      const blog = await Blog.findOne({ _id: id });
      if (!blog) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`
        });
      } else {
        return res.status(200).json({
          data: blog
        });
      }
    } catch (error) {
      console.log(error.message);
      const messageContent = error.message;
      const status = 500;
      errorFunc(res, messageContent, status);
    }
  }
  // create blog
  // static async createBlog(req, res) {
  //   try {
  //     const { title, content, author } = req.body;

  //     const result=await cloudinary.uploader.upload(req.file.path);

  //     const newBlog = await Blog.create({ title, content, author,image:result.url});
  //      await newBlog.save();
       
  //     res.status(201).json({
  //       message: "New blog created successfully",
  //       data: newBlog
  //     });
  //   } catch (error) {
  //     const messageContent = error.message;
  //     const status = 500;
  //     errorFunc(res, messageContent, status);
  //   }
  // }

  static async createBlog(req, res) {
    try {
      const { title, author, content } = req.body;
      const result = await cloudinary.uploader.upload(req.file.path);
      const newBlog = await Blog.create({
        title,
        author,
        content,
        image: result.url,
      });
      await newBlog.save();
      res.status(201).send('successfully created a new blog');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error creating blog');
    }
  }

  // update blog
  static async updateBlog(req, res) {
    try {
      const { id } = req.params; // using ES6

      // body to be update
      const { title, content } = req.body;

      // id
      const _id = id;
      const blogUpdated = await Blog.findByIdAndUpdate(_id, { title, content }, { new: true });

      if (!blogUpdated) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`
        });
      } else {

        return res.status(200).json({
          message: "Blog updated Successfully",
          data: blogUpdated
        });
      }

    } catch (error) {
      const messageContent = error.message;
      const status = 500;
      errorFunc(res, messageContent, status);
    }
  }

  // delete blog
  static async deleteBlog(req, res) {
    try {
      const { id } = req.params;
      // find blog
      
      const _id = id

      const blogToBeDeleted = await Blog.findByIdAndDelete(_id)

      if (!blogToBeDeleted) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`
        });
      } else {
        return res.status(200).json({
          message: "Blog deleted successfully",
        });
      }
    } catch (error) {
      const messageContent = error.message;
      const status = 500;
      errorFunc(res, messageContent, status);
    }
  }
}

export default blogController;
