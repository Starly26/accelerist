import React from "react";
import styled from "styled-components";

const AuthLayuot: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <div>
          <img src={require("../../../../images/logoAuth.png")} alt="" />
        </div>
      </Header>
      <Wrapper>
        <Title>Welcome to Accelerist</Title>
        {children}
        <p>or continue with</p>
        <LinkedinLogoContainer>
          <img src={require("../../../../images/linkedin.png")} alt="" />
        </LinkedinLogoContainer>
      </Wrapper>
    </Container>
  );
};

export default AuthLayuot;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${require("../../../../images/homedark.png")});
  background-size: 100% 100%;
  object-fit: cover;
`;

const Header = styled.header`
  background: #122434;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  background-color: #fff;
  padding: 40px 40px 50px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;

  @media (max-width: 475px) {
    padding: 24px 16px 40px;
  }
`;

const Title = styled.h1`
  font-family: "Rubik";
  font-weight: bold;
  font-style: normal;
  font-size: 24px;
  line-height: 148%;
  align-items: center;
  margin-bottom: 25px;
  @media (max-width: 475px) {
    margin-bottom: 20px;
  }
`;

const LinkedinLogoContainer = styled.div`
  margin-top: 24px;
`;
