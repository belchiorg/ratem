import express from "express";
import API from "../controllers/api.js";
import multer from 'multer'

const router = express.Router();

//multer middleware
let storage = multer.diskStorage({
  destination: (req,file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname+"_"+Date.now()+'_'+file.originalname)
  }
})

let upload = multer({
  storage: storage
}).single("image")

router.get("/", API.fetchAllPosts);
router.get("/:id", API.fetchPostById);
router.post("/", upload ,API.createPost);
router.put("/:id", API.updatePost);
router.delete("/:id", API.deletePost);

export default router
