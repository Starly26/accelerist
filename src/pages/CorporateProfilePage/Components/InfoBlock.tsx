import React from "react";
import styled from "styled-components";
import { Globe } from "../../../assets/icons/Globe";
import { MapPin } from "../../../assets/icons/MapPin";
import { Phone } from "../../../assets/icons/Phone";
import { CompanyType } from "../../../types";

type InfoBlockProps = {
  company: CompanyType;
};

const InfoBlock: React.FC<InfoBlockProps> = ({ company }) => {
  const address = `${company.street} ${company.city} ${company.state}`;

  return (
    <InfoWrapper>
      <Title>Business Description Product</Title>
      <HeadText>Description</HeadText>
      <DescriptionContainer>
        <p>{company.descriptionList}</p>
      </DescriptionContainer>
      <HeadText>Company Ticker</HeadText>
      <Ticker>No information</Ticker>
      <HeadText>Company Contacts</HeadText>
      <ContactContainer>
        <FlexContainer>
          <FlexContainer>
            <Globe />
            <ContactText>{company.website}</ContactText>
          </FlexContainer>
          <FlexContainer>
            <Phone />
            <ContactText>{company.phone}</ContactText>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer>
          <MapPin />
          <ContactText>{address}</ContactText>
        </FlexContainer>
      </ContactContainer>
    </InfoWrapper>
  );
};

export default InfoBlock;

const Title = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
`;

const InfoWrapper = styled.div`
  padding: 0 40px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ContactContainer = styled.div`
  display: flex;
  height: 95px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 20px 0;
`;

const HeadText = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 12px;
`;

const Ticker = styled.div`
  width: 206px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
`;

const DescriptionContainer = styled.div`
  width: 100%;
`;
const ContactText = styled.p`
  margin: 0 10px;
`;
