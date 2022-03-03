import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { Form, Field } from "react-final-form";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { UserAuthType } from "../../types";
import { AuthLayout } from "./Components/AuthLayoyt";
import { ButtonContainer } from "./Components/ButtonContainer";
import { UnderFormPart } from "./Components/UnderFormPart";
import actions from "../../store/actions";

const required = (value: any) => (value ? undefined : "Required");

const AuthPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (values: UserAuthType) => {
    isRegistration
      ? dispatch(actions.auth.register(values))
      : dispatch(actions.auth.login(values));
  };
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistration, setIsRegistration] = useState(true);
  return (
    <AuthLayout>
      <ButtonContainer
        isRegistration={isRegistration}
        setIsRegistration={setIsRegistration}
      />
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine }) => (
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
            <Field name="password" validate={required}>
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
                        <Icon
                          src={require("../../assets/images/eye.png")}
                          alt=""
                        />
                      ) : (
                        <Icon
                          src={require("../../assets/images/eye-off.png")}
                          alt=""
                        />
                      )}
                    </ShowIconContainer>
                  </Password>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <UnderFormPart isRegistration={isRegistration} />
            <Buttons>
              <FormButton
                type="button"
                onClick={handleSubmit}
                disabled={submitting || pristine}
              >
                {isRegistration ? "Registration" : "Login"}
              </FormButton>
            </Buttons>
          </StyledForm>
        )}
      />
      <GlobalStyles />
    </AuthLayout>
  );
};

export default AuthPage;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const StyledForm = styled.form`
  width: 374px;
  margin-top: 34px;
  @media (max-width: 475px) {
    width: 311px;
    margin-top: 22px;
  }
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
  @media (max-width: 475px) {
    margin-bottom: 20px;
  }
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

const FormButton = styled.button`
  background: #2baee0;
  border-radius: 6px;
  color: #fff;
  padding: 12px 0;
  cursor: pointer;
  @media (max-width: 475px) {
    width: 311px;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;
