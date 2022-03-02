import React from "react";
import { Form, Field } from "react-final-form";
import styled from "styled-components";
import { Glass } from "../../icons/Glass";
import { Setting } from "../../icons/SettingIcon";
import { CardCompany } from "../../components/CardCompany";
import { useNavigate } from "react-router-dom";

const SearchPage: React.FC = () => {
  const onSubmit = () => {};
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Title>Search</Title>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Field name="search">
                {({ input }) => (
                  <div>
                    <InputContainer>
                      <Input {...input} type="text" placeholder="Search" />
                      <ShowIconContainer>
                        <div onClick={() => navigate("advanced")}>
                          <Setting />
                        </div>
                        <div>
                          <Glass />
                        </div>
                      </ShowIconContainer>
                    </InputContainer>
                  </div>
                )}
              </Field>
            </StyledForm>
          )}
        />
      </Header>
      <Wrapper>
        <TitleText>Found 32 companies</TitleText>
        <FlexContainer>
          <FlexContainer>
            <FlexContainer>
              <IconContainer>
                <img src={require("../../images/folder-plus.png")} alt="" />
              </IconContainer>
              <TextButton>Save List</TextButton>
            </FlexContainer>
            <FlexContainer>
              <IconContainer>
                <img src={require("../../images/upload.png")} alt="" />
              </IconContainer>
              <TextButton>Export to Excel</TextButton>
            </FlexContainer>
            <FlexContainer>
              <IconContainer>
                <img src={require("../../images/mail.png")} alt="" />
              </IconContainer>
              <TextButton>Accelerist Support</TextButton>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer>
            <Transform>
              <img src={require("../../images/bracket.png")} alt="" />
            </Transform>
            <TextPage>1-15 of 32</TextPage>
            <IconContainer>
              <img src={require("../../images/bracket.png")} alt="" />
            </IconContainer>
          </FlexContainer>
        </FlexContainer>
        <CardCompanyContainer>
          {/* <CardCompany />
          <CardCompany /> */}
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

const TitleText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-bottom: 26px;
`;

const StyledForm = styled.form`
  width: 374px;
  /* @media (max-width: 475px) {
  } */
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 11px 50px 10px 16px;
  background: #f1f4f5;

  /* @media (max-width: 475px) {
  } */
`;

const ShowIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 22px;
  width: 45px;
  height: 20px;
  cursor: pointer;
`;
const InputContainer = styled.div`
  display: flex;
  width: 715px;
  margin-left: 82px;
  border-radius: 6px;
  align-items: center;
  position: relative;
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
`;

const IconContainer = styled.div`
  width: 20px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
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
