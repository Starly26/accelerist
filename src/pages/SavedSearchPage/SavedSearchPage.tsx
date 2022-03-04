import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CardCompany } from "../../components/CardCompany";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelect";
import actions from "../../store/actions";

const SavedSearchPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  let param = useParams();
  const id = param.id;
  useEffect(() => {
    dispatch(actions.savedList.getSingleSavedListAction(id!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const singleList = useAppSelector((state) => state.savedList.singleList);
  const queryString = require("query-string");
  const queryFilter = queryString.stringify(singleList!.filters, {
    skipNull: true,
  });

  const pageSize = useAppSelector((state) => state.company.pageSize);
  const companies = useAppSelector((state) => state.company.companies);
  const totalCompany = useAppSelector((state) => state.company.totalCompany);
  const totalPage = useAppSelector((state) => state.company.totalPages);
  const currentPage = useAppSelector(
    (state) => state.company.currentCompanyPage
  );
  const companyCount = useAppSelector((state) => state.company.companyCount);

  useEffect(() => {
    dispatch(
      actions.company.getAllCompaniesAction({
        page: page,
        limit: pageSize,
        filter: `&${queryFilter}`,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const count = (currentPage - 1) * pageSize + companyCount;
  const onLike = (id: string, like: boolean) => {
    if (like) {
      return dispatch(actions.company.getDislikeCompanyAction(id));
    }
    dispatch(actions.company.getLikeCompanyAction(id));
  };

  return (
    <Container>
      <HeaderDiv>
        <Title>Accounting Services</Title>
      </HeaderDiv>
      <Wrapper>
        <p>{totalCompany} companies </p>

        <FlexContainer>
          <Transform onClick={() => pageDecrement()}>
            <img src={require("../../assets/images/bracket.png")} alt="" />
          </Transform>
          <TextPage>
            {count} of {totalCompany}
          </TextPage>
          <IconContainer onClick={() => pageIncrement()}>
            <img src={require("../../assets/images/bracket.png")} alt="" />
          </IconContainer>
        </FlexContainer>
        <CardCompanyContainer>
          {companies.map((company) => (
            <CardCompany company={company} key={company.id} onLike={onLike} />
          ))}
        </CardCompanyContainer>
      </Wrapper>
    </Container>
  );
};

export default SavedSearchPage;

const Container = styled.div`
  width: 100vw;
  background: #f9f9f9;
  font-family: Rubik;
`;

const HeaderDiv = styled.div`
  width: 100%;
  height: 96px;
  padding: 30px 60px 0;
  align-items: center;
  background-color: #ffffff;
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 32px 60px 60px;
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  align-self: flex-end;
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
const CardCompanyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 26px;
`;

const TextPage = styled.p`
  font-size: 12px;
  margin: 0 9px;
`;
