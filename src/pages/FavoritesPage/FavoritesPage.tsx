import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardCompany } from "../../components/CardCompany";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelect";
import actions from "../../store/actions";

const FavoritesPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();

  const favoritesCompanies = useAppSelector(
    (state) => state.company.favoritesCompanies
  );
  const totalCompanyCount = useAppSelector(
    (state) => state.company.totalFavoriteCompany
  );
  const pageSize = useAppSelector((state) => state.company.pageSize);

  const currentPage = useAppSelector(
    (state) => state.company.currentFavoritePage
  );
  const companyCount = useAppSelector(
    (state) => state.company.companyFavoriteCount
  );
  const totalPage = useAppSelector((state) => state.company.totalFavoritePages);

  const onLike = async (id: string, like: boolean) => {
    if (!like) {
      return dispatch(actions.company.getLikeCompanyAction(id));
    }
    await dispatch(actions.company.getDislikeCompanyAction(id));
    dispatch(
      actions.company.getFavoriteCompanyAction({ page: page, limit: pageSize })
    );
  };

  useEffect(() => {
    dispatch(
      actions.company.getFavoriteCompanyAction({ page: page, limit: pageSize })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const count = (currentPage - 1) * pageSize + companyCount;

  const pageIncrement = () => {
    if (page === totalPage) {
      return page;
    }
    setPage(page + 1);
  };

  const pageDecrement = () => {
    if (page === 1) {
      return page;
    }
    setPage(page - 1);
  };

  return (
    <Container>
      <Header>
        <Title>Favorites</Title>
      </Header>
      <Main>
        <HeadContainer>
          <TitleText>{totalCompanyCount} companies</TitleText>
          <FlexContainer>
            <Transform onClick={() => pageDecrement()}>
              <img src={require("../../assets/images/bracket.png")} alt="" />
            </Transform>
            <TextPage>
              {count} of {totalCompanyCount}
            </TextPage>
            <IconContainer onClick={() => pageIncrement()}>
              <img src={require("../../assets/images/bracket.png")} alt="" />
            </IconContainer>
          </FlexContainer>
        </HeadContainer>
        <CardCompanyContainer>
          {favoritesCompanies.map((company) => (
            <CardCompany key={company.id} company={company} onLike={onLike} />
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
  cursor: pointer;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
