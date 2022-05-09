import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import styled from "styled-components";
// import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #44403c;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

// const Logo = styled.div`
//   text-alight: left;
//   font-weight: bold;
//   font-size: 1.5rem;
//   flex: 1;
//   padding: 20px;
//   color: white;
// `;

const Desc = styled.div`
  margin: 10px 0px;
  width:60%;
  color: white;
`;

const SocialContainer = styled.div`
  margin-top: 15px;
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color:white;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color:white;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color:white;
`;

const Payment = styled.img`
    width: 40%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>LET'S BE FRIENDS</Title>
        <Desc>
          We love seeing our products on social media. Share and tag us! @thesoapshop
        </Desc>

        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>MENU</Title>
        <List>
          <ListItem>Home</ListItem>

          <ListItem>Shop All Products</ListItem>

          <ListItem>Shipping Info</ListItem>
  
          <ListItem>Refund Policy</ListItem>

          <ListItem>Terms of Service</ListItem>

        </List>
      </Center>
      <Right>
        <Title>CONTACT</Title>
        <ContactItem>
          <RoomOutlinedIcon style={{marginRight:"10px"}}/> 1212 Walnut St, Philadelphia PA 19131
        </ContactItem>
        <ContactItem>
          <LocalPhoneOutlinedIcon style={{marginRight:"10px"}}/> 215-212-4567
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} /> contact@thesoapshop.com
        </ContactItem>
        <Payment src="https://i.imgur.com/vdIdcGp.png?1" />
      </Right>
    </Container>
  );
};

export default Footer;