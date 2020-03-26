const PostModel = require("../models/PostModel.js");
const UserModel = require("../models/UserModel");

/**
 * PostController.js
 *
 * @description :: Server-side logic for managing Posts.
 */
module.exports = {
  /**
   * PostController.list()
   */
  list: function(req, res) {
    PostModel.find(function(err, Posts) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Post.",
          error: err
        });
      }
      return res.json(Posts);
    });
  },

  /**
   * PostController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    PostModel.findOne({ _id: id }, function(err, Post) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Post.",
          error: err
        });
      }
      if (!Post) {
        return res.status(404).json({
          message: "No such Post"
        });
      }
      return res.json(Post);
    });
  },

  /**
   * PostController.create()
   */
  create: async function(req, res) {
    try {
      const errors = {};

      const { title, text } = req.body;

      const user = await UserModel.findOne({ _id: req.user.id });

      if (!user) {
        errors.message = "Something went wrong.";
        res.status(404).json(errors);
      }

      let Post = new PostModel({
        title: title,
        text: text.text,
        author: {
          id: user._id,
          name: `${user.firstname} ${user.lastname}`
        }
      });

      Post.save();

      res.status(201).json(Post);
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * PostController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    const { text, title } = req.body;
    console.log(id);
    PostModel.findOne({ _id: id }, function(err, Post) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Post",
          error: err
        });
      }
      if (!Post) {
        return res.status(404).json({
          message: "No such Post"
        });
      }

      // console.log(req.body);
      console.log("LINE 100", text);
      Post.title = title ? title : Post.title;
      Post.text = text ? text : Post.text;

      Post.save(function(err, Post) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Post.",
            error: err
          });
        }

        return res.json(Post);
      });
    });
  },

  /**
   * PostController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    PostModel.findByIdAndRemove(id, function(err, Post) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Post.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
