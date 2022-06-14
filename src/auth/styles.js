/** @format */
import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 130px;
  padding: 0 0.4rem;
`;

export const ViewBox = styled.div`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  max-width: 450px;
  width: 100%;
  padding: 1rem 0.5rem;
  background-color: white;
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  top: 50%;

  a {
    color: #ce4141;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }

  @media (max-width: 600px) {
    max-width: 350px;
  }
  @media (max-width: 480px) {
    max-width: 280px;
  }
`;

export const ContainerHeading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #ce4141;
  text-align: center;
  padding: 0;
  margin: 0;
`;

export const FieldsGroup = styled.div`
  margin: auto;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
`;

export const Input = styled.input`
  height: 34px;
  padding: 0 10px;
  outline: none;
  border-radius: 2px;
  width: unset;
`;

export const NameConatiner = styled.h5`
  font-size: 16px;
  font-weight: normal;
  color: #a8a6a6;
  padding: 0;
  margin: 0;
`;

export const RegisterButton = styled.button`
  background-color: #ce4141;
  text-align: center;
  color: white;
  max-width: 120px;
  width: 100%;
  padding: 8px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  transition: all 0.5s linear;

  &:hover {
    box-shadow: 0 0 14px #f44336;
  }
`;

export const LoginButton = styled.button`
  border: none;
  outline: none;
  background: no-repeat;
  text-decoration: underline;
  color: #ce4141;
  float: right;
  clear: both;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;
