import { ArrowBack } from '@mui/icons-material'
import { Box, Drawer, Typography , styled} from '@mui/material'
import Profile from './Profile';


const DrawStyle = {
    left : 20,
    top:17,
    height:'95%',
    width:'30%',
    boxShadow:'none',
}

const Header = styled(Box)`
    background: #008069;
    height:107px;
    color: #fff;
    display: flex;
    & > svg, & > p{
        margin-top: auto;
        padding: 15px;
        font-weight: 600;

    }
`;

const Component = styled(Box)`
    background: #ededed;
    height: 85%;

`

const Text = styled(Typography)`
    font-size: 18px;
`

const Infodraw = ({open, setOpen}) => {

    const handleClose = () => {
        setOpen(false)
    }
  return (
    <Drawer
      
      open={open}
      onClose={handleClose}
      PaperProps={{sx: DrawStyle}}
      style={{zIndex:1500}}
    >
        <Header>
            <ArrowBack onClick={() => setOpen(false)}/>
            <Text>Profile</Text>
        </Header>
        <Component>
            <Profile />
        </Component>
    </Drawer>
  )
}

export default Infodraw
