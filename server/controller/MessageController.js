
import Message from "../model/Message.js"
import conversation from "../model/ConversationModel.js";


export const newMessage = async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();

        await conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text});

        return res.status(200).json("Message has been sent sucessfully.")
    } catch (error) {
        return res.status(500).json(error.message);
        
    }
}

export const getMessage = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error);
    }

}