
import message from "../model/Message.js"
import conversation from "../model/ConversationModel.js";


export const newMessage = async (req, res) => {
    
    try {

        const { senderId, receiverId, conversationId, type } = req.body;

        // If text is an object, extract imageUrl
        let text = req.body.text;
        if (typeof text === 'object' && text.imageUrl) {
            text = text.imageUrl;
        }

        const newMessage = new message({
            senderId,
            receiverId,
            conversationId,
            type,
            text,
        });

        
        await newMessage.save();
        console.log("Requested body", req.body)
        const result = await conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text});
        console.log("result",result)

        return res.status(200).json("Message has been sent sucessfully.")
    } catch (error) {
        return res.status(500).json(error.message);
        
    }
}

export const getMessage = async (req, res) => {
    try {
        const messages = await message.find({ conversationId: req.params.id });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error);
    }

}