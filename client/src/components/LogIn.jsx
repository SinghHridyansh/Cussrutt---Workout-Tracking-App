import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button2 from "./Button";
import { UserSignIn } from "../api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/userSlice";
import CustomAlert from "./CustomAlert";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const LogIn = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message) => {
    setAlertMessage(message);
  };

  const closeAlert = () => {
    setAlertMessage("");
  };

  const validateInputs = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      //showAlert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handelSignIn = async () => {
    setLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      await UserSignIn({ email, password })
        .then((res) => {
          dispatch(loginSuccess(res.data));
          alert("Login Success");
          setLoading(false);
          setButtonDisabled(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
          setLoading(false);
          setButtonDisabled(false);
        });
    }
  };

  return (
    <Container>
      <div>
        <Title>Welcome back to Cussrutt</Title>
        <Span>Please login with your Credentials.</Span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <TextInput
          label="Email Address"
          placeholder="abc@example.com"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="pass@123"
          password
          value={password}
          handelChange={(e) => setPassword(e.target.value)}
        />
        <Button2
          text="LogIn"
          isLoading={loading}
          isDisabled={buttonDisabled}
          onClick={handelSignIn}
        />
      </div>
      <CustomAlert message={alertMessage} onClose={closeAlert} />;
    </Container>
  );
};

export default LogIn;
