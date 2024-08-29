import React from "react";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  position: relative;

  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(77, 77, 94, 1) 40%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;
const MainLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  font-weight: 600;
  font-size: 4rem;
  text-decoration: none;
  color: white;

  justify-content: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: black;
`;
const InfoContainer = styled.div`
  display: flex;
  text-align: left;
  gap: 1rem;
`;

const RightInside = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
  align-items: flex-start;
  justify-content: center;
`;

const Divider = styled.div`
  width: 60%;
  background-color: grey;
  height: 1px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ParaDiv = styled.div`
  width: 70%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Left>
        <MainLogo>Cussrutt</MainLogo>
      </Left>
      <Right>
        <Title>Reach out to us!</Title>

        <RightInside>
          <InfoContainer>
            <EmailIcon style={{ color: "grey" }} />
            <Span>Cussrutt@wedontnotexistrn.com</Span>
          </InfoContainer>
          <InfoContainer>
            <LocalPhoneIcon style={{ color: "grey" }} />
            <Span>+91-XXXX-XX-XXXX</Span>
          </InfoContainer>
        </RightInside>
        <Divider></Divider>

        <LocationOnIcon style={{ color: "grey", fontSize: "40px" }} />

        <ParaDiv>
          <Span>
            Currently we don't exist anywhere. So please don't bother yourself
            by reaching out.
          </Span>
        </ParaDiv>
      </Right>
    </Container>
  );
};

export default Contact;
