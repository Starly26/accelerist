import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { MarkSlider } from "../../../components/ui/MarkSlider";
import { RangeSlider } from "../../../components/ui/RangeSlider";
import { Select } from "../../../components/ui/Select";

const customFilterNames = [
  "Company CRS Focus",
  "SDG Goal",
  "Total Annual Contributions",
  "Type of Partnership",
  "Geographic Location",
  "Constituent Brand Affinities",
];

const genders = ["Male", "Female", "Both"] as const;
type GenderType = typeof genders[number];

const relations = ["Single", "Married"] as const;
type RelationsType = typeof relations[number];

const AdvancedPage = () => {
  const [isAdvanced, setIsAdvanced] = useState(true);
  const [gender, setGender] = useState<GenderType>("Male");
  const [relation, setRelation] = useState<RelationsType>("Single");
  const onSubmit = () => {};
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
      {!isAdvanced && (
        <>
          <Title>Priority</Title>
          <Description>
            Customize how importtant each of the following indicators are to
            your organization, and generate your own custom lead score. On a
            scale 1 ( least important) - 10 (most importantn), rank each
            attribute bellow
          </Description>
          <MarkSliderContainer>
            {customFilterNames.map((name) => (
              <MarkSlider name={name} key={name.replace(/\s+/g, "")} />
            ))}
          </MarkSliderContainer>
        </>
      )}
      <Title>Company</Title>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <FlexContainer>
              <PartWrapper>
                <Field name="industry">
                  {({ input }) => (
                    <div>
                      <Label>Industry</Label>
                      <div>
                        <Input {...input} type="text" placeholder="Search" />
                      </div>
                    </div>
                  )}
                </Field>
                <ScrollContainer>
                  <div>
                    <Field
                      name="Agriculture"
                      component="input"
                      type="checkbox"
                    />
                    <Label>Agriculture</Label>
                  </div>
                  <div>
                    <Field
                      name="Entertaiment"
                      component="input"
                      type="checkbox"
                    />
                    <Label>Entertainment and Recrea..</Label>
                  </div>
                  <div>
                    <Field
                      name="Bars and Food Sevices"
                      component="input"
                      type="checkbox"
                    />
                    <Label>Bars and Food Sevices</Label>
                  </div>
                  <div>
                    <Field name="Agricult" component="input" type="checkbox" />
                    <Label>Agriculture</Label>
                  </div>
                  <div>
                    <Field
                      name="Agricultur"
                      component="input"
                      type="checkbox"
                    />
                    <Label>Agriculture</Label>
                  </div>
                  <div>
                    <Field name="Agricul" component="input" type="checkbox" />
                    <Label>Agriculture</Label>
                  </div>
                </ScrollContainer>
              </PartWrapper>
              <PartWrapper>
                <Field name="location">
                  {({ input }) => (
                    <div>
                      <Label>Geographic Location</Label>
                      <div>
                        <Input {...input} type="text" placeholder="Search" />
                      </div>
                    </div>
                  )}
                </Field>
                <ScrollContainer>
                  <div>
                    <Field name="Alabama" component="input" type="checkbox" />
                    <Label>Alabama</Label>
                  </div>
                  <div>
                    <Field name="Alaska" component="input" type="checkbox" />
                    <Label>Alaska</Label>
                  </div>
                  <div>
                    <Field name="name" component="input" type="checkbox" />
                    <Label>Bars and Food Sevices</Label>
                  </div>
                  <div>
                    <Field name="Agricult" component="input" type="checkbox" />
                    <Label>Agriculture</Label>
                  </div>
                  <div>
                    <Field
                      name="Agricultur"
                      component="input"
                      type="checkbox"
                    />
                    <Label>Agriculture</Label>
                  </div>
                  <div>
                    <Field name="Agricul" component="input" type="checkbox" />
                    <Label>Agriculture</Label>
                  </div>
                </ScrollContainer>
              </PartWrapper>
            </FlexContainer>
            <FlexContainer>
              <PartWrapper>
                <Label>Scope</Label>
                <SelectField>
                  <Field name="scope" component={Select}>
                    <option value="local">Local</option>
                    <option value="another">Another</option>
                    <option value="else">Else</option>
                  </Field>
                </SelectField>
              </PartWrapper>
              <PartWrapper>
                <Label>SDG Goals</Label>
                <SelectField>
                  <Field name="SDGGoals" component={Select}>
                    <option value="NoPoverty">No poverty</option>
                    <option value="another">Another</option>
                    <option value="else">Else</option>
                  </Field>
                </SelectField>
              </PartWrapper>
            </FlexContainer>
            <FlexContainer>
              <PartWrapper>
                <Label>CDR Focus</Label>
                <SelectField>
                  <Field name="CDRFocus" component={Select}>
                    <option value="local">Local</option>
                    <option value="another">Another</option>
                    <option value="else">Else</option>
                  </Field>
                </SelectField>
              </PartWrapper>
              <PartWrapper>
                <Label>Total Annual Contributions</Label>
                <SelectField>
                  <Field name="contribution" component={Select}>
                    <option value="local">Local</option>
                    <option value="another">Another</option>
                    <option value="else">Else</option>
                  </Field>
                </SelectField>
              </PartWrapper>
            </FlexContainer>

            <Label>Revenue</Label>
            <Field name="revenue">
              {({ input }) => (
                <PartWrapper>
                  <RangeSlider
                    step={0.1}
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
                    >
                      {item}
                    </RelationButton>
                  ))}
                </BtnContainer>
              </PartWrapper>
            </FlexContainer>
            <FlexContainer>
              <PartWrapper>
                <Field name="Household">
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
              <SubmitButton>Search</SubmitButton>
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

const ScrollContainer = styled.div`
  margin-top: 18px;
  overflow-y: scroll;
  height: 94px;
  margin-bottom: 27px;
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

const MarkSliderContainer = styled.div`
  margin-top: 32px;
`;
const Description = styled.div`
  width: 637px;
`;
