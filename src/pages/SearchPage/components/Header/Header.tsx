import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { Glass } from "../../../../assets/icons/Glass";
import { Setting } from "../../../../assets/icons/SettingIcon";
import { SearchValue } from "../../../../types";
import { AdvancedPage } from "../AdvancedPage";

type HeaderProps = {
  onSubmit: () => void;
  findName: (value: SearchValue) => void;
};

const Header: React.FC<HeaderProps> = ({ onSubmit, findName }) => {
  const [isAdvanced, setIsAdvanced] = useState(false);

  return (
    <>
      <HeaderDiv>
        <Title>Search</Title>
        <Form
          onSubmit={findName}
          render={({ handleSubmit }) => (
            <StyledForm>
              <Field name="search">
                {({ input }) => (
                  <div>
                    <InputContainer>
                      <Input
                        {...input}
                        type="text"
                        placeholder="Search"
                        onChange={input.onChange}
                      />
                      <ShowIconContainer>
                        <div onClick={() => setIsAdvanced(!isAdvanced)}>
                          <Setting />
                        </div>
                        <div onClick={handleSubmit}>
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
      </HeaderDiv>
      {isAdvanced && <AdvancedPage onSubmit={onSubmit} />}
    </>
  );
};

export default Header;

const HeaderDiv = styled.div`
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