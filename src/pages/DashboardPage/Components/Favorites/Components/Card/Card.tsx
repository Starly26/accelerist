import React from "react";
import styled from "styled-components";
import { CustomLink } from "../../../../../../components/ui/CustomLink";
import { CompanyType } from "../../../../../../types";

type CardProps = {
  company: CompanyType;
};

const Card: React.FC<CardProps> = ({ company }) => {
  return (
    <Container>
      <FlexContainer>
        <ImageContainer>Logo</ImageContainer>
        <div>
          <CustomLink to={`/corporate_profile/${company.id}`}>
            <Text>{company.name}</Text>
          </CustomLink>
          <GrayText>Priority Ranking 12</GrayText>
        </div>
      </FlexContainer>
      <div>
        <GrayText>CSR Focus</GrayText>
        <Text>
          {company.crsFocus.length ? company.crsFocus : "No information"}
        </Text>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 28px 0 24px 24px;
  width: 256px;
  margin-bottom: 15px;
`;
const FlexContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 20px;
  margin-right: 12px;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 4px;
`;

const GrayText = styled.p`
  font-size: 12px;
  color: #737373;
`;
