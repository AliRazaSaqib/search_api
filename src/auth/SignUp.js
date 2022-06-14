/** @format */

import React, { useState, useEffect } from "react";
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
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/action";
import { Link } from "react-router-dom";

const firebaseApp = firebase.getApp();

const SignUp = () => {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disable, setDisable] = React.useState(false);
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
            .join(" ") + " details"
        );
      });
  };

  return (
    <>
      <Body>
        <ViewBox>
          <ContainerHeading>Register</ContainerHeading>
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
              <RegisterButton onClick={register}>SignUp</RegisterButton>
              <Link to={"/"}>Already have a member!</Link>
            </form>
          </FieldsGroup>
        </ViewBox>
      </Body>
    </>
  );
};

export default SignUp;
