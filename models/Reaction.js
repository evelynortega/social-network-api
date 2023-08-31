const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (timeStamp) => new Date(timeStamp).toLocaleString(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 200,
  },
  username: {
    type: String,
    required: true,
  },
});

module.exports = reactionSchema;
