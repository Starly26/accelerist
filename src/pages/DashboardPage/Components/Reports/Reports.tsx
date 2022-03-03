import React from "react";
import styled from "styled-components";
import { Bracket } from "../../../../assets/icons/Bracket";

import { LastLogin } from "./LastLogin";

const Reports = () => {
  return (
    <Container>
      <TitleText>Reports</TitleText>
      <Wrapper>
        <FlexContainer>
          <div>
            <Title>Search Sessions</Title>
            <Card>
              <GrayText>Total</GrayText>
              <Counter>43</Counter>
            </Card>
          </div>
          <div>
            <Title>Sent Pitches</Title>
            <Card>
              <GrayText>Company</GrayText>
              <Counter>44</Counter>
            </Card>
          </div>
        </FlexContainer>
        <Title>Prospect Navigation</Title>
        <GrayContainer>
          <p>Go to page</p>
          <Bracket />
        </GrayContainer>
        <Title>Last Login</Title>
        <LastLogin />
      </Wrapper>
    </Container>
  );
};

export default Reports;

const Container = styled.div`
  width: 536px;
  margin-top: 40px;
`;

const TitleText = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 6px;
  padding: 0 24px 24px;
`;
const GrayText = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;

const Counter = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin-top: 8px;
`;

const Title = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 16px;
  margin-top: 24px;
`;

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  background: #f9f9f9;
  border-radius: 4px;
  width: 235px;
  height: 71px;
  justify-content: center;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GrayContainer = styled.div`
  display: flex;
  width: 100%;
  background: #f9f9f9;
  justify-content: space-between;
  padding: 20px;
`;
