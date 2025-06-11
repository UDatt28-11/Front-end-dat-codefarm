import styled from "@emotion/styled";
import React from "react";
const Form = styled.form`
  padding: 24px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  width: 400px;
  max-width: 100%;
`;
const FormCommon = ({ handleSubmit, children }) => {
  // console.log(handleSubmit);
  // console.log(children);

  return <Form onSubmit={handleSubmit}>{children}</Form>;
};

export default FormCommon;
