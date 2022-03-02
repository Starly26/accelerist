import React from "react";
import styled from "styled-components";
import { ProspectingSessionCard } from "../../../../components/ProspectingSessionCard";
import { CompanyType } from "../../../../types";

type ProspectingSessionProps = {};

const ProspectingSession: React.FC<ProspectingSessionProps> = ({}) => {
  return (
    <div>
      <TitleContainer>
        <TitleText>Prospecting Sessions</TitleText>
        <StyledLink>see more</StyledLink>
      </TitleContainer>
      <FlexContainer>
        <ProspectingSessionCard />
        <ProspectingSessionCard />
      </FlexContainer>
    </div>
  );
};

export default ProspectingSession;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0 16px;
  align-items: center;
`;

const TitleText = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
`;

const StyledLink = styled.a`
  font-size: 12px;
  color: #2baee0;
  cursor: pointer;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
