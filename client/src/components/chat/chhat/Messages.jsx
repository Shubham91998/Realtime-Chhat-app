import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import Message from "./Message";
import { useContext, useState, useEffect } from "react";

import { AccountContext } from "../../../context/Accountprovider";
import { getMessages, newMessage } from "../../../service/api";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 77vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setnewMessageFlag] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState("");

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation?._id);
      setMessages(data);
    };
    getMessageDetails();
  }, [person._id, conversation?._id, newMessageFlag]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }
      await newMessage(message);
      setValue("");
      setFile("");
      setImage("");

      setnewMessageFlag((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => (
            <Container key={message._id}>
              <Message message={message} />
            </Container>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
