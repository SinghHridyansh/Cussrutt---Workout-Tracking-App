import React from "react";
import styled from "styled-components";
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
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  background: rgb(255, 255, 255);

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
const SpanNew = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: black;
`;

const Tutorials = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Nothing here.</Title>
        <SpanNew>Feature might be added in the future. ✌</SpanNew>
      </Wrapper>
    </Container>
  );
};

export default Tutorials;
