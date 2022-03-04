import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProspectingSessionCard } from "../../../../components/ProspectingSessionCard";
import AppRoutes from "../../../../route/route";
import { SaveListType } from "../../../../types";

type ProspectingSessionProps = {
  savedLists: SaveListType[];
};

const ProspectingSession: React.FC<ProspectingSessionProps> = ({
  savedLists,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <TitleContainer>
        <TitleText>Prospecting Sessions</TitleText>
        <StyledLink onClick={() => navigate(AppRoutes.Prospects)}>
          see more
        </StyledLink>
      </TitleContainer>
      <FlexContainer>
        {savedLists.map((list) => {
          return <ProspectingSessionCard list={list} key={list.id} />;
        })}
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
