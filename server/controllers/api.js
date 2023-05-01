import Post from "../models/posts.js"
import fs from 'fs'

export default class API {
  //fetch all posts
  static async fetchAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json({message: err.message});
    }
  }

  //fetch single post by id 
  static async fetchPostById(req, res) {
    try {
      const id = req.params.id
      const post = await Post.findById(id)
      res.status(200).json(post)
    } catch (err) {
      res.status(404).json({message: err.message})
    }
  }

  //create new post
  static async createPost(req,res) {
    const post = req.body;
    const imagename = req.file.filename
    post.image = imagename
    try {
      await Post.create(post)
      res.status(200).json(post)
    } catch(err) {
      res.status(404).json({message: err.message})
    }
  }

  static async updatePost(req,res) {
    try {
      const id = req.params.id
      let newImage = ""

      if (req.file) {
        newImage = req.file.filename
        try {
          fs.unlinkSync("./uploads/" + req.body.old_image)
        }catch (err) {
          console.log(err)
        }
      }
      else {
        newImage = req.body.old_image
      }

      const newPost = req.body
      newPost.image = newImage
      Post.findByIdAndUpdate(id,newPost)
      res.status(200).json({message: "Successfully updated post"})

    }
    catch(err) {
      res.status(404).json({message: "Could not update post"})
    }

  }

  static async deletePost(req,res) {
    const id = req.params.id
    try {
      const result = Post.findByIdAndDelete(id)
      if (result.image != '') {
        try {
          fs.unlinkSync("./uploads/" + result.image)
        }catch (err) {
          console.log(err)
        }
      }

      res.status(200).json({message: "Successfully deleted post"})
    }catch (err) {
      res.status(404).json({message: "Post does not exist"})
    }
  }
}