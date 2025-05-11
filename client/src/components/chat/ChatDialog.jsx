import { Dialog , Box, styled} from '@mui/material'

import Menu from './menu/Menu'
import EmptyChatt from './chhat/EmptyChatt'

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
                <EmptyChatt />
            </RightComponents>
        </Components>



    </Dialog>
  )
}

export default ChatDialog
