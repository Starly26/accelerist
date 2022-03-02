import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelect";
import actions from "../../store/actions";
import { Favorites } from "./Components/Favorites";
import { ProspectingSession } from "./Components/ProspectingSession";
import { Reports } from "./Components/Reports";

const DashboardPage: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actions.company.getFavoriteCompanyAction({ page: 1, limit: 4 }));
  }, []);
  const favoritesCompanies = useAppSelector(
    (state) => state.company.favoritesCompanies
  );
  return (
    <Container>
      <Header>Dashboard</Header>
      <Wrapper>
        <ProspectingSession />
        <FlexContainer>
          <Favorites companies={favoritesCompanies} />
          <Reports />
        </FlexContainer>
      </Wrapper>
    </Container>
  );
};

export default DashboardPage;

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
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  padding: 0 60px 25px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
