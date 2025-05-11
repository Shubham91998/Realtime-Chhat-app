import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material'
import { qrCodeImage } from '../../constents/data';
import { GoogleLogin } from '@react-oauth/google'

const dialogStyle = {
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxheight:'100%',
    boxShadow:'none',
    overflow:'hidden',
}

const Component = styled(Box)`
display:flex;
`
const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`

const QRCode = styled('img')({
    height:264,
    width:264,
    margin:'56px 0 0 56px'
})

const StyledLists = styled(List)`
& > li {
    padding:0;
    margin-top: 15px;
    font-size: 18px;
    line-height:28px;
    color: #4a4a4a;
}
`

const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;
`

const LoginDialog = () => {

    const onLoginSucess = () => {

    }

    const onLoginError = () => {
        
    }


  return (
    <Dialog open={true}
    PaperProps={{sx:dialogStyle}}
    >
        <Component>
            <Container>

                <Title>To use whatsapp on your computer:</Title>
                <StyledLists>
                <ListItem>Open whatsapp on your phone.</ListItem>
                <ListItem>Tap Menu Setting and select whatsapp web.</ListItem>
                <ListItem>Point your phone to this screen to capture the code.</ListItem>
                </StyledLists>
            </Container>
            <Box style={{position:'relative'}}>
                <QRCode src={qrCodeImage} alt="qr code" />
                <Box style = {{position: 'absolute', top:'50%', transform:'translate x'}}>
                    <GoogleLogin 
                    onSuccess={onLoginSucess}
                    onError={onLoginError}
                    
                    />
                </Box>
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog
