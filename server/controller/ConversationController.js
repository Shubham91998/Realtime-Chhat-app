import conversation from "../model/ConversationModel.js";

export const newConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        const exist = await conversation.findOne({ members: { $all: [receiverId, senderId] } });

        if (exist) {
            return res.status(200).json("Conversation already exists.");
        }

        const newConversation = new conversation({
            members: [senderId, receiverId],
        });

        await newConversation.save();  // fixed here

        return res.status(200).json("Conversation saved successfully.");  // fixed typo
    
    } catch (error) {
        return res.status(500).json({ message: "Conversation failed.", error: error.message }); // wrapped properly
    }
}
