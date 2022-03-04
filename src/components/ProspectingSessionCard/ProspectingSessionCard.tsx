import React from "react";
import styled from "styled-components";
import { CompanyType, SaveListType } from "../../types";

type ProspectingSessionCardProps = {
  list: SaveListType;
};

const ProspectingSessionCard: React.FC<ProspectingSessionCardProps> = ({
  list,
}) => {
  console.log(list);

  return (
    <Container>
      <Title>{list!.name}</Title>
      <hr />
      <GrayText>Filters</GrayText>
      <FlexContainer>
        <Filter>Filters </Filter>
        <Filter>Two</Filter>
      </FlexContainer>
      <CardContainer>
        <Card>
          <GrayText>№ of Prospects Available</GrayText>
          <Counter>230</Counter>
        </Card>
        <Card>
          <GrayText>№ of Contacts Pursued</GrayText>
          <Counter>72</Counter>
        </Card>
      </CardContainer>
      <UserContainer>
        <FlexContainer>
          <Circle />
          <Wrapper>
            <p>Jenny Wilson</p>
            <GrayText>Owner</GrayText>
          </Wrapper>
        </FlexContainer>
        <div>
          <GrayText>Last Activity</GrayText>
          <p>1 Jul 2020</p>
        </div>
      </UserContainer>
    </Container>
  );
};

export default ProspectingSessionCard;

const Container = styled.div`
  padding: 24px;
  background: #ffffff;
  border-radius: 6px;
  width: 536px;
  margin-bottom: 24px;
`;

const Title = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 9px;
`;

const GrayText = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const Filter = styled.p`
  margin-top: 8px;
  display: inline-block;
  border: 1px solid #caf0ff;
  border-radius: 6px;
  padding: 6px 10px;
  margin-right: 8px;
  margin-bottom: 24px;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const UserContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 24px;
`;

const Counter = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin-top: 8px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  background: #f9f9f9;
  border-radius: 4px;
  width: 235px;
  height: 71px;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: blue;
`;

const Wrapper = styled.div`
  margin-left: 12px;
`;
