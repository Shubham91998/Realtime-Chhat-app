import { useState, useEffect, useContext } from "react"

import { getUsers } from "../../../service/api"
import { Box, styled, Divider } from "@mui/material";
import { AccountContext } from "../../../context/Accountprovider";

import Conversationss from "./Conversationss";

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;

`

const Conversation = () => {

    const {account} = useContext(AccountContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response);
        }
        fetchData();
    }, [])
  return (
    <Component>
        {
            users.map(user => (
                user.sub !== account.sub && 
                <>
                <Conversationss user={user}/>
                <StyledDivider />
                </>
            ))
        }

    </Component>
  )
}

export default Conversation
