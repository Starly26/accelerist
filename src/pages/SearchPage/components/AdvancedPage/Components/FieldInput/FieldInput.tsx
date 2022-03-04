import React from "react";
import { Field } from "react-final-form";
import styled from "styled-components";

type FieldInputProps = {
  name: string;
  label: string;
};

const FieldInput: React.FC<FieldInputProps> = ({ name, label }) => {
  return (
    <PartWrapper>
      <Field name={name}>
        {({ input }) => (
          <div>
            <Label>{label}</Label>
            <div>
              <Input {...input} type="text" placeholder="Search" />
            </div>
          </div>
        )}
      </Field>
    </PartWrapper>
  );
};

export default FieldInput;

const PartWrapper = styled.div`
  width: 496px;
`;
const Label = styled.label`
  font-family: Rubik;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 11px 31px 10px 16px;
  background: #fff;
  margin-top: 4px;
`;
