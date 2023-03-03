import Message from '../model/message.js';
import errorFunc from '../utils/errorFunc.js';

const sendMessageController = async (req, res) => {

  try {
    const { names, subject, messages } = req.body;
    const sendMessage = await Message.create({ names, subject, messages });
    res.status(201).json({
      message: "message sent  successfully",
      data: sendMessage
    });
  } catch (error) {
    const messageContent = error.message;
    const status = 500;
    errorFunc(res, messageContent, status);
  }

};

export default sendMessageController;