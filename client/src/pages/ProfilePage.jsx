import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import InfoIcon from "@mui/icons-material/Info";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(77, 77, 94, 1) 80%,
    rgba(0, 0, 0, 1) 100%
  );
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};

  margin-bottom: 20px;
`;
const Span = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: black;
`;
const SpanNew = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: white;
`;

const Pfp = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;
const ParaDiv = styled.div`
  width: 70%;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  return (
    <Container>
      <Wrapper>
        <Title>Greetings, {currentUser.name.split(" ")[0]}</Title>
        <Pfp
          src={
            currentUser.img
              ? currentUser.img
              : "https://imgs.search.brave.com/YfyNSZIduSszrOd2DIfVpcEZXVPxARydF3-FOuI_1pA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw"
          }
        />
        <Span>{currentUser.name}</Span>
        <Span>{currentUser.email}</Span>
        <br />
        <InfoIcon style={{ color: "white", fontSize: "45px" }} />
        <ParaDiv>
          <SpanNew>
            We don't have anything new to show you right now. We will be adding
            new features in future. For now just work with what you have. ✌
          </SpanNew>
        </ParaDiv>
      </Wrapper>
    </Container>
  );
};

export default ProfilePage;
