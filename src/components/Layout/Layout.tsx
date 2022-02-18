import React from "react";
import { CustomLink } from "../ui/CustomLink";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Header>
        <Wrapper>
          <ImgContainer>
            <Img src={require("../../images/logo.png")} />
          </ImgContainer>
          <LinkWrapper>
            <CustomLink to="/">Dashboard </CustomLink>
          </LinkWrapper>
          <LinkWrapper>
            <CustomLink to="favorites">Favorites </CustomLink>
          </LinkWrapper>
          <LinkWrapper>
            <CustomLink to="prospects">Prospects </CustomLink>
          </LinkWrapper>
          <LinkWrapper>
            <CustomLink to="search">Search </CustomLink>
          </LinkWrapper>
        </Wrapper>
        <CustomLink to="/authorization">Logout </CustomLink>
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
`;
