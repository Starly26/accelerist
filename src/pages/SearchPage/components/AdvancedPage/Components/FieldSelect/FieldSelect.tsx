import React from "react";
import { Field } from "react-final-form";
import styled from "styled-components";

type FieldSelectProps = {
  name: string;
  label: string;
};

const FieldSelect: React.FC<FieldSelectProps> = ({ label, name }) => {
  return (
    <PartWrapper>
      <Label>{label}</Label>
      <SelectField>
        <Field name={name} component="select">
          <option value="first">First</option>
          <option value="second">Second</option>
          <option value="third">Third</option>
        </Field>
      </SelectField>
    </PartWrapper>
  );
};

export default FieldSelect;

const PartWrapper = styled.div`
  width: 496px;
`;
const Label = styled.label`
  font-family: Rubik;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;

const SelectField = styled.div`
  width: 496px;
  margin-top: 4px;
  margin-bottom: 24px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 6px;
  padding-right: 16px;
  > select {
    width: 100%;
    border: none;
    border-radius: 6px;
    padding: 11px 31px 12px 16px;
  }
`;
