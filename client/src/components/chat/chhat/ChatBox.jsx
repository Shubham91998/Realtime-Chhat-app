import { Box } from "@mui/material"

import { useContext, useEffect, useState } from "react"
import { AccountContext } from "../../../context/Accountprovider"
import { getConversation } from "../../../service/api"
// COMPONENTS 
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"
const ChatBox = () => {
  const {account, person} = useContext(AccountContext)
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({senderId: account.sub, receiverId: person.sub})
      setConversation(data);
  
    }
    getConversationDetails();
  },[person.sub])

  return (
    <Box style={{height: '75%'}}>
      <ChatHeader person={person}/>
      <Messages person={person} conversation={conversation}/>
    </Box>
  )
}

export default ChatBox
