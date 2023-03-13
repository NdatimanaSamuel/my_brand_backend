import Message from '../model/message.js';
import errorFunc from '../utils/errorFunc.js';



const showMessageController = async (req, res) => {

    try {
        const messages = await Message.find();
        res.status(200).json({
          data: messages
      });
    } catch (error) {
        const messageContent = error.message;
        const status = 500;
        errorFunc(res, messageContent, status);
    }
  
     
  };
  
  export default showMessageController;