import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { HeartIcon } from "../../icons/HeartIcon";
import { Like } from "../../icons/Like";
import actions from "../../store/actions";
import { CompanyType } from "../../types";
import { CustomLink } from "../ui/CustomLink";

type CardCompanyProps = {
  company: CompanyType;
};

const CardCompany: React.FC<CardCompanyProps> = ({ company }) => {
  const address = `${company.street} ${company.city} ${company.state}`;
  function numberWithCommas(x: string) {
    return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  const revenue = numberWithCommas(company.revenue.toString());
  const dispatch = useAppDispatch();
  const likeFunction = () => {
    console.log("likeFN");
    if (company.like) {
      return dispatch(actions.company.getDislikeCompanyAction(company.id));
    }
    dispatch(actions.company.getLikeCompanyAction(company.id));
  };

  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={require("../../images/logoCompany.png")} alt="" />
        </Logo>
        <RankingContainer>
          <GrayText>Priority Ranking</GrayText>
          <Title>12</Title>
        </RankingContainer>
      </Wrapper>
      <FlexContainer>
        <CustomLink to={`/corporate_profile/${company.id}`}>
          <Title>{company!.name}</Title>
        </CustomLink>
        <GrayText>{address}</GrayText>
        <GrayText>{company.phone}</GrayText>
        <DescriptionContainer>
          <VerticalLineContainer>
            <GrayText>CSR Focus</GrayText>
            <Text>
              {company.crsFocus.length ? company.crsFocus : "No information"}
            </Text>
          </VerticalLineContainer>
          <RevenueContainer>
            <GrayText>Revenue</GrayText>
            <Text>$ {revenue}</Text>
          </RevenueContainer>
        </DescriptionContainer>
        <BtnContainer>
          <LikeBtn onClick={likeFunction}>
            {company.like ? <Like /> : <HeartIcon />}
          </LikeBtn>
          <CustomLink to={`/corporate_profile/${company.id}`}>
            <ProfileBtn>Profile</ProfileBtn>
          </CustomLink>
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

const RevenueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const VerticalLineContainer = styled.div`
  border-right: 1px solid #e8e8e8;
  padding-right: 21px;
  width: 75%;
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
  cursor: pointer;
`;

const ProfileBtn = styled.button`
  width: 244px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #2baee0;
  border-radius: 6px;
  cursor: pointer;
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
