import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { RangeSlider } from "../../../../components/ui/RangeSlider";
import { FilterType, ValuesFilterType } from "../../../../types";
import { CustomFilters } from "./Components/CustomFilters";
import { FieldInput } from "./Components/FieldInput";
import { FieldSelect } from "./Components/FieldSelect";

type AdvancedProps = {
  onSubmit: (values: FilterType) => void;
};

const genders = ["Male", "Female", "Both"] as const;
type GenderType = typeof genders[number];

const relations = ["Single", "Married"] as const;
type RelationsType = typeof relations[number];

const AdvancedPage: React.FC<AdvancedProps> = ({ onSubmit }) => {
  const [isAdvanced, setIsAdvanced] = useState(true);
  const [gender, setGender] = useState<GenderType>("Both");
  const [relation, setRelation] = useState<RelationsType>("Single");

  const onSubmitFN = (values: ValuesFilterType) => {
    const filter = {
      revenueMin: values.revenue[0] * 1000000,
      revenueMax: values.revenue[1] * 1000000,
      gender: gender.toLocaleLowerCase(),
    };
    onSubmit(filter);
  };
  return (
    <Wrapper>
      <p>Filters</p>
      <BtnContainer>
        <Button
          style={
            isAdvanced
              ? { backgroundColor: "#CAF0FF", color: "#122434" }
              : { backgroundColor: "#f8f8f8" }
          }
          onClick={() => setIsAdvanced(true)}
        >
          Advanced
        </Button>
        <Button
          style={
            isAdvanced
              ? { backgroundColor: "#f8f8f8" }
              : { backgroundColor: "#CAF0FF", color: "#122434" }
          }
          onClick={() => setIsAdvanced(false)}
        >
          Customize
        </Button>
      </BtnContainer>
      {!isAdvanced && <CustomFilters />}
      <Title>Company</Title>
      <Form
        onSubmit={onSubmitFN}
        render={({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <FlexContainer>
              <FieldInput name="industry" label="Industry" />
              <FieldInput name="location" label="Geographic Location" />
            </FlexContainer>
            <FlexContainer>
              <FieldSelect name="scope" label="Scope" />
              <FieldSelect name="SDGGoals" label="SDG Goals" />
            </FlexContainer>
            <FlexContainer>
              <FieldSelect name="CDRFocus" label="CDR Focus" />
              <FieldSelect
                name="contribution"
                label="Total Annual Contributions"
              />
            </FlexContainer>

            <Label>Revenue</Label>
            <Field name="revenue">
              {({ input }) => (
                <PartWrapper>
                  <RangeSlider
                    step={1}
                    min={1}
                    max={80}
                    onChange={input.onChange}
                    units={["$", "M"]}
                  />
                </PartWrapper>
              )}
            </Field>
            <Title>Customer Demographics</Title>
            <FlexContainer>
              <PartWrapper>
                <Label>Gender</Label>
                <BtnContainer>
                  {genders.map((item) => (
                    <GenderButton
                      key={item}
                      onClick={() => setGender(item)}
                      $active={item === gender}
                      type="button"
                    >
                      {item}
                    </GenderButton>
                  ))}
                </BtnContainer>
              </PartWrapper>
              <PartWrapper>
                <Label>Relations</Label>
                <BtnContainer>
                  {relations.map((item) => (
                    <RelationButton
                      key={item}
                      onClick={() => setRelation(item)}
                      $active={item === relation}
                      type="button"
                    >
                      {item}
                    </RelationButton>
                  ))}
                </BtnContainer>
              </PartWrapper>
            </FlexContainer>
            <FlexContainer>
              <PartWrapper>
                <Field name="household">
                  {({ input }) => (
                    <div>
                      <Label>Household Income</Label>
                      <div>
                        <Input {...input} type="text" />
                      </div>
                    </div>
                  )}
                </Field>
              </PartWrapper>
              <PartWrapper>
                <Field name="ethnicity">
                  {({ input }) => (
                    <div>
                      <Label>Ethnicity</Label>
                      <div>
                        <Input {...input} type="text" />
                      </div>
                    </div>
                  )}
                </Field>
              </PartWrapper>
            </FlexContainer>
            <AgeWrapper>
              <Label>Age</Label>
              <Field name="Age">
                {({ input }) => (
                  <PartWrapper>
                    <RangeSlider
                      step={1}
                      min={18}
                      max={100}
                      onChange={input.onChange}
                      units={["", ""]}
                    />
                  </PartWrapper>
                )}
              </Field>
            </AgeWrapper>
            <div>
              <CancelBtn>Cancel</CancelBtn>
              <SubmitButton onClick={handleSubmit}>Search</SubmitButton>
            </div>
          </StyledForm>
        )}
      />
    </Wrapper>
  );
};

export default AdvancedPage;

const Wrapper = styled.div`
  padding: 40px;
  width: 1095px;
  font-family: Rubik;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 40px;
  padding: 2px;
  margin-top: 18px;
  background: #f8f8f8;
  margin-bottom: 26px;
  @media (max-width: 475px) {
  }
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

const RelationButton = styled.button<{ $active?: boolean }>`
  width: 50%;
  height: 100%;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  ${({ $active }) =>
    $active ? "background:#D4F3FF;" : "  background: #f8f8f8"};
`;

const GenderButton = styled.button<{ $active?: boolean }>`
  width: 33%;
  height: 100%;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  ${({ $active }) =>
    $active ? "background:#D4F3FF;" : "  background: #f8f8f8"};
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  width: 146px;
  height: 46px;
  background: #2baee0;
  border-radius: 6px;
  border: none;
  margin-left: 8px;
  color: #fff;
  cursor: pointer;
`;

const CancelBtn = styled.button`
  padding: 12px 24px;
  width: 146px;
  height: 46px;
  border-radius: 6px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
`;

const StyledForm = styled.form`
  width: 100%;
  /* @media (max-width: 475px) {
  } */
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 11px 31px 10px 16px;
  background: #fff;
  margin-top: 4px;
`;

const Label = styled.label`
  font-family: Rubik;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;

const PartWrapper = styled.div`
  width: 496px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-top: 34px;
  margin-bottom: 16px;
`;

const AgeWrapper = styled.div`
  margin: 24px 0 40px;
`;
