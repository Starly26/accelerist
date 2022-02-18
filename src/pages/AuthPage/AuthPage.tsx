import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import { Form, Field } from "react-final-form";

const required = (value: any) => (value ? undefined : "Required");

const AuthPage = () => {
  const onSubmit = () => {};
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistration, setIsRegistration] = useState(true);
  return (
    <Container>
      <Header>
        <div>
          <img src={require("../../images/logoAuth.png")} alt="" />
        </div>
      </Header>
      <Wrapper>
        <Title>Welcome to Accelerist</Title>
        <BtnContainer>
          <Button
            style={
              isRegistration
                ? { backgroundColor: "#CAF0FF", color: "#122434" }
                : { backgroundColor: "#f8f8f8" }
            }
            onClick={() => setIsRegistration(true)}
          >
            Register
          </Button>
          <Button
            style={
              isRegistration
                ? { backgroundColor: "#f8f8f8" }
                : { backgroundColor: "#CAF0FF", color: "#122434" }
            }
            onClick={() => setIsRegistration(false)}
          >
            Login
          </Button>
        </BtnContainer>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <Label>Email</Label>
                    <br />
                    <Input {...input} type="text" placeholder="Enter email" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="lastName" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <Label>Password</Label> <br />
                    <Password>
                      <InputPassword
                        {...input}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                      />
                      <ShowIconContainer
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <Icon src={require("../../images/eye.png")} alt="" />
                        ) : (
                          <Icon
                            src={require("../../images/eye-off.png")}
                            alt=""
                          />
                        )}
                      </ShowIconContainer>
                    </Password>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              {isRegistration ? (
                <TextContainer>
                  <p>
                    I agree that by clicking <Bold> “Registration” </Bold>I
                    accept the <Bold> Terms Of Service</Bold> and{" "}
                    <Bold>Privacy Policy</Bold>
                  </p>
                </TextContainer>
              ) : (
                <FlexContainer>
                  <Flex>
                    <input type="checkbox" />
                    <Span>Remember</Span>
                  </Flex>
                  <GrayText>Forgot Password?</GrayText>
                </FlexContainer>
              )}
              <Buttons>
                {isRegistration ? (
                  <FormButton type="submit" disabled={submitting || pristine}>
                    Registration
                  </FormButton>
                ) : (
                  <FormButton
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Login
                  </FormButton>
                )}
              </Buttons>
            </StyledForm>
          )}
        />
        <p>or continue with</p>
        <LinkedinLogoContainer>
          <img src={require("../../images/linkedin.png")} alt="" />
        </LinkedinLogoContainer>
      </Wrapper>
      <GlobalStyles />
    </Container>
  );
};

export default AuthPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${require("../../images/homedark.png")});
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
`;

const Title = styled.h1`
  font-family: "Rubik";
  font-weight: bold;
  font-style: normal;
  font-size: 24px;
  line-height: 148%;
  align-items: center;
  margin-bottom: 25px;
`;

const BtnContainer = styled.div`
  width: 374px;
  height: 40px;
  padding: 2px 3.5px;
  background: #f8f8f8;
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
  border-radius: 6px;
  border: 0;
  background: #f8f8f8;
  color: #737373;
  cursor: pointer;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const StyledForm = styled.form`
  width: 374px;
  margin-top: 34px;
`;

const Label = styled.label`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 4px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 11px 31px 10px 16px;
  margin-bottom: 24px;
`;
const InputPassword = styled.input`
  border: none;
  padding: 11px 31px 10px 16px;
  width: 100%;
  border-radius: 6px;
`;

const ShowIconContainer = styled.div`
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const Password = styled.div`
  display: flex;
  border: 1px solid #e8e8e8;
  width: 100%;
  margin-top: 4px;
  border-radius: 6px;
  align-items: center;
  position: relative;
`;

const TextContainer = styled.div`
  margin: 40px 0 16px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #737373;
`;

const Bold = styled.span`
  color: #000;
  font-weight: 500;
`;

const FormButton = styled.button`
  background: #2baee0;
  border-radius: 6px;
  color: #fff;
  padding: 12px 0;
  cursor: pointer;
`;

const LinkedinLogoContainer = styled.div`
  margin-top: 34px;
`;
const Icon = styled.img`
  width: 100%;
  height: 100%;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 62px;
  margin-top: 12px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  margin-left: 11px;
`;
const GrayText = styled.text`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  cursor: pointer;
`;
