var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: {
      type: String
    },
    text: {
      type: String
    },
    author: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      name: {
        type: String
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
