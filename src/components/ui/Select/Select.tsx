import React from "react";
import styled from "styled-components";

const Select: React.FC = ({ children }) => {
  return <Selector>{children}</Selector>;
};

export default Select;

const Selector = styled.select`
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 11px 31px 12px 16px;
`;
