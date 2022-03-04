import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProspectingSessionCard } from "../../components/ProspectingSessionCard";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelect";
import actions from "../../store/actions";

const ProspectsPage = () => {
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();
  const savedList = useAppSelector((state) => state.savedList.savedList);
  const totalSaved = useAppSelector((state) => state.savedList.totalItems);
  const currentPage = useAppSelector((state) => state.savedList.currentPage);
  const pageSize = useAppSelector((state) => state.savedList.pageSize);
  const saveListCount = useAppSelector((state) => state.savedList.itemCount);
  const totalPage = useAppSelector((state) => state.savedList.totalPages);
  const count = (currentPage - 1) * pageSize + saveListCount;

  useEffect(() => {
    dispatch(
      actions.savedList.getSavedListAction({ page: page, limit: pageSize })
    );
  }, [page]);
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
        <Title>Prospects</Title>
      </Header>
      <Main>
        <HeadContainer>
          <FlexContainer>
            <GrayText>Sort by</GrayText>
            <SortedType>Alphabet</SortedType>
            <SortedType>Prospects Available</SortedType>
            <SortedType>Last Activity</SortedType>
          </FlexContainer>
          <FlexContainer>
            <Transform onClick={() => pageDecrement()}>
              <img src={require("../../assets/images/bracket.png")} alt="" />
            </Transform>
            <TextPage>
              {count} of {totalSaved}
            </TextPage>
            <IconContainer onClick={() => pageIncrement()}>
              <img src={require("../../assets/images/bracket.png")} alt="" />
            </IconContainer>
          </FlexContainer>
        </HeadContainer>
        <ProspectCardContainer>
          {savedList!.map((list) => (
            <ProspectingSessionCard list={list} key={list.id} />
          ))}
        </ProspectCardContainer>
      </Main>
    </Container>
  );
};

export default ProspectsPage;
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
  font-size: 12px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextPage = styled.p`
  margin: 0 9px;
`;

const SortedType = styled.p`
  cursor: pointer;
  margin: 0 22px;
`;
const GrayText = styled.p`
  line-height: 150%;
  color: #737373;
`;

const ProspectCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
