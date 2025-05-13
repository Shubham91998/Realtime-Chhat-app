import { Dialog , Box, styled} from '@mui/material'

import Menu from './menu/Menu'
import EmptyChatt from './chhat/EmptyChatt'
import ChatBox from './chhat/ChatBox'
import { useContext } from 'react'
import { AccountContext } from '../../context/Accountprovider'


const dialogStyle = {
    height:'95%',
    width:'100%',
    margin:'20px',
    maxWidth:'100%',
    maxheight:'100%',
    borderRadius:0,
    boxShadow:'none',
    overflow:'hidden',
}

const Components = styled(Box)`
    display: flex;
`

const LeftComponents = styled(Box)`
    min-width: 450px;
`

const RightComponents = styled(Box)`
    width: 73%;
    min-width:300px;
    height:100%;
    border-left:1px solid rgba(0,0,0,0.14);
`

const ChatDialog = () => {
    const {person} = useContext(AccountContext)
  return (
    
    <Dialog 
    open={true}
    PaperProps={{sx:dialogStyle}}
    hideBackdrop={true}
    maxwidth={'md'}
    >

        <Components>
            <LeftComponents>
                <Menu />
            </LeftComponents>

            <RightComponents>
                { Object.keys(person).length ? <ChatBox /> : <EmptyChatt />}
            </RightComponents>
        </Components>



    </Dialog>
  )
}

export default ChatDialog
