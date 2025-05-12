import { Box, Typography , styled, Divider} from "@mui/material";
import { emptyChatImage } from "../../../constents/data";

const Component = styled(Box)`
  background: #f8f9fa;
  padding:30px 0;
  text-align: center;
  height: 100vh;
`
const Container = styled(Box)`
  padding:0 20px;
`
const Image = styled('img')({
  width: 400,
  marginTop:100,


})

const Title = styled(Typography)`
  font-size:32px;
  margin:25px 0 10px  0;
  font-family: inherit;
  font-weight: 100;
  color: #41525d;

`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667783;
  font-weight: 400;
  font-family: inherit;

`

const StyledDivider = styled(Divider)`

  margin:40px 0;
  opacity: 0.4;

`

const EmptyChatt = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="images" />
        <Title> Whatsapp web</Title>
        <SubTitle>Now send and recieve message withought keeping your phone online.</SubTitle>
        <SubTitle>Use whatsapp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
        <StyledDivider />
      
      </Container>
    </Component>
  );
};

export default EmptyChatt;
