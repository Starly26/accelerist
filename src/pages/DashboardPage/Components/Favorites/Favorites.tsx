import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AppRoutes from "../../../../route/route";
import { CompanyType } from "../../../../types";
import { Card } from "./Components/Card";

type FavoritesProps = {
  companies: CompanyType[];
};

const Favorites: React.FC<FavoritesProps> = ({ companies }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <TitleContainer>
        <TitleText>Favorites</TitleText>
        <StyledLink onClick={() => navigate(AppRoutes.Favorites)}>
          see more
        </StyledLink>
      </TitleContainer>
      <Wrapper>
        {companies.map((company) => (
          <Card key={company.id} company={company} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Favorites;

const Container = styled.div`
  width: 536px;
  margin-top: 40px;
`;

const StyledLink = styled.a`
  font-size: 12px;
  color: #2baee0;
  cursor: pointer;
`;
const TitleText = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
