
import { useContext , useState} from "react"

import { AccountContext } from "../../../context/Accountprovider"
import { Box , styled} from "@mui/material"
import {Chat as MessageIcon} from "@mui/icons-material"

import HeaderMenu from "./HeaderMenu.jsx"
import Infodraw from "../../drawer/Infodraw.jsx"


const Components = styled(Box)`
    height:44px;
    background: #ededed;
    padding: 8px 16px;
    display:flex;
    aline-items:center;
`;

const Wrapper = styled(Box)`
    margin-left:auto;
    & > *{
        margin-left:2px;
        padding:8px;
        color:#000;
    }
    & :first-child{
        font-size: 22px;
        margin-right:8px;
        margin-top: 3px;
    }
`

const Image = styled('img')({
    height:40,
    width:40,
    borderRadius:'50%',
})
const Header = () => {

  const [opendraw, setOpendraw] = useState(false);
    const {account} = useContext(AccountContext)

    const toggleDraw = () => {
      setOpendraw(true)
    }
  return (
    <>
      <Components>
        <Image src={account.picture} alt="dp" onClick={() => toggleDraw()}/>

        <Wrapper>
            <MessageIcon/>
            <HeaderMenu setOpendraw={setOpendraw}/>
        </Wrapper>
      </Components>
      <Infodraw open={opendraw} setOpen={setOpendraw}/>
    </>
  )
}

export default Header
