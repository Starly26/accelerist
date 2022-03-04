import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelect";
import { HeartIcon } from "../../assets/icons/HeartIcon";
import { Like } from "../../assets/icons/Like";
import actions from "../../store/actions";
import { InfoBlock } from "./Components";

const CorporateProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  let param = useParams();
  const id = param.id;
  useEffect(() => {
    dispatch(actions.company.getCompanyAction(id!));
  }, []);
  const navigate = useNavigate();

  const company = useAppSelector((state) => state.company.company);

  if (!company) {
    return <></>;
  }

  const likeFunction = () => {
    if (company!.like) {
      return dispatch(actions.company.getDislikeCompanyAction(company.id!));
    }
    dispatch(actions.company.getLikeCompanyAction(company.id!));
  };

  return (
    <Container>
      <Header>
        <Transform onClick={() => navigate(-1)}>
          <img src={require("../../assets/images/bracket.png")} alt="" />
        </Transform>
        <Title>Organization Profile</Title>
      </Header>
      <Main>
        <Wrapper>
          <Logo>
            <img src={require("../../assets/images/logoCompany.png")} alt="" />
          </Logo>
          <div>
            <FlexContainer>
              <Title>{company.name}</Title>
              <LikeIcon onClick={likeFunction}>
                {company.like ? <Like /> : <HeartIcon />}
              </LikeIcon>
            </FlexContainer>
            <p>No information</p>
          </div>
        </Wrapper>
        <InfoBlock company={company} />
      </Main>
    </Container>
  );
};

export default CorporateProfilePage;

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

const Main = styled.div`
  background-color: #ffffff;
  width: 844px;
  margin: 32px auto;
`;

const Wrapper = styled.div`
  padding: 40px;
  background: #f2f2f2;
  border-radius: 6px 6px 0px 0px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #e8e8e8;
  margin-right: 24px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LikeIcon = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Transform = styled.div`
  transform: scale(-1, 1);
  margin-right: 20px;
  width: 20px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
