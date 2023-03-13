import express from "express";
import multer from "multer";
import blogController from "../controllers/blogController.js";
import restrictDelete from "../middleware/restrictDelete.js";

const upload=multer({dest: 'uploads/'});

const router = express.Router();

// router.post("/",upload.single('image'),blogController.createBlog);
router.post("/",blogController.createBlog);
router.get("/", blogController.getBlogs);
router.get("/:id", blogController.getBlog);
router.put("/:id", blogController.updateBlog);
router.delete("/:id",blogController.deleteBlog);
// router.delete("/:id",restrictDelete,blogController.deleteBlog);


export default router