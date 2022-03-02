import React from "react";
import styled from "styled-components";
import { Globe } from "../../icons/Globe";
import { HeartIcon } from "../../icons/HeartIcon";
import { Like } from "../../icons/Like";
import { MapPin } from "../../icons/MapPin";
import { Phone } from "../../icons/Phone";

const CorporateProfilePage = () => {
  return (
    <Container>
      <Header>
        <Title>Organization Profile</Title>
      </Header>
      <Main>
        <Wrapper>
          <Logo>Logo</Logo>
          <div>
            <FlexContainer>
              <Title>Company name</Title>
              <LikeIcon>
                <HeartIcon />
              </LikeIcon>
            </FlexContainer>
            <p>No information</p>
          </div>
        </Wrapper>
        <InfoWrapper>
          <Title>Business Description Product</Title>
          <HeadText>Description</HeadText>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
              libero repellat ad accusantium obcaecati, in eaque iusto fugit
              aperiam iure nesciunt, minus minima quia tempore! Fuga temporibus
              soluta facilis.
            </p>
          </div>
          <HeadText>Company Ticker</HeadText>
          <Ticker>No information</Ticker>
          <HeadText>Address</HeadText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            numquam voluptates, nisi et ducimus fuga laborum deleniti recusandae
            dolor doloremque beatae fugit quod incidunt autem, error harum ex
            aliquid unde?
          </p>
          <HeadText>Company Contacts</HeadText>
          <ContactContainer>
            <FlexContainer>
              <FlexContainer>
                <Globe />
                <p>site</p>
              </FlexContainer>
              <FlexContainer>
                <Phone />
                <p>phone</p>
              </FlexContainer>
            </FlexContainer>
            <FlexContainer>
              <MapPin />
              <p>adress</p>
            </FlexContainer>
          </ContactContainer>
        </InfoWrapper>
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

const InfoWrapper = styled.div`
  padding: 0 40px;
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

const ContactContainer = styled.div`
  display: flex;
  height: 95px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 20px 0;
`;

const HeadText = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 12px;
`;

const LikeIcon = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ticker = styled.div`
  width: 206px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
`;
