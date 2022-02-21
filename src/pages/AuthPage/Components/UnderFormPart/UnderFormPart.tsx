import React from "react";
import styled from "styled-components";

type UnderFormPartProps = {
  isRegistration: boolean;
};

const UnderFormPart: React.FC<UnderFormPartProps> = ({ isRegistration }) => {
  return (
    <>
      {isRegistration ? (
        <TextContainer>
          <p>
            I agree that by clicking <Bold> “Registration” </Bold>I accept the{" "}
            <Bold> Terms Of Service</Bold> and <Bold>Privacy Policy</Bold>
          </p>
        </TextContainer>
      ) : (
        <FlexContainer>
          <Flex>
            <input type="checkbox" />
            <Span>Remember</Span>
          </Flex>
          <GrayText>Forgot Password?</GrayText>
        </FlexContainer>
      )}
    </>
  );
};

export default UnderFormPart;

const TextContainer = styled.div`
  margin: 40px 0 16px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #737373;
  @media (max-width: 475px) {
    margin: 24px 16px 20px;
  }
`;

const Bold = styled.span`
  color: #000;
  font-weight: 500;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 62px;
  margin-top: 12px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  margin-left: 11px;
`;
const GrayText = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  cursor: pointer;
`;
