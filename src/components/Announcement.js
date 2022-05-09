import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #44403c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

const Announcement = () => {
  return <Container>FREE SHIPPING ON ALL ORDERS</Container>;
};

export default Announcement;