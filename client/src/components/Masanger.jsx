import {AppBar, styled, Toolbar, Box} from '@mui/material'



import LoginDialog from './account/LoginDialog'

const Component = styled(Box)`
height: 100vh;
background-color: #DCDCDC;

`

const Header = styled(AppBar)`
    height : 220px;
    background-color: #00bfa5;
    box-shadow: none;
`

const Masanger = () => {
  return (
    <Component>
    <Header>
        <Toolbar>

        </Toolbar>
    </Header>
    <div>
         
      <LoginDialog />
    </div>
     
    </Component>
  )
}

export default Masanger
