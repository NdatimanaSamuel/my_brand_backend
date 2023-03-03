import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  names: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  messages: {
    type: String,
    required: true
  },
  sentAt: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model("message", messageSchema)

export default Message