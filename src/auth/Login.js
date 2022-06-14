/** @format */

import React, { useState } from "react";
import {
  Body,
  ViewBox,
  ContainerHeading,
  Input,
  InputContainer,
  NameConatiner,
  FieldsGroup,
  RegisterButton,
  LoginButton,
} from "./styles";
import firebase from "../firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/action";
import { Link } from "react-router-dom";

const firebaseApp = firebase.getApp();

const SignUp = () => {
  const dispatch = useDispatch();
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        dispatch(loginAction({ email: user.email, token }));
      })
      .catch((error) => {
        const errorCode = error.code.split("/")[1];
        setError(
          errorCode
            .split("-")
            .map((value) => value.slice(0, 1).toUpperCase() + value.slice(1))
            .join(" ") + "."
        );
      });
  };

  return (
    <>
      <Body>
        <ViewBox>
          <ContainerHeading>Login</ContainerHeading>
          <FieldsGroup>
            <form autoComplete="off">
              <InputContainer>
                <NameConatiner>Email</NameConatiner>
                <Input
                  type="email"
                  autocomplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <NameConatiner>Password</NameConatiner>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputContainer>
              <label>{error}</label>
              <RegisterButton onClick={login}>SignIn</RegisterButton>
              <Link to={"/register"}>Not a member!</Link>
            </form>
          </FieldsGroup>
        </ViewBox>
      </Body>
    </>
  );
};

export default SignUp;
