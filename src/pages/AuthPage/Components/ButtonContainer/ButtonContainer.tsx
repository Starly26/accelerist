import React from "react";
import styled from "styled-components";

type BtnsProps = {
  isRegistration: boolean;
  setIsRegistration: (value: boolean) => void;
};

const ButtonContainer: React.FC<BtnsProps> = ({
  isRegistration,
  setIsRegistration,
}) => {
  return (
    <BtnContainer>
      <Button
        style={
          isRegistration
            ? { backgroundColor: "#CAF0FF", color: "#122434" }
            : { backgroundColor: "#f8f8f8" }
        }
        onClick={() => setIsRegistration(true)}
      >
        Register
      </Button>
      <Button
        style={
          isRegistration
            ? { backgroundColor: "#f8f8f8" }
            : { backgroundColor: "#CAF0FF", color: "#122434" }
        }
        onClick={() => setIsRegistration(false)}
      >
        Login
      </Button>
    </BtnContainer>
  );
};

export default ButtonContainer;

const BtnContainer = styled.div`
  width: 374px;
  height: 40px;
  padding: 2px 3.5px;
  background: #f8f8f8;
  @media (max-width: 475px) {
    width: 311px;
  }
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
  border-radius: 6px;
  border: 0;
  background: #f8f8f8;
  color: #737373;
  cursor: pointer;
`;
