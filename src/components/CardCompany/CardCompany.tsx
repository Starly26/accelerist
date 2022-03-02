import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Like } from "../../icons/Like";
import { CompanyType } from "../../types";

type CardCompanyProps = {
  company?: CompanyType;
};

const CardCompany: React.FC<CardCompanyProps> = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Logo</Logo>
        <RankingContainer>
          <GrayText>Priority Ranking</GrayText>
          <Title>12</Title>
        </RankingContainer>
      </Wrapper>
      <FlexContainer>
        <Title>Name Company</Title>
        <GrayText>Adress company</GrayText>
        <GrayText>Phone</GrayText>
        <DescriptionContainer>
          <VerticalLineContainer>
            <GrayText>CSR Focus</GrayText>
            <Text>
              {/* {company.crsFocus.length ? company.crsFocus :  */}
              "No information"
            </Text>
          </VerticalLineContainer>
          <div>
            <GrayText>Revenue</GrayText>
            <Text>$</Text>
          </div>
        </DescriptionContainer>
        <BtnContainer>
          <LikeBtn>
            <Like />
          </LikeBtn>
          <Link to="/corporate_profile">
            <ProfileBtn>Profile</ProfileBtn>
          </Link>
        </BtnContainer>
      </FlexContainer>
    </Container>
  );
};

export default CardCompany;

const Container = styled.div`
  padding: 26px 32px;
  display: flex;
  background-color: #fff;
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  margin-right: 16px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 156px;
  border-bottom: 1px solid #e8e8e8;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
`;

const DescriptionContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  width: 100%;
  justify-content: space-between;
`;

const VerticalLineContainer = styled.div`
  border-right: 1px solid #e8e8e8;
  padding-right: 21px;
  width: 100%;
  margin-right: 20px;
`;

const BtnContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;
const LikeBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  margin-right: 8px;
`;

const ProfileBtn = styled.button`
  width: 244px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #2baee0;
  border-radius: 6px;
`;

const GrayText = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
`;
const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
`;
