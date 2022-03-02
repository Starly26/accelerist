import React from "react";
import styled from "styled-components";
import { ProspectingSessionCard } from "../../components/ProspectingSessionCard";

const ProspectsPage = () => {
  return (
    <Container>
      <Header>
        <Title>Prospects</Title>
      </Header>
      <Main>
        <HeadContainer>
          <FlexContainer>
            <GrayText>Sort by</GrayText>
            <SortedType>Alphabet</SortedType>
            <SortedType>Prospects Available</SortedType>
            <SortedType>Last Activity</SortedType>
          </FlexContainer>
          <TextPage>1-15 of totalCount</TextPage>
        </HeadContainer>
        <ProspectCardContainer>
          {/* 5 times for example */}
          <ProspectingSessionCard />
          <ProspectingSessionCard />
          <ProspectingSessionCard />
          <ProspectingSessionCard />
          <ProspectingSessionCard />
        </ProspectCardContainer>
      </Main>
    </Container>
  );
};

export default ProspectsPage;
const Container = styled.div`
  width: 100vw;
  background: #f9f9f9;
  font-family: Rubik;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  height: 96px;
  padding: 0 60px;
  align-items: center;
  background-color: #ffffff;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
`;

const Main = styled.main`
  padding: 0 60px;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 33px;
  margin-bottom: 34px;
  font-size: 12px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextPage = styled.p`
  margin: 0 9px;
`;

const SortedType = styled.p`
  cursor: pointer;
  margin: 0 22px;
`;
const GrayText = styled.p`
  line-height: 150%;
  color: #737373;
`;

const ProspectCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
