import React, { useEffect } from "react";
import styled from "styled-components";
import { CardCompany } from "../../components/CardCompany";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelect";
import actions from "../../store/actions";

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actions.company.getFavoriteCompanyAction({ page: 1, limit: 100 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const favoritesCompanies = useAppSelector(
    (state) => state.company.favoritesCompanies
  );
  const totalCount = favoritesCompanies.length;
  return (
    <Container>
      <Header>
        <Title>Favorites</Title>
      </Header>
      <Main>
        <HeadContainer>
          <TitleText>{totalCount} companies</TitleText>
          <FlexContainer>
            <Transform>
              <img src={require("../../images/bracket.png")} alt="" />
            </Transform>
            <TextPage>1-15 of {totalCount}</TextPage>
            <IconContainer>
              <img src={require("../../images/bracket.png")} alt="" />
            </IconContainer>
          </FlexContainer>
        </HeadContainer>
        <CardCompanyContainer>
          {favoritesCompanies.map((company) => (
            <CardCompany key={company.id} company={company} />
          ))}
        </CardCompanyContainer>
      </Main>
    </Container>
  );
};

export default FavoritesPage;
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
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Transform = styled.div`
  transform: scale(-1, 1);
  width: 20px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextPage = styled.p`
  font-size: 12px;
  margin: 0 9px;
`;

const TitleText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
`;

const CardCompanyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
