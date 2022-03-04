import React from "react";
import { CustomLink } from "../ui/CustomLink";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { actions } from "../../store/auth/UserSlice";
import AppRoutes from "../../route/route";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Header>
        <Wrapper>
          <ImgContainer>
            <Img src={require("../../assets/images/logo.png")} />
          </ImgContainer>
          <LinkWrapper>
            <CustomLink to={AppRoutes.Dashboard}>Dashboard </CustomLink>
          </LinkWrapper>
          <LinkWrapper>
            <CustomLink to={AppRoutes.Favorites}>Favorites </CustomLink>
          </LinkWrapper>
          <LinkWrapper>
            <CustomLink to={AppRoutes.Prospects}>Prospects </CustomLink>
          </LinkWrapper>
          <LinkWrapper>
            <CustomLink to={AppRoutes.Search}>Search </CustomLink>
          </LinkWrapper>
        </Wrapper>
        <div onClick={() => dispatch(actions.logout())}>
          <CustomLink to={AppRoutes.Authorization}>Logout </CustomLink>
        </div>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

const Header = styled.header`
  height: 80px;
  width: 100%;
  background: #d5f3ff;
  padding: 0 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const ImgContainer = styled.div`
  width: 181px;
  height: 42px;
  margin-right: 50px;
`;
const LinkWrapper = styled.div`
  margin-right: 28px;
  @media (max-width: 375px) {
    display: none;
  }
`;
