import React, { useState } from "react";
import styled from "styled-components";

import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import "./auth.css";

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
  display: flex;
  background-color: black;
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
const Logo = styled.img`
  position: absolute;
  width: 70px;
  top: 40px;
  left: 60px;
  z-index: 10;
`;

const Image = styled.img`
  positon: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  gap: 20px @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
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
  z-index: 1000;
  justify-content: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

const Authentication = () => {
  const [login, setLogin] = useState(false);

  return (
    <Container>
      <Left className="divthing">
        {/* <Logo src={LogoImg} /> */}
        {/* <Image src={AuthImg} /> */}
        <MainLogo>Cussrutt</MainLogo>
      </Left>
      <Right>
        {!login ? (
          <>
            <Text>
              <LogIn />
              <br />
              Don't have an account?{" "}
              <TextButton
                onClick={() => {
                  setLogin(true);
                }}
              >
                SignUp.
              </TextButton>
            </Text>
          </>
        ) : (
          <>
            <Text>
              <SignUp />
              <br />
              Already an existing User?{" "}
              <TextButton
                onClick={() => {
                  setLogin(false);
                }}
              >
                LogIn
              </TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;
