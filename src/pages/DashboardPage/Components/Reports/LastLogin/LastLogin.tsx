import React from "react";
import styled from "styled-components";

const LastLogin: React.FC = () => {
  return (
    <Flex>
      <Circle />
      <TextContainer>
        <Name>Name</Name>
        <GrayText>Data</GrayText>
      </TextContainer>
    </Flex>
  );
};

export default LastLogin;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: blue;
  margin-right: 10px;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 15px;
  padding-top: 7px;
`;

const GrayText = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;

const Name = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
`;
