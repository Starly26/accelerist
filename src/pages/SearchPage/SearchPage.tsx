import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardCompany } from "../../components/CardCompany";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import actions from "../../store/actions";
import { useAppSelector } from "../../hooks/useAppSelect";
import { Header } from "./components/Header";
import { SearchValue } from "../../types";

const SearchPage: React.FC = () => {
  const onSubmit = () => {};

  const findName = (value: SearchValue) => {
    dispatch(
      actions.company.getNamedFilterCompaniesAction({
        page: page,
        limit: pageSize,
        q: value.search,
      })
    );
  };
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const pageSize = useAppSelector((state) => state.company.pageSize);
  const totalCompany = useAppSelector((state) => state.company.totalCompany);
  const totalPage = useAppSelector((state) => state.company.totalPages);
  const currentPage = useAppSelector(
    (state) => state.company.currentCompanyPage
  );
  const companyCount = useAppSelector((state) => state.company.companyCount);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    dispatch(
      actions.company.getAllCompaniesAction({ page: page, limit: pageSize })
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
  const companies = useAppSelector((state) => state.company.companies);
  const count = (currentPage - 1) * pageSize + companyCount;

  return (
    <Container>
      <Header onSubmit={onSubmit} findName={findName} />
      <Wrapper>
        <TitleText>Found {totalCompany} companies</TitleText>
        <FlexContainer>
          <FlexContainer>
            <FlexContainer>
              <IconContainer>
                <img
                  src={require("../../assets/images/folder-plus.png")}
                  alt=""
                />
              </IconContainer>
              <TextButton>Save List</TextButton>
            </FlexContainer>
            <FlexContainer>
              <IconContainer>
                <img src={require("../../assets/images/upload.png")} alt="" />
              </IconContainer>
              <TextButton>Export to Excel</TextButton>
            </FlexContainer>
            <FlexContainer>
              <IconContainer>
                <img src={require("../../assets/images/mail.png")} alt="" />
              </IconContainer>
              <TextButton>Accelerist Support</TextButton>
            </FlexContainer>
          </FlexContainer>
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
        </FlexContainer>
        <CardCompanyContainer>
          {companies.map((company) => (
            <CardCompany company={company} key={company.id} />
          ))}
        </CardCompanyContainer>
      </Wrapper>
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  width: 100vw;
  background: #f9f9f9;
  font-family: Rubik;
`;

const TitleText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-bottom: 26px;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 32px 60px 60px;
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

const TextButton = styled.p`
  font-size: 12px;
  margin: 0 30px 0 9px;
`;

const TextPage = styled.p`
  font-size: 12px;
  margin: 0 9px;
`;

const CardCompanyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 26px;
`;
